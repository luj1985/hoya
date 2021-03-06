

(function (factory) {
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {
  "use strict";

  //Constants
  var LEFT = "left",
    RIGHT = "right",
    UP = "up",
    DOWN = "down",
    IN = "in",
    OUT = "out",

    NONE = "none",
    AUTO = "auto",
    
    SWIPE = "swipe",
    PINCH = "pinch",
    TAP = "tap",
    DOUBLE_TAP = "doubletap",
    HOLD = "hold",
    

    ALL_FINGERS = "all",
    
    DOUBLE_TAP_THRESHOLD = 10,

    PHASE_START = "start",
    PHASE_MOVE = "move",
    PHASE_END = "end",
    PHASE_CANCEL = "cancel",

    SUPPORTS_TOUCH = 'ontouchstart' in window,
    
    SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
    
    SUPPORTS_POINTER = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,

    PLUGIN_NS = 'TouchSwipe';



  var defaults = {
    fingers: 1,     
    threshold: 75,  
    cancelThreshold:null, 
    pinchThreshold:20,
    maxTimeThreshold: null, 
    fingerReleaseThreshold:250, 
    longTapThreshold:500,
    doubleTapThreshold:200,
    swipe: null,    
    swipeLeft: null,  
    swipeRight: null,   
    swipeUp: null,    
    swipeDown: null,  
    swipeStatus: null,  
    pinchIn:null,   
    pinchOut:null,    
    pinchStatus:null, 
    click:null, //Deprecated since 1.6.2
    tap:null,
    doubleTap:null,
    longTap:null,     
    hold:null, 
    triggerOnTouchEnd: true, 
    triggerOnTouchLeave:false,  
    fallbackToMouseEvents: true,  
    excludedElements:"label, button, input, select, textarea, a, .noSwipe"
  };



  /**
  * Applies TouchSwipe behaviour to one or more jQuery objects.
  * The TouchSwipe plugin can be instantiated via this method, or methods within 
  * TouchSwipe can be executed via this method as per jQuery plugin architecture.
  * @see TouchSwipe
  * @class
  * @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
  * the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
  * If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the 
  * configuration properties defined in the object. See TouchSwipe
  *
  */
  $.fn.swipe = function (method) {
    var $this = $(this),
      plugin = $this.data(PLUGIN_NS);

    //Check if we are already instantiated and trying to execute a method 
    if (plugin && typeof method === 'string') {
      if (plugin[method]) {
        return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
        $.error('Method ' + method + ' does not exist on jQuery.swipe');
      }
    }
    //Else not instantiated and trying to pass init object (or nothing)
    else if (!plugin && (typeof method === 'object' || !method)) {
      return init.apply(this, arguments);
    }

    return $this;
  };

  //Expose our defaults so a user could override the plugin defaults
  $.fn.swipe.defaults = defaults;

  /**
  * The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers. 
  * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
  * @namespace
  * @readonly
  * @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
  * @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
  * @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
  * @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
  */
  $.fn.swipe.phases = {
    PHASE_START: PHASE_START,
    PHASE_MOVE: PHASE_MOVE,
    PHASE_END: PHASE_END,
    PHASE_CANCEL: PHASE_CANCEL
  };

  /**
  * The direction constants that are passed to the event handlers. 
  * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
  * @namespace
  * @readonly
  * @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
  * @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
  * @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
  * @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
  * @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
  * @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
  */
  $.fn.swipe.directions = {
    LEFT: LEFT,
    RIGHT: RIGHT,
    UP: UP,
    DOWN: DOWN,
    IN : IN,
    OUT: OUT
  };

  /**
  * Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the 
  * options object, as well as the value of the <code>fingers</code> event property.
  * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
  * @namespace
  * @readonly
  * @see $.fn.swipe.defaults#fingers
  * @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
  * @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>1</code>.
  * @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>1</code>.
  * @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
  */
  $.fn.swipe.fingers = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    ALL: ALL_FINGERS
  };

  /**
  * Initialise the plugin for each DOM element matched
  * This creates a new instance of the main TouchSwipe class for each DOM element, and then
  * saves a reference to that instance in the elements data property.
  * @internal
  */
  function init(options) {
        //Check for deprecated options
    //Ensure that any old click handlers are assigned to the new tap, unless we have a tap
    if(options.click!==undefined && options.tap===undefined) {
        options.tap = options.click;
    }

    if (!options) {
      options = {};
    }
    
        //pass empty object so we dont modify the defaults
    options = $.extend({}, $.fn.swipe.defaults, options);

    //For each element instantiate the plugin
    return this.each(function () {
      var $this = $(this);

      //Check we havent already initialised the plugin
      var plugin = $this.data(PLUGIN_NS);

      if (!plugin) {
        plugin = new TouchSwipe(this, options);
        $this.data(PLUGIN_NS, plugin);
      }
    });
  }

  /**
  * Main TouchSwipe Plugin Class.
  * Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}
  * @private
  * @name TouchSwipe
  * @param {DOMNode} element The HTML DOM object to apply to plugin to
  * @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}
  * @see $.fh.swipe.defaults
  * @see $.fh.swipe
    * @class
  */
  function TouchSwipe(element, options) {
        var useTouchEvents = (SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents),
            START_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown') : 'touchstart') : 'mousedown',
            MOVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove') : 'touchmove') : 'mousemove',
            END_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup') : 'touchend') : 'mouseup',
            LEAVE_EV = useTouchEvents ? null : 'mouseleave', //we manually detect leave on touch devices, so null event here
            CANCEL_EV = (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel') : 'touchcancel');



    //touch properties
    var distance = 0,
      direction = null,
      duration = 0,
      startTouchesDistance = 0,
      endTouchesDistance = 0,
      pinchZoom = 1,
      pinchDistance = 0,
      pinchDirection = 0,
      maximumsMap=null;

    
    
    //jQuery wrapped element for this instance
    var $element = $(element);
    
    //Current phase of th touch cycle
    var phase = "start";

    // the current number of fingers being used.
    var fingerCount = 0;      

    //track mouse points / delta
    var fingerData=null;

    //track times
    var startTime = 0,
      endTime = 0,
      previousTouchEndTime=0,
      previousTouchFingerCount=0,
      doubleTapStartTime=0;

    //Timeouts
    var singleTapTimeout=null,
      holdTimeout=null;
        
    // Add gestures to all swipable areas if supported
    try {
      $element.bind(START_EV, touchStart);
      $element.bind(CANCEL_EV, touchCancel);
    }
    catch (e) {
      $.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
    }

    //
    //Public methods
    //
    
    /**
    * re-enables the swipe plugin with the previous configuration
    * @function
    * @name $.fn.swipe#enable
    * @return {DOMNode} The Dom element that was registered with TouchSwipe 
    * @example $("#element").swipe("enable");
    */
    this.enable = function () {
      $element.bind(START_EV, touchStart);
      $element.bind(CANCEL_EV, touchCancel);
      return $element;
    };

    /**
    * disables the swipe plugin
    * @function
    * @name $.fn.swipe#disable
    * @return {DOMNode} The Dom element that is now registered with TouchSwipe
      * @example $("#element").swipe("disable");
    */
    this.disable = function () {
      removeListeners();
      return $element;
    };

    /**
    * Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
    * @function
    * @name $.fn.swipe#destroy
    * @return {DOMNode} The Dom element that was registered with TouchSwipe 
    * @example $("#element").swipe("destroy");
    */
    this.destroy = function () {
      removeListeners();
      $element.data(PLUGIN_NS, null);
      return $element;
    };


        /**
         * Allows run time updating of the swipe configuration options.
         * @function
       * @name $.fn.swipe#option
       * @param {String} property The option property to get or set
         * @param {Object} [value] The value to set the property to
     * @return {Object} If only a property name is passed, then that property value is returned.
     * @example $("#element").swipe("option", "threshold"); // return the threshold
         * @example $("#element").swipe("option", "threshold", 100); // set the threshold after init
         * @see $.fn.swipe.defaults
         *
         */
        this.option = function (property, value) {
            if(options[property]!==undefined) {
                if(value===undefined) {
                    return options[property];
                } else {
                    options[property] = value;
                }
            } else {
                $.error('Option ' + property + ' does not exist on jQuery.swipe.options');
            }

            return null;
        }

    //
    // Private methods
    //
    
    //
    // EVENTS
    //
    /**
    * Event handler for a touch start event.
    * Stops the default click event from triggering and stores where we touched
    * @inner
    * @param {object} jqEvent The normalised jQuery event object.
    */
    function touchStart(jqEvent) {
      //If we already in a touch event (a finger already in use) then ignore subsequent ones..
      if( getTouchInProgress() )
        return;
      
      //Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON'T swipe
      if( $(jqEvent.target).closest( options.excludedElements, $element ).length>0 ) 
        return;
        
      //As we use Jquery bind for events, we need to target the original event object
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
      
      var ret,
        evt = SUPPORTS_TOUCH ? event.touches[0] : event;

      phase = PHASE_START;

      //If we support touches, get the finger count
      if (SUPPORTS_TOUCH) {
        // get the total number of fingers touching the screen
        fingerCount = event.touches.length;
      }
      //Else this is the desktop, so stop the browser from dragging the image
      else {
        jqEvent.preventDefault(); //call this on jq event so we are cross browser
      }

      //clear vars..
      distance = 0;
      direction = null;
      pinchDirection=null;
      duration = 0;
      startTouchesDistance=0;
      endTouchesDistance=0;
      pinchZoom = 1;
      pinchDistance = 0;
      fingerData=createAllFingerData();
      maximumsMap=createMaximumsData();
      cancelMultiFingerRelease();

      
      // check the number of fingers is what we are looking for, or we are capturing pinches
      if (!SUPPORTS_TOUCH || (fingerCount === options.fingers || options.fingers === ALL_FINGERS)) {
        // get the coordinates of the touch
        createFingerData( 0, evt );
        startTime = getTimeStamp();
        
        if(fingerCount==2) {
          //Keep track of the initial pinch distance, so we can calculate the diff later
          //Store second finger data as start
          createFingerData( 1, event.touches[1] );
          startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
        }
        
        if (options.swipeStatus || options.pinchStatus) {
          ret = triggerHandler(event, phase);
        }
      }
      else {
        //A touch with more or less than the fingers we are looking for, so cancel
        ret = false; 
      }

      //If we have a return value from the users handler, then return and cancel
      if (ret === false) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
        return ret;
      }
      else {
        if (options.hold) {
          holdTimeout = setTimeout($.proxy(function() {
            //Trigger the event
            $element.trigger('hold', [event.target]);
            //Fire the callback
            if(options.hold) {
              ret = options.hold.call($element, event, event.target);
            }
          }, this), options.longTapThreshold );
        }

        setTouchInProgress(true);
      }

            return null;
    };
    
    
    
    /**
    * Event handler for a touch move event. 
    * If we change fingers during move, then cancel the event
    * @inner
    * @param {object} jqEvent The normalised jQuery event object.
    */
    function touchMove(jqEvent) {
      
      //As we use Jquery bind for events, we need to target the original event object
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
      
      //If we are ending, cancelling, or within the threshold of 2 fingers being released, don't track anything..
      if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease())
        return;

      var ret,
        evt = SUPPORTS_TOUCH ? event.touches[0] : event;
      

      //Update the  finger data 
      var currentFinger = updateFingerData(evt);
      endTime = getTimeStamp();
      
      if (SUPPORTS_TOUCH) {
        fingerCount = event.touches.length;
      }

      if (options.hold)
        clearTimeout(holdTimeout);

      phase = PHASE_MOVE;

      
      
      if ( (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH) {
        
        direction = calculateDirection(currentFinger.start, currentFinger.end);
        
        // //Check if we need to prevent default event (page scroll / pinch zoom) or not
        // validateDefaultEvent(jqEvent, direction);

        //Distance and duration are all off the main finger
        distance = calculateDistance(currentFinger.start, currentFinger.end);
        duration = calculateDuration();

                //Cache the maximum distance we made in this direction
                setMaxDistance(direction, distance);


        if (options.swipeStatus || options.pinchStatus) {
          ret = triggerHandler(event, phase);
        }
        
        
        //If we trigger end events when threshold are met, or trigger events when touch leaves element
        if(!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
          
          var inBounds = true;
          
          //If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
          if(options.triggerOnTouchLeave) {
            var bounds = getbounds( this );
            inBounds = isInBounds( currentFinger.end, bounds );
          }
          
          //Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
          if(!options.triggerOnTouchEnd && inBounds) {
            phase = getNextPhase( PHASE_MOVE );
          } 
          //We end if out of bounds here, so set current phase to END, and check if its modified 
          else if(options.triggerOnTouchLeave && !inBounds ) {
            phase = getNextPhase( PHASE_END );
          }
            
          if(phase==PHASE_CANCEL || phase==PHASE_END) {
            triggerHandler(event, phase);
          }       
        }
      }
      else {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }

      if (ret === false) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }
    }



    /**
    * Event handler for a touch end event. 
    * Calculate the direction and trigger events
    * @inner
    * @param {object} jqEvent The normalised jQuery event object.
    */
    function touchEnd(jqEvent) {
      //As we use Jquery bind for events, we need to target the original event object
      var event = jqEvent.originalEvent;
        

      //If we are still in a touch with another finger return
      //This allows us to wait a fraction and see if the other finger comes up, if it does within the threshold, then we treat it as a multi release, not a single release.
      if (SUPPORTS_TOUCH) {
        if(event.touches.length>0) {
          startMultiFingerRelease();
          return true;
        }
      }
      
      //If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
      //This is used to allow 2 fingers to release fractionally after each other, whilst maintainig the event as containg 2 fingers, not 1
      if(inMultiFingerRelease()) {  
        fingerCount=previousTouchFingerCount;
      } 
    
      //Set end of swipe
      endTime = getTimeStamp();
      
      //Get duration incase move was never fired
      duration = calculateDuration();
      
      //If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
      if(didSwipeBackToCancel() || !validateSwipeDistance()) {
          phase = PHASE_CANCEL;
                triggerHandler(event, phase);
      } else if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd == false && phase === PHASE_MOVE)) {
        //call this on jq event so we are cross browser 
        jqEvent.preventDefault(); 
        phase = PHASE_END;
                triggerHandler(event, phase);
      }
      else if (phase === PHASE_MOVE) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }

      setTouchInProgress(false);

            return null;
    }



    /**
    * Event handler for a touch cancel event. 
    * Clears current vars
    * @inner
    */
    function touchCancel() {
      // reset the variables back to default values
      fingerCount = 0;
      endTime = 0;
      startTime = 0;
      startTouchesDistance=0;
      endTouchesDistance=0;
      pinchZoom=1;
      
      //If we were in progress of tracking a possible multi touch end, then re set it.
      cancelMultiFingerRelease();
      
      setTouchInProgress(false);
    }
    
    
    /**
    * Event handler for a touch leave event. 
    * This is only triggered on desktops, in touch we work this out manually
    * as the touchleave event is not supported in webkit
    * @inner
    */
    function touchLeave(jqEvent) {
      var event = jqEvent.originalEvent;
      
      //If we have the trigger on leave property set....
      if(options.triggerOnTouchLeave) {
        phase = getNextPhase( PHASE_END );
        triggerHandler(event, phase);
      }
    }
    
    /**
    * Removes all listeners that were associated with the plugin
    * @inner
    */
    function removeListeners() {
      $element.unbind(START_EV, touchStart);
      $element.unbind(CANCEL_EV, touchCancel);
      $element.unbind(MOVE_EV, touchMove);
      $element.unbind(END_EV, touchEnd);
      
      //we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit
      if(LEAVE_EV) { 
        $element.unbind(LEAVE_EV, touchLeave);
      }
      
      setTouchInProgress(false);
    }

    
    /**
     * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
     */
    function getNextPhase(currentPhase) {
      
      var nextPhase = currentPhase;
      
      // Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
      var validTime = validateSwipeTime();
      var validDistance = validateSwipeDistance();
      var didCancel = didSwipeBackToCancel();
            
      //If we have exceeded our time, then cancel 
      if(!validTime || didCancel) {
        nextPhase = PHASE_CANCEL;
      }
      //Else if we are moving, and have reached distance then end
      else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) ) {
        nextPhase = PHASE_END;
      } 
      //Else if we have ended by leaving and didn't reach distance, then cancel
      else if (!validDistance && currentPhase==PHASE_END && options.triggerOnTouchLeave) {
        nextPhase = PHASE_CANCEL;
      }
      
      return nextPhase;
    }
    
    
    /**
    * Trigger the relevant event handler
    * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
    * @param {object} event the original event object
    * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
    * @inner
    */
    function triggerHandler(event, phase) {
      
      var ret = undefined;
      
      // SWIPE GESTURES
      if(didSwipe() || hasSwipes()) { //hasSwipes as status needs to fire even if swipe is invalid
        //Trigger the swipe events...
        ret = triggerHandlerForGesture(event, phase, SWIPE);
      } 
      
      
      // If we are cancelling the gesture, then manually trigger the reset handler
      if (phase === PHASE_CANCEL) {
        touchCancel(event);
      }
      
      // If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
      if(phase === PHASE_END) {
        //If we support touch, then check that all fingers are off before we cancel
        if (SUPPORTS_TOUCH) {
          if(event.touches.length==0) {
            touchCancel(event); 
          }
        } 
        else {
          touchCancel(event);
        }
      }
          
      return ret;
    }
    
    
    
    /**
    * Trigger the relevant event handler
    * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
    * @param {object} event the original event object
    * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
    * @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}
    * @return Boolean False, to indicate that the event should stop propagation, or void.
    * @inner
    */
    function triggerHandlerForGesture(event, phase, gesture) {  
      
      var ret=undefined;
      
      //SWIPES....
      if(gesture==SWIPE) {
        //Trigger status every time..
        
        //Trigger the event...
        $element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData]);
        
        //Fire the callback
        if (options.swipeStatus) {
          ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData);
          //If the status cancels, then dont run the subsequent event handlers..
          if(ret===false) return false;
        }
        
        
        
        
        if (phase == PHASE_END && validateSwipe()) {
          //Fire the catch all event
          $element.trigger('swipe', [direction, distance, duration, fingerCount, fingerData]);
          
          //Fire catch all callback
          if (options.swipe) {
            ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData);
            //If the status cancels, then dont run the subsequent event handlers..
            if(ret===false) return false;
          }
          
          //trigger direction specific event handlers 
          switch (direction) {
            case LEFT:
              //Trigger the event
              $element.trigger('swipeLeft', [direction, distance, duration, fingerCount, fingerData]);
          
                  //Fire the callback
              if (options.swipeLeft) {
                ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData);
              }
              break;
  
            case RIGHT:
              //Trigger the event
                  $element.trigger('swipeRight', [direction, distance, duration, fingerCount, fingerData]);
          
                  //Fire the callback
              if (options.swipeRight) {
                ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData);
              }
              break;
  
            case UP:
              //Trigger the event
                  $element.trigger('swipeUp', [direction, distance, duration, fingerCount, fingerData]);
          
                  //Fire the callback
              if (options.swipeUp) {
                ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData);
              }
              break;
  
            case DOWN:
              //Trigger the event
                  $element.trigger('swipeDown', [direction, distance, duration, fingerCount, fingerData]);
          
                  //Fire the callback
              if (options.swipeDown) {
                ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData);
              }
              break;
          }
        }
      } 
        
      return ret;
    }



    
    //
    // GESTURE VALIDATION
    //
    
    /**
    * Checks the user has swipe far enough
    * @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
    * If no threshold was set, then we return true.
    * @inner
    */
    function validateSwipeDistance() {
      var valid = true;
      //If we made it past the min swipe distance..
      if (options.threshold !== null) {
        valid = distance >= options.threshold;
      }
      
            return valid;
    }
    
    /**
    * Checks the user has swiped back to cancel.
    * @return Boolean if <code>cancelThreshold</code> has been set, return true if the cancelThreshold was met, else false.
    * If no cancelThreshold was set, then we return true.
    * @inner
    */
    function didSwipeBackToCancel() {
            var cancelled = false;
        if(options.cancelThreshold !== null && direction !==null)  {
            cancelled =  (getMaxDistance( direction ) - distance) >= options.cancelThreshold;
      }
      
      return cancelled;
    }

    /**
    * Checks that the time taken to swipe meets the minimum / maximum requirements
    * @return Boolean
    * @inner
    */
    function validateSwipeTime() {
      var result;
      //If no time set, then return true

      if (options.maxTimeThreshold) {
        if (duration >= options.maxTimeThreshold) {
          result = false;
        } else {
          result = true;
        }
      }
      else {
        result = true;
      }

      return result;
    }




    // SWIPES
    /**
     * Returns true if the current swipe meets the thresholds
     * @return Boolean
     * @inner
    */
    function validateSwipe() {
      //Check validity of swipe
      var hasValidTime = validateSwipeTime();
      var hasValidDistance = validateSwipeDistance(); 
      var hasCorrectFingerCount = validateFingers();
        var hasEndPoint = validateEndPoint();
        var didCancel = didSwipeBackToCancel(); 
        
      // if the user swiped more than the minimum length, perform the appropriate action
      // hasValidDistance is null when no distance is set 
      var valid =  !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
      
      return valid;
    }
    
    /**
     * Returns true if any Swipe events have been registered
     * @return Boolean
     * @inner
    */
    function hasSwipes() {
      //Enure we dont return 0 or null for false values
      return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
    }
    
    
    /**
     * Returns true if we are detecting swipes and have one
     * @return Boolean
     * @inner
    */
    function didSwipe() {
      //Enure we dont return 0 or null for false values
      return !!(validateSwipe() && hasSwipes());
    }

        /**
     * Returns true if we have matched the number of fingers we are looking for
     * @return Boolean
     * @inner
    */
        function validateFingers() {
            //The number of fingers we want were matched, or on desktop we ignore
        return ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH);
      }
        
        /**
     * Returns true if we have an end point for the swipe
     * @return Boolean
     * @inner
    */
        function validateEndPoint() {
            //We have an end value for the finger
        return fingerData[0].end.x !== 0;
        }

    
    
    
    
    
    // MULTI FINGER TOUCH
    /**
     * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
     * @inner
    */
    function startMultiFingerRelease() {
      previousTouchEndTime = getTimeStamp();
      previousTouchFingerCount = event.touches.length+1;
    }
    
    /**
     * Cancels the tracking of time between 2 finger releases, and resets counters
     * @inner
    */
    function cancelMultiFingerRelease() {
      previousTouchEndTime = 0;
      previousTouchFingerCount = 0;
    }
    
    /**
     * Checks if we are in the threshold between 2 fingers being released 
     * @return Boolean
     * @inner
    */
    function inMultiFingerRelease() {
      
      var withinThreshold = false;
      
      if(previousTouchEndTime) {  
        var diff = getTimeStamp() - previousTouchEndTime  
        if( diff<=options.fingerReleaseThreshold ) {
          withinThreshold = true;
        }
      }
      
      return withinThreshold; 
    }
    

    /**
    * gets a data flag to indicate that a touch is in progress
    * @return Boolean
    * @inner
    */
    function getTouchInProgress() {
      //strict equality to ensure only true and false are returned
      return !!($element.data(PLUGIN_NS+'_intouch') === true);
    }
    
    /**
    * Sets a data flag to indicate that a touch is in progress
    * @param {boolean} val The value to set the property to
    * @inner
    */
    function setTouchInProgress(val) {
      
      //Add or remove event listeners depending on touch status
      if(val===true) {
        $element.bind(MOVE_EV, touchMove);
        $element.bind(END_EV, touchEnd);
        
        //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
        if(LEAVE_EV) { 
          $element.bind(LEAVE_EV, touchLeave);
        }
      } else {
        $element.unbind(MOVE_EV, touchMove, false);
        $element.unbind(END_EV, touchEnd, false);
      
        //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
        if(LEAVE_EV) { 
          $element.unbind(LEAVE_EV, touchLeave, false);
        }
      }
      
    
      //strict equality to ensure only true and false can update the value
      $element.data(PLUGIN_NS+'_intouch', val === true);
    }
    
    
    /**
     * Creates the finger data for the touch/finger in the event object.
     * @param {int} index The index in the array to store the finger data (usually the order the fingers were pressed)
     * @param {object} evt The event object containing finger data
     * @return finger data object
     * @inner
    */
    function createFingerData( index, evt ) {
      var id = evt.identifier!==undefined ? evt.identifier : 0; 
      
      fingerData[index].identifier = id;
      fingerData[index].start.x = fingerData[index].end.x = evt.pageX||evt.clientX;
      fingerData[index].start.y = fingerData[index].end.y = evt.pageY||evt.clientY;
      
      return fingerData[index];
    }
    
    /**
     * Updates the finger data for a particular event object
     * @param {object} evt The event object containing the touch/finger data to upadte
     * @return a finger data object.
     * @inner
    */
    function updateFingerData(evt) {
      
      var id = evt.identifier!==undefined ? evt.identifier : 0; 
      var f = getFingerData( id );
      
      f.end.x = evt.pageX||evt.clientX;
      f.end.y = evt.pageY||evt.clientY;
      
      return f;
    }
    
    /**
     * Returns a finger data object by its event ID.
     * Each touch event has an identifier property, which is used 
     * to track repeat touches
     * @param {int} id The unique id of the finger in the sequence of touch events.
     * @return a finger data object.
     * @inner
    */
    function getFingerData( id ) {
      for(var i=0; i<fingerData.length; i++) {
        if(fingerData[i].identifier == id) {
          return fingerData[i]; 
        }
      }
    }
    
    /**
     * Creats all the finger onjects and returns an array of finger data
     * @return Array of finger objects
     * @inner
    */
    function createAllFingerData() {
      var fingerData=[];
      for (var i=0; i<=5; i++) {
        fingerData.push({
          start:{ x: 0, y: 0 },
          end:{ x: 0, y: 0 },
          identifier:0
        });
      }
      
      return fingerData;
    }
    
    /**
     * Sets the maximum distance swiped in the given direction. 
     * If the new value is lower than the current value, the max value is not changed.
     * @param {string}  direction The direction of the swipe
     * @param {int}  distance The distance of the swipe
     * @inner
    */
    function setMaxDistance(direction, distance) {
        distance = Math.max(distance, getMaxDistance(direction) );
        maximumsMap[direction].distance = distance;
    }
        
        /**
     * gets the maximum distance swiped in the given direction. 
     * @param {string}  direction The direction of the swipe
     * @return int  The distance of the swipe
     * @inner
    */        
    function getMaxDistance(direction) {
      if (maximumsMap[direction]) return maximumsMap[direction].distance;
      return undefined;
    }
    
    /**
     * Creats a map of directions to maximum swiped values.
     * @return Object A dictionary of maximum values, indexed by direction.
     * @inner
    */
    function createMaximumsData() {
      var maxData={};
      maxData[LEFT]=createMaximumVO(LEFT);
      maxData[RIGHT]=createMaximumVO(RIGHT);
      maxData[UP]=createMaximumVO(UP);
      maxData[DOWN]=createMaximumVO(DOWN);
      
      return maxData;
    }
    
    /**
     * Creates a map maximum swiped values for a given swipe direction
     * @param {string} The direction that these values will be associated with
     * @return Object Maximum values
     * @inner
    */
    function createMaximumVO(dir) {
        return { 
            direction:dir, 
            distance:0
        }
    }
    
    
    //
    // MATHS / UTILS
    //

    /**
    * Calculate the duration of the swipe
    * @return int
    * @inner
    */
    function calculateDuration() {
      return endTime - startTime;
    }
    
    /**
    * Calculate the distance between 2 touches (pinch)
    * @param {point} startPoint A point object containing x and y co-ordinates
      * @param {point} endPoint A point object containing x and y co-ordinates
      * @return int;
    * @inner
    */
    function calculateTouchesDistance(startPoint, endPoint) {
      var diffX = Math.abs(startPoint.x - endPoint.x);
      var diffY = Math.abs(startPoint.y - endPoint.y);
        
      return Math.round(Math.sqrt(diffX*diffX+diffY*diffY));
    }
    
    /**
    * Calculate the zoom factor between the start and end distances
    * @param {int} startDistance Distance (between 2 fingers) the user started pinching at
      * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
      * @return float The zoom value from 0 to 1.
    * @inner
    */
    function calculatePinchZoom(startDistance, endDistance) {
      var percent = (endDistance/startDistance) * 1;
      return percent.toFixed(2);
    }
    
    
    /**
    * Returns the pinch direction, either IN or OUT for the given points
    * @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}
    * @see $.fn.swipe.directions
    * @inner
    */
    function calculatePinchDirection() {
      if(pinchZoom<1) {
        return OUT;
      }
      else {
        return IN;
      }
    }
    
    
    /**
    * Calculate the length / distance of the swipe
    * @param {point} startPoint A point object containing x and y co-ordinates
      * @param {point} endPoint A point object containing x and y co-ordinates
      * @return int
    * @inner
    */
    function calculateDistance(startPoint, endPoint) {
      return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
    }

    /**
    * Calculate the angle of the swipe
    * @param {point} startPoint A point object containing x and y co-ordinates
      * @param {point} endPoint A point object containing x and y co-ordinates
      * @return int
    * @inner
    */
    function calculateAngle(startPoint, endPoint) {
      var x = startPoint.x - endPoint.x;
      var y = endPoint.y - startPoint.y;
      var r = Math.atan2(y, x); //radians
      var angle = Math.round(r * 180 / Math.PI); //degrees

      //ensure value is positive
      if (angle < 0) {
        angle = 360 - Math.abs(angle);
      }

      return angle;
    }

    /**
    * Calculate the direction of the swipe
    * This will also call calculateAngle to get the latest angle of swipe
    * @param {point} startPoint A point object containing x and y co-ordinates
      * @param {point} endPoint A point object containing x and y co-ordinates
      * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}
    * @see $.fn.swipe.directions
    * @inner
    */
    function calculateDirection(startPoint, endPoint ) {
      var angle = calculateAngle(startPoint, endPoint);

      if ((angle <= 45) && (angle >= 0)) {
        return LEFT;
      } else if ((angle <= 360) && (angle >= 315)) {
        return LEFT;
      } else if ((angle >= 135) && (angle <= 225)) {
        return RIGHT;
      } else if ((angle > 45) && (angle < 135)) {
        return DOWN;
      } else {
        return UP;
      }
    }
    

    /**
    * Returns a MS time stamp of the current time
    * @return int
    * @inner
    */
    function getTimeStamp() {
      var now = new Date();
      return now.getTime();
    }
    
    
    
    /**
     * Returns a bounds object with left, right, top and bottom properties for the element specified.
     * @param {DomNode} The DOM node to get the bounds for.
     */
    function getbounds( el ) {
      el = $(el);
      var offset = el.offset();
      
      var bounds = {  
          left:offset.left,
          right:offset.left+el.outerWidth(),
          top:offset.top,
          bottom:offset.top+el.outerHeight()
          }
      
      return bounds;  
    }
    
    
    /**
     * Checks if the point object is in the bounds object.
     * @param {object} point A point object.
     * @param {int} point.x The x value of the point.
     * @param {int} point.y The x value of the point.
     * @param {object} bounds The bounds object to test
     * @param {int} bounds.left The leftmost value
     * @param {int} bounds.right The righttmost value
     * @param {int} bounds.top The topmost value
    * @param {int} bounds.bottom The bottommost value
     */
    function isInBounds(point, bounds) {
      return (point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom);
    };
  
  
  }
  
  

}));
