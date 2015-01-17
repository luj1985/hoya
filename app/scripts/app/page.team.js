$(function() {
  $('#team .names').on('click', 'a', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('#team .names li').removeClass('active');
    $('#team article').removeClass('active');
    $(this).closest('li').addClass('active');
    $(target).addClass('active');
  });
});