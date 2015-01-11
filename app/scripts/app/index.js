(function() {
  $(function() {
    HY.loading(true);

    var PAGEINITED = {
      // 'main': false
    };
    var tetrisConf;
    var my_tetris;

    var ANIMATE = {
      a: 100,
      b: 80,
      c: 222
    };

    if (HY.getUrlParam('_d') === '1') {
      ANIMATE = {
        a: 10,
        b: 8,
        c: 2
      }
    }

    var CASEDICT = {
      '1003': {
        text: '易宏工業新廠及辦公樓',
        year: '2010',
        category: '5',
        img: 3
      },
      '1006': {
        text: '天恩彌勒殿',
        year: '2010',
        category: '6',
        img: 5
      },
      '1008': {
        text: '中鋼總部大樓方案',
        year: '2010',
        category: '0',
        img: 10
      },
      '1010': {
        text: '國立潮州高級中學明德樓',
        year: '2010',
        category: '9',
        img: 14
      },
      '1024': {
        text: '許晴哲皮膚科診所',
        year: '2010',
        category: '0',
        img: 3
      },
      '1110': {
        text: '桂田酒店三館',
        year: '2011',
        category: '7',
        img: 3
      },
      '1122': {
        text: '左營蔡宅',
        year: '2011',
        category: '0',
        img: 5
      },
      '1130': {
        text: '統正夢時代二期開發項目',
        year: '2011',
        category: '10',
        img: 8,
        desc: '<h4>設計概念</h4><p><span>海洋</span> <span>健康</span> <span>永續再生</span> </p><p><span>節能</span> <span>綠化</span> <span>貨櫃</span> </p><p></p><p><strong><span>綠建築計畫</span></strong></p><p><span>室內環境</span> </p><p><span>•<span> </span></span><span>噪音防制</span> </p><p><span>•<span> </span></span><span>震動音防制</span> </p><p><span>•<span> </span></span><span>室內採光</span> </p><p><span>•<span> </span></span><span>通風計畫</span> </p><p><span>•<span> </span></span><span>室內污染控制</span> </p><p><span>•<span> </span></span><span>室內空氣淨化設備</span> </p><p><span>•<span> </span></span><span>地面與地下室防潮</span> </p><p><span>•<span> </span></span><span>綠建材</span> </p><p><span>•<span> </span></span><span>綠色裝修設計</span> </p><p><span>基地保水</span> </p><p><span>•<span> </span></span><span>透水鋪面</span> </p><p><span>•<span> </span></span><span>貯留滲透空地</span> </p><p><span>•<span> </span></span><span>滲透井與滲透管</span> </p><p><span>•<span> </span></span><span>人工地盤貯留</span> </p><p><span>水資源指標</span> </p><p><span>•<span> </span></span><span>省水器材</span> </p><p><span>•<span> </span></span><span>中水利用</span> </p><p><span>•<span> </span></span><span>雨水再利用</span> </p><p><span>•<span> </span></span><span>植栽澆灌節水</span> </p><p><span>綠化指標</span> </p><p><span>•<span> </span></span><span>生態綠化</span> </p><p><span>•<span> </span></span><span>立體綠化</span> </p><p><span>•<span> </span></span><span>牆面綠化澆灌</span> </p><p><span>•<span> </span></span><span>人工地盤綠化</span> </p><p><span>•<span> </span></span><span>綠化防水排水技術</span> </p><p><span>•<span> </span></span><span>綠化防風透氣技術</span> </p><p><span>日常節能</span> </p><p><span>•<span> </span></span><span>建築配置節能</span> </p><p><span>•<span> </span></span><span>適當的開口率</span> </p><p><span>•<span> </span></span><span>外遮陽</span> </p><p><span>•<span> </span></span><span>開口部玻璃</span> </p><p><span>•<span> </span></span><span>開口部隔熱與氣密性</span> </p><p><span>•<span> </span></span><span>外殼構造及材料</span> </p><p><span>•<span> </span></span><span>屋頂構造及材料</span> </p><p><span>•<span> </span></span><span>帷幕牆</span> </p><p><span>•<span> </span></span><span>善用地形風</span> </p><p><span>•<span> </span></span><span>善用中庭風</span> </p><p><span>•<span> </span></span><span>開窗通風性能</span> </p><p><span>•<span> </span></span><span>風力通風設計</span> </p><p><span>•<span> </span></span><span>浮力通風設計</span> </p><p><span>•<span> </span></span><span>空調分區</span> </p><p><span>•<span> </span></span><span>空調主機節能設計</span> </p><p><span>•<span> </span></span><span>大空間分層空調</span> </p><p><span>•<span> </span></span><span>照明光源</span> </p><p><span>•<span> </span></span><span>再生能源（太陽能、風力）</span> </p><p></p><p></p><p></p><p><br/></p>'
      },
      '1138': {
        text: '天恩慈氏祠堂',
        year: '2011',
        category: '6',
        img: 3
      },
      '1141': {
        text: '墾丁白沙民宿',
        year: '2011',
        category: '7',
        img: 8
      },
      '1143': {
        text: '義大亞洲廣場',
        year: '2011',
        category: '7',
        img: 11
      },
      '1144': {
        text: '鉅橡企業F廠及辦公樓',
        year: '2011',
        category: '5',
        img: 4
      },
      '1150': {
        text: '國際星辰旅館更新整建',
        year: '2011',
        category: '7',
        img: 4
      },
      '1151-1': {
        text: '大江生醫S9廠展示大廳',
        year: '2013',
        category: '0',
        img: 8
      },
      '1151': {
        text: '大江生醫S9廠',
        year: '2011',
        category: '5',
        img: 2
      },
      '1210': {
        text: '緬甸眉苗佛院方案',
        year: '2012',
        category: '6',
        img: 2
      },
      '1216': {
        text: '恆春福樂酒店式公寓方案',
        year: '2012',
        category: '0',
        img: 1
      },
      '1221': {
        text: '義大癌治療醫院',
        year: '2009',
        category: '6',
        img: 6
      },
      '1225': {
        text: '高雄美國學校總體規劃方案',
        year: '2012',
        category: '9',
        img: 9
      },
      '1228': {
        text: '義大遊樂世界二期及古堡酒店',
        year: '2012',
        category: '10',
        img: 9
      },
      '1238': {
        text: '德商羅曼動物疫苗廠辦新建方案',
        year: '2012',
        category: '5',
        img: 7
      },
      '1243': {
        text: '竹精緻商旅更新整建',
        year: '2012',
        category: '0',
        img: 20
      },
      '1249': {
        text: '國立海洋科技博物館海洋生態展示館',
        year: '2012',
        category: '9',
        img: 4
      },
      '1303': {
        text: '印尼天慧彌勒佛院方案',
        year: '2013',
        category: '6',
        img: 9
      },
      '1315': {
        text: '國立海洋科技博物館商業空間',
        year: '2013',
        category: '0',
        img: 12
      },
      '1320': {
        text: '王冠鋁業永安廠',
        year: '2013',
        category: '5',
        img: 2
      },
      '1323': {
        text: '大江生醫中興大學產學聯合研發中心方案',
        year: '2013',
        category: '0',
        img: 5
      },
      '1334': {
        text: '印尼巴丹島佛院方案',
        year: '2014',
        category: '6',
        img: 7
      },
      '1401': {
        text: '佛光山惠中寺新建方案',
        year: '2014',
        category: '6',
        img: 8
      },
      '1402': {
        text: '樂林宴會飯店',
        year: '2014',
        category: '7',
        img: 3
      },
      '1406': {
        text: '金三榮市港段集合住宅',
        year: '2014',
        category: '4',
        img: 6
      },
      '1408': {
        text: '大高雄俯瞰式觀光設施可行性評估計畫',
        year: '2014',
        category: '2',
        img: 13
      },
      '9015': {
        text: '同盟大樓',
        year: '2001',
        category: '4',
        img: 2,
        desc: '<h4><span>精品意識與精品建築</span></h4><p><span></span></p><p><span>業主的精品意識</span></p><p><span>-<span> </span></span><span>家族自用、休閒娛樂</span></p><p><span>-<span> </span></span><span>景觀條件、物環兼容</span></p><p><span>-<span> </span></span><span>實用空間、大宅格局</span></p><p><span>-<span> </span></span><span>新潮設備、經濟建材</span></p><p><span>-<span> </span></span><span>安全私密、生活價值</span></p><p><span></span></p><p><span>我們的精品建築</span></p><p><span>我們對精品建築的定義：人性文化、環保節能、管理服務。</span></p><p><span></span></p><p><span>我們的建築設計以時尚的簡約來表現，這種簡約可以體現在建築功能空間的簡化、空間分隔的弱化、裝修裝飾的簡潔。然而，如何滿足業主堅持的意念與展現新型態之住宅意象才是最值得自豪的優勢。我們企圖從整體規劃到建築細部表現人性化、現代化來引導潮流，同時嘗試建材的新組合，來實現領先的設計理念。</span></p><p><span></span></p><p><span>本設計期以體現對</span><span>“</span><span>人性</span><span>”</span><span>的關注並嚴格遵循著</span><span>“</span><span>豪華源于舒適</span><span>”</span><span>的設計理念；讓住宅主動滿足人的需求，處處以人為中心。業主家族每個家庭因其豐富的生活，各需豐富的空間需求，每戶分置一個樓層，並設休閒健身空間與招待會所，致以彈性空間之留設及設備管道間來解決各層空間需求各異的配置型態。本基地臨高雄愛河畔之綠帶公園，有優越的自然景觀優勢，故每層的住戶大堂均為陽光清風電梯大堂，並每層留設大面積之陽台，結合外部公園綠帶與空中花園的視覺景觀與空間設計，長向南北通透，通風採光，節約能源，彰顯環保生態之效。住宅內使用大窗型式之高品質氣密窗，隔音隔熱，並將都市美景帶入窗內。</span></p><p><span></span></p><p><span>精品住宅僅依靠建築價值還難以成就經典，其還必須賦予管理服務更大的附加值，以使其價值最大化。本設計更使用先進的智慧化設施和周到的保安管理系統，提供最安全舒適的生活環境。</span></p><p><span></span></p><p><br/></p>'
      },
      '9101': {
        text: '高雄市臨港線鐵路客運列車站體暨輪渡站',
        year: '2002',
        category: '2',
        img: 11,
        desc: '<h4><span>現代風與影的對話</span></h4><p><span></span></p><p><span>基地特性</span></p><p><span>高雄市政府為有效利用其市內臨港線鐵路閒置資源，結合台灣鐵路公司開啟<span style=\"position:relative;margin-left:-4px;\">「</span>嘟嘟火車」，以類似輕軌捷運系統的型態，未來串接高雄市紅、橘線捷運系統，提供市民交通的便利性；同時又配合<span style=\"position:relative;margin-left:-4px;\">「</span>藍色公路」與愛河觀光渡輪計畫，以海陸聯運方式連接商圈與觀光景點，擴大高雄市全面性的經濟活動，故選定本基地興闢鐵路車站及渡輪站。基地位置於新光路景觀大道端點，直臨高雄港，且為高雄港埠轉折處，宛如陸上街廓之角地，為知名之臨港開放空間。</span></p><p><span></span></p><p><span>設計需求</span></p><p><span>本計畫分三期開發，第一期以鐵路車站與渡輪站之連結設施為主體，第二期以渡輪站及公車轉運車站與景觀工程為主體，未來第三期將以親水與商業設施為開發目標。</span></p><p><span></span></p><p><span>設計構想</span></p><p><span>高雄是陽剛的，微風中，煊烈的陽光下，反射著慵懶的都市節奏，透著一幅對比強烈的熱帶風情。設計嘗試捕捉高雄的風與光影，藉由設計元件的媒介，讓風與影開啟現代的對話，光影透過時間展現的變幻，訴說它頑皮的性格，風也因律動的旋律，證明它懷柔大地的情緒，透過對話的詮釋，建構高雄的地域空間。</span></p><p><span></span></p><p><span>設計手法</span></p><p><span>以地標物與海洋光廊反映地方軸線：設計上延續新光路景觀大道的軸線，架構出由地面水平連續的<span style=\"position:relative;margin-left:-4px;\">「</span>海洋光廊」〈第三期工程〉及</span><span>45</span><span>度斜向昇起指向海洋的地標物，此地標物長</span><span>54</span><span>公尺，功能與造型類似船桅或起重吊桿，支撐本構造系統的主要桿件。<span style=\"position:relative;margin-left:-4px;\">「</span>海洋光廊」係地景設計的一部分，全長</span><span>60</span><span>公尺，以水池及水霧噴泉設施為主，水池底部埋設冷極光之光導管，白天提供親水功能，夜間配合地標物的照明，增強軸線的視覺效果，以展現趣味性及多樣性。</span></p><p><span>以鐵路車站及渡輪站及其連結設施隱喻高雄〈港〉工業文化：高雄以工業立市，期間拆船、鋼鐵、石化、造船等大型產業皆為台灣紀錄下經濟的指標，也奠定高雄港市的國際地位。設計上嘗試以鋼骨、纜索與膜等元素展現出港都的海洋與工業意象，車站月台長</span><span>66</span><span>公尺，並延伸為景觀的一部分，而其三片翼型半透明頂棚的輕結構造型，展現未來的科技感，提供對車站的新空間經驗；因車站月台與渡輪站體被新光大排分為南北兩側，以地標物為圓心，張啟鋼索支撐十個<span style=\"position:relative;margin-left:-4px;\">「</span>人字型」鋼骨架構，组立成一座外徑</span><span>45</span><span>公尺的圓弧<span style=\"position:relative;margin-left:-4px;\">「</span>天橋」，橫跨新光大排；而渡輪站以<span style=\"position:relative;margin-left:-4px;\">「</span>天橋」底層設置售票辦公室、候船區、公共廁所及商業附屬空間〈第三期工程〉等。<span style=\"position:relative;margin-left:-4px;\">「</span>天橋」頂層寬６公尺的平台通道，提供行人眺望高雄港的景觀，<span style=\"position:relative;margin-left:-4px;\">「</span>天橋」內環所圍塑出來的區域，形成活動廣場，未來利用廣場上方鋼索及<span style=\"position:relative;margin-left:-4px;\">「</span>人字型」鋼骨架撐膜體構造物，提供遮陽、捕風的功能，及船帆的造型意象，呼應挑動風影的設計意念；另其他附屬設施結合將所有地景元素，創造出和諧的都市場所。</span></p><p><span></span></p><p><br/></p>'
      },
      '9201': {
        text: '金酒公司金寧廠整體景觀規劃',
        year: '2003',
        category: '2',
        img: 4,
        desc: '<h4><span>流觴曲水、酒鄉新聲</span></h4><p><span></span></p><p><span>高粱不獨產於金門，然而卻唯有金門高粱酒能如此馳名中外。生產金門高粱酒的金門酒廠原名九龍江酒廠，成立於</span><span>1953</span><span>年，迄今已歷半個世紀，但在國民所得日漸提高，產業結構與消費習慣逐漸轉型，以及全球化浪潮的總體環境之下，傳統製酒面臨成本優勢的消褪，亟待發展服務產業，朝高附加價值之觀光酒廠轉型。本規劃案整體目標如下：</span></p><p><span></span></p><p><span>一、為金寧廠轉型為觀光酒廠之目標，擘劃長遠可行之整體發展架構。</span></p><p><span>二、合理規劃配置使用分區，兼顧觀光、生產與辦公之機能。</span></p><p><span>三、統整安排全區動線，以使人車物流發揮最大效益。</span></p><p><span>四、提供造型及照明策略，期能融合地域特色與企業形象，美化全區環境。</span></p><p><span>五、具體實踐產業文化化與文化產業化，維繫、發揚地方產業特色，使金寧廠成為示範性的觀光酒廠。</span></p><p><span></span></p><p><span>先行施工的第一期工程包括下列內容：景觀中軸、廠辦分離圍牆、角地地標、酒瓶公園改善、行政大樓美化，其中以景觀中軸為主體景觀設施。</span></p><p><span></span></p><p><span>景觀中軸重新建構了廠區的入口軸線及意象，以草原上蜿蜒長達</span><span>143</span><span>公尺的<span style=\"position:relative;margin-left:-4px;\">「</span>曲水流觴」作為象徵主題，連接軸向兩端的<span style=\"position:relative;margin-left:-4px;\">「</span>迎賓水池」與<span style=\"position:relative;margin-left:-4px;\">「</span>寶月新泉」；曲水流觴為酒文化中的典故借用，在王羲之的蘭亭集序裡所描繪的，是一種文人雅士的生活境界，在設計上，將這個概念放大並置入這片開闊的地景中，成為人體與自然之間的一種介質，可以遊逛、奔躍、駐足、觀演，一如有酒助興。</span></p><p><span></span></p><p><span>作為金門島上的公共地景，試圖以不同於傳統閩南的樣式著手，希望將形式的內涵提昇到形式的表象之上，而大量採用以概念為主的景觀元素，例如幾何、立體構成，形成整體風格，或許<span style=\"position:relative;margin-left:-4px;\">「</span>創新」對於金門來說，也是一股活力的甘泉吧。</span></p><p><span></span></p><p><br/></p>'
      },
      '9217': {
        text: '樹德科技大學行政大樓暨禮堂',
        year: '2003',
        category: '9',
        img: 7,
        desc: '<h4><span>前傳</span></h4><p><span>本建築物源起於</span>1999<span>年校方舉辦以<span style=\"position:relative;margin-left:-4px;\">「</span>學生活動中心暨體育館」為題目的競圖，由新明建築師事務所、李炳輝建築師事務所及本所共同合作參與。競圖後，校方依使用需求調整為興建一座<span style=\"position:relative;margin-left:-4px;\">「</span></span>1,500<span>人專業級演藝廳暨學生活動中心」的複合建築。</span></p><p><span>科技大學的辦學精神在於精益求精、實事求是。規劃設計的初衷，設定在提出一個師生交流的平台！由於使用機能的多樣性、空間場域的豐富性、人群流動的錯雜性等諸多繁複紛陳的因子並存，本建築物希望在校園環境的現存架構下，產出新的交流場所，以彌補原有之不足。</span></p><p><span>規劃設計期間，校方為求慎重，由董事會與校園規劃委員會共同對設計內容及成果密切檢視，由於複雜的建築機能及顯著的區位關係，各方意見整合頗見難度，期間歷經了</span>36<span>次的設計會議及變更調整，費時一年半始獲定案，進入工程執行準備階段。正當備妥發包書圖文件、取得建造執照之際，校方卻迫於教育部私校融資比例上限規定影響而於</span>2001<span>年中止了招標及興建進程，原設計合約解除。</span></p><p></p><p><span>主題</span></p><p>2003<span>年夏季，校方通知工程擬恢復進行，並協議由本所接續原設計合約，惟須配合需求修正而調整部分設計內容，將<span style=\"position:relative;margin-left:-4px;\">「</span>演藝廳暨學生活動中心」修改為<span style=\"position:relative;margin-left:-4px;\">「</span>行政大樓暨多功能禮堂」。建築物須在校方功能性的考量下，解決原來行政管理單位空間之不足，並滿足中大型集會、學生課內外活動等空間，及專業表演、室內運動等新辦科系</span> (<span>表演藝術、休閒事業管理</span>) <span>所需之場所，以符合<span style=\"position:relative;margin-left:-4px;\">「</span>多功能」的目的。</span></p><p><span>延續前期規劃設計的初衷，主要量體由行政大樓及多功能禮堂兩大部分依山順勢所組成：行政大樓平面為</span>L<span>型配置，量體內植入了由通廊、廳堂、平台及樓梯所串接的公領域空間，連通各使用區域，並作為師生活動、休憩、交流之場所，其平面與垂直向度的延展與交疊關係，亦與導風採光的節能手法互為運用，活化建築生命；多功能禮堂則為一組合量體，舞台部分需滿足吊具高度，觀眾席及球場部分需符合排球競賽標準，均為挑高大跨度空間。</span></p><p><span>戶外部分以扇型劇場為核心、環繞多重的廣場、通道、綠地，連結不同地勢高程的外部空間，共同形成景觀構圖，並與校區既有景觀系統及校門口區域的重建延伸銜接，修補校園邊界隙地的風貌。</span></p><p></p><p><span>餘響</span></p><p><span>從專業級演藝廳演變為多功能禮堂，其落差在於設計對象原為兩個極端，由精準的專業表演場所，轉化成須兼顧集會、講演、音樂、戲劇、伸展、運動</span>……<span>等複合功能的場地，在設計條件上甚至存有本質上的衝突矛盾，如空間佈設、席位視角、光源照度、殘響時間、材料選配、後勤管理等問題；在與校方各使用與管理單位重新反覆檢討後，所基本兼顧的<span style=\"position:relative;margin-left:-4px;\">「</span>多功能」標準，雖似滿足，實則妥協。</span></p><p><span>校方董事會與設計院系對於校園建築風格及空間表現的延續具有殷切的提示，建築形式及材料色彩的選用亦屬執行過程中保持徵詢及溝通的要項，使本建築物能不脫離現存校園環境的質地與氣氛。</span></p><p><span>本建築物因為前期中止，加上後續幾乎是重新設計以致耗費期程，拖延至</span>2004<span>年底實際發包時，又逢建材原物料的成本高漲而造成了預算居高不下，產生了營建費用上的重大代價。</span></p><p><span>工程管理組織由校方營繕單位統籌，以協調校方代表、不同分包的建築、結構、機電等設計單位，及委外監造單位、施工單位等複雜的體系及介面，幸而透過務實的態度、每週的工地會議及難以數計的現場協調，終究克服了所有的難題，於</span>2007<span>年春天，歷時</span>8<span>年之後落成啟用。</span></p><p></p><p></p><p><br/></p>'
      },
      '9230': {
        text: '高雄捷運O5/R10美麗島站',
        year: '2003',
        category: '2',
        img: 5
      },
      '9306': {
        text: '福慧大樓',
        year: '2004',
        category: '4',
        img: 1,
        desc: '<h4>設計命題</h4><p><span>福慧大樓基地位於鳳山市區中的零星工業地塊，週邊為密集發展之典型住商混合街巷，都市景觀目前尚無明顯的特色；因鄰近縣政府、鳳山高中、衛武營公園、捷運橘線等重要的環境區位，業主希望透過<span style=\"position:relative;margin-left:-4px;\">「</span>廠辦」建築的重新定義，以豐富其使用型態，提升土地的利用價值。</span></p><p><span></span></p><p><strong><span>整體構想</span></strong></p><p><span>設計策略上採低建蔽率</span><span> (</span><span>約</span><span>36%)</span><span>，控制單層面積使每層各可為獨立使用單元，並將</span><span>210%</span><span>之容積率拉高至九層樓，如此可保留較多空地、降低對北面現有幼稚園的遮擋，上部樓層亦具有較佳之景觀視野。建築方位依面前道路為座北朝南，矩形基地因西側及南側均為丁字路口，建築量體主要配置於西側以避開正向<span style=\"position:relative;margin-left:-4px;\">「</span>路沖」的風水忌諱；沿街面保持較寬的退縮步道，與兩端的傳統騎樓銜接。</span></p><p><span></span></p><p><strong><span>健康建築</span></strong></p><p><span>內部平面儘量將垂直動線、共用及服務設施集中留設於東面，以利使用維護並可延長建築物的生命週期，其餘為完整空間以利各使用單元不同之需求；各向均保有充分的採光通風機會，西向以垂直遮陽板減低直接熱得，南向則以深開口方式作為窗戶遮陽，因空地及週邊街道所退讓之鄰房距離，使建築物之自然對流有明顯效果。</span></p><p><span></span></p><p><strong><span>形式語言</span></strong></p><p><span>正面造型以兩邊對稱的量體構成雙塔的輪廓，強調垂直向上的形體，相對於所坐落的環境中多為水平發展的透天街屋，呈現較明顯之標的作用，而主樓之外，於東側空地上延伸了基座形式的二層量體，以呼應並維持臨街建築立面及都市空間的連續性。立面原則大致依循基座、屋身、屋頂三段式之古典模式，細部元素及文法亦採用具秩序感、穩定感之質地及簡化之樣式，應可使目前紛擾擁擠的都市涵構獲得舒緩，空間品質獲得提升。</span></p><p><span></span></p><p><strong><span>福慧雙修</span></strong></p><p><span>福慧二自來自於業主<span style=\"position:relative;margin-left:-4px;\">「</span>修福不修慧，福中也造罪；修慧不修福，慧中也糊塗」的生活哲學：</span><span>從學習當中，了解到人要常行布施，培植福德，同時亦要修習智慧，了脫生死輪迴；<span style=\"position:relative;margin-left:-4px;\">「</span>智慧」與<span style=\"position:relative;margin-left:-4px;\">「</span>福德」二者，猶如鳥之雙翼、車之雙輪，缺一不可。本案於規劃過程中，感受於業主的生活哲學，以試圖尋求內部機能與外部形貌的調和，建築本體及都市環境的兼顧，作為主要的思路；此外，</span><span>自設計至監造期間，充分獲得業主的支持，及對專業的尊重態度，一併鳴謝。</span></p><p><span></span></p><p><br/></p>'
      },
      '9311': {
        text: '慶富集團營運總部大樓',
        year: '2004',
        category: '8',
        img: 9,
        desc: '<h4>Richard Rogers 的設計原創</h4><p><span>慶富集團以在地產業的心情，期待為高雄市未來留下一只都市的記憶符號，一棟代表高雄市及集團文化的建築語彙，特別邀請</span><span>普立茲克建築大師</span><span>英國</span><span>Richard Rogers</span><span>爵士擔任總部大樓的規劃設計，</span><span> Richard Rogers</span><span>擅長以建築結構表現空間美學，</span><span>採用鮮豔的原色區分建築機能</span><span>，具備優異的細部設計能力，創新的設計潮流及風格</span><span>。</span></p><p><span>Richard Rogers</span><span>對於本大樓的設計理念係以豪壯的建築結構之於海洋的微觀矛盾，將企業的內化自省昇華為對環境關懷的宏觀表現。<span style=\"position:relative;margin-left:-4px;\">「</span>外放結構」與<span style=\"position:relative;margin-left:-4px;\">「</span>內納海景」為本案的空間操作手法，而</span><span>建築物的表情來自於因基地環境的水岸氛圍及港口視覺景觀的獨特條件卻伴隨著西曬日照的挑戰，</span><span>Richard Rogers</span><span>考慮日照角度與特殊的外部深遮陽百葉格柵設計，以控制建築物的日照環境兼顧穿透欣賞海景的需求；另將建築結構外露且電梯、樓梯、服務管道等空間，外放於建築物南北兩側，以維持辦公室內部空間的完整與使用的彈性；而箱型結構的設計，以框景的方式將空間外伸<span style=\"position:relative;margin-left:-4px;\">「</span>獨立」出來，成為一個獨立會議、展示等空間；更以鮮豔的原色表現建築機能，使其外觀充滿建築活力。</span></p><p><span></span></p><p><strong><span>禾揚建築的設計執行</span></strong></p><p><span>禾揚聯合建築師事務所以國內建築師的角色，</span><span>承接並深化</span><span>Richard Rogers</span><span>設計及外牆、結構收頭等細部發展</span><span>，同時更須落實慶富集團對綠建築及智慧建築應用的機電整合介面設計的執行</span><span>︰</span></p><p><span>1.</span><span>外牆帷幕採用雙層鍍鈦低耗能玻璃，熱傳導效率較</span><span>RC</span><span>構造為低，有效阻絕台灣亞熱帶氣候造成大量的空調負荷。</span></p><p><span>2.</span><span>建築外觀格柵遮陽板深度及角度亦依台灣經緯度的日照軌跡電腦模擬計算及設計。</span></p><p><span>3.</span><span>空調系統採用</span><span>VRV</span><span>變頻式冷暖氣系統，耗電量隨負荷大小變動，有效降低空調電力之需求</span><span>.</span><span>預計可較一般空調系統節省約</span><span>40%</span><span>之用電。</span></p><p><span>4.</span><span>照明系統方面在建築外部採</span><span>LED</span><span>燈具，室內採用</span><span>T5</span><span>高效率照明燈具；另本大樓西側部份均設日光照明控制系統，充份利用環境的自然採光，有效降低照明用電。</span></p><p><span>5.</span><span>大樓內部所有門禁管制及機電設備均納入監控系統內，隨時記錄各設備之用電狀態，可作為日後使用保養上之參考。</span></p><p><span>6.</span><span>建築頂層</span><span>Double Roof</span><span>設計，最上層屋頂以格柵遮陽板及太陽能集熱板作為遮陽及太陽能發電運用，預留太陽能發電與市電並聯的擴充考量，將太陽能電力儲存用於公共空間及景觀照明。</span></p><p><span>除用電量節約設計外，本大樓於水資源方面亦設置雨水回收系統，回收再過濾後用於室外及頂層景觀之噴灌系統；另大樓內設置小型氣象系統，監控陰雨天時噴灌系統不作用，以節省用水量。</span></p><p><span></span></p><p><strong><span>眾家的成果</span></strong></p><p><span>2007</span><span>年</span><span>12</span><span>月</span><span>25</span><span>日由總統、副總統首度偕同南太平洋吉里巴斯、帛琉、吐瓦魯三邦交國元首，南下高雄參加民間企業慶富集團營運總部大樓開幕典禮及剪綵，眾家除盛讚慶富集團成功企業外交典範外，更感佩</span><span>集團對建築景觀與環境生態的要求，當欣賞外露結構與懸吊系統的建築造型、</span><span>簡潔實用的彈性機能配置、效率便利的公共環境系統、科技節能的先進建材設備、人文質感的企業總部形象、內外貫通的流暢視覺空間、前瞻未來的規劃理念等</span><span>剛柔並濟的建築語彙外，更透過空間的安排感受豐富而細膩的高雄水岸城市風情。</span></p><p><span></span></p><p><br/></p>'
      },
      '9316': {
        text: '海光三村公園地景保育再生利用工程',
        year: '2004',
        category: '2',
        img: 5,
        desc: '<h4>基地與環境</h4><p><span>海光三村公園位於高雄市左營區海光三村眷村舊址內，鄰近為大龜山公園、鳳山舊城遺址</span><span>(</span><span>一級古蹟</span><span>)</span><span>及蓮池潭間，高雄市政府因本區位的歷史特殊性與生態的敏感性，已向國防部協調取得現階段的委託管理，並決定未來完成有償撥用的程序，成為公園用地；而其內原來之海勝里活動中心亦將配合計畫調整用途，一部分作為高雄市政府工務局養工處養護大隊區隊辦公室，就近照顧北高雄半屏山、洲仔溼地、蓮池潭及大、小龜山的生態環境；另一部分作為</span><span>N.G.O.</span><span>民間社團辦公室及文物陳列空間，同時結合自然生態左營舊城的人文特質，引進綠色團體、溼地保護聯盟、野鳥協會、左營舊城文化協會等</span><span>N.G.O.</span><span>民間社團參與認養及經營管理，達成環境生態保育、教育、觀光休閒等多元性功能。</span></p><p><span></span></p><p><strong><span>課題與任務</span></strong></p><p><strong><span>全區整體規劃：</span></strong></p><p><span>(1)<span> </span></span><span>入口廣場的重塑。</span></p><p><span>(2)<span> </span></span><span>歷史與生態教育兩大分區。</span></p><p><span>(3)<span> </span></span><span>左營舊城、眷村舊址及林相生態之解說導覽動線。</span></p><p><strong><span>舊有建築再利用：</span></strong></p><p><span>(1)<span> </span></span><span>海勝里活動中心舊址整建為</span><span>N.G.O.</span><span>民間社團辦公室及文物陳列空間、養護大隊區隊辦公室、廁所等。</span></p><p><span>(2)<span> </span></span><span>復興幼稚園舊址先預留規劃構想，另案辦理整建計畫。</span></p><p><strong><span>現有生態景觀保存：</span></strong></p><p><span>(1)<span> </span></span><span>重新整理並保存現有茄苳、血桐、南美假櫻桃、榕樹及鳳凰木等自然林相。</span></p><p><span>(2)<span> </span></span><span>增設地下水補注池，提供鳥類、昆蟲棲息用途，延續生態物種的多樣性。</span></p><p><span></span></p><p><strong><span>構想與設計</span></strong></p><p><strong><span>環境：</span></strong></p><p><span>(1)<span> </span></span><span>融合生態環境、舊城、眷村舊址等不同時期文化疊層風貌。</span></p><p><span>(2)<span> </span></span><span>重建環境地景的整體佈局與動線系統。</span></p><p><span>(3)<span> </span></span><span>保留原有環境構成物，如電線桿、圍牆、標語、植栽等。</span></p><p><span>(4)<span> </span></span><span>展示廢棄眷舍建築其當時構築的材料與工法，宛如一件大型的歷史展示物。</span></p><p><span>(5)<span> </span></span><span>改善全區的照明計畫。</span></p><p><strong><span>建築：</span></strong></p><p><span>(1)<span> </span></span><span>融合環境風貌與建築語彙，增設陽台次空間提供一個可親自然的機會。</span></p><p><span>(2)<span> </span></span><span>賦予舊空間新的建築生命週期，完善其設備更新與滿足展示、辦公、服務等複合使用機能。</span></p><p><span>(3)<span> </span></span><span>增設戶外樓梯，內外雙垂直動線系統滿足不通單位使用及管制需求。</span></p><p><span>(4)<span> </span></span><span>保留未來整建復興幼稚園舊址成為眷村博物館空間與動線的連結。</span></p><p><span>(5)<span> </span></span><span>運用自然石、木等素材及與大地貼近的顏色。</span></p><p><span></span></p><p><strong><span>期與待</span></strong></p><p><span>在這裡，期許自然、歷史能跟我們產生時空的對話；在這裡，等待大家在慵懶午後來份下午茶，放慢步調，看看我們的環境，聊聊我們的情趣。</span></p><p><span></span></p><p><br/></p>'
      },
      '9345': {
        text: '巧新科技三期廠房',
        year: '2004',
        category: '5',
        img: 2
      },
      '9350': {
        text: '義守大學圖資大樓方案',
        year: '2004',
        category: '9',
        img: 3
      },
      '9353': {
        text: '大雅牙醫診所',
        year: '2004',
        category: '6',
        img: 2
      },
      '9437': {
        text: 'SUPER 新都',
        year: '2004',
        category: '4',
        img: 7
      },
      '9441': {
        text: '義大天悅塔暨會議展覽中心',
        year: '2005',
        category: '10',
        img: 4
      },
      '9442': {
        text: '義大世界購物廣場',
        year: '2005',
        category: '7',
        img: 13
      },
      '9444': {
        text: '義大世界伯爵特區',
        year: '2005',
        category: '4',
        img: 4
      },
      '9445': {
        text: '領秀山莊',
        year: '2005',
        category: '4',
        img: 5
      },
      '9456': {
        text: '蓮潭國際文教會館',
        year: '2005',
        category: '7',
        img: 7,
        desc: '<h4>設計概念</h4><p><span>本案為高雄市首件<span style=\"position:relative;margin-left:-4px;\">「</span></span><span>ROT</span><span>」，原屬<span style=\"position:relative;margin-left:-4px;\">「</span>公教人員訓練中心」。因鄰近蓮池潭、原生植物園及半屏山，生態環境良好；又與高鐵車站、國道十號閘口接壤，交通近便。致遠管理學院與福華飯店經評選取得運營權，聯手打造結合休閒娛樂、渡假住宿、教育訓練的綜合性場所。</span></p><p><span></span></p><p><span>既有建築群使用機能為高雄市政府人力發展局暨所屬辦公、會議、訓練、住宿空間，建築造型凹凸變化大，建材調性冷硬無趣；新建築整合既有空間並重塑建築風格，除了原使用機能外，又增設了大型會展及宴會廳之多功能空間、中西式餐廳、</span><span>211</span><span>間之客房、游泳池等，同時增建入口大廳乙棟並圍塑戶外中庭活動廣場，分流住宿、會議、洽公、餐飲等人潮，並將外部生態的綠意引入內部公共空間，營造自然休閒度假的氛圍。</span></p><p><span></span></p><p><span>增改建有別於新建設計的操作，須先調查原建築、結構、機電設備等狀態及堪用程度，再配合運營單位調整空間機能，乃至於大規模變更；在既有建築的問題會診、再生空間的設計命題之間，需歷經繁複的調校過程，成為本案最大的挑戰。</span></p><p><span></span></p><p><span>設計策略考量<span style=\"position:relative;margin-left:-4px;\">「</span>呼應場域環境」、<span style=\"position:relative;margin-left:-4px;\">「</span>符合經營定位」兩大課題，形塑休閒建築風格，主要手法如下：</span></p><p><strong><span></span></strong></p><p><strong><span>增建量體，改造空間結構</span></strong></p><p><span>在原三合院的臨街面增設一層量體，機能上作為最適當的大廳位置，空間上將開放廣場圍塑成內庭，使之內外有別；對外開窗量小、對內大面開窗，產生视而不透的空間趣味，改變原有公務機構的空間結構。</span></p><p><strong><span></span></strong></p><p><strong><span>內庭新生，重新活化利用</span></strong></p><p><span>內庭廣場結合水池、水生植物、植栽、平台、活動廣場等空間元素，滿足多樣性的使用需求，例如戶外集會、慶典婚宴等；同時作為大廳的延伸，提供具有多重層次的空間經驗。</span></p><p><strong><span></span></strong></p><p><strong><span>下沉廣場，呈現寧靜美感</span></strong></p><p><span>延續內庭廣場的水池成為落瀑，下沉廣場自成一處寧靜、安逸的非封閉性戶外空間，不僅上下串聯開放，並具有延伸自餐廳的視覺，將休閒的優雅美感在此處鋪陳。</span></p><p><strong><span></span></strong></p><p><strong><span>形象色彩，融合環境氛圍</span></strong></p><p><span>整體休息形象的塑造，為融入原生植物園等外部綠意環境及南台灣飽滿的陽光，採用白色為基本色彩，強調休閒建築的明朗、活躍。夜間照明的構想，則表達在開闊場域裡的明示效果，爭取更遠距離的視覺感受。</span></p><p><span></span></p><p><strong><span>造型風格，突破限制再生</span></strong></p><p><span>建築造型風格的改造實為本案的重要課題，它亦要體現文化、教育的意涵，亦要展現休閒旅館的特色，然而受限於公有財產避免面積減少滅失的限制條件下，公部門不希望改變既有建築量體，惟有運用外裝材料及色彩統合舊有語彙</span><span>；另</span><span>因外觀改建的預算有限，本案以不破壞原磁磚面為原則，在使用防水材料塗佈後，全面施以塗料工法完成造型風格的再生。</span></p><p><span></span></p><p><br/></p>'
      },
      '0000': {
        text: '統一夢時代購物中心',
        year: '2000',
        category: '7',
        img: 6
      },
      '0629': {
        text: '威奈科技廠辦',
        year: '2006',
        category: '5',
        img: 2
      },
      '0709': {
        text: '義大世界香榭大街',
        year: '2007',
        category: '7',
        img: 8
      },
      '0716': {
        text: '左營陳宅方案',
        year: '2007',
        category: '4',
        img: 7
      },
      '0738': {
        text: '義大皇家劇院',
        year: '2007',
        category: '9',
        img: 8
      },
      '0801': {
        text: '高雄世界貿易展覽會議中心統包工程方案',
        year: '2008',
        category: '9',
        img: 7
      },
      '0804': {
        text: '觀音山景觀住宅',
        year: '2008',
        category: '4',
        img: 7
      },
      'M0804': {
        text: '威海新東陽呼雷湯溫泉旅遊開發項目規劃方案',
        year: '2008',
        category: '10',
        img: 10
      },
      '0811': {
        text: '義大世界123廣場',
        year: '2008',
        category: '2',
        img: 12
      },
      '0829': {
        text: '義大世界團客中心',
        year: '2008',
        category: '7',
        img: 3
      },
      '0909': {
        text: '大自然文化世界',
        year: '2009',
        category: '6',
        img: 7
      },
      '0919-1': {
        text: '鴻海高雄數位匯流數據中心',
        year: '2013',
        category: '0',
        img: 2
      },
      '0919': {
        text: '鴻海高雄研發育成大樓及數位匯流數據中心',
        year: '2009',
        category: '8',
        img: 7
      },
      '0922': {
        text: '六堆客家文化園區整體景觀',
        year: '2007',
        category: '2',
        img: 16,
        desc: '<h4>計畫緣由背景</h4><p><span>一、</span><span>計畫緣由</span></p><p><span>六堆園區計畫做為一個文化保存與觀光交流的機制平台，在於體認到六堆深厚樸實的文化內涵，無可取代，六堆濃郁的鄉土地景，亦不能複製。故將採行<span style=\"position:relative;margin-left:-4px;\">「</span>生態博物館」</span><span>(Eco- museum) </span><span>概念規劃，以<span style=\"position:relative;margin-left:-4px;\">「</span>核心園區」及<span style=\"position:relative;margin-left:-4px;\">「</span>地方園區」同步進行之方式推動，積極發展營造既有客家庄聚落風貌，而六堆客家文化園區做為地方對外展現的窗口，將引領大眾認識客家、走入六堆，而其衍生的良性經濟效果，也將扮演促進地方永續活化，厚植鄉鎮競爭力的推手。</span></p><p><span></span></p><p><span>二、</span><span>歷史背景</span></p><p><span>客家人渡海來台早期拓墾主要區域集中在臺灣南部，<span style=\"position:relative;margin-left:-4px;\">「</span>六堆」地區更為南臺灣客家重鎮，據有平疇遼闊的高屏平原，形成完整聚集區域範圍，六堆地區所擁有的豐富客家文化資產，幾乎是臺灣各界公認的<span style=\"position:relative;margin-left:-4px;\">「</span>臺灣之最」，最古老的客家地區、最純粹的客家聚落、最濃郁的客家風土，理所當然是體驗客家文化必經途徑。</span></p><p><span></span></p><p><strong><span>設計規劃理念</span></strong></p><p><span>一、</span><span>設計理念說明</span></p><p><span>1、 </span><span>將六堆客家特色融入景觀規劃</span></p><p><span>將六堆客家常民禮祭習俗、生活印象及特色建築融入景觀規劃，如用於伯公祭祀盤花的香花植物</span><span>(</span><span>泛指客家九香</span><span>)</span><span>、客家傳統建物</span><span>(</span><span>菸樓、夥房等</span><span>)</span><span>以及特有農事</span><span>(</span><span>菸葉種植</span><span>)</span><span>，豐富整體景觀深度。</span></p><p><span></span></p><p><span>2、 </span><span>創造自然生態與生活地景的結合</span></p><p><span>六堆先民主要在於平地及山林間進行開拓，園區規劃以客庄田園做為地景主題，展現客家人樸質生活特性，並與現代樂活生活觀契合。</span></p><p><span></span></p><p><span>3、 </span><span>傳統建物地景與客家意象建築的對話</span></p><p><span>田園區以菸樓，壟間及夥房等傳統建物進行設置，與以<span style=\"position:relative;margin-left:-4px;\">「</span>傘」為意象建築的傘架區形成有趣的傳統與概念客庄對比。</span></p><p><span></span></p><p><span>二、</span><span>景觀規劃發展分區</span></p><p><span>1、 </span><span>傘架客家聚落景觀區</span></p><p><span>以美濃紙傘為意象，為阿猴城遮蔭，傘下規劃客庄產業與文化聚落作為營運主軸，而為減少傘下活動區域耗能，傘架建築除結合動能設置太陽能光電板，傘下建物亦規劃可回收環保建材進行設置。</span></p><p><span></span></p><p><span></span></p><p><span>2、 </span><span>自然及田園景觀區</span></p><p><span>在山林與平原間開拓是先民的生活史，客家人崇尚自然，樂天如命，以田園與自然景觀搭配，營造客家人取之自然的生活環境，田園區規劃以稻作、菸葉為主，並有客庄常見果樹及經濟作物，另配制菸樓、夥房及壟間等傳統建物，做為文化體驗之戶外展場。</span></p><p><span></span></p><p><span>3、 </span><span>九香花園景觀區</span></p><p><span>以開基伯公為中心的九香花園，取自客家人以盤花拜伯公的生活習慣，當然還有生男的拜新丁習俗等，以帶狀配置之景觀區域編織有如客家花布地景，搭配戶外演出空間，讓文化演藝與周邊地景產生關聯。</span></p><p><span></span></p><p><br/></p>'
      },
      '0937': {
        text: '良達科技廠房更新設計',
        year: '2009',
        category: '5',
        img: 5
      },
      '0945': {
        text: '農業科技園區外銷觀賞魚及水產種苗產銷營運區暨研發物流區',
        year: '2010',
        category: '8',
        img: 29,
        desc: '<h4><span>設計概念</span></h4><p><span>1.</span><span>魚．鱗</span></p><p><span>亮麗閃動，能反射及折射亮光，猶如鏡體，能使敵人炫目，亦能水天一色，不辨物體，成為天然偽裝。</span></p><p><span>保護屏障，能隔絕外物感染，形成外部骨架，保持外型，減少與水的摩擦力。</span></p><p><span>有機生長，能隨而展現生物的成長與健康指標。</span></p><p><span>2.</span><span>建築．外皮</span></p><p><span>建築外皮的格柵屏幕，宛若本地人文的客家細編竹簾，保護著建築牆體的大面開口與屋頂，導風遮陽，綠化隔熱，體現節能的生態建築。</span></p><p><span>重複律動的垂直羽版，隨時間光影的變化，若魚鱗般似的展現建築物不同的幻化與活力，隱喻建築內部涵養著無數的生命。</span></p><p><span>配置構想</span></p><p><span>1.</span><span>分區明確完整</span></p><p><span>本工程用地主要分為研發物流區及外銷觀賞魚產銷營運區兩部分。研發物流中心（</span><span>1</span><span>棟）位於基地北側之研發物流區，具有獨立之運輸動線，避免與他棟廠區動線干擾。產銷營運區標準廠房</span><span>12</span><span>棟位於物流中心之南側，各棟建築物正面皆面向道路，形成各自獨立之出入口。各廠房之間留設足夠間距以複層雜生混種綠化作為區隔，確保各棟廠房之私密性。</span></p><p><span></span></p><p><span>2. </span><span>土地利用效率最大化</span></p><p><span>沿產銷營運區週邊配置廠房用地，使各廠房用地均為面寬</span><span>30M</span><span>、深</span><span>50M</span><span>，且正面皆面道路，提供最便利之運輸條件，保留最大空地供廠區使用。廠房圍塑出之中庭則作為景觀公園及公用活動中心，期使土地使用發揮最大效益。</span></p><p><span></span></p><p><span>3. </span><span>配合園區紋理，延續生態綠地</span></p><p><span>基地綠帶配合園區現有綠軸之紋理，延伸現有生態綠地。</span></p><p><span></span></p><p><span>4. </span><span>景觀公園化</span></p><p><span>主要景觀處為各廠房背面所圍塑之中庭，結合生態水池構築水景，成為園區工作人員漫步、休憩之處。人車動線分離及道路週邊與基地內人行步道之林蔭步道，提供園區如同公園般舒適的步行環境。</span></p><p><span></span></p><p><span>5. </span><span>廣告塔與</span><span>LED</span><span>電子屏幕</span></p><p><span>利用綠軸線之延伸向上，以斜坡植被之地景方式共構而成本區最高之構造物，形成地標型之廣告高塔，其內並設置供應本區之海水、淡水、軟水水源。</span></p><p><span></span></p><p><span>6. </span><span>公用設備配置於區域核心，管線佈設經濟效率</span></p><p><span>公用設備</span><span>(</span><span>動力中心</span><span>)</span><span>配置於基地核心，其優點可使各廠房獲得最短的管線距離，為最經濟而有效益之配置。</span></p><p><span></span></p><p><strong><span></span></strong></p><p><br/></p>'
      },
      '9437-1': {
        text: '大昌醫院',
        year: '2006',
        category: '6',
        img: 1
      },
      '1206': {
        text: '金門三創',
        year: '2012',
        category: '10',
        img: 5
      },
      'M0121': {
        text: '渤海皇家',
        year: '2001',
        category: '4',
        img: 1,
        desc: '<h4><span>渤海灣的空間尺度</span></h4><p><span></span></p><p><span>建築空間是為適應人的生理行為和精神需求而建造的，因此，在可能的條件下，人們會選擇一個適宜的尺度，以滿足其生理需求、領域感、私密性、鄰里關係以及自我等方面的需要。</span></p><p></p><p><span>我們想要掌握的尺度：</span></p><p><span>環境與密度的尺度：</span> <span>人居環境要考量人口密度與公共空間及設施的合理性，兼顧交通、景觀、鄰里尺度等方面的條件。</span></p><p><span>開間與進深的尺度：</span> <span>對於居住者來說，大的開間、小的進深意味著獲得多的陽光和景觀。</span></p><p><span>樓高與層高的尺度：</span> <span>高層集合住宅歷來存在著不同的習慣：低層可接近花園，高處可開闊視野；低處上下方便，高層減少塵埃。</span></p><p><span>內門與外窗的尺度：</span> <span>高門是大宅的標誌，大窗是時尚的標誌，門是居室的屏障，不僅蘊涵著便利，同時體現著美觀；窗是連接戶外的採光、通風，不僅影響著舒適，同時關係到健康。</span></p><p></p><p><span>無所不在的風景陽光</span></p><p><span>每戶住宅向著秦皇島渤海灣的碧海雲天敞開胸懷，八面來風，洗心滌塵，面面採光，陽光明媚。住高觀遠，水天交接，美不勝收。建築前方為氣勢宏偉的花園廣場，後側則為運動休閒活動區，結合地下的休閒會所，可賞可親，風情無限。</span></p><p></p><p><span>全新天地的雅致生活</span></p><p><span>建築物的表情豐富，鮮明的現代主義風格，彰顯個性更為獨特，朝迎旭日，暮送夕陽，生活不僅僅是更上一層樓，而是別開一番天地。建築物因留設花園廣場而退縮，淨化空氣更阻隔了喧鬧的嘈雜，氛圍祥和；大堂門廳莊重堂皇，彰顯風雅文化；每戶專設透明玻璃欄杆的陽台，提供觀景休閒另一個層次的選擇，讓溫暖來自陽光，更來自彼此的笑容。</span></p><p><span></span></p><p><span></span></p><p><br/></p>'
      },
      'M0208': {
        text: '瑩輝照明應用中心',
        year: '2002',
        category: '8',
        img: 6,
        desc: '<h4>夾縫中的黑盒子</h4><p><span></span></p><p><span>本項目為上海市區內舊有大樓的改建設計案，基地擠身於普陀區內環高架與輕軌明珠線之間，原有建築物為</span><span>1994</span><span>年完工之七層</span><span>RC</span><span>辦公大樓；除依業主要求保留其原有樑柱樓板結構外，其平面配置及立面造型均重新規劃設計。</span></p><p><span>因主要用途是作為照明公司的辦公、設計及展售中心，故夜間照明計畫是為本案的表現重點。整體設計概念上，以<span style=\"position:relative;margin-left:-4px;\">「</span></span><span>BLACKBOX</span><span>」為出發點，為表現特殊的燈光效果及照明韻律，我們利用建築物的基本長方形體，作為燈光展演的舞台或屏幕。</span></p><p><span>在操作手法上，二層以上總計五個樓層高的封閉式外牆面，不規則配置了</span><span>200</span><span>個</span><span>15</span><span>×</span><span>30</span><span>㎝的埋入式全彩</span><span>LED</span><span>燈盒，燈盒採用內退於鋁板外牆的設計方式，適當的隱藏了玻璃面的固定及防水所需的矽利康填縫。在白天，燈盒退縮造成的陰影凹凸關係，形成有如乳酪塊般的趣味性；在夜間，透過噴砂玻璃的運用及燈盒內部的白色烤漆，對</span><span>LED</span><span>光源的均勻投射、反射，可得到較佳的呈現效果。每當夜幕低垂時，建築物的深灰色形體漸漸隱入夜色之中，</span><span>LED</span><span>燈盒則開始幻化出不同顏色的點點星光。</span></p><p><span>此外，在建築物的東側立面上，設置了四個樓層高的連續垂直遮陽板，除白天有遮光的效果外，夜晚則利用隱藏於遮陽板背面的照明燈具，投射藍色冷光於建築物的側面開口上，斜面遮陽板在間接照明的投射下形成藍色序列式條狀燈帶，與</span><span>LED</span><span>燈盒的光點形成另一種點與面的對比感，在炫麗繁華的城市夜景中，這個夾縫中的黑盒子呈現了與招牌、霓虹燈相異的照明情境。</span></p><p><span></span></p><p><span></span></p><p><br/></p>'
      },
      'M0311': {
        text: '廣西民族博物館方案',
        year: '2003',
        category: '9',
        img: 1
      },
      'M0405': {
        text: '東風日產汽車辦公樓+研發中心',
        year: '2004',
        category: '8',
        img: 7,
        desc: '<h4><span>設計目標</span></h4><p><span></span></p><p><span>東風汽車有限公司係中國東風汽車集團與日本日產汽車集團共組之全中國最大之外資企業，除了在武漢地區設立總部基地及商用車研發中心外，本項目更是乘用車公司設計研發部門最重要之總部基地。</span></p><p><span></span></p><p><span>東風乘用車公司辦公樓與研發中心兩者均是企業體核心價值的反映，但於外部環境關係上兩者卻思考著截然不同的設計佈局：研發中心與試車道要求絕對的隱敝性，辦公大樓則結合展示的開放感與工作的人性化；同時，更能兼顧汽車工業的科技意象與環境共生的永續精神。</span></p><p><span></span></p><p><span>設計構想</span></p><p><span></span></p><p><span>開放與隱蔽：為了滿足不同的隱蔽條件，辦公樓與研發中心兩者均採用内向性的設計方式，使隱蔽的空間仍能在內庭產生對話，再藉由不同的入口與空間機能配置，達成不同程度的開∕蔽需求。造型則以方體簡約的量體表現工業建築的精神，而實虛的兩個橢圓形隱含開放與交流的協調圓融，整體場域與建築展現中、日企業及文化的內涵。</span></p><p><span></span></p><p><span>辦公大樓主要由兩棟實體建築量體所構成，其間圍塑一處大挑空中庭的虛體空間，辦公大樓前棟兼容對外展示及會議的機能所構築的公共空間，藉由挑空中庭將活動向上延伸且串接後棟內部辦公環境，讓訪客與工作者的視覺能穿透至各層的辦公區，並以空中廊道連接前後棟之空間，隱喻人性化工作環境將溝通協調的機能關係反映在實體的元素上。</span></p><p><span></span></p><p><span>研發中心是以外方體與橢圓形內庭形成的建築，周邊則以草坡圍繞外圍區域，將建築物的外部視覺意象降至最低程度，强烈的宣示隱蔽性；並以內庭作為各空間單元之垂直水平聯繫動線，也作為溝通交流的公共領域。</span></p><p><span></span></p><p><br/></p>'
      },
      'M0409': {
        text: '花都藝墅小區',
        year: '2004',
        category: '4',
        img: 7
      },
      'M0411': {
        text: '東風汽車有限公司總部方案',
        year: '2004',
        category: '8',
        img: 7
      },
      'M0414': {
        text: '十堰市博物館方案',
        year: '2004',
        category: '9',
        img: 8
      },
      'M0510': {
        text: '東風本田汽車辦公樓',
        year: '2005',
        category: '8',
        img: 4
      },
      'M0523': {
        text: '松江公共實訓中心方案',
        year: '2005',
        category: '8',
        img: 2
      },
      'M0526': {
        text: '萬泓企業總部大樓方案',
        year: '2005',
        category: '8',
        img: 19
      },
      'M0601': {
        text: '東風日產汽車培訓中心',
        year: '2006',
        category: '5',
        img: 12,
        desc: '<h4><span>設計構想</span></h4><p><span>在現有的條件限制下利用現代建築造型手段，以求通過建築形式本身直接表達建築物的內部基本功能和時代精神。</span> </p><p><span>通過探索空間機能的內在關係並使之有機相連，對比例、虛實關係、對比等分析後，決定使用一個實的系統將複雜分散的立面元素統一起來，同時保持各個元素自身的特點與張力，使其形成對比，產生了鮮活的空間氛圍</span><span>.</span><span>通過白色、中灰、紅色鋁塑板作為外牆立面材料，結合玻璃幕牆、聚碳酸酯、金屬細部構件及淺黃色的外牆遮陽板，使建築立面具有現代而活躍的氣氛，在統一中蘊涵微妙的變化，使人產生豐富的視覺感受</span><span>.</span></p><p><span>將</span><span>多功能廳與階梯教室</span><span>分離于體系外形成</span><span>體塊的穿插與咬合</span><span>，作為均衡與活力的要點。</span><span>傾斜的造型</span><span>加強了建築的張力和動感。並形成了與屋面的空間關係</span><span>.</span> </p><p><span>展示廳</span><span>位於建築入口東側，使用輕質的金屬框與玻璃幕牆形成的體量仿佛懸掛於空中，取景框強調了展示的功能，有效凝聚視線，運用紅色的鋁塑板強化了入口的存在，而相同的形式表明了它與展示功能的關係</span><span>.</span> </p><p><span>教室的防曬系統</span><span>由</span><span>可推拉的遮陽板</span><span>與室內織物遮陽來完成，形成了活躍的空間元素。延續的實體將複雜的造型元素連接，形成了統一的系統，強調了量體的雕塑感。</span> </p><p><span>聚碳酸酯</span><span>化學材料的使用在立面上產生了半透明材質效果，形成微妙的變化，在透明與不透明間形成中性地帶，符合</span><span>內部隱蔽</span><span>的使用功能，有效的採光而遮擋視線。</span> </p><p><span>綠色屋頂設計</span><span>將建築與周圍環境天然地聯繫起來，減輕陽光直射產生的熱量，優化周邊空氣，形成階梯教室與多功能廳的室外休息平臺。有效利用空間，使建築產生更豐富的空間層次感。</span> </p><p><span></span></p><p><span></span></p><p><span></span></p><p><span></span></p><p><br/></p>'
      },
      'M0708': {
        text: '如皋南通六建總部',
        year: '2007',
        category: '8',
        img: 3,
        desc: '<h4><span>設計概念：</span></h4><ol style="margin-top: 0px;" start="1" type="1" class=" list-paddingleft-2"><li><p>本方案之規模爲地上十六層地下一層，基地三面臨路，南向面臨惠政西路退縮綠帶，北與東各鄰15m紀莊路及宣化南路，向西則隔一建築空地與公園對望。基地車行主入口設至于北側紀莊路上，鄰主要道路惠政西路則留設人行入口。</p></li><li><p>配置上群樓部分分成兩棟，西棟樓爲辦公樓入口大廳、咖啡廳、餐廳等，東棟嘍則設有商場健身房及多用途等空間，三摟以上之辦公主樓則橫跨于兩棟群樓之上，呈南北座向，三量體之間形成一開放的URBAN HALL。地面層與地下一樓停車場以挑空的半開放空間串連，間接將陽光與空氣導引至地下停車空間。</p></li><li><p>平面的布局轉化于南通六建的LOGO，立面造型上則利用清水混凝土與玻璃帷幕，塑造出利落的工程形象，幷將主樓設置于鄰近惠政西路上，以提高沿街立面的視覺感。</p></li></ol>'
      },
      'M0801': {
        text: '揚州瘦西湖華莊低層住宅項目方案',
        year: '2008',
        category: '4',
        img: 12
      },
      'M0815': {
        text: '南京农业展馆',
        year: '2008',
        category: '9',
        img: 6,
        desc: '<h4>設計概念：</h4><p><span style=\"position:relative;margin-left:-4px;\">「</span>長江」、<span style=\"position:relative;margin-left:-4px;\">「</span>農田」孕育了無數的生命。田是農業發展的<span style=\"position:relative;margin-left:-4px;\">「</span>本」；亦是實現農業科技的<span style=\"position:relative;margin-left:-4px;\">「</span>場所」。</p><p>長江<span style=\"position:relative;margin-left:-4px;\">「</span>水」提供農田灌溉的來源，水跟農田的結合，形成農業科技最重要的<span style=\"position:relative;margin-left:-4px;\">「</span>前因」。</p><p>本設計方案藉由<span style=\"position:relative;margin-left:-4px;\">「</span>水」跟<span style=\"position:relative;margin-left:-4px;\">「</span>田」意像，作爲農業科技國際交流中心設計發展的主要構想。</p><p><span style=\"position:relative;margin-left:-4px;\">「</span>水」-----光影的、閃耀的</p><p>水因光而産生了光影及閃耀的視覺，<span style=\"position:relative;margin-left:-4px;\">「</span>光影」展現了水的姿態，<span style=\"position:relative;margin-left:-4px;\">「</span>閃耀」活潑了水的表情，光影的舞動與閃耀的光芒，讓水有了生命。</p><p><span style=\"position:relative;margin-left:-4px;\">「</span>田」-----系統的、有機的</p><p>阡陌縱橫的田埂，在路網的分割下自成一套系統，而系統中因地塊大小不同而成有機分布。不同的<span style=\"position:relative;margin-left:-4px;\">「</span>田」因耕種的差异有了多樣的表情與豐富的色彩變化，讓大地生意盎然。</p><p>基地環境分析：</p><p>本設計方案基地位于南京市河西新城區內，南臨65M河西大街（緯九路）、東臨35M樂山路、北臨24M楠溪江西街、西臨24M計劃道路與公園預定地相望，爲河西新城區總體規劃之<span style=\"position:relative;margin-left:-4px;\">「</span>舞動之軸」的西側端點。</p><p>&nbsp;</p><p><br/></p>'
      },
      'M0816': {
        text: '天泰家祺大廈方案',
        year: '2008',
        category: '4',
        img: 12,
        desc: '<h4><span>設計概念</span></h4><p>a、 “佳祺大厦”設計遵從一種以人、文化及特定場所出發的特殊價值觀和理念，是在上述要素錯綜複雜的基礎之上爲文脉進行的設計。 “佳祺大厦”的設計力圖體現出其設計和建造的時間和場所的特徵，平衡經濟效益和環境資源，針對現有場地、氣侯、歷史和已經存在的建築先例，去尋求幷找出最適宜、最得體的建築及規劃解决方案。 <br/>B、“佳祺大厦”建築規劃設計由于受臨近的小區日照問題的困擾我們在設計層面上力圖在多元思維中追求平衡，運用連貫的設計哲學提供不同表現形式的解决方法。經過設計者的集思廣益，與業主、規劃部門及其他社會既得利益者的溝通和交流，協助業主做出對推進項目必不可少的决定，從而最終確定本案的綜合發展主題。因此， “佳祺大厦”的設計沒有采用一種既定或統一的標簽，而是在多樣化中進行創造，既表現了個人的智慧和技能，又具有符合規劃部門規劃要點業主願望和團隊合作的精神，使建築風格能保持在同一地區的穩定水準。 <br/>C、“佳祺大厦”的設計概念的推出，我們相信一個好的作品是增值的，它不僅反映了設計者付出勞動的價值，開發建造者追尋的價值和使用者期待的價值，而且也提升了社區、社會和環境的廣義整體價值。我們希望以這種對文化附加值的追求來適應城市變遷和建築革新的挑戰，在進行創造工作的過程中體現一份對歷史、文化、環境和社會的責任和職業使命。</p><p>室外特徵</p><p>建築外部空間形態構成：爲最大限度降低、回避建築體量對臨近小區住宅日照采光和建築背景景觀帶來的影響和衝突，建築外部構成采用板式平頂等組合元素和虛實體量處理手法，幷以中性穩定的外墻色彩和現代塊面組合，使規則的外部空間形態賦予江南文化印記幷富有變化也减小對臨近小區的過多遮擋，同時也與將軍山景區形成一種建築文脉上的呼應。建築商場外墻材料以幹挂花崗岩火燒板、住宅則以仿石面磚塗料爲主；窗爲噴塑鋁合金中空反光銀藍玻璃窗。</p><p>室內特徵</p><p>建築空間營造：建築空間營造處理上，住宅部分：采用單元入口樓層相連的平面布局方式，住戶在一樓電梯垂直交通空間主導空間引領下，進入各個居住樓層，利用單元之間的過渡連接段，設公共交流平臺。商場部分：兩層商場面從室外交通流綫組織，到內部交通和垂直交通勾連，都與住宅部分明顯區分開來。爲最大限度保護現有綠地和用地利用率及强度，整個建築構成采用單元串聯式布局元素形態，采用剪切、相貫、加减等設計處理手法，在滿足臨近小區標準日照和通風要求基礎上，將整體建築形體親融在將軍山、翠屏山整體景觀之中。</p><p>&nbsp;</p><p><br/></p>'
      },
      'M0826': {
        text: '豐盛集團科技園C地塊建築概念設計方案',
        year: '2008',
        category: '8',
        img: 5
      },
      'M0900': {
        text: '淮陰區社會事業大廈方案',
        year: '2009',
        category: '8',
        img: 7
      },
      'M1020': {
        text: '海門市國稅局數據處理中心',
        year: '2010',
        category: '8',
        img: 4,
        desc: '<h4>設計說明：</h4><p>1、“功能第一的原則”，本工程包括辦公，服務大廳，汽車庫等多項功能，綜合性較强，設計應首先從滿足各項使用功能出發，“形式追隨功能”。</p><p>2、“以人爲本”的原則。辦公樓的功能主體是辦公，辦公人員始終是工程考慮的中心，本著讓每一個辦公人員都能有一個陽光的辦公環境的想法，本工程營造一個可持續發展的各主要辦公房間均朝南的陽光建築</p><p>3、“可持續發展”的原則，根據辦公環境長遠發展規劃要求，將生態建築及可持續發展的先進理念引入本工程設計中，注重節能、環保及相關新技術、新材料、新設備的使用，使新建築真正符合新時代的要求。</p><p>4、“注重空間景觀再造”的原則，在合理組織院內各種人流物流，使之便捷順暢、簡潔高效、互不干擾的同時,努力塑造和諧、宜人的內外部空間環境，建立嶄新有序的國稅對外形象，使國稅大樓成爲國稅人員和交稅人的綠色秩站。</p><p><br/></p>'
      },
      'M1026': {
        text: '大麥客量販店',
        year: '2010',
        category: '7',
        img: 4
      },
      'M1029': {
        text: '格林芙洛斯世界生態旅遊區規劃方案',
        year: '2010',
        category: '10',
        img: 4
      },
      'M1104': {
        text: '錢江新城概念性總體規劃方案',
        year: '2011',
        category: '10',
        img: 6
      },
      'M1112': {
        text: '平潭小高雄綜合開發項目規劃方案',
        year: '2011',
        category: '10',
        img: 5
      },
      'M1121': {
        text: '東莞中國郵政大樓方',
        year: '2011',
        category: '8',
        img: 4
      },
      'M1201': {
        text: '漳州慶富學院',
        year: '2012',
        category: '9',
        img: 11
      },
      'M1203': {
        text: '襄陽新天地項目規劃方案',
        year: '2012',
        category: '10',
        img: 5
      },
      'M1208': {
        text: '漳州慶富學院一期',
        year: '2012',
        category: '0',
        img: 13
      },
      'M1302': {
        text: '餘姚保利文化商業廣場',
        year: '2013',
        category: '7',
        img: 8,
        desc: '<h4>規劃總體布局</h4><p>1、總體布局</p><p>創造一個充滿文化藝術、豐富多樣、井然有序的商業綜合體總體規劃的目標。</p><p>地塊呈梯形的基地，東西長約400米，南北寬約190米,局部約500米，地塊用地面積爲119,070平方米。根據地塊的特點，建築主要采用片狀布局及利用步行街街道來串連各片區，局部地段南北布局形成內街，以豐富整體文化藝術商業街的空間形態。</p><p>1） 空間結構</p><p>沿南邊起分布有八棟1-12層的電子商務樓及1-2層的藝術創作街商業，往北依次分布1-3層的文化新天地步行街，臨譚家嶺東路及城東路設置1-4層文化娛樂購物、影城、時尚運動中心及42層的塔樓建築體形成一個完整的空間序列。序列的兩端是獨立的、體量偏大的商業旗艦店；中間的商業體量偏小，靈活的布局創造了商業街內外穿插的變化；中央文化藝術步行街商業建築一條龍的布局營造整個序列的高潮。</p><p>2）空間特色</p><p>1）連廊：連廊仿佛一根紐帶將各棟獨立的商業建築聯結爲一個有機的整體；同時它也聯結了文化娛樂購物、影城、時尚運動中心及文化新天地等商業項目。不同特色的商業的結合將大大提高商業的整體的競爭力和活力。兩層的連廊環繞建築內外交錯創造了豐富多樣的空間體驗，即是商業的交通要道又是觀景平臺。</p><p>2）露臺陽臺：文化新天地的商業街體現在更多優質豐富的室外活動空間的營造上。利用建築高低的變化在沿步行街面形成的屋頂平臺以及一層的大露臺是游客親近街景、品茗賞月、領略文化藝術氛圍的場所。屋頂綠化的處理手法柔化了室內外的過渡及屋頂商業平臺；是人們體驗自然最敏感之處。</p><p>3）文化藝術步行街道：沿著基地東側天然形成的自然水系是項目亟須利用的環境資源，將人導入步行街道進而滲透至文化娛樂購物、影城、時尚運動中心及會展中心等等商業體。商業業態以餐飲爲主藝術文化爲輔。中央圓形藝術廣場點綴其中以豐富其室外活動空間，爲潜在的應用提供可能性。圓形集露天表演舞臺、兒童游樂場所和各種慶典活動的舉辦等應用爲一體。</p><p>&nbsp;</p><p><br/></p>'
      },
      'M1306': {
        text: '雲霄高鐵物流园區概念',
        year: '2013',
        category: '10',
        img: 5,
        desc: '<h4>設計概念：</h4><p>以浮島現象聯想概念</p><p>生態浮島的概念，它的主要作用就是爲了改善生態，在此概念中河流也可以有景觀功效但偏重于改善水質、處理污水，吸收和富集水體當中的營養物質及其它污染物, 幷通過最終收穫植物體的形式, 徹底去除水體中被植物積累的營養負荷等污染物。融入整個基地使用水源，而綠色建築與河流融洽聯繫組合成生態浮島概念。</p><p>概念其中將花園至入空中橋梁與商業空間 ，從而種植綠化建築提供陰影和富氧環境。</p><p>辦公樓內部采用生態體系</p><p>每層辦公室都設有外陽臺和通高的推拉玻璃門以便控制自然通風的程度。</p><p>住宅區與公寓都應用生態建築構想改善環境與休息綠洲屋頂達到生態效果。</p><p>加入電流走向形象的動態，轉化成人脉動綫延續性與鏈接性。而人群將像電子一樣被電流帶動置入致商業，辦公，住宅等每個停留的位置。</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><br/></p>'
      },
      'M1310': {
        text: '慶富綠色總部園區規劃方案',
        year: '2013',
        category: '10',
        img: 7
      },
      'M1317': {
        text: '哈爾濱白魚泡溫泉度假村',
        year: '2013',
        category: '7',
        img: 6
      },
      'V0802': {
        text: '越南北寧賭場酒店方案',
        year: '2008',
        category: '7',
        img: 8,
        desc: '<h4>设计说明</h4><p><span>開發業主乃越南當地知名的地產開發商，因應越南首都河內市週邊省份外商進駐的成熟性及商務住宿的需求，並配合</span><span>CASINO</span><span>賭場執照的取得，計畫興建七百間客房規模的五星級商務飯店，飯店內配屬會議展示、購物餐飲、夜總會、健康俱樂部、賭場、秀場等多元多姿的功能空間；飯店外部建構一處三層樓落差的音樂水瀑景觀意象，讓光、影、水幻化成夜間的表演精靈。</span></p><p><span></span></p><p><span>越南深受中國文化的影響，再則因為賭場設計對於<span style=\"position:relative;margin-left:-4px;\">「</span>風水」的思維，于設計之初已確立了主要空間的方位架構；然<span style=\"position:relative;margin-left:-4px;\">「</span>動線」安排更是賭場飯店的另一挑戰，舉凡賭客</span><span>(VIP)</span><span>、住客通道到管理服務動線串通了分區設施與後場安排。越南風俗文化<span style=\"position:relative;margin-left:-4px;\">「</span>待客之道」的理解將運用於此案在空間轉化、建材選配與內裝主題上，<span style=\"position:relative;margin-left:-4px;\">「</span>市場考量、功能主導、效益為先」讓</span><span>CASINO</span><span>的冒險之旅歡樂無限，為住客貼心的服務而倍顯尊榮。</span></p><p><span></span></p><p><br/></p>'
      },
      'V1001': {
        text: '安富Palais de Lotus 4開發方案',
        year: '2010',
        category: '4',
        img: 32
      },
      'V1302': {
        text: '象湖生態旅遊區A2/A3商業娛樂項目',
        year: '2013',
        category: '7',
        img: 3
      }
    };

    var CASEDETAILS = {
      "1003": "<h3>易宏工業新廠及辦公樓</h3><p>地點：台灣高雄</p><p>設計 / 完工：2010 / 2012</p><p>性質：廠房 / 辦公 / 宿舍</p><p>業主：易宏熱鍍鋅工業股份有限公司</p><p>基地面積：7,200sm</p><p>樓地板面積：5,220sm</p><p>高度 / 樓層：19.33m / 3F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：夏雯霖</p><p>專業顧問：結構：柳碧貞 / 機電：尚展</p><p>施工单位：宏明營造有限公司</p><p>工程造價：TWD 42,576,000元</p>",
      "1006": "<h3>天恩彌勒殿</h3><p>地點：台灣新竹</p><p>設計 / 完工：2010 -</p><p>性質：宗教設施</p><p>業主：財團法人天恩彌勒佛院</p><p>基地面積：77,549sm</p><p>樓地板面積：8,023sm</p><p>高度 / 樓層：34.7m</p><p>服務範圍：建築設計</p><p>建築師：劉湘梅</p><p>專業顧問：結構：天珩 / 機電：聯立 / 水保：新興</p><p>設計中</p>",
      "1008": "<h3>中鋼總部大樓方案</h3><p>地點：台灣高雄</p><p>設計 / 完工：2010 / 2011</p><p>性質：總部辦公</p><p>業主：中國鋼鐵股份有限公司</p><p>樓地板面積：6,673sm</p><p>服務範圍：室內設計方案</p><p>建築師：劉湘梅</p><p>合作設計 / 當地設計單位：長益友室內裝修股份有限公司</p>",
      "1010": "<h3>國立潮州高級中學明德樓 </h3><p>地點：台灣屏東 </p><p>設計 / 完工：2010 / 2012</p><p>性質：教室</p><p>業主：國立潮州高級中學</p><p>基地面積：53,671sm</p><p>樓地板面積：4,883sm</p><p>高度 / 樓層：19.98m / 4F</p><p>服務範圍：建築設計 / 景觀設計</p><p>建築師：夏雯霖+黃建盛</p><p>專業顧問：結構：蔡人壽 / 機電：立盛 / 幕牆：比晰 / 太陽能：茂迪</p><p>施工单位：興發營造有限公司</p><p>工程造價：TWD 85,945,000元</p>",
      "1024": "<h3>許晴哲皮膚科診所</h3><p>地點：台灣高雄</p><p>設計 / 完工：2010 / 2011</p><p>性質：診所</p><p>業主：許晴哲醫師</p><p>樓地板面積：207sm</p><p>服務範圍：室內設計工程 / 家具選配</p><p>建築師：劉湘梅</p><p>專業顧問：CIS：柏美</p><p>施工单位：大林室內裝潢設計有限公司</p><p>工程造價：TWD 3,600,000元</p>",
      "1110": "<h3>桂田酒店三館</h3><p>地點：台灣台南</p><p>設計 / 完工：2011 -</p><p>性質：酒店</p><p>業主：桂田關係企業</p><p>基地面積：4,532sm</p><p>樓地板面積：32,123sm</p><p>高度 / 樓層：90.2m / B4+17F</p><p>服務範圍：建築設計 / 景觀設計</p><p>建築師：許銘陽+夏雯霖</p><p>專業顧問：結構：京鼎 / 機電：高英</p><p>施工单位：三民營造股份有限公司</p><p>設計中</p>",
      "1122": "<h3>左營蔡宅</h3><p>地點：台灣高雄</p><p>設計 / 完工：2011</p><p>性質：住宅</p><p>業主：蔡秀玉</p><p>樓地板面積：191sm</p><p>服務範圍：室內設計工程 / 家具選配</p><p>建築師：劉湘梅</p><p>施工单位：大林室內裝潢設計有限公司</p><p>工程造價：TWD 1,165,000元</p>",
      "1130": "<h3>統正夢時代二期開發項目</h3><p>地點：台灣高雄</p><p>設計 / 完工：2011 / 2013</p><p>性質：酒店 / 商場 / 辦公 / 住宅</p><p>業主：統正開發股份有限公司</p><p>基地面積：27,634sm</p><p>樓地板面積：371,950sm</p><p>高度 / 樓層：B4+55F</p><p>服務範圍：總體規劃</p><p>建築師：許銘陽+黃建盛</p><p>專業顧問：開發：高力國際</p>",
      "1138": "<h3>天恩慈氏祠堂</h3><p>地點：台灣苗栗</p><p>設計 / 完工：2011 -</p><p>性質：宗教設施</p><p>業主：財團法人天恩彌勒佛院</p><p>基地面積：9,775sm</p><p>樓地板面積：8,327sm</p><p>高度 / 樓層：17.95m</p><p>服務範圍：建築設計</p><p>建築師：劉湘梅</p><p>專業顧問：結構：天珩 / 機電：聯立 / 水保：新興</p><p>設計中</p>",
      "1141": "<h3>墾丁白沙民宿</h3><p>地點：台灣屏東</p><p>設計 / 完工：2011 -</p><p>性質：民宿</p><p>業主：大帑殿企業有限公司</p><p>基地面積：29,283sm</p><p>樓地板面積：3,370sm</p><p>高度 / 樓層：10.7m / 3F</p><p>服務範圍：建築設計 / 景觀設計 / 室內設計</p><p>建築師：許銘陽+趙文紳+劉湘梅</p><p>合作設計 / 當地設計單位：結構：中泰 / 機電：高英</p><p>施工单位：設計中</p>",
      "1143": "<h3>義大亞洲廣場</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2011 -</p><p>性質：酒店 / 百貨 / 宴會</p><p>業主：義聯集團 </p><p>基地面積：18,024sm</p><p>樓地板面積：240,000sm</p><p>高度 / 樓層：122.4m / B6+29F</p><p>服務範圍：建築設計</p><p>建築師：許銘陽+趙文紳+黃建盛</p><p>專業顧問：結構：超偉 / 機電：正弦 / 交通：行易網 /  環評：能碩 / 防災：捷力士</p><p>設計中</p>",
      "1144": "<h3>鉅橡企業F廠及辦公樓</h3><p>地點：台灣台南</p><p>設計 / 完工：2011 -</p><p>性質：廠房 / 辦公</p><p>業主：鉅橡企業股份有限公司</p><p>基地面積：10,843sm</p><p>樓地板面積：15,352sm</p><p>高度 / 樓層：20.1m / 5F</p><p>服務範圍：總體規劃 / 建築設計 / 室內設計</p><p>建築師：夏雯霖+劉湘梅</p><p>專業顧問：結構：京鼎 / 機電：安立 / 消防：專益</p><p>施工单位：華豐營造股份有限公司</p><p>工程造價：TWD 215,627,000元</p><p>施工中</p>",
      "1150": "<h3>國際星辰旅館更新整建</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2011 / 2012</p><p>性質：酒店</p><p>業主：國際星辰旅館</p><p>基地面積：514sm</p><p>樓地板面積：7,125sm</p><p>高度 / 樓層：43.4m / B3+14F</p><p>服務範圍：建築改造設計</p><p>建築師：許銘陽+夏雯霖</p><p>專業顧問：結構：天珩 / 機電：高英 / 室內：理傑</p><p>施工单位：福喜建設股份有限公司</p><p>工程造價：TWD 62,700,000</p>",
      "1151-1": "<h3>大江生醫S9廠展示大廳</h3><p>地點：台灣屏東</p><p>設計 / 完工：2013 - </p><p>性質：辦公展示</p><p>業主：大江生醫生物整合設計公司</p><p>樓地板面積：521sm</p><p>服務範圍：室內設計 / 多媒體規劃</p><p>建築師：許銘陽+劉湘梅</p><p>設計中</p>",
      "1151": "<h3>大江生醫S9廠</h3><p>地點：臺灣屏東</p><p>設計 / 完工：2011 - </p><p>性質：廠房 / 辦公</p><p>業主：大江生醫生物整合設計公司</p><p>基地面積：10,866sm</p><p>樓地板面積：7,504sm</p><p>高度 / 樓層：　9.89m / 2F</p><p>服務範圍：總體規劃 / 建築設計 / 室內設計</p><p>建築師：許銘陽+劉湘梅+黃建盛 </p><p>專業顧問：結構：遠代 / 機電：偉盟 / 空調：廣達 / 消防：冠懋</p><p>施工單位：詮興營造股份有限公司/p><p>工程造價：TWD 129,900,000元</p><p>施工中</p>",
      "1210": "<h3>緬甸眉苗佛院方案</h3><p>地點：緬甸眉苗</p><p>設計 / 完工：2012</p><p>性質：宗教設施</p><p>業主：彌勒大道</p><p>基地面積：8,712sm</p><p>樓地板面積：15,476sm</p><p>高度 / 樓層：36m / 5F</p><p>服務範圍：建築設計</p><p>建築師：劉湘梅</p>",
      "1216": "<h3>恆春福樂酒店式公寓方案</h3><p>地點：台灣屏東</p><p>設計 / 完工：2012</p><p>性質：酒店</p><p>業主：福樂企業集團</p><p>樓地板面積：29,575sm</p><p>服務範圍：室內設計方案</p><p>建築師：劉湘梅</p>",
      "1221": "<h3>義大癌治療醫院</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2009 / 2011</p><p>性質：醫院</p><p>業主：義大醫療財團法人</p><p>基地面積：138,455sm</p><p>樓地板面積：114,496sm </p><p>高度 / 樓層：49.9m / B2+12F</p><p>服務範圍：建築設計</p><p>建築師：許銘陽+劉湘梅</p><p>合作設計 / 當地設計單位：-</p><p>專業顧問：結構：超偉 / 機電：信偉 / 空調：協展 / 消防：鉉弘 /  室內：義大開發</p><p>施工单位：新泉營造股份有限公司</p><p>施工中</p>",
      "1225": "<h3>高雄美國學校總體規劃方案</h3><p>地點：臺灣高雄</p><p>設計 / 完工：2012</p><p>性質：行政 / 教學 / 餐廳 / 集會堂 / 圖書館</p><p>業主：財團法人高雄美國學校</p><p>基地面積：29,302sm</p><p>樓地板面積：23,600sm</p><p>高度 / 樓層：B1+4F</p><p>服務範圍：總體規劃 / 建築設計 / 室內設計</p><p>建築師：許銘陽+彭信蒼+夏雯霖+劉湘梅</p><p>專業顧問：結構：天珩 / 機電：聯立 / 空調：協展</p><p>工程造價：TWD 464,633,813元</p><p>邀請競圖第二名</p>",
      "1228": "<h3>義大遊樂世界二期及古堡酒店</h3><p>地點：台灣高雄</p><p>設計 / 完工：2012 -</p><p>性質：主題樂園 / 滑雪場/ 商場 / 酒店 / Villa / 電影後製</p><p>業主：義聯集團</p><p>基地面積：179,800sm</p><p>樓地板面積：177,708sm</p><p>高度 / 樓層：21.6m / B1+6F</p><p>服務範圍：總體規劃</p><p>建築師：許銘陽+黃建盛</p><p>設計中</p>",
      "1238": "<h3>德商羅曼動物疫苗廠辦新建</h3><p>地點：台灣屏東</p><p>設計 / 完工：2012 -</p><p>性質：廠房 / 辦公</p><p>業主：羅曼台灣有限公司</p><p>基地面積：29,256sm</p><p>樓地板面積：7,408sm</p><p>高度 / 樓層：18.4m / 3F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：許銘陽+趙文紳</p><p>合作設計 / 當地設計單位：印度 DCPL 國際顧問</p><p>專業顧問：結構：天珩 / 機電：明哲 / 空調：協展</p><p>工程造价：TWD 750,000,000元</p><p>設計中</p>",
      "1243": "<h3>竹精緻商旅更新整建</h3><p>地點：台灣高雄</p><p>設計 / 完工：2012 / 2014</p><p>性質：酒店</p><p>業主：泓揚基業股份有限公司</p><p>樓地板面積：3,060sm</p><p>服務範圍：室內設計工程</p><p>建築師：劉湘梅</p><p>專業顧問：CIS：柏美 / 機電：高英</p><p>施工中</p>",
      "1249": "<h3>國立海洋科技博物館海洋生態展示館</h3><p>地點：台灣基隆</p><p>設計 / 完工：2012 -</p><p>性質：水族館</p><p>業主：慶陽海洋企業股份有限公司</p><p>基地面積：11,614sm</p><p>樓地板面積：15,488sm</p><p>高度 / 樓層：20.6m / B1+4F</p><p>服務範圍：建築設計 / 景觀設計</p><p>建築師：許銘陽+彭信蒼+夏雯霖</p><p>合作設計 / 當地設計單位：英國福斯特建築師事務所 / 澳洲AAT</p><p>專業顧問：結構：信業 / 機電：聯立 / 空調：協展 / 外牆：比晰 /  景觀：頤和 / 水保：智全 / 性能設計：巨江 / 還評：光宇 / 綠建築：綠建築學會</p><p>施工单位：互助營造股份有限公司</p><p>工程造價：TWD 1,350,000,000元</p><p>設計中</p>",
      "1303": "<h3>印尼天慧彌勒佛院方案</h3><p>地點：印尼</p><p>設計 / 完工：2013</p><p>性質：宗教設施</p><p>業主：彌勒大道</p><p>基地面積：12,984sm </p><p>樓地板面積：24,141sm</p><p>高度 / 樓層：38.6m / 6F</p><p>服務範圍：建築設計</p><p>建築師：劉湘梅</p><p>專業顧問：結構：天珩</p>",
      "1315": "<h3>國立海洋科技博物館商業空間</h3><p>地點：台灣基隆</p><p>設計 / 完工：2013 / 2014</p><p>性質：餐飲 / 賣店</p><p>業主：慶陽海洋企業股份有限公司</p><p>樓地板面積：2,771sm</p><p>服務範圍：室內工程</p><p>建築師：劉湘梅</p><p>施工单位：大林室內裝潢設計有限公司</p><p>工程造价：TWD 54,179,957元</p>",
      "1320": "<h3>王冠鋁業永安廠</h3><p>地點：台灣高雄</p><p>設計 / 完工：2013 -</p><p>性質：廠房 / 辦公</p><p>業主：王冠鋁業股份有限公司</p><p>基地面積：3,382sm</p><p>樓地板面積：4,640sm</p><p>高度 / 樓層：17.85m / 4F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：許銘陽+趙文紳</p><p>專業顧問：結構：蔡泰昌 / 機電：高英</p><p>施工单位：正宸營造有限公司</p><p>工程造價：TWD 93,920,000元</p><p>施工中</p>",
      "1323": "<h3>大江生醫中興大學產學聯合研發中心</h3><p>地點：台灣台中</p><p>設計 / 完工：2013 - 2014</p><p>性質：科研實驗室</p><p>業主：大江生醫生物整合設計公司</p><p>樓地板面積：640sm</p><p>服務範圍：室內設計方案</p><p>建築師：劉湘梅</p>",
      "1334": "<h3>印尼巴丹島佛院方案</h3><p>地點：印尼巴丹島</p><p>設計 / 完工：2014 -</p><p>性質：宗教設施</p><p>業主：彌勒大道</p><p>基地面積：217,856sm</p><p>樓地板面積：300,288sm</p><p>高度 / 樓層：72m / 6F</p><p>服務範圍：建築設計</p><p>建築師：劉湘梅</p>",
      "1401": "<h3>佛光山惠中寺方案</h3><p>地點：台灣台中</p><p>設計 / 完工：2014</p><p>性質：宗教設施</p><p>業主：佛光山惠中寺</p><p>基地面積：8,052sm</p><p>樓地板面積：34,612sm</p><p>服務範圍：室內設計方案</p><p>建築師：劉湘梅</p>",
      "1402": "<h3>樂林宴會飯店</h3><p>地點：台灣高雄</p><p>設計 / 完工：2014 -</p><p>性質：餐飲</p><p>業主：林園婚旅機構</p><p>基地面積：5,086sm</p><p>樓地板面積：25,902sm</p><p>高度 / 樓層：36.6m / B3+9F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：許銘陽+夏雯霖</p><p>專業顧問：結構：天珩 / 機電：陳照榮 / 空調：協展 /  交通：安得 / 廚房：振凌</p><p>施工单位：設計中</p>",
      "1406": "<h3>金三榮市港段集合住宅</h3><p>地點：福建金門</p><p>設計 / 完工：2014 -</p><p>性質：集合住宅</p><p>業主：金三榮開發建設股份有限公司</p><p>基地面積：490sm</p><p>樓地板面積：3,323sm</p><p>高度 / 樓層：32.25m / B2+9F</p><p>服務範圍：建築設計 / 景觀設計</p><p>建築師：夏雯霖</p><p>專業顧問：結構：柳碧貞 / 機電：源盛</p><p>施工单位：泉昇營造股份有限公司</p><p>工程造價：TWD 15,283,684元 (法定)</p><p>設計中</p>",
      "1408": "<h3>大高雄俯瞰式觀光設施可行性評估計</h3><p>地點：台灣高雄</p><p>設計 / 完工：2014 -</p><p>性質：觀光設施</p><p>業主：高雄市政府觀光局</p><p>樓地板面積：景觀設計</p><p>高度 / 樓層：趙文紳</p><p>合作設計 / 當地設計單位：城都國際開發規劃管理顧問有限公司</p><p>設計中</p>",
      "9015": "<h3>同盟大樓</h3><p>地點：臺灣高雄 </p><p>設計 / 完工：2001 / 2004</p><p>性質：集合住宅</p><p>業主：南和興產實業股份有限公司</p><p>基地面積：2,014sm</p><p>樓地板面積：11,546sm </p><p>高度 / 樓層：48.2m / B2+14F</p><p>服務範圍：總體規劃 / 建築設計 / 內裝設計</p><p>建築師：許銘陽+黃茂良+劉湘梅</p><p>專業顧問：結構：呂清心+劉張欽彥+蔡人壽 / 機電：聯立</p><p>施工單位：宇泰營造股份有限公司</p><p>工程造價：TWD 163,000,000元</p>",
      "9101": "<h3>高雄市臨港線鐵路客運列車站體暨輪</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2002 / 2003</p><p>性質：輕軌站 / 渡船站 / 公共景觀設施</p><p>業主：高雄市政府工務局</p><p>基地面積：23,108sm </p><p>高度 / 樓層：38.2m</p><p>服務範圍：總體規劃 / 景觀設計</p><p>建築師：許銘陽+夏雯霖</p><p>專業顧問：結構：超偉 / 機電：陳春成 / 照明：袁宗南</p><p>施工单位：春德營造股份有限公司＋全力營造有限公司</p><p>工程造價：TWD 36,000,000元</p><p>第一屆高雄市優良都市設計景觀評選大獎 優良作品</p>",
      "9201": "<h3>金酒公司金寧廠整體景觀規劃 </h3><p>地點：福建金門 </p><p>設計 / 完工：2003 / 2004</p><p>性質：廠區景觀設施</p><p>業主：金門酒廠實業股份有限公司</p><p>基地面積：224,000sm</p><p>服務範圍：總體規劃 / 景觀設計 / 建築改造設計</p><p>建築師：夏雯霖+趙文紳</p><p>專業顧問：結構：呂清心+劉張欽彥+蔡人壽 / 機電：聯立</p><p>施工单位：泉昇營造股份有限公司</p><p>工程造价：TWD 47,450,000元</p>",
      "9217": "<h3>樹德科技大學行政大樓暨禮堂</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2003 / 2007</p><p>性質：教室 / 辦公 / 多功能禮堂兼體育館</p><p>業主：樹德科技大學</p><p>基地面積：158,793sm</p><p>樓地板面積：31,330sm</p><p>高度 / 樓層：25.8m / B2+5F</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：許銘陽+夏雯霖</p><p>專業顧問：結構：賴建誠 / 機電：東立 / 監造：中興</p><p>施工单位：隆大營造股份有限公司</p><p>工程造價：TWD 144,996,449元</p>",
      "9230": "<h3>高雄捷運O5/R10美麗島站</h3><p>地點：台灣高雄</p><p>設計 / 完工：2003 / 2005</p><p>性質：交通設施</p><p>業主：高雄捷運股份有限公司</p><p>基地面積：27,000sm</p><p>樓地板面積：35,000sm</p><p>高度 / 樓層：20m / B3+1F</p><p>服務範圍：建築設計 / 裝修設計</p><p>建築師：黃茂良+趙文紳</p><p>合作設計 / 當地設計單位：株式會社高松伸建築設計事務所</p><p>專業顧問：結構 / 機電：中興工程顧問有限公司</p><p>施工单位：榮民工程 / 日商鹿島聯合承攬</p><p>2009建築園冶獎，高雄地區特別獎</p>",
      "9306": "<h3>福慧大樓</h3><p>地點：台灣高雄</p><p>設計 / 完工：2004 / 2007</p><p>性質：銀行/ 集合住宅</p><p>業主：戴晉平</p><p>基地面積：736sm</p><p>樓地板面積：3,402sm</p><p>高度 / 樓層：37m / B2+9F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：夏雯霖</p><p>專業顧問：結構：蔡人壽 / 機電：立盛</p><p>施工单位：達茂營造股份有限公司</p><p>工程造價：TWD 20,477,528元</p>",
      "9311": "<h3>慶富集團營運總部大樓</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2004 / 2007</p><p>性質：辦公</p><p>業主：慶富集團</p><p>基地面積：7,123sm</p><p>樓地板面積：25,179sm</p><p>高度 / 樓層：55.6m / B2+10F</p><p>服務範圍：建築設計</p><p>建築師：許銘陽+夏雯霖</p><p>合作設計 / 當地設計單位：英國理查．羅傑斯建築師事務所</p><p>專業顧問：結構：超偉 / 機電：協揚+彩鐿 / 空調：協展 / 外牆：比晰 /  室內：匯僑+亞浩+萊格</p><p>施工单位：互助營造股份有限公司</p><p>工程造價：TWD 910,000,000元</p><p>RIBA International Awards 2009</p><p>2008 中華民國第一屆都市設計大獎 入選決賽</p>",
      "9316": "<h3>海光三村公園地景保育再生利用工程</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2004 / 2005</p><p>性質：公共景觀設施 / 文物館</p><p>業主：高雄市政府工務局養護工程處</p><p>基地面積：61,622sm</p><p>高度 / 樓層：2F</p><p>服務範圍：建築設計 / 景觀設計 / 舊建築再利用</p><p>建築師：許銘陽+夏雯霖</p><p>專業顧問：結構：黃益 / 機電：羅月瑛</p><p>施工单位：李青山營造有限公司</p><p>工程造價：TWD 18,000,000元</p>",
      "9345": "<h3>巧新科技三期廠房</h3><p>地點：台灣雲林 </p><p>設計 / 完工：2004 / 2007</p><p>性質：廠房 / 辦公</p><p>業主：巧新科技工業股份有限公司</p><p>樓地板面積：　66,461sm</p><p>高度 / 樓層：21.75m / B1+5F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：許銘陽+夏雯霖</p><p>專業顧問：結構：天珩 / 機電：立達</p><p>施工单位：固裕營造有限公司</p><p>工程造價：TWD 313,381,188元</p>",
      "9350": "<h3>義守大學圖資大樓方案  </h3><p>地點：台灣高雄 </p><p>設計 / 完工：2004 / 2006</p><p>性質：圖書館</p><p>業主：義守大學</p><p>基地面積：9,471sm</p><p>樓地板面積：31,331sm </p><p>高度 / 樓層：12.6m / B3+5F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：許銘陽+劉湘梅</p><p>合作設計 / 當地設計單位：英國理查．羅傑斯建築師事務所</p><p>專業顧問：結構：超偉 / 機電：協揚 / 空調：協展</p><p>工程造价：TWD 156,652,900元</p>",
      "9353": "<h3>大雅牙醫診所</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2004 / 2005</p><p>性質：診所</p><p>業主：大雅牙醫診所</p><p>樓地板面積：1,149sm </p><p>高度 / 樓層：28.5m / B1+9F</p><p>服務範圍：建築改造設計 / 室內設計</p><p>建築師：劉湘梅</p>",
      "9437": "<h3>SUPER新都</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2004 / 2011</p><p>性質：別墅住宅</p><p>業主：燁茂實業股份有限公司</p><p>基地面積：24,436sm</p><p>樓地板面積：70,444sm</p><p>高度 / 樓層：17.3m / B1+5F</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：許銘陽+黃茂良</p><p>專業顧問：結構：鄭隆山 / 機電：亞泰</p><p>施工单位：新泉營造股份有限公司</p>",
      "9441": "<h3>義大天悅塔暨會議展覽中心</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2005 - 2006</p><p>性質：景觀高塔 / 展覽中心 / 會議中心 / 纜車站 / 電影文化中心  / 餐飲 / 零售 / VILLA / SPA湯屋 / 酒店公寓</p><p>業主：義聯集團</p><p>基地面積：361,681sm</p><p>樓地板面積：216,687sm </p><p>高度 / 樓層：398m / B4+15F</p><p>服務範圍：總體規劃 / 景觀設計</p><p>建築師：許銘陽+趙文紳</p><p>專業顧問：cdi / 開創</p>",
      "9442": "<h3>義大世界購物廣場</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2005 / 2010</p><p>性質：零售 / 百貨</p><p>業主：義聯集團</p><p>樓地板面積：129,052sm </p><p>高度 / 樓層：B4+5F</p><p>服務範圍：建築造型設計</p><p>建築師：許銘陽</p><p>合作設計 / 當地設計單位：日本cdi設計公司</p>",
      "9444": "<h3>義大世界伯爵特區</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2005 / 2011</p><p>性質：別墅住宅</p><p>業主：泛喬股份有限公司</p><p>基地面積：9,937sm</p><p>樓地板面積：11,608sm</p><p>高度 / 樓層：18.1m / 4F</p><p>服務範圍：建築設計</p><p>建築師：許銘陽+黃茂良</p><p>專業顧問：結構：呂清心 / 機電：高英</p><p>施工单位：新泉營造股份有限公司</p><p>工程造價：TWD 340,371,044元</p>",
      "9445": "<h3>領秀山莊</h3><p>地點：台灣高雄</p><p>設計 / 完工：2005 / 2008</p><p>性質：別墅住宅</p><p>業主：信林建設股份有限公司</p><p>基地面積：4,974sm</p><p>樓地板面積：4,314sm</p><p>高度 / 樓層：9.94m / 3F</p><p>服務範圍：建築設計 / 景觀設計</p><p>建築師：黃茂良</p><p>專業顧問：結構：朱鑫龍+柳碧貞 / 機電：巨成</p><p>施工单位：聖林營造股份有限公司</p><p>工程造價：TWD 22,359,729元</p>",
      "9456": "<h3>蓮潭國際文教會館 </h3><p>地點：台灣高雄 </p><p>設計 / 完工：2005 / 2008</p><p>性質：酒店</p><p>業主：台灣首府大學</p><p>基地面積：17,251sm</p><p>樓地板面積：34,152sm</p><p>高度 / 樓層：34.8m / B2+10F</p><p>服務範圍：建築設計 / 景觀設計</p><p>建築師：許銘陽+黃茂良</p><p>專業顧問：結構：朱鑫龍 / 機電：錦泰豐 / 空調：祥易 / 消防：國介 /  室內：鴻匠+億特 / 音響：黃炳勳</p><p>施工单位：芳源號營造股份有限公司</p><p>工程造價：TWD 500,000,000元</p>",
      "M0804": "<h3>威海新東陽呼雷湯溫泉旅遊開發項目規劃方案</h3><p>地點：山東文登</p><p>設計 / 完工：2008 / 2009</p><p>性質：溫泉酒店 / 別墅 / 商店街 / 高爾夫球廠及會所</p><p>業主：新東陽集團</p><p>基地面積：2,400,000sm</p><p>樓地板面積：334,000sm</p><p>高度 / 樓層：21m / 5F</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：許銘陽+夏雯霖+郭律民</p><p>專業顧問：策劃：青騰 / 高爾夫球場：Pacific  Coast Design (澳洲)</p>",
      "M1029": "<h3>格林芙洛斯世界生態旅遊區規劃方</h3><p>地點：貴州惠水</p><p>設計 / 完工：2010 / 2011</p><p>性質：酒店 / 別墅 / 商店街 / 高爾夫球會所</p><p>業主：深圳康沃投資控股集團</p><p>基地面積：2,933,348sm</p><p>樓地板面積：332,700sm </p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：夏雯霖+黃建盛</p>",
      "M1112": "<h3>平潭小高雄綜合開發項目規劃方案</h3><p>地點：福建平潭</p><p>設計 / 完工：2011 / 2012</p><p>性質：辦公 / 酒店 / 商業 / 住宅</p><p>業主：高平投資開發促進會</p><p>基地面積：117,988sm</p><p>樓地板面積：827,773sm</p><p>高度 / 樓層：B2+58F</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：許銘陽+夏雯霖+黃建盛</p>",
      "M1104": "<h3>錢江新城概念性總體規劃方案</h3><p>地點：浙江溫嶺</p><p>設計 / 完工：2011 / 2013</p><p>性質：酒店 / 別墅 / 商店街 / 醫院 / 集合住宅 / 學校 /  遊樂場</p><p>業主：義聯集團</p><p>基地面積：2,918,700sm</p><p>樓地板面積：3,436,900sm</p><p>高度 / 樓層：60m / B1+20F</p><p>服務範圍：總體規劃</p><p>建築師：許銘陽+黃建盛</p>",
      "M1203": "<h3>襄陽新天地項目規劃方案</h3><p>地點：湖北襄陽</p><p>設計 / 完工：2012 / 2013</p><p>性質：酒店 / 商場 / 集合住宅 / 學校</p><p>業主：襄陽雅可商務區開發有限公司</p><p>基地面積：117,993sm</p><p>樓地板面積：734,899sm</p><p>高度 / 樓層：B2+46F</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：許銘陽+黃建盛</p><p>合作設計 / 當地設計單位：DCI思亞國際</p>",
      "1206": "<h3>金門三創</h3><p>地點：福建金門</p><p>設計 / 完工：2012 -</p><p>性質：酒店 / 商場 / 集合住宅 / 學校</p><p>業主：鴻海科技集團</p><p>基地面積：28,300sm</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：許銘陽+黃建盛</p>",
      "M1306": "<h3>云霄高铁物流园区概念</h3><p>地點：福建雲霄</p><p>設計 / 完工：2013 -</p><p>性質：辦公 / 酒店 / 商業 / 住宅</p><p>業主：慶富集團</p><p>基地面積：188644sm</p><p>樓地板面積：746,182sm</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：許銘陽+黃建盛</p><p>設計中</p>",
      "M1310": "<h3>慶富綠色總部園區規劃方案</h3><p>地點：福建漳州</p><p>設計 / 完工：2013 / 2014</p><p>性質：酒店 / 商場 / 集合住宅 / 學校</p><p>業主：慶富集團</p><p>基地面積：1,552,000sm</p><p>樓地板面積：570,000sm</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：許銘陽+黃建盛</p><p>設計中</p>",
      "M0311": "<h3>廣西民族博物館方案</h3><p>地點：廣西南寧 </p><p>設計 / 完工：2003</p><p>性質：展示 / 典藏 / 研究 / 辦公</p><p>業主：廣西壯族自治區文化廳</p><p>基地面積：86,000sm</p><p>樓地板面積：30,763sm </p><p>高度 / 樓層：B1+4F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：夏雯霖</p><p>合作設計 / 當地設計單位：美國RTKL國際有限公司</p><p>施工单位：CNY 148,230,000元</p>",
      "M0414": "<h3>十堰市博物館方案</h3><p>地點：湖北十堰 </p><p>設計 / 完工：2004</p><p>性質：博物館</p><p>業主：湖北十堰市人民政府</p><p>樓地板面積：9,900sm </p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：郭律民</p>",
      "M0708": "<h3>如皋南通六建总部</h3><p>地點：江蘇南通</p><p>設計 / 完工：2007-2011</p><p>性質：辦公 / 科研</p><p>業主：南通六建建设集团</p><p>基地面積：10,000sm</p><p>樓地板面積：21796sm</p><p>高度 / 樓層：71m / B1+16F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：黃建盛</p><p>合作設計 / 當地設計單位：南通市規劃設計院有限公司</p>",
      "M0815": "<h3>南京农业展馆</h3><p>地點：江蘇南京</p><p>設計 / 完工：2008-2011</p><p>性質：展覽 / 會議 / 辦公 / 零售 / 餐飲</p><p>基地面積：34,459sm</p><p>樓地板面積：83,710sm</p><p>高度 / 樓層：107m / B1+25F</p><p>服務範圍：建築設計 / 景觀設計</p><p>建築師：許銘陽+黃建盛</p>",
      "0738": "<h3>義大皇家劇院</h3><p>地點：台灣高雄</p><p>設計 / 完工：2007 / 2010</p><p>性質：專業表演劇場</p><p>業主：義聯集團 </p><p>基地面積：8,841sm</p><p>樓地板面積：10,322sm </p><p>高度 / 樓層：21.6m / B4+3F</p><p>服務範圍：室內設計 / 舞臺音響燈光設備設計</p><p>建築師：許銘陽+劉湘梅</p><p>合作設計 / 當地設計單位：林益慶建築師事務所</p><p>專業顧問：結構：中泰 / 機電：高英新泉營造股份有限公司</p>",
      "0801": "<h3>高雄世界貿易展覽會議中心統包工程</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2008 / 2010</p><p>性質：展覽 / 會議 / 辦公 / 零售 / 餐飲</p><p>業主：高雄市政府工務局新建工程處</p><p>基地面積：44,929sm</p><p>樓地板面積：63,228sm</p><p>高度 / 樓層：37.8m / B1+3F</p><p>服務範圍：建築設計</p><p>建築師：許銘陽+夏雯霖</p><p>合作設計 / 當地設計單位：美國RTKL國際有限公司</p><p>專業顧問：結構：永峻 / 機電：安鼎 / 空調：協展 /  景觀：老圃 / 交通：康地 / 幕牆：比晰 / 視聽：大譽 / 裝修：長荷</p><p>工程造價：TWD 2,830,000,000元</p><p>統包評選第三名</p>",
      "M1201": "<h3>漳州慶富學院</h3><p>地點：福建雲霄</p><p>設計 / 完工：2012 -</p><p>性質：行政 / 教學 / 餐廳 / 住宿</p><p>業主：慶富集團</p><p>基地面積：990,000sm</p><p>樓地板面積：263,630sm (共22棟)</p><p>高度 / 樓層：B1+8F</p><p>服務範圍：建築設計 / 室內設計</p><p>建築師：許銘陽+夏雯霖＋劉湘梅＋黃建盛</p><p>合作設計 / 當地設計單位：香港10 Design / 陝西丰宇設計工程有限公司</p><p>專業顧問：室內：風河、集藝、歐坊 / 景觀：山水園</p><p>施工单位：中國二十冶集團有限公司</p><p>施工中</p><p>香港建築師學會兩岸四地建築設計論壇及大獎2013</p>",
      "M0208": "<h3>瑩輝照明應用中心</h3><p>地點：上海普陀 </p><p>設計 / 完工：2002 / 2004</p><p>性質：辦公 / 展示</p><p>業主：瑩輝集團有限公司</p><p>基地面積：1,653sm</p><p>樓地板面積：3,800sm</p><p>高度 / 樓層：35.5m / 7F</p><p>服務範圍：建築改造設計</p><p>建築師：黃茂良</p><p>合作設計 / 當地設計單位：東風設計研究院 / 上海紡織建築設計研究院</p><p>專業顧問：項目管理：上海崛坷</p><p>施工单位：上海金鹿建築實業有限公司</p><p>工程造價：TWD 32,000,000元</p>",
      "M0405": "<h3>東風日產汽車辦公樓+研發中心</h3><p>地點：廣東廣州 </p><p>設計 / 完工：2004 / 2006</p><p>性質：辦公 / 科研</p><p>業主：東風汽車有限公司乘用車公司</p><p>基地面積：270,000sm</p><p>樓地板面積：42,000sm</p><p>高度 / 樓層：22m / B1+5F</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：黃茂良</p><p>合作設計 / 當地設計單位：上海建學建築與工程設計所有限公司</p><p>工程造价：TWD 560,000,000元</p>",
      "M0411": "<h3>東風汽車有限公司總部方案 </h3><p>地點：湖北武漢 </p><p>設計 / 完工：2004</p><p>性質：辦公 / 研發</p><p>業主：武漢東風汽車集團</p><p>樓地板面積：185,504sm</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：夏雯霖</p>",
      "M0523": "<h3>松江公共實訓中心方案 </h3><p>地點：上海松江 </p><p>設計 / 完工：2005</p><p>性質：辦公 / 教育 / 多功能禮堂兼體育館</p><p>業主：上海松江區人民政府</p><p>樓地板面積：104,000sm</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：郭律民</p>",
      "M0510": "<h3>東風本田汽車辦公樓</h3><p>地點：湖北武漢 </p><p>設計 / 完工：2005 / 2007</p><p>性質：辦公</p><p>業主：武漢東風汽車集團</p><p>樓地板面積：18,900sm </p><p>高度 / 樓層：3F</p><p>服務範圍：建築設計</p><p>建築師：郭律民</p><p>合作設計 / 當地設計單位：東風設計研究院</p>",
      "M0526": "<h3>萬泓企業總部大樓方案 </h3><p>地點：江蘇昆山 </p><p>設計 / 完工：2005 / 2007</p><p>性質：辦公</p><p>業主：昆山萬泓建設開發有限公司</p><p>基地面積：149,000sm</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：郭律民</p>",
      "M0826": "<h3>豐盛集團科技園C地塊建築概念設計方案</h3><p>地點：江蘇南京  </p><p>設計 / 完工：2008 - 2009</p><p>性質：商業 / 辦公</p><p>業主：南京丰盛產業控股集團 </p><p>基地面積：266,080sm </p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：夏雯霖+郭律民+黃建盛</p><p>建築師：南京東南聯合工程設計有限公司</p>",
      "M0900": "<h3>淮陰區社會事業大廈方案</h3><p>地點：江蘇淮陰</p><p>設計 / 完工：2009</p><p>性質：公共行政</p><p>業主：淮安市淮陰區政府</p><p>基地面積：19,320sm</p><p>樓地板面積：20,031sm</p><p>高度 / 樓層：B1+8F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：夏雯霖+黃建盛</p>",
      "0919-1": "<h3>鴻海高雄數位匯流數據中心</h3><p>地點：台灣高雄</p><p>設計 / 完工：2013 - 2014</p><p>性質：辦公</p><p>業主：鴻海科技集團</p><p>樓地板面積：365sm</p><p>服務範圍：室內設計工程</p><p>建築師：劉湘梅</p>",
      "0919": "<h3>鴻海高雄研發育成大樓及數位匯流數據中心</h3><p>地點：臺灣高雄</p><p>設計 / 完工：2009 -</p><p>性質：辦公 / 科研</p><p>業主：鴻海科技集團</p><p>基地面積：　18,500sm</p><p>樓地板面積：62,919sm</p><p>高度 / 樓層：　56.1m / B4+14F</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計 / 室內設計</p><p>建築師：許銘陽+夏雯霖+劉湘梅</p><p>專業顧問：　結構：超偉 / 機電：正弦 / 空調：協展 / 外牆：比晰 / 交通：安得</p><p>施工單位：　達茂營造股份有限公司</p><p>工程造價：TWD 1,830,000,000元</p><p>施工中</p><p>第壹屆2014年高雄市新建建築物工程品質金質獎：金質獎</p>",
      "0945": "<h3>農業科技園區外銷觀賞魚及水產種苗</h3><p>地點：臺灣屏東 </p><p>設計 / 完工：2010 / 2013</p><p>性質：辦公 / 科研 / 物流 / 倉儲 / 展覽 / 廠房</p><p>業主：屏東農業生物技術園區籌備處</p><p>基地面積：39,440sm</p><p>樓地板面積：27,327sm </p><p>高度 / 樓層：38.5m / B1+5F</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：許銘陽+夏雯霖+趙文紳+黃建盛</p><p>專業顧問：協同主持人：方力行 / 結構：黃武龍 / 機電：聯立 / 空調：協展  / 消防：王誌民 / 維生：協兌 / 養殖：增彧 / 觀賞魚：優石 / 幕牆：比晰 / 大地：開通 / 測量：永承</p><p>施工單位：長鴻營造股份有限公司</p><p>工程造價：TWD 1,025,000,000元</p>",
      "M1020": "<h3>海門市國稅局數據處理中心</h3><p>地點：江蘇海門</p><p>設計 / 完工：2010 / 2014</p><p>性質：公共行政</p><p>業主：海門市政府投資項目工程建設中心</p><p>基地面積：19,770sm</p><p>樓地板面積：19,079sm </p><p>高度 / 樓層：61.4m / B1+12F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：黃建盛</p><p>合作設計 / 當地設計單位：南通市規劃設計院有限公司</p><p>專業顧問：無錫昊天建筑工程有限公司</p><p>施工中</p>",
      "M1121": "<h3>東莞中國郵政大樓方案</h3><p>地點：廣東東莞</p><p>設計 / 完工：2011</p><p>性質：辦公</p><p>業主：中國郵政集團公司</p><p>基地面積：13.629sm</p><p>樓地板面積：72,761sm</p><p>高度 / 樓層：114.5m / B2+22F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：黃建盛</p>",
      "0000": "<h3>統一夢時代購物中心</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2000 / 2007</p><p>性質：百貨 / 零售 / 娛樂</p><p>業主：統正開發股份有限公司</p><p>基地面積：50,158sm</p><p>樓地板面積：401,219sm </p><p>高度 / 樓層：49.95m / B5+11F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：許銘陽</p><p>合作設計 / 當地設計單位：美國RTKL國際有限公司 / 劉顯宗+曹毅豪+黃士國建築師事務所</p><p>專業顧問：結構：超偉 / 機電：正弦 / 景觀：RTKL+carol R  Johnson / 室內：RTKL+IDA+衡美 / 外牆：比晰</p><p>施工单位：理成營造工程股份有限公司</p><p>工程造價：TWD 3,156,142,248元</p><p>中華民國第一屆都市設計大獎 民間開發空間設計類優選</p><p>第三屆高雄市都市設計景觀評選 優質大樓組優選作品</p><p>2008 Grand Award best in  the west， In Recognition of Excellence and Value，Best International  Commercial / Retail Project </p>",
      "0709": "<h3>義大世界香榭大街</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2007 / 2010</p><p>性質：零售</p><p>業主：義聯集團 </p><p>基地面積：5,551sm</p><p>樓地板面積：13,842.48sm</p><p>高度 / 樓層：19.35m /4F</p><p>服務範圍：建築設計 / 景觀設計</p><p>建築師：許銘陽</p><p>專業顧問：結構：中泰 / 機電：高英</p><p>施工单位：新泉營造股份有限公司</p><p>工程造價：TWD 74,487,550元</p>",
      "V0802": "<h3>越南北寧賭場酒店方案</h3><p>地點：越南北寧</p><p>設計 / 完工：2008</p><p>性質：酒店 / 賭場</p><p>業主：越南黃龍開發</p><p>基地面積：23,806sm</p><p>樓地板面積：120,566sm</p><p>高度 / 樓層：79.4m / B2+21F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：許銘陽+劉湘梅+黃建盛</p>",
      "0829": "<h3>義大世界團客中心</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2008 / 2010</p><p>性質：零售 / 辦公</p><p>業主：義聯集團</p><p>基地面積：1,749sm</p><p>樓地板面積：2,717sm</p><p>高度 / 樓層：15.3m / B1+3F</p><p>服務範圍：建築設計</p><p>建築師：許銘陽</p><p>專業顧問：結構：中泰 / 機電：高英</p><p>施工单位：新泉營造股份有限公司</p><p>工程造價：TWD 13,847,400元</p>",
      "M1026": "<h3>大麥客量販店</h3><p>地點：廣東東莞</p><p>設計 / 完工：2010 / 2011</p><p>性質：零售 / 量販</p><p>業主：大麥客商貿有限公司</p><p>基地面積：40,672sm</p><p>樓地板面積：28,806sm </p><p>高度 / 樓層：18.6m / 4F</p><p>服務範圍：建築改造設計</p><p>建築師：黃建盛</p><p>合作設計 / 當地設計單位：東莞市東城建築規劃設計院</p><p>施工单位：東莞日盛鋼板成型有限公司</p>",
      "M1302": "<h3>余姚保利文化商業廣場</h3><p>地點：浙江余姚</p><p>設計 / 完工：2013 -</p><p>性質：百貨 / 零售 / 娛樂</p><p>業主：保利置業集團有限公司</p><p>基地面積：119,000sm</p><p>樓地板面積：340,000sm</p><p>高度 / 樓層：100m / B2+21F</p><p>服務範圍：建築設計 / 景觀設計</p><p>建築師：許銘陽+黃建盛</p><p>合作設計 / 當地設計單位：UDG聯創國際</p><p>施工单位：設計中</p>",
      "V1302": "<h3>象湖生態旅遊區A2/A3商業娛樂項</h3><p>地點：越南河靜</p><p>設計 / 完工：2013 -</p><p>性質：餐飲 / 娛樂</p><p>業主：寶瓏(越南)開發責任有限公司</p><p>基地面積：25,013sm</p><p>樓地板面積：6,931sm</p><p>高度 / 樓層：14.57m / 3F</p><p>服務範圍：建築設計</p><p>建築師：夏雯霖</p><p>專業顧問：結構：天珩 / 水療：李恆德</p><p>設計中</p>",
      "M1317": "<h3>哈爾濱白魚泡溫泉度假村</h3><p>地點：黑龍江哈爾濱</p><p>設計 / 完工：2013 -</p><p>性質：酒店 / 温泉會館</p><p>業主：哈爾濱市白魚泡老年醫療護理院</p><p>基地面積：50,000sm</p><p>樓地板面積：15,000sm</p><p>高度 / 樓層：15m / 3F</p><p>服務範圍：建築設計 / 景觀設計</p><p>建築師：黃建盛</p><p>設計中</p>",
      "0909": "<h3>大自然文化世界</h3><p>地點：台灣新竹</p><p>設計 / 完工：2009 / 2011</p><p>性質：宗教設施</p><p>業主：財團法人天恩彌勒佛院</p><p>基地面積：119,993sm</p><p>樓地板面積：396,898sm </p><p>高度 / 樓層：43.28m / B4+8F</p><p>服務範圍：建築設計顧問 / 景觀設計 / 室內設計</p><p>建築師：許銘陽+劉湘梅</p><p>合作設計 / 當地設計單位：蔡金龍建築師事務所</p><p>專業顧問：結構：欣揚 / 機電：正弦 / 外牆：比晰大尊貴工程股份有限公司</p>",
      "9437-1": "<h3>大昌醫院</h3><p>地點：台灣高雄</p><p>設計 / 完工：2006 - 2014</p><p>性質：醫院</p><p>業主：義聯集團 </p><p>基地面積：18,742.57sm</p><p>樓地板面積：69,786.9sm</p><p>高度 / 樓層：49.95m / B3+14F</p><p>服務範圍：建築設計</p><p>建築師：許銘陽</p><p>專業顧問：結構：柳碧貞 / 機電：立盛</p><p>施工单位：新泉營造股份有限公司</p><p>工程造價：TWD 867,604,000元</p>",
      "M0601": "<h3>東風日產汽車培訓中心 </h3><p>地點：廣東廣州 </p><p>設計 / 完工：2006 / 2007</p><p>性質：培訓</p><p>業主：東風日產乘用車公司</p><p>樓地板面積：6,640sm</p><p>服務範圍：建築設計</p><p>建築師：郭律民</p><p>合作設計 / 當地設計單位：東風設計研究院</p>",
      "0629": "<h3>威奈科技廠辦</h3><p>地點：台灣高雄</p><p>設計 / 完工：2006 / 2009</p><p>性質：廠房 / 辦公</p><p>業主：威奈聯合科技股份有限公司</p><p>基地面積：12,545sm</p><p>樓地板面積：12,938sm</p><p>高度 / 樓層：9.45m / 2F</p><p>服務範圍：總體規劃 / 建築設計</p><p>建築師：許銘陽+黃茂良</p><p>專業顧問：結構：天珩 / 機電：協展</p><p>施工单位：匯城營造工程股份有限公司</p><p>工程造價：TWD 203,940,000元</p>",
      "0937": "<h3>良達科技廠房更新設計</h3><p>地點：台灣高雄</p><p>設計 / 完工：2009</p><p>性質：廠房 / 辦公</p><p>業主：良達科技股份有限公司</p><p>服務範圍：　建築改造設計 / 室內設計</p><p>建築師：夏雯霖</p><p></p><p>　</p>",
      "M0121": "<h3>渤海皇家</h3><p>地點：河北秦皇島 </p><p>設計 / 完工：2001 / 2005</p><p>性質：集合住宅</p><p>業主：秦皇島愛普森國際置業有限公司 </p><p>基地面積：12,400sm</p><p>樓地板面積：43,800m </p><p>高度 / 樓層：106m / B1+31F</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計</p><p>建築師：黃茂良</p><p>合作設計 / 當地設計單位：北京建學建築與工程設計所有限公司</p><p>工程造价：TWD 200,000,000元</p>",
      "M0409": "<h3>花都藝墅小區</h3><p>地點：江蘇昆山 </p><p>設計 / 完工：2004 / 2011</p><p>性質：別墅住宅</p><p>業主：昆山寶裕房產開發有限公司</p><p>基地面積：140,000sm</p><p>服務範圍：建築設計 / 景觀設計</p><p>建築師：黃茂良+夏雯霖+黃建盛</p><p>合作設計 / 當地設計單位：南京東南聯合設計工程有限公司</p>",
      "0716": "<h3>左營陳宅方案</h3><p>地點：台灣高雄</p><p>設計 / 完工：2007</p><p>性質：別墅住宅 / 辦公</p><p>業主：陳明志</p><p>基地面積：4,960sm</p><p>樓地板面積：6,959sm</p><p>高度 / 樓層：27.1m / B1+7F</p><p>服務範圍：總體規劃 / 建築設計 / 景觀設計 / 室內設計</p><p>建築師：許銘陽+劉湘梅</p><p>合作設計 / 當地設計單位：日本cdi設計公司</p><p>工程造價：TWD 48,658,487元</p>",
      "M0801": "<h3>揚州瘦西湖華莊低層住宅項目方案 </h3><p>地點：江蘇揚州 </p><p>設計 / 完工：2008 / 2010</p><p>性質：別墅住宅</p><p>業主：揚州瘦西湖置業有限公司 </p><p>基地面積：60,000sm </p><p>服務範圍：建築設計</p><p>建築師：許銘陽+夏雯霖</p><p>合作設計 / 當地設計單位：南京市建築設計研究院有限責任公司</p>",
      "0804": "<h3>觀音山景觀住宅</h3><p>地點：台灣高雄</p><p>設計 / 完工：2008 / 2011</p><p>性質：別墅住宅</p><p>業主：義聯集團</p><p>基地面積：6,172sm</p><p>樓地板面積：7,860sm</p><p>高度 / 樓層：21.5m / B2+3F</p><p>服務範圍：建築設計</p><p>建築師：許銘陽</p><p>專業顧問：結構：蔡人壽 / 機電：高英</p><p>施工单位：新泉營造股份有限公司</p><p>工程造價：TWD 40,657,200元</p>",
      "M0816": "<h3>天泰佳家祺大廈方案</h3><p>地點：江蘇南京</p><p>設計 / 完工：2008 / 2009</p><p>性質：住宅 / 辦公</p><p>業主：江蘇天泰建設有限公司</p><p>基地面積：13,596sm</p><p>樓地板面積：71,000sm</p><p>高度 / 樓層：B1+27F</p><p>服務範圍：建築設計</p><p>建築師：夏雯霖+黃建盛</p><p>合作設計 / 當地設計單位：南京東南聯合設計工程有限公司</p>",
      "V1001": "<h3>安富Palais de Lotus 住宅社區開發方案</h3><p>地點：越南河內</p><p>設計 / 完工：2010 / 2012</p><p>性質：集合住宅</p><p>業主：越南安富開發投資公司</p><p>基地面積：4,370sm</p><p>樓地板面積：80,615sm</p><p>高度 / 樓層：93.2m / B2+32F</p><p>服務範圍：建築設計 / 景觀設計 / 室內設計</p><p>建築師：許銘陽+夏雯霖+劉湘梅+黃建盛</p><p>合作設計 / 當地設計單位：越南河內UAC設計院</p>",
      "0922": "<h3>六堆客家文化園區整體景觀</h3><p>地點：台灣屏東 </p><p>設計 / 完工：2007 / 2009</p><p>性質：公共景觀設施</p><p>業主：行政院客家委員會六堆客家文化園區籌備處</p><p>基地面積：155,878sm</p><p>樓地板面積：983sm</p><p>高度 / 樓層：9.4m / 2F</p><p>服務範圍：地景總體規劃 / 景觀設計 / 建築設計</p><p>建築師：趙文紳</p><p>專業顧問：結構：蔡人壽 / 機電：翰鱗 / 景觀：藏生 /  專案管理：亞新(第2階段)</p><p>施工单位：碩宏營造有限公司 / 超晟營造有限公司 / 順裕營造有限公司 /  南屏營造股份有限公司</p><p>工程造價：TWD 224,753,089元</p><p>2009建築園冶獎，屏東地區公共景觀設計獎</p>",
      "0811": "<h3>義大世界123廣場</h3><p>地點：台灣高雄 </p><p>設計 / 完工：2008 / 2010</p><p>性質：商業景觀設施 / 音樂餐廳</p><p>業主：義聯集團 </p><p>基地面積：13,464sm</p><p>高度 / 樓層：音樂餐廳11.7m / 墾丁大街6.5m</p><p>服務範圍：景觀設計 / 建築設計</p><p>建築師：許銘陽</p><p>合作設計 / 當地設計單位：林益慶建築師事務所</p><p>專業顧問：室內：匯僑 / 結構：中泰 / 音響：黃炳勳 / 燈光：公祥</p><p>施工单位：台灣太陽鷹開發股份有限公司 (膜構) /  老圃造園工程有限公司 (植栽) / 公祥貿易有限公司 (燈光)</p>",
      "M1208": "<h3>漳州慶富學院一期</h3><p>地點：福建雲霄</p><p>設計 / 完工：2012 -</p><p>性質：學校</p><p>業主：慶富集團</p><p>樓地板面積：123,565sm</p><p>服務範圍：室內設計 / 家具選配 / 影音設備</p><p>建築師：劉湘梅</p><p>合作設計 / 當地設計單位：風河設計工程顧問有限公司 / 集藝室內裝修設計工程有限公司</p><p>專業顧問：細設+機電：上海歐坊 / 廚房：小馬駒 /  燈光：億光 / 影音：上海瑩聲</p><p>施工单位：設計中</p>"
    };

    var LANG = {
      casename: '案名：',
    }

    if (window.location.pathname.indexOf('/en.html') !== -1) {
      $.extend(true, CASEDICT, {
        "1003": {
          "text": "I Hong Factory and Office Building"
        },
        "1006": {
          "text": "Maitreya Temple"
        },
        "1008": {
          "text": "China Steel Headquarter"
        },
        "1010": {
          "text": "Ming-De Building at National Chao-Cho"
        },
        "1024": {
          "text": "Hsu's Dermatologic Clinic"
        },
        "1110": {
          "text": "Queena Plaza Hotel Hall 3"
        },
        "1122": {
          "text": "Cai's Residence"
        },
        "1130": {
          "text": "Dream Mall Phase 2",
          "desc": "<h4>Design concept</h4><p>Ocean, health, perpetual regeneration</p><p>Energy conservation, greening, container</p><p>&nbsp;</p><p>Green Building Plan</p><p>Indoor environment</p><p>•&nbsp;&nbsp;&nbsp; Noise control</p><p>•&nbsp;&nbsp;&nbsp; Vibration sound control</p><p>•&nbsp;&nbsp;&nbsp; Indoor lighting</p><p>•&nbsp;&nbsp;&nbsp; Ventilation plan</p><p>•&nbsp;&nbsp;&nbsp; Indoor pollution control</p><p>•&nbsp;&nbsp;&nbsp; Indoor air purification equipment</p><p>•&nbsp;&nbsp;&nbsp; Ground and basement moistureproof</p><p>•&nbsp;&nbsp;&nbsp; Green building materials</p><p>•&nbsp;&nbsp;&nbsp; Green decoration design</p><p>Water preservation of the base&nbsp; &nbsp;</p><p>•&nbsp;&nbsp;&nbsp; Permeable pavement</p><p>•&nbsp;&nbsp;&nbsp; Clear space for retention and permeation</p><p>•&nbsp;&nbsp;&nbsp; Permeation well and tube</p><p>•&nbsp;&nbsp;&nbsp; Artificial ground retention</p><p>Water resources indexes</p><p>•&nbsp;&nbsp;&nbsp; Water-saving equipment</p><p>•&nbsp;&nbsp;&nbsp; Intermediate water utilization</p><p>•&nbsp;&nbsp;&nbsp; Rainwater recycle</p><p>•&nbsp;&nbsp;&nbsp; Water conservation in planting and irrigation</p><p>Greening indexes</p><p>•&nbsp;&nbsp;&nbsp; Ecological greening</p><p>•&nbsp;&nbsp;&nbsp; Solid greening</p><p>•&nbsp;&nbsp;&nbsp; Wall greening and irrigation</p><p>•&nbsp;&nbsp;&nbsp; Artificial ground greening</p><p>•&nbsp;&nbsp;&nbsp; Greening water-proofing and drainage technology</p><p>•&nbsp;&nbsp;&nbsp; Greening windbreak and ventilation technology</p><p>Daily energy conservation</p><p>•&nbsp;&nbsp;&nbsp; Energy conservation of building configuration</p><p>•&nbsp;&nbsp;&nbsp; Appropriate aperture opening rate</p><p>•&nbsp;&nbsp;&nbsp; External sunshade</p><p>•&nbsp;&nbsp;&nbsp; Glass at opening position</p><p>•&nbsp;&nbsp;&nbsp; Heat insulation and air-tightness at opening position</p><p>•&nbsp;&nbsp;&nbsp; Shell structure and material</p><p>•&nbsp;&nbsp;&nbsp; Roof structure and material</p><p>•&nbsp;&nbsp;&nbsp; Curtain wall</p><p>•&nbsp;&nbsp;&nbsp; Making the best use of orographic winds</p><p>•&nbsp;&nbsp;&nbsp; Making the best use of atrium wind</p><p>•&nbsp;&nbsp;&nbsp; Window ventilation performance</p><p>•&nbsp;&nbsp;&nbsp; Wind-force ventilation design</p><p>•&nbsp;&nbsp;&nbsp; Flotage ventilation design</p><p>•&nbsp;&nbsp;&nbsp; Air-conditioning partition</p><p>•&nbsp;&nbsp;&nbsp; Energy-conservation design of air-conditioning main engine</p><p>•&nbsp;&nbsp;&nbsp; Layered air conditioning in big space</p><p>•&nbsp;&nbsp;&nbsp; Light source for illumination</p><p>•&nbsp;&nbsp;&nbsp; Renewable source of energy (solar energy, and wind power)</p><p><br/></p>"
        },
        "1138": {
          "text": "Ci Shi Ancestral Shrine"
        },
        "1141": {
          "text": "Baisha Ville Resort in Kenting National P"
        },
        "1143": {
          "text": "E-DA Asia Square"
        },
        "1144": {
          "text": "Aurona Industries, Phase F &amp; Office Buil"
        },
        "1150": {
          "text": "Citizen Hotel"
        },
        "1151": {
          "text": "TCI Fab S9 in PABP"
        },
        "1210": {
          "text": "Maymao Maitreya Buddha Missionary I"
        },
        "1216": {
          "text": "Hengchuen FL Service Apartment"
        },
        "1221": {
          "text": "E-DA Cancer Hospital"
        },
        "1225": {
          "text": "Kaohsiung American School Overall Cam"
        },
        "1228": {
          "text": "E-DA Theme Park Phase 2 &amp; Castle Hote"
        },
        "1238": {
          "text": "Lohmann Veterinary Vaccine Manufactu"
        },
        "1243": {
          "text": "Bamboo Hotel"
        },
        "1249": {
          "text": "Aquarium in NMMST"
        },
        "1303": {
          "text": "Tianhui Maitreya Buddha Missionary Ins"
        },
        "1315": {
          "text": "Retail and Restaurant Space in NMMST"
        },
        "1320": {
          "text": "Crown Aluminum Yongan Fab"
        },
        "1323": {
          "text": "TCI &amp; NCHU Academia-Industry Collabo"
        },
        "1334": {
          "text": "Batam Maitreya Buddha Missionary Insti"
        },
        "1401": {
          "text": "Fo Guang Shan Monastery Huzhong Si"
        },
        "1402": {
          "text": "The Lin Banquet"
        },
        "1406": {
          "text": "JUNG Shigang Apartment"
        },
        "1408": {
          "text": "Feasibility Evaluation Plan for Sightseein"
        },
        "9015": {
          "text": "Tongmeng Mansion",
          "desc": "<h4>Awareness of Boutique, and Boutique Buildings</h4><p>&nbsp;</p><p>Owner’s Awareness of Boutique</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Household use, leisure and entertainment</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Landscape condition, object-environment compatibility</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pragmatic space, and big-house pattern</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fashionable equipment, and economical building materials</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Safety and privacy, and life value</p><p>&nbsp;</p><p>Our boutique buildings</p><p>Our definition of boutique buildings: Humanistic culture, environmental protection and energy conservation, and management services.</p><p>&nbsp;</p><p>Our architectural design is expressed with fashionable simplicity, and such simplicity may be embodied at the simplification of buildings’ functional spaces, the weakening of spatial separation, and the concision of decoration and ornamentation. However, the most worthy-of-proud advantage is how to satisfy the idea that the owner persists in, and exhibit the image of new-type residence. We attempt to guide the tide by showing humanization and modernization from overall planning to architectural details, and meanwhile, we try out the new combination of building materials in order to realize leading design concept.</p><p>&nbsp;</p><p>The design is expected to embody the attention to “humanity” and strictly follows the design concept of “luxury originated from comfort”; it is people-centered at every aspect, in order to make residents initiatively meet people’s demand. Every owner’s household has abundant space demands for their colorful life. Every household is arranged on a floor, and leisure &amp; body building space and reception club are set up, flexible space and equipment pipeline room are reserved to solve various allocation forms demanded on every floor. Close to the Green Belt Park of Gaoxiong Love Riverside, the Base enjoys excellent natural landscape advantage, so the households on every floor have an elevator lobby full of sunshine and cool breeze, and also, big-area balcony is reserved on each floor. With the visual landscape and space design combining external park’s green belt and hanging garden, the design ensures south-north transparent, ventilation and lighting, energy conservation, and reveal the effect of environmental protection and ecology. In the residences, large high-quality and air-tight windows are used, which could insulate sound and heat, and bring in urban beautiful sceneries.</p><p>&nbsp;</p><p>It’s difficult for a boutique building to become classics only by dint of building value. We must endow its management services with greater additional value, and maximize its value. The design uses advanced intelligentized facilities and considerate security management systems, and provides the safest and most comfortable living environment.</p><p>&nbsp;</p><p>&nbsp;</p><p><br/></p> "
        },
        "9101": {
          "text": "Harbor Light Rail Transit Station and the",
          "desc": "<h4>Dialogue of Modern Wind and Shadow</h4><p>&nbsp;</p><p>Fund Characteristics</p><p>In order to effectively use the resources left unused of the Lingang Line Railway in the city, connect the red and orange line rapid transit systems in future, and provide convenient traffic for citizens in future in the form similar to light rail and rapid transit system and by combining with “Toot Train” of Taiwan Railway Company; and meanwhile, in order to cooperate with “Blue Highway” and Lover River Sightseeing Ferry Plan, connect the business circle and tourist attractions through joint sea-and-rail transportation, and expand Gaoxiang’s overall economic activities, Gaoxiong Municipal Government selects the base to develop railway station and ferry station. Located at the end point of Xinguang Road Landscape Avenue, and directly facing Gaoxiang Port, the base is the turning position of Gaoxiang Port, and like the corner of on-land block, it is a famous open space close to port.</p><p>&nbsp;</p><p>Design Demand</p><p>The plan is developed by three stages. The first stage takes the connecting facilities of railway station and ferry station as main body; the second stage takes the ferry station and bus transfer station and landscape engineering as main body, and the future third stage will take hydrophilic and commercial facilities as development goal.</p><p>&nbsp;</p><p>Design Concept</p><p>Gaoxiong is masculine. The gentle breeze and strong sunshine reflect lazy urban rhythm, and show strong tropic amorous feelings. The design attempts to capture Gaoxiong’s wind and shadow, and to open the modern dialogue of wind and shadow through the medium of design module. Shadow tells its impish characters through its changes along with the passing of time, and wind proves its sentiment of placating the ground through its rhythm. Through the interpretation of dialogue, the design constructs Gaoxiong’s territorial space.&nbsp;</p><p>&nbsp;</p><p>Design Method</p><p>Reflecting local axial line through landmark objects and marine light gallery: Continuing the axial line of Xinguang Road Landscape Avenue, the design constructs the “Marine Light Gallery” (third-stage project) horizontally continued on the ground, and the landmark rising slant from an angle of 45 degrees and pointing at the ocean. This landmark, 54m long, is similar to mast or derrick in terms of function and shape, and is the main member bar for supporting the structural system. Marine Light Gallery is a part of landscape design. With a full length of 60m, it gives priority to pond and spray fountain facilities. With cold aurora conduit buried at the bottom of pond, the Marine Light Gallery provides hydrophilic function at daytime, and strengthens the visual effect of axial line and shows interest and diversity by cooperating with the lighting of landmark at nighttime.</p><p>&nbsp;</p><p>Metaphorizing railway station, ferry station and their connecting facilities into Gaoxiong (Port) Industry Culture: Gaoxiong was established with industry; the large-scale industries such as shipbreaking, iron and steel, petrochemical, and shipbuilding, etc. have recorded Taiwan’s economic indicators, and established Gaoxiong Port City’s international status. The design attempts to exhibit the port city’s marine and industrial images through the elements such as steel skeleton, cable rope and membrane, etc. The station platform is 66m long, and extends as a part of landscapes. The light structure of three-wing semi-transparent ceiling shows the future sense of technology, and provides new space experience of the station. The station platform and the ferry station body are divided by <a name=\"OLE_LINK28\"></a>Xinguang Dapai into south and north sides. With the landmark as the centre of circle, steel cable is opened to support ten steel structures shaped as Chinese<a name=\"OLE_LINK29\"></a> character “人”, forming an arc-shaped “crossover” with external diameter of 45m and stretching over Xinguang Dapai. At the bottom of “Crossover”, the ferry station sets up office, waiting area, public toilet, and auxiliary commercial space (third-stage project), etc. The 6m wide platform channel at the top floor of Crossover is provided for pedestrians to overlook the landscapes of Gaoxiong Port; the area enclosed at the inner ring of the Crossover forms an activity plaza. In future, the steel rope above the plaza and the steel structure shaped as Chinese character “人” will be used to support the membrane structure, in order to provide the functions of sunshade and wind capture, and the modeling image of sail, and to echo with the design concept of provoking wind and shadow; in addition, other auxiliary facilities will create a harmonious urban place by combining with all the other landscape elements.&nbsp;</p><p><br/></p>"
        },
        "9201": {
          "text": "Landscape Design for Kinmen Kaoliang L",
          "desc": "<h4>Floating Wine Cup along the Winding Water, and New Sound on the Land of Wine</h4><p>&nbsp;</p><p>Kaoliang is not only produced at Jinmen, but only Jinmen Kaoliang Spirit is so famous in the world. Jinmen Winery producing Jinmen Kaoliang Spirit, established in 1953 and formerly named as Jiulongjiang Winery, has had a history of more than half a century. However, in the overall environment of increasing national income, gradual transformation of industrial structure and consumption habit, and globalization tide, traditional wine production industry is confronted with the deterioration of cost advantage, and has to develop service industry and transform to sightseeing winery with high value-added. As shown below, the overall objectives of the planning scheme are to:</p><p>&nbsp;</p><p>1. Plan long-term feasible overall development structure for the objective of transforming Jinning Factory into a sightseeing winery;</p><p>2. Reasonably plan, allocate and use partitions, and give concurrent consideration to the functions like sightseeing, production and office;</p><p>3. Arrange the whole area’s circulation uniformly, in order to exert the maximum benefits of the people, vehicle and material flows;</p><p>4. Provide modeling and lighting strategies, which shall integrate territorial characteristics and enterprise image, and beautify the whole area’s environment;</p><p>5. Practice industrial <a name=\"OLE_LINK31\"></a>culturization and culture industrialization, maintain and carry forward the characteristics of local industry, and make Jinning Factory become a model sightseeing winery.</p><p>&nbsp;</p><p>The first-stage project having already been constructed includes the following contents: Landscape axis, fence wall separating the factory and office, corner landmark, bottle park betterment, and administrative building beautification; wherein, landscape axis is the principal landscape facility.</p><p>&nbsp;</p><p>The landscape axis reconstructs the entrance axial line and image of the factory area. Taking the 143m “Floating Wine Cup along the Winding Water” winding on the grassland as symbolic theme, the landscape axis connects the “Ushering Pond” and “Precious Moon and New Fountain” at both ends in axial direction. The Floating Wine Cup along the Winding Water is a literary quotation of wine culture, and as described by Wang Xizhi in the Preface to the Collection of Poetry at Lan Pavilion, it is a living ambit of refined scholars. In design, this concept is amplified and placed in this open landscape, and becomes a medium between human body and the nature, available for strolling about, running and jumping, staying, and sight-seeing, just as wine adding to the fund.</p><p>&nbsp;</p><p>As a public landscape at Jinmen Island, the project attempts to start with a pattern different from southern Fujian’s traditional style, and hopes to raise formal connotation to formal representation, so it adopts plentiful landscape elements giving priority to concept, such as geometric and solid structure, forming an overall style. For Jinmen, maybe “innovation” is also a sweet spring of energy.</p><p>&nbsp;</p><p>&nbsp;</p><p><br/></p> "
        },
        "9217": {
          "text": "Administration Building &amp;Assembly Hal",
          "desc": "<h4>Preface</h4><p>The building is sourced from the competition of drawings themed on “Student Activity Center and Gymnasium” held by the university in 1999, and attracting the participation of Xinming Architects, Libinghui Architects, and our Architects. After competition of drawings, the school adjusted the building into a composite building “1,500-person professional performance hall and student activity center” upon service demand.</p><p>The school-running spirit of the University of Science and Technology rests with “constantly striving for perfection, and seeking the truth from facts”. The original intention of the planning and design is to provide a platform for communication of teachers and students! For the co-existence of many complicated factors such as the diversity of service functions, the abundance of spatial field, and the complexity of people flowing, etc. the building is expected to produce new communication place and make up the original deficiencies under the existing structure of campus environment.</p><p>The school party required the planning and design to be prudential. The board of directors and campus planning committee closely checked the design contents and achievements jointly. For complicated architectural functions and distinctive location relationship, it’s very difficult to integrate each party’s opinions. After 36 times of design conferences, alterations and adjustments in a period of 1.5 years, the scheme was finalized, and the project stepped into the implementation preparation stage. Around the corner of properly preparing contract-issuing documents and obtaining building license, the school party was forced to suspend bids invitation and construction proceeding in 2001 for the Ministry of Education’s regulation on the upper limit of private schools’ financing proportion, and so, original design contract was rescinded.</p><p>&nbsp;</p><p>Topic</p><p>In the summer of 2003, the school party notified its plan for recovery of this project, and negotiated to renew the original design contract with us, only that we shall correct and adjust some design contents by cooperating with demand, and changing “Performance Hall and Student Activity Center” to “Administrative Building and Multi-function Auditorium”. According to the school party’s consideration about functions, the building shall solve the deficiencies in the space of original administration management units, and meet the “multi-function” objective, such as the spaces for medium- and large-scale gatherings, students’ intra-curricular and extra-curricular activities, and the places required by new departments (performance art, leisure business management) for professional performance and indoor sports, etc.</p><p>Continuing the original intention of early-stage planning and design, the main masses consist of the administration building and multi-function hall, which are arranged according to local situations. The administration building is arranged in the shape L in plane, and in the mass, the public areas connected with vestibule, hall, platform and stairs are implanted, connecting each service area, and used as place for teachers and students’ activities, rest, and communication. The extension and folding relationship of its plane and vertical dimension is mutually applied with the energy-saving methods for wind introduction and lighting, activating the building life. Multi-function auditorium is a combined mass; the stage part shall meet the height of slings for lifting loads, while the auditoria and the court shall meet volleyball competition standard, and both parties shall be raised-ceiling and long-span space.</p><p>The outdoor part includes the exterior spaces taking fan-shaped theatre as the core, surrounding multiple plazas, channels and green spaces, and linking different topography elevations. They compose of landscapes jointly, and link up with the existing landscape system on the campus and the reconstructed and extended facilities in the entrance area, repairing the scenes in the gaps at the campus boundary.</p><p>&nbsp;</p><p>Reverberation</p><p>From professional performance hall to multi-function auditorium, the drop rests with that, the design object is transformed from one extreme to the other extreme, namely from accurate and professional performance place to a place giving concurrent considerations to compound functions, such as gathering, lecture, music, drama, extension, and sports, etc. In terms of design conditions, there are substantially conflicts, such as spatial arrangement, visual angle of seats, illuminance of light source, reverberation time, material selection and allocation, and logistics management, etc.; after repeated analysis and discussion with the school party’s each utilization and management unit, we seemingly satisfy, but actually compromise to, the “multi-function” standard basically taking all things into consideration.</p><p>The school party’s board of directors and the design institute gave ardent prompts about the campus building style and spatial representation continuity. The selection of building form and material color belonged to the key items on which consultation and communication should be maintained in implementation process, in order to prevent the building from breaking away from the character and atmosphere of the existing campus environment.</p><p>The building was suspended at earlier stage; later the construction period was wasted for that the building was nearly designed over again; when the contract was actually issued at the end of 2004, the cost of building raw materials rose and maintained at a high position, so the building produced a very high operation and construction cost.</p><p>The project management was organized uniformly by the school party’s operation unit, in order to coordinate the complicated systems and interfaces of the school party’s representative, the design units of different subcontracted buildings, structures, and electromechanical facilities, etc., as well as outsourcing manufacturing supervision unit, and construction unit, etc. Thanks to pragmatic attitude, weekly worksite conference, and innumerous onsite coordination, all difficulties were overcome, and the project was completed and put into use 8 years later in the spring of 2007.</p><p>&nbsp;</p><p><br/></p>"
        },
        "9230": {
          "text": "KMRT 05/R10 Formosa Boulevard Statio"
        },
        "9306": {
          "text": "Fuhui Mansion",
          "desc": "<h4>Design proposition</h4><p>Fuhui building base is located on a sporadic industrial land in the downtown of Fengshan City, surrounded by intensively developed typical mixed residential and commercial streets on the outer-ring. Now there is no outstanding feature in the urban landscape; because it is near by the county government building, Fengshan High School, Weiwuying Park, Metro Orange Line and other important environmental zones, the owner hopes to enrich its utilization patterns and improve the utilization value of land by redefining it as “factory-run” building.</p><p>&nbsp;</p><h4>Overall concept</h4><p>In terms of design strategy, it will adopt low building coverage ratio (about 36%), limit the layer area so that each layer can be used as an independent unit, and construct the buildings up to nine-story height at the volume rate of 210% to leave more open space, reduce the shelter on the existing Kindergarten to the north, and provide the upper stories with better landscape view. The building orientation is facing to the south in line with the road in front of it. Because the west and south sides of the rectangular base are both T-junctions, most building structures are set on the west side to avoid Feng Shui taboo of front “road arrow”; the recession footpaths along the street are remained wide to join up with the traditional arcades at both street ends.</p><p>&nbsp;</p><h4>Healthy building</h4><p>The vertical line, sharing and service facilities are arranged on the east side of the internal plane as more as possible, to facilitate maintenance and prolong the building life cycle. The balance is complete space to facilitate various demands of each utilization unit; all the directions will enjoy enough lighting and ventilation. It will reduce the direct heat exposure by vertical shading plates on the west, and shade sunshine from the windows by deep concave opening on the south. Because the concession of the open space and outer-ring streets make big distance from the adjacent buildings, the natural air convection inside is obvious.</p><p>&nbsp;</p><h4>Form language</h4><p>The front shape is the outline of twin tower made up of symmetrical structure on both sides, emphasizing the vertical upward form. Contrasting with the most houses developed horizontally all over the streets located in surrounding environment, it stands out as an obvious target. Besides the main building, a two-story building in form of base is extended in the open space on the east to match and maintain the continuity of roadside building facade and urban space. On principle, the façade mostly follows classical pattern in three segments, based, house and roof. Detailed elements and styles are in texture with sense of order and stability and in simplified manner. Maybe it can relax the rambling&nbsp;and crowded urban structure at present and improve the spatial quality.</p><p>&nbsp;</p><p>Cultivate both fortune and wisdom</p><p>The words “fortune” and “wisdom” are from the owner’s life philosophy of “If one cultivates only fortune in spite of wisdom, more or less he will suffer misfortune even with the fortune; if one cultivates only wisdom in spite of fortune, sometimes he will be confused even with the wisdom”. During the learning process, they understood all people should often do charity to cultivate fortune, and at the same time cultivate wisdom to learn and detach from the cycle of life and death; &quot;Wisdom&quot; and &quot;fortune&quot;, like the two wings of a bird, and two wheels of a vehicle, are both indispensable. During the planning process of this case, influenced by the owner’s life philosophy, the general idea is to try to pursue the harmony between internal function and external appearance, taking into consideration both the building itself and the urban environment. In addition, during the period from design till supervision, it acquired great support and respect of the owner to the specialty. We want to express our gratitude by this opportunity.</p><p><br/></p> "
        },
        "9311": {
          "text": "Chingfu Group Headquarters",
          "desc": "<h4>Richard Rogers&#39; Original Design</h4><p>With the breast of a real estate developer, Chingfu Group expects leaving for Gaoxiong City an urban memory symbol, and a building vocabulary representing Gaoxiong City and the Group’s culture, so it has specially invited British Knight Richard Rogers, Pritzker Master of Building, to take charge of the planning and design of its headquarters building. Richard Rogers does well in expressing spatial aesthetics with building structure and distinguishing building functions with vivid primary colors, and has outstanding detail design ability, innovative design tide and style.</p><p>&nbsp;</p><p>Richard Rogers’ design concept for this building is to sublimate the enterprises’ internal self-examination to the macroscopic representation of environmental care through the microcosmic conflict between the grand building structure and the ocean. “External structure extension” and “internal seascape intake” are the spatial operation methods of this case, while the expressions of the building are originated from the waterfront atmosphere of base environment and the unique conditions of visual landscapes at the port, and this faces the challenge of the western exposure of sunlight. Considering sunlight angle, Richard Rogers designs louvered grille for external deep sunshade, in order to control the sunlight environment of the building, and concurrently meet the demand of appreciating seascape; in addition, the building structure is exposed, and the spaces like elevator, stairs, and service pipeline, etc. are arranged at the south and north sides of the building, in order to maintain the offices’ internal space integrity and service flexibility; the design of box-shaped structure extends (separates) the space in the form of enframed scenery to form an independent space for conference and exhibition, etc.; and even, fresh primary colors are used to express building functions, making the appearance full of building energy. &nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><a name=\"OLE_LINK45\"></a>Hoya Architects &amp; Associates&#39; Design Execution</p><p>Hoya Architects &amp; Associates plays a role as domestic architect, undertakes and deepens Richard Rogers’ design and the development of details such as external wall, and structure ending, etc., and meanwhile, fulfills the execution of Chingfu Group’s electromechanical integration interface design for green building and intelligent building application:</p><p>1. External wall curtain adopts dual-layer titanized low-energy-consumption glass. It has a lower heat conduction efficiency than RC structure, and could effectively block the plentiful air conditioning loads induced by Taiwan’s subtropical climate.</p><p>2. The depth and angle of the grille sun visor on the appearance of the building are also simulatively calculated and designed with computer according to the solargraphy at the longitude and latitude of Taiwan.</p><p>3. The air conditioning system adopts VRV frequency-conversion cold-hot air system. with power consumption changing along with load, it could effectively lower the power demand for air conditioning. It’s estimated that, it could save around 40% power in comparison with common air conditioning system.</p><p>4. In terms of lighting system, LED lamps are adopted on the outside of building, and T5 high-efficiency lamps are used inside building. In addition, daylight illumination control system is set up at the west side of the building, making the best of the ambient natural daylighting, and effectively lowering the power consumption for lighting.</p><p>5. All the access control and electromechanical devices inside the building are taken into the monitoring system, which records the power consumption state of each device anytime in order to provide reference for future use and maintenance.</p><p>6. Double Roof design is adopted for the top layer of the building. On the top roof, grill sun visor and solar heat collection board are used for sunshade and solar power generation. A space is reserved for connection of solar power generated and municipal power supply, and for storage of solar power for public spaces and landscape lighting.</p><p>&nbsp;</p><p>Besides power-saving design, the building sets up rainwater recovery system in terms of water resource, and after being recycled and filtered, rainwater could be applied to outdoor and top-floor landscape spray irrigation system; in addition, small meteorological system is set up inside the building to ensure that the spray irrigation system doesn’t work in rainy days, in order to save water.</p><p>&nbsp;</p><p>Plentiful Parties&#39; Achievements</p><p>On Dec. 25, 2007, the president and vice president, together with the heads of the three allies, namely Kiribati, Belau, and Tuvalu in the South Pacific Region, attended the inauguration ceremony and cut the ribbon for the operation headquarters building of the private enterprise Chingfu Group in Gaoxiong for the first time. besides highly praising Chingfu Group as a successful model in diplomacy, all attendees appreciated the Group’s requirements on architectural landscapes and environmental ecology. When appreciating the building vocabularies coupling hardness with softness, such as the architectural image of exposed structure and suspension system, succinct and pragmatic flexible function allocation, convenient and high-efficiency public environment system, technological and energy-saving advanced building materials and equipment, humanistic headquarters image, internal and external connected and smooth visual space, and forward-looking planning concept, etc., we could feel abundant exquisite waterfront urban amorous feelings of Gaoxiong through spatial arrangement.</p><p>&nbsp;</p><p><br/></p> "
        },
        "9316": {
          "text": "Hai Guang Park",
          "desc": "<h4>Base and Environment</h4><p>Haiguang Sancun Park is located at the former site of Juanjiu Village, Haiguang Third Village, Zuoying District, Gaoxiong City, and is neighboring to Daguishan Park, the Archaeological Site of Old Fengshan City (First-Level Historic Site), and Lotus Pond. For the historical particularity and ecological sensitivity of this location, Gaoxiong City Government has obtained the right of entrusted management at present stage by coordinating with the Department of National Defense, and decided to use it as park by finishing the procedures of non-gratuitous appropriation in future; <a name=\"OLE_LINK62\"></a>Haishengli Activity Center originally located here will adjust its purpose by cooperating with the plan, and precisely, a part of Haishengli Activity Center will be used as the Subunit Office of Maintenance Group, Maintenance Work Office, Works Bureau, Gaoxiong City Government, in order to take care of the ecological environment of North Gaoxiong’s Banping Mountain, Zhouzi Wetland, Lotus Pond, big and small Gui Mountain; the other part will be used as N.G.O. non-governmental organization’s office and cultural relics display space; and meanwhile, combining with the humanistic peculiarity of the natural and ecological old Zuoying City, N.G.O. non-governmental organizations such as Green Group, Wetland Protection Alliance, Wild Bird Association, and Old Zuoying City Culture Association, etc. will be invited to participate in adoption and operation management, achieving the diversified functions such as environmental ecology conservation, education, sightseeing and leisure, etc.</p><p>&nbsp;</p><p>Topics and Tasks</p><p>Overall planning of the whole area:</p><p>(1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reconstruction of entrance plaza;</p><p>(2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Two areas for history and ecology education respectively;</p><p>(3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Explanation and tourism guiding circulation of Old Zuoying City, Former Site of Juan Village, and Forest-form Ecology;</p><p>Recycling of old buildings:</p><p>(1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Former Site of Haishengli Activity Center is reconstructed into the N.G.O. non-governmental organizations’ offices and cultural relics display space, district maintenance group’s office and toilets, etc.;</p><p>(2)&nbsp;&nbsp;&nbsp; As for the former site of Fuxing Kindergarten, the planning concept will be reserved, and the reconstruction plan will be made separately.</p><p>Preservation of existing ecological landscapes:</p><p>(1)&nbsp;&nbsp;&nbsp; Rearrange and preserve the existing natural forest forms, such as Bischofia Javanica Blume, Elephant’s Ear, Muntingia calabura, banian, and flame tree, etc.;</p><p>(2)&nbsp;&nbsp;&nbsp; Add underground water supplementation pond, provide spaces for the rest of birds and insects, and continue the diversity of ecological species.&nbsp;</p><p>&nbsp;</p><p>Concept and Design</p><p>Environment:</p><p>(1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Integrate the cultural layering style of different periods, such as ecological environment, old city, and former site of Juan Village, etc.;</p><p>(2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reconstruct the overall layout and circulation system of environmental landscapes;</p><p>(3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Preserve original environmental components, such as telegraph pole, fence wall, slogan, and planting, etc.;</p><p>(4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Exhibit the building material and construction method of discarded buildings, just like a large historical exhibit;</p><p>(5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Improve the whole area’s lighting plan.</p><p>Building:</p><p>(1)&nbsp;&nbsp;&nbsp; Integrate environmental scenes and building vocabulary, and add balcony sub-space to provide an opportunity to commune with the nature;</p><p>(2)&nbsp;&nbsp;&nbsp; Endow the old spaces with new building life cycle, perfect its equipment updating, and meet the compound service functions such as exhibition, office, and service, etc.;</p><p>(3)&nbsp;&nbsp;&nbsp; Add outdoor stairs, and adopt internal and external dual vertical circulation systems to meet different units’ service and control demands;</p><p>(4)&nbsp;&nbsp;&nbsp; Preserve space for future reconstruction of the former site of Fuxing Kindergarten as connection between Juancun Museum space and circulation;</p><p>(5)&nbsp;&nbsp;&nbsp; Apply the materials like natural stone and wood, etc., and the colors close to the ground.</p><p>&nbsp;</p><p>Expectation</p><p>Here, we expect the dialogue across time and space with the nature and the history; here, we wait for you in lazy afternoon to take an afternoon tea, slow down your paces, enjoy our environment, and talk about our temperament and interests.&nbsp;</p><p>&nbsp;</p><p><br/></p> "
        },
        "9345": {
          "text": "SuperAlloy Industrial, Phase 3"
        },
        "9350": {
          "text": "Library at I-Shou University"
        },
        "9353": {
          "text": "Da Ya Dentistry"
        },
        "9437": {
          "text": "SUPER New Town"
        },
        "9441": {
          "text": "E-DA Tower &amp; Exhibition and Conventio"
        },
        "9442": {
          "text": "E-DA Outlet Mall"
        },
        "9444": {
          "text": "Earl's District in E-DA World"
        },
        "9445": {
          "text": "Ling Xiu Village"
        },
        "9456": {
          "text": "Garden Villa Kaohsiung",
          "desc": "<p>This case is the first “ROT” of Gaoxiong City, and it originally belonged to “Government Employees and Teachers Training Center”. It enjoys good ecological environment for being neighboring to Lotus Pond, Prophyta Park and Banping Mountain, and also, it has convenient traffic conditions for being bounded by Express Railway Station and No. Ten Gate of National Highway. Diwan University and Howare Hotel obtained operation right after appraisal, and jointly created a comprehensive place for leisure and entertainment, holiday and accommodation, and education and training.</p><p>&nbsp;</p><p>The existing architectural complex is used as Gaoxiong City Government Human Resources Development Bureau and its office, conference, training and accommodation spaces. The building structure doesn’t have great concave-convex changes, and the building materials seem to be cold, rigid, and non-interesting. The new building integrates the existing spaces, and rebuilds the architectural style; besides the original service functions, it adds the multi-function spaces like large exhibition hall and ball room, Chinese and Western restaurants, 211 guestrooms, and swimming pool, etc. In addition, it adds entrance hall, encloses outdoor atrium activity plaza, splits the personnel flow of accommodation, conference, business, and restaurant, etc., introduces the green of external ecology to internal public spaces, and thus creates the atmosphere of natural leisure and holiday.</p><p>&nbsp;</p><p>The additional construction and reconstruction are different from the operation of new construction design. It’s necessary to investigate the state and availability of original buildings, structures, and electromechanical equipment, etc., adjust the spatial functions and even make great changes by cooperating with the operation unit. For the problem consultation of existing buildings and the design proposition of regenerated spaces, heavy and complicated adjustments will be made, and this becomes the greatest challenge of this case.</p><p>&nbsp;</p><p>The design policy considers the two subjects “echo field environment” and “meeting operation orientation”, and figures the leisure building style. The construction methods are mainly as shown below:</p><p>&nbsp;</p><p>&nbsp;</p><p>Adding masses, and reconstructing spatial structure</p><p>Add a layer of mass at the frontage of the original three-section compound, use it as the most appropriate hall in terms of function, and enclose the open plaza into an internal atrium in space, in order to distinguish the inside and outside; open a small quantity of windows externally and open a large-area window internally, in order to produce visible but non-transparent space interest, and change the spatial structure of original official organization.</p><p>&nbsp;</p><p>&nbsp;</p><p>Renovating and internal court, and reactivating it for reutilization</p><p>Combining with the spatial elements like pond, hydrophyte, planting, platform, and activity plaza, etc., the internal atrium plaza could meet diversified service demands, such as outdoor gathering, celebration and wedding feast, etc.; meanwhile, as the extension of hall, it provides multi-layer spatial experiences.</p><p>&nbsp;</p><p>&nbsp;</p><p>Sunken plaza presenting quiet beauty</p><p>Forming waterfall by continuing the pond of internal atrium plaza, the sunken plaza becomes a quiet and cozy non-closed outdoor space. It not only connects the upper and lower open spaces, but also has the visual field extended from the restaurant, and spreads the elegant aesthetic feeling of leisure here.</p><p>&nbsp;</p><p>&nbsp;</p><p>Image and color suitable for ambient atmosphere</p><p>In order to integrate the external green environment of prophyta park, etc. and the full sunshine of South Taiwan, the overall rest image is figured by adopting white as the basic color, and emphasizing the lucidity and activity of leisure building. The design of nighttime lighting expresses the explicit effect of open field, and strives for the visual feeling at a longer distance.</p><p>&nbsp;</p><p>&nbsp;</p><p>Modeling style, breaking restrictions for regeneration</p><p>The reconstruction of architectural image style is actually an important subject of the case. It not only embodies the connotation of culture and education, but also exhibits the characteristics of leisure hotel. However, restricted by the requirement that public properties shall avoid the reduction and loss of area, the public department doesn’t hope to change the existing building mass, so we could only unify the old vocabularies by applying external decoration materials and colors; in addition, for limited budget for appearance reconstruction, the case persists in the principle of not destroying original ceramic title, and regenerates the building style completely by applying paintings after using waterproof material.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><br/></p>"
        },
        "1151-1": {
          "text": "TCI Fab S9 Showroon"
        },
        "0000": {
          "text": "Dream Mall"
        },
        "0629": {
          "text": "NanoWin Thin Film Tech Factory and Offi"
        },
        "0709": {
          "text": "E-DA Campus-Elysees Avenue"
        },
        "0716": {
          "text": "Chen's Residence"
        },
        "0738": {
          "text": "E-DA Royal Theater"
        },
        "0801": {
          "text": "Turnkey Project for Kaohsiung Exhibition"
        },
        "0804": {
          "text": "Guan Yin Shan Luxurious Villa"
        },
        "M0804": {
          "text": "Weihai New Dongyang Huleitang Hot Sp"
        },
        "0811": {
          "text": "E-DA 123 Plaza"
        },
        "0829": {
          "text": "E-DA World Association Tourist Center"
        },
        "0909": {
          "text": "Nature Loving Wonderland"
        },
        "0919-1": {
          "text": "Foxconn Digital Convergence Data Cent"
        },
        "0919": {
          "text": "Foxconn R&amp;D Incubation Office And Digi"
        },
        "0922": {
          "text": "Landscape Design for Liudui Hakka Cult",
          "desc": "<h4>The origin and background of the plan</h4><p>A. The origin of the plan</p><p>The plan of Liudui Park, as a mechanism platform for cultural preservation and tourism exchange, is to recognize that the profound unadorned cultural connotation and enriched local landscape of Liudui is irreplaceable. Therefore, it will implement the &quot;Eco-Museum&quot; concept plan, by the promotion method of synchronizing both &quot;Core Park&quot; and &quot;Local Park&quot;, to actively develop and create the existing featured view of Hakka settlements. While Liudui Hakka Cultural Park, as a local show window to the outside world, will help the public to know Hakka and further investigate Liudui. The derivative positive economic effect is also a pushing force to promote local sustainable activation and lay a solid foundation for the township competitiveness.</p><p>&nbsp;</p><p>B. Historical background</p><p>In the early period when the Hakka people came across the channel to Taiwan, their development mostly focused on the south region of Taiwan, and &quot;Liudui&quot; area is an important Hakka town in southern Taiwan. It is located on flat and wide Gaoping Plain which forms a completed scope of clustered area. The enriched Hakka cultural assets in Liudui area is “the best in Taiwan&quot; recognized by almost all Taiwan people. With the most ancient Hakka area, the most unmixed Hakka settlement, and the most outstanding Hakka customs, it is certainly the necessary place to experience Hakka culture.</p><p>&nbsp;</p><p>Concept of the design planning</p><p>A. Description of design concept</p><p>1. Infuse Liudui Hakka features into the landscape planning</p><p>Infuse the offering custom, life impression and featured buildings of Liudui Hakka people into the landscape planning, such as the plants with fragrant flowers used to make flower pots to worship the Earth God (refers to Hakka Jiuxiang), traditional Hakka buildings (smoke house, kitchen etc.), and unique agricultural planting (tobacco planting), to enrich the overall landscape depth.</p><p>&nbsp;</p><p>2. Create the combination of natural ecology and life landscape</p><p>The ancestor of Liudui people mostly exploited between plains and mountain forests, so the park planning takes rural scenery in Hakka villages as the landscape theme to show the characteristics of Hakka people’s simple life and combines it with modern lifestyles of health and sustainability.</p><p>&nbsp;</p><p>3. Dialogue between the traditional building landscape and Hakka imagist buildings</p><p>The rural area is set with smoke houses, ridge houses, kitchens and other traditional buildings, forming an interesting comparison of traditional and imagist Hakka villages with the umbrella stand area which takes &quot;umbrellas&quot; as the imagist buildings.</p><p>&nbsp;</p><p>B. Partition of the landscape planning development</p><p>1. Umbrella stand Hakka settlement landscape area</p><p>With the image of Mino paper umbrella, it shades Ahou Town. Hakka village industry and cultural settlement under the umbrella are planned as the main operating items. In order to reduce the energy consumption in the activity region under the umbrella, umbrella stand buildings are set with solar photoelectric plates combining with kinetic energy equipments, and other buildings under the umbrellas are also planed to set with recycle and environmental friendly building materials.</p><p>&nbsp;</p><p>2. Natural and rural landscape area</p><p>The life history of ancestors is exploiting between mountain forests and plains. Hakka people advocate naturalism and optimism. Matching rural and natural landscape, it creates the living environment Hakka people adopted from the nature. The rural area planning focuses on rice and tobacco cultivation, fruit trees and economic crops commonly found in Hakka villages, accompanied by traditional buildings such as smoke houses, kitchens and ridge houses etc. as an outdoor display area of cultural experience.</p><p>&nbsp;</p><p>3. Jiuxiang Garden landscape area</p><p>Jiuxiang Garden built around the Earth God&nbsp;Altar derived from the living habit that Hakka people offer flower pots to worship the Earth God and the custom that they pray for new birth of boy babies. The landscape area set up in banded shape is just like woven printed fabric of Hakka landscape, and it associated cultural performance with the surrounding landscape by arranging outdoor performance space.</p><p><br/></p> "
        },
        "0937": {
          "text": "Liang Dar Tech Factory Renovation"
        },
        "0945": {
          "text": "Manufacturing and Marketing Area Wit",
          "desc": "<h4>Design Concept</h4><p>&nbsp;</p><p>1. Fish. Scales</p><p>Bright flashing light can be reflected and refracted, like the mirror body, dazzling make enemies, can also combine sky and water into one tone and not distinguish objects, a natural camouflage.</p><p>Protective barriers, foreign matter can be isolated from infected, forming the outer frame to maintain the appearance and reduce the friction with the water.</p><p>Organic growth, energy with which to show growth and health indicators organisms.</p><p>2 buildings. Skin</p><p>Building skin grille screen, just like the local humane Hakka fine knitting bamboo, to protect the building of the wall and roof openings, wind shade, green insulation, reflecting ecological building energy conservation.</p><p>Vertical plume edition repeated rhythm, light and shadow change over time, if the scale-like buildings like show different illusion and vitality, conservation inside the building metaphor countless lives.</p><table cellspacing=\"0\" cellpadding=\"0\" width=\"640\"><tbody><tr class=\"firstRow\"><td width=\"235\" style=\"padding: 0px 4px;\"><br/></td><td width=\"202\" style=\"padding: 0px 4px;\"><br/></td><td width=\"202\" style=\"padding: 0px 4px;\"><br/></td></tr></tbody></table><p>&nbsp;</p><p>Configuring idea</p><p>&nbsp;</p><p>1. Partition clear complete</p><p>The project site is divided into R &amp; D and export logistics zone in two parts ornamental fish production and marketing operations area. R &amp; D Logistics Center (1) is located on the north side of the R &amp; D base in the logistics area, which has an independent moving lines of transportation, factory buildings to avoid interference with his moving lines. Marketing standard plant operating area is located on the south side of 12 logistics centers, buildings are facing the front of the road, the formation of separate entrances. Leaving in sufficient spacing between the plants to complex layers heterozygous hybrid green as segmentation, ensure the privacy of each plant&#39;s buildings。</p><p>&nbsp;</p><p>2. Maximize the efficiency of land use</p><p>Configuring plant operations and sales of land along the perimeter areas, so that each plant sites are wide 30M, deep-50M, and the front surface of the road are providing the most convenient transport conditions, to retain the maximum space available for plant use. Plastic plant out into the atrium is surrounded by a landscaped park and public activity center, on land use to achieve maximum efficiency。</p><p>&nbsp;</p><p>3. With the park texture, continuing ecological green</p><p>Greenbelt Park with the existing base texture of green axis extending existing ecological green。</p><p>&nbsp;</p><p>4. Landscape Park of</p><p>The main landscape for the plant at the back of the plastic being enclosed atrium, combined with eco-pond and build water features, become a stroll, sitting between park staff. Separation of people and vehicles moving lines and roads surrounding the base of the tree-lined trails wife pedestrian trails, providing park-like campus as comfortable walking environment。</p><p>&nbsp;</p><p>5. Advertising tower with LED electronic screen</p><p>Extension of the use of green axis up to landscape mode vegetation of the slopes and the highest total construction area of cost structures, the formation of the landmark tower type of advertising, and set the water supply in this zone, fresh water, soft water sources within。</p><p>&nbsp;</p><p>6. Utility equipment configuration in the core region, the economic efficiency of the pipeline laying</p><p>Utility equipment (power center) is disposed in the base core, the advantage of each plant can get the shortest distance pipelines, configured as the most economical and cost-effective。</p><p><br/></p>"
        },
        "9437-1": {
          "text": "DA Chang Hospital"
        },
        "1206": {
          "text": "Jinmen Sancun"
        },
        "M0121": {
          "text": "Seaside Royal",
          "desc": "<h4>The spatial scale of Bohai Gulf</h4><p>&nbsp;</p><p>Building space is built in order to adapt to the physiological behavior and spiritual needs of people, people will choose an appropriate scale to meet their various demands including physiological needs, territoriality, privacy, neighborhood and ego, etc. so long as it is possible.</p><p>&nbsp;</p><p>The scale that we want to grasp:</p><p>The scale of environment and density: We should consider the population density, the rationality of public space and facilities for the living environment, to take into account all conditions including traffic, landscape, and neighborhood distance, etc.</p><p>The scale of unit width and depth: For the occupants, large unit width with shallow depth means they can enjoy more sunshine and landscape.</p><p>The scale of building height and story height: High-rise multi-unit residential building always can satisfy various habits: The lower stories are close to the garden, while the higher stories are with wider vision; the lower stories are convenient to go upstairs and downstairs, while the higher stories are with less dust.</p><p>The scale of inner doors and outer windows: High gate is a sign of great house, while large window symbolizes fashion. The door, as the barrier of a living room, can not only provide convenience, but also reflect beautiful appearance; the window, as the connection with outdoor sunlight and ventilation, can not only influence the comfort level, but also have respect to human health.</p><p>&nbsp;</p><p>Scenery and sunshine everywhere</p><p>Each house faces toward the blue sea and sky of Bohai Bay in Qinhuangdao, with ventilation from all directions and fine sunshine at all sides to clear your heart. If live in the higher stories, you can enjoy the beautiful scenery of the sea and sky joining together at far distance. There is a magnificent garden square in front of the buildings, and a sports and recreation area in the backyard with a leisure club underground, containing ultimate romance for you enjoying.</p><p>&nbsp;</p><p>Totally new elegant life</p><p>The buildings are in enriched appearance with distinctive modernist style to highlight more unique personality. Meeting the rising sun in morning and the sunset in twilight, you life will get better and enter a new world. The buildings recess to leave space for the square garden, which can purify the air and block the noisy streets to create peaceful atmosphere; the lobby hall is solemn and magnificent reflecting the elegant culture; each unit is specially set with a balcony with transparent glass railings to provide another selection of sightseeing and leisure. Let’s enjoy the warmth from the sunshine and also from the smile of everybody.</p><p><br/></p> "
        },
        "M0208": {
          "text": "Bright Light Center",
          "desc": "<h4>Black Box in Cracks</h4><p>&nbsp;</p><p>The project is to design the reconstruction of old buildings in urban area of Shanghai. The base is located between the inner-ring overhead and Mingzhu Light Rail Line in Putuo District. The original building is a 7-floor RC office building completed in 1994; except for reserving the original beam-column floor structure according to the owner’s requirement, the project plans and designs the plane configuration and elevation structure over again.</p><p>&nbsp;</p><p>The project is mainly used as lighting company’s office, design, exhibition and sales center, so the night-time lighting plan is the key point represented by the case. In terms of overall design concept, we take Black Box as starting point; and in order to show special light effect and lighting rhythm, we use the basic rectangle shape of buildings as the stage or screen for light exhibition and show.</p><p>&nbsp;</p><p>In terms of operation practices, the closed-type external wall above the second floor and of five floors high is irregularly equipped with 200 buried full-color LED light boxes (15 X30cm), which are designed to internally draw back into aluminum plate external wall, properly hiding the silicone sealant necessary for the fixing and waterproofing of glass surface. At daytime, the shadow and concave-convex relationship caused by the holding-back of light boxes forms the interest like cheese blocks; at night time, the application of sandblast glass and white baking finish inside light boxes realizes the even projection and reflection of LED light sources, and produces relatively good rendering effect. Every time when the curtain of night droops, the dark gray shape of the buildings will gradually fade out in the dim light of night, while LED light boxes will start to be miraculously transformed into star-lights of different colors.</p><p>In addition, on the east-side elevation of the building, continuously vertical sun visor of four-floor height will have the effect of sunshade at daytime. Also, at night time, the lamps hidden at the back side of the sun visor will project blue cold light on the lateral opening of building. Under the projection of indirect lighting, the bevel sun visor will form blue sequential strip-shaped lamp belt, and form a point-surface contrast with the light points of LED light boxes. In the bravery and flourishing urban night scenes, the black box in cracks presents the lighting situation different from signboards and neon lamps.</p><p>&nbsp;</p><p><br/></p> "
        },
        "M0311": {
          "text": "Guangxi Museum of Nationalities"
        },
        "M0405": {
          "text": "DF Nissan Office, R&amp;D",
          "desc": "<h4>Design Objective</h4><p>&nbsp;</p><p>Dongfeng Motor Company Limited is China’s largest foreign-funded enterprise, which is jointly established by China Dongfeng Motor Group and Japan Nissan Motor Group. Besides establishing headquarters base and commercial vehicle research &amp; development center in Wuhan, the project is even a most important headquarters base of <a name=\"OLE_LINK1\"></a>Dongfeng Motor Corporation Passenger Vehicle Company’s design and research &amp; development department.</p><p>&nbsp;</p><p>Both the office building and research &amp; development center of Dongfeng Motor Corporation Passenger Vehicle Company reflect the enterprise’s core value, but in terms of external environment, they consider absolutely different design layouts: The research &amp; development center and the proving road are required to be absolutely concealed, while the office building combines the openness of exhibition and the humanization of work; meanwhile, it concurrently considers the technology image of automobile industry and the perpetual spirit of environmental symbiosis.</p><p>&nbsp;</p><p>Design Concept</p><p>&nbsp;</p><p>Openness and concealment: In order to satisfy different concealment conditions, both the office building and the research &amp; development center adopt introversive design to realize the dialogue of concealed spaces in internal atrium, and also, they achieve the opening/ closing demand of different degrees by dint of different entrance and spatial function allocation. The model shows the spirit of industrial building through concise masses, while the two solid and virtual ovals imply the coordination of openness and exchange, and the overall field and building show the connotation of Chinese and Japanese enterprises and culture.</p><p>&nbsp;</p><p>The office building mainly consists of two solid building masses, and between the two buildings is a virtual space with a big atrium. The front office building is compatible with the public spaces constructed for the functions of external exhibition and conference, extends activities upward and connects the internal office building of the rear office building by dint of the atrium, and makes visitors and working personnel see the office areas of each floor; also, the front and rear office buildings are connected by dint of aerial corridor, metaphorizing that humanistic work environment reflects the functional relationship of communication and coordination at solid elements.</p><p>&nbsp;</p><p>The research &amp; development center is a building formed with external square and internal oval atrium. Its peripheral area is surrounded by grass slope, minimizing the external visual image of the building, and showing the strong concealment; and also, internal atrium is used as vertical-horizontal link line of each unit, and public field for communication and exchange.&nbsp;</p><p><br/></p>"
        },
        "M0409": {
          "text": "The Garden of Townhouse"
        },
        "M0411": {
          "text": "DF Motor Headquarters"
        },
        "M0414": {
          "text": "Shiyan Museum"
        },
        "M0510": {
          "text": "DF Honda Headquarters"
        },
        "M0523": {
          "text": "Songjiang Public Training Center"
        },
        "M0526": {
          "text": "Wanhong Headquarters"
        },
        "M0601": {
          "text": "DF Nissan Training Center",
          "desc": "<h4>Design Concept</h4><p>For the restriction of existing conditions, modern building modeling means are adopted to express the building’s internal basic functions and time spirit through building type itself.</p><p>By exploring and organically connecting the internal relations of spatial functions, and after analyzing the proportion, solid-virtual relationship, and comparison, etc., we have determined to use a solid system to unify complicated and disperse elevation elements, and meanwhile, maintain each element’s own characteristics and tension, make them form contrast, and thus produce vivid spatial atmosphere. Also, by taking white, medium gray, and red aluminum-plastic board as the material for elevation of external wall, and combining with glass curtain wall, polycarbonate, metal detail elements, and light yellow external wall sun visor, we make building elevation have modern active atmosphere, make subtle changes contained in unification, and make people enjoy abundant visual feelings.</p><p>Multi-function hall and amphitheater are separated from the system, forming the interlude and occlusion of blocks, and acting as the key point of balance and activity. The tilt modeling strengthens the tension and dynamic sense of buildings, and forms the spatial relationship with the roof.</p><p>Exhibition hall is at the east side of building entrance. The mass formed of light metal frame and glass curtain wall seems to suspend in the sky; the camera aperture emphasizes the exhibition function, and agglomerates visual line effectively; red aluminum plastic board is used to strengthen the existence of entrance, while the same form shows its relation with exhibition function.</p><p>The sunscreen system of classrooms is composed of push-and-pull sun visor and interior sunshade textile, forming active spatial elements. The extending solid connects complicated modeling elements, forms uniform system, and emphasizes the sculpture sense of masses.</p><p>The use of polycarbonate chemical material produces the effect of semi-transparent material on elevation, and forms subtle changes, and a neutral belt bet between transparency and non-transparency, and this meets internally concealed service functions, effective daylighting, and visual line blocking.</p><p>The green roof design connects the building and the surrounding environment naturally, relieves the heat arising from direct sunshine, optimizes surrounding air, and forms outdoor rest platform of amphitheatre and multi-function hall. Also, it uses spaces effectively, and makes the building produce the sense of more abundant spatial hierarchies.</p><p><br/></p> "
        },
        "M0708": {
          "text": "Nantong Rugaosix\n  construction headq",
          "desc": "<h4>Design Concept:</h4><p>1.The scheme involves a scale of 16 floors on ground and 1 floor underground. The base faces roads at three sides, and precisely, it faces the setback green belt of West Huizheng Road in the south, it is 15m away from Jizhuang &nbsp; Road and South &nbsp; Xuanhua Road respectively in the north and east, and it is separated from the park by a clearing for building in the west. The main vehicle entrance of the base will be set up at the north-side Jizhuang Road, and the pedestrian entrance will be set up neighboring to the main road West Huizheng Road.</p><p>&nbsp;</p><p>2. In terms of deployment, two podium buildings will be constructed. The west building will be used as office building’s entrance lobby, café, and restaurant, etc.; while the east building will set up emporium, gymnasium, and multi-purpose space, etc.. The main office building above the third floor will stretch over the two podium buildings, and will be in south-north direction; and the three masses will form an open Urban Hall. The ground floor and the parking lot on LB1 will be in cascade connection through an empty half-open space, indirectly introducing sunlight and air to the underground parking space.</p><p>&nbsp;</p><p>3. Plane layout will be transformed at the LOGO of Nantong No. 6 Construction. In terms of elevation molding, bare concrete and glass curtain wall will be used to build the agile project image, and the master building will be set up neighboring to West Huizheng Road, in order to raise the visual sense of the elevation along the street.</p><p><br/></p> "
        },
        "M0801": {
          "text": "Souxihu Hotel Yangzhou and Villa"
        },
        "M0815": {
          "text": "Nanjing Agricultural Exhibition Hall",
          "desc": "<h4>Design Concept</h4><p>[The Yangtze River] and [farmland] have bred numerous lives. Farmland is the [base] for agricultural development, and also the [place] for realizing agricultural technology.</p><p>The Yangtze River [water] is the source of agricultural irrigation. The combination of water and farmland forms the most important [antecedent] of agricultural technology.</p><p>The design scheme takes the image of [water] and [farmland] as the main concept for the design development of Internal &nbsp;Agricultural Technology &nbsp;Exchange Center.</p><p>&nbsp;</p><p>[Water] – Light shadow and glaring</p><p>Water produces the visual sense of shadow and glaring for reason of light; [shadow] reveals the gesture of water; and [glaring] activates the expression of water. The waving of shadow and the glaring radiance endow water with life.</p><p>[Farmland] – Systematic and organic</p><p>The crisscross ridges are separated by road network into a set of system, and the system is organically distributed for different sizes of land parcels. Different [farmlands] have diversified expressions and abundant color changes for reason of differences of tillage, making the ground full of animation.</p><p>&nbsp;</p><p>Base Environment Analysis</p><p>The base of the design scheme is located in Hexi New Town, Nanjing. Close to 65M Hexi Street (Weijiu Road) in the south, to 35M Leshan Road in the east, to 24M Nanxijiang West Street in the north, and to 24M Jihua Road and facing the land reserved for a park in the west, the base is the west-side end point of the [Dancing Axis] in the overall planning for Hexi New Town.&nbsp;</p><p><br/></p>"
        },
        "M0816": {
          "text": "Tiantai Jiaqi Building",
          "desc": "<h4>Design Concept</h4><p>A. Jiaqi Building is designed by following the special value and concept which start from people, culture and certain place, and is designed for context based on the abovementioned complicated elements. The design of Jiaqi Building attempts to show the time and space characteristics of design and construction, balance economic benefit and environmental resources, look for and find out the most appropriate and decent building and planning solutions aiming at the existing site, climate, history, and building cases.</p><p>B. As concerning the architectural planning and design of Jiaqi Building, perplexed by the sunlight of neighboring residential districts, we strive for balance in diversified thoughts at design layer, and apply consistent design philosophy to provide solutions of different expression forms. By drawing upon all useful opinions from designers, and communicating with the owner, planning department, and other social vested interest holders, we assist the owner to make many decisions necessary for project promotion, and finally determine the comprehensive development theme of this case. Therefore, the design of Jiaqi Building doesn’t adopt a given or uniform label, but realizes creation in diversification, not only expresses individuals’ wisdom and skills, but also meets planning department’s key points in planning, owner’s wish, and team spirit, and makes the building style maintained at a stable level in the same region.</p><p>C. We believe that, the design concept of Jiaqi Building will produce a good value-added work. It not only reflects the value of designers’ labor, the value pursued by developer and constructor, and the value expected by users, but also enhances the overall value in broad sense of community, society and environment. We hope to meet the challenges of urban transition and building renovation through pursuit of such cultural value added, and embody the responsibility and occupational mission for history, culture, environment and society in the process of creation.</p><p>&nbsp;</p><p>Outdoor Characteristics</p><p>n&nbsp;&nbsp; Composition of building’s external spatial form: In order to lower and avoid the building masses’&nbsp; impact on and conflict with neighboring districts’ residential sunlight and daylighting, and building background landscapes at the largest degree, we adopt the composite components such as plate-type ceiling, etc., and the virtual-solid mass treatment method aiming at external composition of building; endow the regular external space forms with the mark of culture in the south region of the Yangtze River, make them rich in changes, reduce the over-blocking of neighboring districts, and form an echo with Jiangjun Mountain sceneries in terms of building context through the combination of neutral and stable external wall color and modern blocks and panels. The material for external wall of department store building gives priority to dry-hanging granite burnt plate, and that for residences gives priority to imitated stone-faced brick painting; and the window adopted is spray-paint aluminum alloy middle-hollow light-reflecting silvery blue glass window.</p><p>Indoor Characteristics</p><p>n&nbsp;&nbsp; Building space creation: As for architectural space creation, in the part of residence: the plane layout of connecting unit entrance floors is adopted; householders could enter each residential floor under the guide of the dominant vertical elevator traffic space on the ground floor; and public exchange platform is established through the transitional connection section among units. Om the part of department store: The two-floor department store side is organized from outdoor traffic circulation, connected with internal and vertical traffic, and obviously distinguished from residential part. In order to protect the utilization rate and strength of existing green space and land at the largest degree, we adopt the layout element form of connecting units in series for the whole building, and integrate the whole building form into the overall landscapes of Jiangjun Mountain and Cuiping Mountain based on meeting the standard sunlight and ventilation requirements of neighboring districts by means of cutting, connecting, adding and reducing, etc.</p><p><br/></p> "
        },
        "M0826": {
          "text": "Fengsheng Tech.Park Lot C"
        },
        "M0900": {
          "text": "Socialism Cause Building of Huaiyin"
        },
        "M1020": {
          "text": "Haimen Internal Revenue Service",
          "desc": "<h4>Design Description:</h4><p>1. “Function First” Principle: The project includes multiple functions like office, service hall, and garage, etc., and has strong comprehensiveness. The design shall firstly start from meeting various service functions, and stick to that “form goes after function”.</p><p>2. “People Based” Principle: The functional subject of office building is office work, and working personnel are always the center of the project considerations. Based on the idea of providing a sunshine office environment for every working personnel, the project creates a sunshine building for sustainable development and with each major office facing the south.</p><p>3. “Sustainable Development” Principle: According to the requirements of the planning for long-term development of work environment, we introduce the advanced concepts of ecological building and sustainable development to the design of this project, pay attention to energy conservation, environmental protection, and the use of related new technologies, new materials, and new equipment, in order to make the buildings truly meet the requirements of the new times.</p><p>4. “Paying Attention to Spatial Landscape Recreation” Principle: When reasonably organizing the flow of personnel and the flow of materials in the courtyard to surely make them smooth, concise, efficient, and interference-free, we make efforts to create harmonious and habitable internal and external space environments, establish brand-new and orderly external image of national tax, and make the national tax building become a green orderly station for national tax personnel and tax payers.</p><p><br/></p> "
        },
        "M1026": {
          "text": "T-Mark Wholesale"
        },
        "M1029": {
          "text": "Green Forest World"
        },
        "M1104": {
          "text": "Conceptual Design for Qian jiang New T"
        },
        "M1112": {
          "text": "Conceptual Design for Little Kaohsiung"
        },
        "M1121": {
          "text": "Dongguan China Post Building"
        },
        "M1201": {
          "text": "Ching Fu College Zhangzhou Campus"
        },
        "M1203": {
          "text": "Xiangyang Xintiandi"
        },
        "M1208": {
          "text": "Ching Fu College Phase 1"
        },
        "M1302": {
          "text": "Boly Culture and Commercial Plaza in Yu",
          "desc": "<h4><p>Overall Layout Planning</h4><p>1. Overall Layout</p><p>The objective of overall planning is to create a commercial complex which is full of cultural art, abundant and diversified, and orderly.</p><p>The land parcel for the base is trapezoidal, around 400m in the east-west direction, 190m wide in the south-north direction, and around 500m at local places, and covers a floor space of 119,070m2. According to the characteristics of the land parcel, the buildings are mainly arranged in pieces and connected with pedestrian street; at local land sections, internal street is formed through south-north layout, in order to enrich the spatial form of overall cultural art business street.</p><p>(1) Spatial Structure</p><p>From the south side, there are eight e-commerce buildings of 1-12 floors and art creation street businesses of 1-2 floors; to the north, there are in turn the Cultural New World Pedestrian of 1-3 floors; close to Tangjialingdong Road and Chengdong Road, cultural entertainment shopping, cinema, and fashion sports center of 1-4 floors, and tower building of 42 floors, forming a complete space sequence. At both ends of the sequence are independent, big-mass commercial flagship stores; the commercial masses in the middle are on the small side, and the flexible layout creates the changes interlaced inside and outside the business street; the one-stop layout of the commercial buildings at the Central Culture and Art Pedestrian Business Street creates the high tide of the whole sequence.</p><p>(2) Spatial Characteristics:</p><p>1) Connecting corridor: Like the tie, the connecting corridor integrates each independent commercial building into an organic integer; meanwhile, it links the commercial projects such as cultural entertainment shopping, cinema, fashion sports center, and cultural new world, etc. The combination of businesses with different characteristics will greatly enhance the overall competitiveness and activity of these businesses. The two-floor connecting corridor alternatively creates abundant and diversified spatial experiences inside and outside buildings, and it is not only a key commercial traffic artery, but also a landscape viewing platform.</p><p>2) Terrace and balcony: The business street of cultural new world is embodied at the creation of more good-quality and abundant outdoor activity spaces. The roof platform formed along the side of pedestrian street by making use of the different building heights, and the big terrace on ground floor are the places for tourists to get close to streetscapes, taste tea, enjoy the glorious moon, and appreciate cultural art atmosphere. The roof greening softens the indoor and outdoor transition and roof commerce platform; and it is the most sensitive place for people to experience the nature.</p><p>3) Cultural and art pedestrian street: The natural water system formed naturally along the east side of the base is the environmental resource to be used, and it introduces people to pedestrian street, and then enter the commercial bodies such as cultural entertainment shopping, cinema, fashion sports center and exhibition center, etc. The business forms give priority to restaurant, and take art and culture as assistance. The central round-shaped art plaza is arranged therein to enrich the outdoor activity spaces, and provides possibility for potential applications. The round shape integrates the applications such as performance stage, children adventure playground and holding of various celebration activities, etc.</p><p><br/></p> "
        },
        "M1306": {
          "text": "yu high-speed logistics park concept",
          "desc": "<h4>Design Concept</h4><p>Concept associated with floating island phenomenon</p><p>The concept of ecological floating island is mainly to improve ecology. In this concept, river may have landscape function, but it lays stress on improving water quality, treating sewage, absorbing and collecting the nutritious substances and other pollutants in water body, and finally remove the pollutants like nutritious loads, etc. accumulated by plants in the water body in the form of harvesting plants eventually. The water source used in the whole base is integrated, while the combination of green building and river forms the concept of ecological floating island.</p><p>In the concept, garden is arranged in aerial bridge and commercial space, in order to provide shadow and oxygen-enrichment environment for building greening.</p><p>&nbsp;</p><p>&nbsp;</p><p>Ecological system adopted for inside of office building</p><p>Each floor of offices is equipped with external balcony and push-pull glass door leading to upside in order to control the degree of natural ventilation.</p><p>Residential district and apartment shall use the concept of ecological building to improve the environment and rest oasis roof in order to achieve the ecological effect.</p><p>The vivid dynamic trend of electric current is added, and transformed into the continuity and linkage of personnel’s circulation. People, like electronics, are taken by electric current to every place for staying for a time, such as commerce, office, and residence, etc.</p><p><br/></p> "
        },
        "M1310": {
          "text": "Ching Fu Green Headquarters Park"
        },
        "M1317": {
          "text": "Baiyupao Hot Spring &amp; Resort in Harbin"
        },
        "V0802": {
          "text": "Vietnam Bac Ninh Casino Hotel",
          "desc": "<h4>Design Concept</h4><p>The project is developed by a famous real estate developer in Viet Nam. Upon the demand on maturity and commercial hotel of foreign traders in the provinces surrounding Viet Nam’s capital Hanoi, and cooperating with the acquisition of license for CASINO Gambling House, the developer plans to construct a five-hotel business hotel containing 700 guestrooms, and arrange the diversified multi-function spaces like conference and exhibition, shopping and restaurant, night club, health club, gambling house, and show place, etc.; outside the hotel, the developer will construct a musical waterfall landscape image with drop difference of three building floors, making light, shadow and water miraculously transformed into the performance fairy at night time.</p><p>&nbsp;</p><p>Viet Nam is deeply affected by Chinese culture, and for the “geomantic omen” thought in design of gambling house, this project has established the direction structure of main spaces at the beginning of design; however, “circulation” arrange is another challenge in the gambling house hotel, and the VIP and guest channel to management circle connect the facilities in different areas and the background arrangement. Viet Nam’s folk culture and understanding on [the way to treat guests] will be applied to this case. In terms of spatial conversion, building materials selection and arrangement, and internal decoration topic, “market consideration, function domination, and benefit first” endows the adventure to CASINO full of endless happiness, and the intimate services for guests show guests’ great dignity and honor.</p><p><br/></p> "
        },
        "V1001": {
          "text": "Palais de Lotus"
        },
        "V1302": {
          "text": "Entertainment Building A2/A3 beside Da"
        }
      });
      CASEDETAILS = {
        "1003": "<h3>I Hong Factory and Office Building</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2010 / 2012</p><p>PROGRAM: Factory / Office /</p><p>CLIENT: I Hong Hot-Galanization\n  Industrial Co., Ltd.</p><p>SITE AREA: 7,200sm</p><p>BUILDING AREA: 5,220sm</p><p>Height / Floors: 19.33m / 3F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: WL Hsia</p><p>MAIN CONTRACTOR: Hong Ming Construction\n  Co., Ltd</p><p>cost: TWD 42,576,000</p>",
        "1006": "<h3>Maitreya Temple</h3><p>LOCATION: Hsinchu, Taiwan</p><p>DESIGN / COMPLETION: 2010 -</p><p>PROGRAM: Religion</p><p>CLIENT: Providence Maitreya\n  Buddha Missionary Institute</p><p>SITE AREA: 77,549sm</p><p>BUILDING AREA: 8,023sm</p><p>Height / Floors: 34.7m</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: SM Liou</p>",
        "1008": "<h3>China Steel Headquarter</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2010 / 2011</p><p>PROGRAM: Headquarter Off</p><p>CLIENT: China Steel Corpora</p><p>BUILDING AREA: 6,673sm</p><p>SERVICE: Interior Scheme</p><p>LEAD ARCHITEC: SM Liou</p><p>CO-ARCHITECTS / LDI: Independence Design\n  Associates</p>",
        "1010": "<h3>Ming-De Building at National Chao-Cho</h3><p>LOCATION: Pingtung, Taiwan</p><p>DESIGN / COMPLETION: 2010 / 2012</p><p>PROGRAM: Classroom</p><p>CLIENT: National Chao-Chou Senior\n  High School</p><p>SITE AREA: 53,671sm</p><p>BUILDING AREA: 4,883sm</p><p>Height / Floors: 19.98m / 4F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: WL Hsia</p><p>MAIN CONTRACTOR: Singfa Construction Co.,\n  Ltd</p><p>cost: TWD 85,945,000</p>",
        "1024": "<h3>Hsu's Dermatologic Clinic</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2010 / 2011</p><p>PROGRAM: Clinic</p><p>CLIENT: Dr. Hsu Qing Zhe</p><p>BUILDING AREA: 207sm</p><p>SERVICE: Interior Design a</p><p>LEAD ARCHITEC: SM Liou</p><p>MAIN CONTRACTOR: Da Lin Interior Design\n  and Industrial Co., Ltd</p><p>cost: TWD 3,600,000</p>",
        "1110": "<h3>Queena Plaza Hotel Hall 3</h3><p>LOCATION: Tainan, Taiwan</p><p>DESIGN / COMPLETION: 2011 -</p><p>PROGRAM: Boutique Hotel</p><p>CLIENT: Greaten Group</p><p>SITE AREA: 4,532sm</p><p>BUILDING AREA: 32,123sm</p><p>Height / Floors: 90.2m / B4+17F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+WL Hsia</p><p>MAIN CONTRACTOR: San Min Construction\n  Development Co., Ltd</p>",
        "1122": "<h3>Cai's Residence</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2011</p><p>PROGRAM: Residence</p><p>CLIENT: Miss Cai Xiu yu</p><p>BUILDING AREA: 191sm</p><p>SERVICE: Interior Design a</p><p>LEAD ARCHITEC: SM Liou</p><p>MAIN CONTRACTOR: Da Lin Interior Design\n  and Industrial Co., Ltd</p><p>cost: TWD 1,165,000</p>",
        "1130": "<h3>Dream Mall Phase 2</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2011 / 2013</p><p>PROGRAM: Hotel / Commer</p><p>CLIENT: President Fair\n  Development Corp.</p><p>SITE AREA: 27,634sm</p><p>BUILDING AREA: 371,950sm</p><p>Height / Floors: B4+55F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Jason Huang</p>",
        "1138": "<h3>Ci Shi Ancestral Shrine</h3><p>LOCATION: Miaoli, Taiwan</p><p>DESIGN / COMPLETION: 2011 -</p><p>PROGRAM: Religion</p><p>CLIENT: Providence Maitreya\n  Buddha Missionary Institute</p><p>SITE AREA: 9,775sm</p><p>BUILDING AREA: 8,327sm</p><p>Height / Floors: 17.95m</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: SM Liou</p>",
        "1141": "<h3>Baisha Ville Resort in Kenting National P</h3><p>LOCATION: Pingtung, Taiwan</p><p>DESIGN / COMPLETION: 2011 -</p><p>PROGRAM: Villa</p><p>CLIENT: Tempo KTV Co.</p><p>SITE AREA: 29,283sm</p><p>BUILDING AREA: 3,370sm</p><p>Height / Floors: 10.7m / 3F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+Vincent Chao+SM\n  Liou</p>",
        "1143": "<h3>E-DA Asia Square</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2011 -</p><p>PROGRAM: Hotel / Departm</p><p>CLIENT: E United Group</p><p>SITE AREA: 18,024sm</p><p>BUILDING AREA: 240,000sm</p><p>Height / Floors: 122.4m / B6+29</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+Vincent Chao+Jason\n  Huang</p>",
        "1144": "<h3>Aurona Industries, Phase F & Office Buil</h3><p>LOCATION: Tainan, Taiwan</p><p>DESIGN / COMPLETION: 2011 -</p><p>PROGRAM: Factory / Office</p><p>CLIENT: Aurona Industries, Inc.</p><p>SITE AREA: 10,843sm</p><p>BUILDING AREA: 15,352sm</p><p>Height / Floors: 20.1m / 5F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: WL Hsia+SM Liou</p><p>MAIN CONTRACTOR: Hua Feng Construction\n  Co., Ltd</p><p>cost: TWD 215,627,000</p><p>UNDER CONSTRUCTION</p>",
        "1150": "<h3>Citizen Hotel</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2011 / 2012</p><p>PROGRAM: Hotel</p><p>CLIENT: Citizen Hotel</p><p>SITE AREA: 514sm</p><p>BUILDING AREA: 7,125sm</p><p>Height / Floors: 43.4m / B3+14F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+WL Hsia</p><p>MAIN CONTRACTOR: Fuxi Construction Co.,\n  Ltd.</p><p>cost: TWD 62,700,000</p>",
        "1151": "<h3>TCI Fab S9 in PABP</h3><p>LOCATION: Pingtung, Taiwan</p><p>DESIGN / COMPLETION: 2011 -</p><p>PROGRAM: Factory / Office</p><p>CLIENT: TCI Integrated Bioscience\n  Design</p><p>SITE AREA: 10,866sm</p><p>BUILDING AREA: 7,504sm</p><p>Height / Floors: 9.89m / 2F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+SM Liou</p><p>MAIN CONTRACTOR: Quan Xing Construction\n  Co., Ltd</p><p>cost: TWD 129,900,000</p><p>UNDER CONSTRUCTION</p>",
        "1210": "<h3>Maymao Maitreya Buddha Missionary I</h3><p>LOCATION: Maymyo, Myanmar</p><p>DESIGN / COMPLETION: 2012</p><p>PROGRAM: Religion</p><p>CLIENT: Maitreya Great Tao</p><p>SITE AREA: 8,712sm</p><p>BUILDING AREA: 15,476sm</p><p>Height / Floors: 36m / 5F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: SM Liou</p>",
        "1216": "<h3>Hengchuen FL Service Apartment</h3><p>LOCATION: Pingtung, Taiwan</p><p>DESIGN / COMPLETION: 2012</p><p>PROGRAM: Service Apartme</p><p>CLIENT: FL Group</p><p>BUILDING AREA: 29,575sm</p><p>SERVICE: Interior Scheme</p><p>LEAD ARCHITEC: SM Liou</p>",
        "1221": "<h3>E-DA Cancer Hospital</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2009 / 2011</p><p>PROGRAM: Hospital</p><p>CLIENT: E-DA Hospital</p><p>SITE AREA: 138,455sm</p><p>BUILDING AREA: 114,496sm</p><p>Height / Floors: 49.9m / B2+12F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+SM Liou</p><p>CO-ARCHITECTS / LDI: -</p><p>MAIN CONTRACTOR: Xinquan Construction\n  Co., Ltd</p><p>UNDER CONSTRUCTION</p>",
        "1225": "<h3>Kaohsiung American School Overall Cam</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2012</p><p>PROGRAM: Administration /</p><p>CLIENT: Kaohsiung American School</p><p>SITE AREA: 29,302sm</p><p>BUILDING AREA: 23,600sm</p><p>Height / Floors: B1+4F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Ryan Peng+WL\n  Hsia+SM Liou</p><p>cost: TWD 464,633,813</p><p>Competition invited and\n  The Second</p>",
        "1228": "<h3>E-DA Theme Park Phase 2 & Castle Hote</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2012 -</p><p>PROGRAM: Theme Park / In</p><p>CLIENT: E United Group</p><p>SITE AREA: 179,800sm</p><p>BUILDING AREA: 177,708sm</p><p>Height / Floors: 21.6m / B1+6F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu</p>",
        "1238": "<h3>Lohmann Veterinary Vaccine Manufactu</h3><p>LOCATION: Pingtung, Taiwan</p><p>DESIGN / COMPLETION: 2012 -</p><p>PROGRAM: Factory / Office</p><p>CLIENT: Lonmann Taiwan Company\n  Limited</p><p>SITE AREA: 29,256sm</p><p>BUILDING AREA: 7,408sm</p><p>Height / Floors: 18.4m / 3F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Vincen</p><p>CO-ARCHITECTS / LDI: DCPL International,\n  India</p><p>cost: TWD 750,000,000</p>",
        "1243": "<h3>Bamboo Hotel</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2012 / 2014</p><p>PROGRAM: Hotel</p><p>CLIENT: Hong Yang Ji Ye Co.,</p><p>BUILDING AREA: 3,060sm</p><p>SERVICE: Interior Design a</p><p>LEAD ARCHITEC: SM Liou</p><p>UNDER CONSTRUCTION</p>",
        "1249": "<h3>Aquarium in NMMST</h3><p>LOCATION: Keelung, Taiwan</p><p>DESIGN / COMPLETION: 2012 -</p><p>PROGRAM: Aquarium</p><p>CLIENT: Ching Yang Aqua Marine\n  Enterprise Co., Ltd</p><p>SITE AREA: 11,614sm</p><p>BUILDING AREA: 15,488sm</p><p>Height / Floors: 20.6m / B1+4F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+Ryan P</p><p>CO-ARCHITECTS / LDI: Foster+Partners (UK) /\n  Advanced Aquarium</p><p>MAIN CONTRACTOR: Fu Tsu Construction Co.,\n  Ltd.</p><p>cost: TWD 1,350,000,000</p>",
        "1303": "<h3>Tianhui Maitreya Buddha Missionary Ins</h3><p>LOCATION: Indonesia</p><p>DESIGN / COMPLETION: 2013</p><p>PROGRAM: Religion</p><p>CLIENT: Maitreya Great Tao</p><p>SITE AREA: 12,984sm</p><p>BUILDING AREA: 24,141sm</p><p>Height / Floors: 38.6m / 6F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: SM Liou</p>",
        "1315": "<h3>Retail and Restaurant Space in NMMST</h3><p>LOCATION: Keelung, Taiwan</p><p>DESIGN / COMPLETION: 2013 / 2014</p><p>PROGRAM: Restaurant / Sho</p><p>CLIENT: Ching Yang Aqua M</p><p>BUILDING AREA: 2,771sm</p><p>SERVICE: Interior Constru</p><p>LEAD ARCHITEC: SM Liou</p><p>MAIN CONTRACTOR: Da Lin Interior Design\n  and Industrial Co., Ltd</p><p>cost: TWD 54,179,957</p>",
        "1320": "<h3>Crown Aluminum Yongan Fab</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2013 -</p><p>PROGRAM: Factory / Office</p><p>CLIENT: Crown Aluminum Co., Ltd.</p><p>SITE AREA: 3,382sm</p><p>BUILDING AREA: 4,640sm</p><p>Height / Floors: 17.85m / 4F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Vincent Chao</p><p>MAIN CONTRACTOR: Zheng Chen Construction\n  Co., Ltd</p><p>cost: TWD 93,920,000</p><p>UNDER CONSTRUCTION</p>",
        "1323": "<h3>TCI & NCHU Academia-Industry Collabo</h3><p>LOCATION: Taichung, Taiwan</p><p>DESIGN / COMPLETION: 2013 - 2014</p><p>PROGRAM: Laboratory</p><p>CLIENT: TCI Integrated Biosci</p><p>BUILDING AREA: 640sm</p><p>SERVICE: Interior Scheme</p><p>LEAD ARCHITEC: SM Liou</p>",
        "1334": "<h3>Batam Maitreya Buddha Missionary Insti</h3><p>LOCATION: Batam, Indonesia</p><p>DESIGN / COMPLETION: 2014 -</p><p>PROGRAM: Religion</p><p>CLIENT: Maitreya Great Tao</p><p>SITE AREA: 217,856sm</p><p>BUILDING AREA: 300,288sm</p><p>Height / Floors: 72m / 6F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: SM Liou</p>",
        "1401": "<h3>Fo Guang Shan Monastery Huzhong Si</h3><p>LOCATION: Taichung, Taiwan</p><p>DESIGN / COMPLETION: 2014</p><p>PROGRAM: Religion</p><p>CLIENT: Fo Guang Shan Mon</p><p>SITE AREA: 8,052sm</p><p>BUILDING AREA: 34,612sm</p><p>SERVICE: Interior Scheme</p><p>LEAD ARCHITEC: SM Liou</p>",
        "1402": "<h3>The Lin Banquet</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2014 -</p><p>PROGRAM: Banquet / Resta</p><p>CLIENT: Lin Garden Group</p><p>SITE AREA: 5,086sm</p><p>BUILDING AREA: 25,902sm</p><p>Height / Floors: 36.6m / B3+9F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+WL Hsia</p>",
        "1406": "<h3>JUNG Shigang Apartment</h3><p>LOCATION: Kinmen, Fujian</p><p>DESIGN / COMPLETION: 2014 -</p><p>PROGRAM: Apartment</p><p>CLIENT: JUNG Construction Co.,\n  Ltd</p><p>SITE AREA: 490sm</p><p>BUILDING AREA: 3,323sm</p><p>Height / Floors: 32.25m / B2+9F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: WL Hsia</p><p>MAIN CONTRACTOR: JUNG Construction Co.,\n  Ltd.</p><p>cost: TWD 15,283,684 (</p>",
        "1408": "<h3>Feasibility Evaluation Plan for Sightseein</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2014 -</p><p>PROGRAM: Sightseeing Facil</p><p>CLIENT: The Tourism Associated\n  Affairs of Kaohsiung City</p><p>SERVICE: Landscape Desi</p><p>LEAD ARCHITEC: Vincent Chao</p><p>CO-ARCHITECTS / LDI: URBANET Consulting Group</p>",
        "9015": "<h3>Tongmeng Mansion</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2001 / 2004</p><p>PROGRAM: Apartment</p><p>CLIENT: Nanhexingchan Industrial\n  Co., Ltd.</p><p>SITE AREA: 2,014sm</p><p>BUILDING AREA: 11,546sm</p><p>Height / Floors: 48.2m / B2+14F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Ryo Huang+SM Liou</p><p>MAIN CONTRACTOR: Yutai Construction Co.,\n  Ltd</p><p>cost: TWD 163,000,000</p>",
        "9101": "<h3>Harbor Light Rail Transit Station and the </h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2002 / 2003</p><p>PROGRAM: Light Rail Statio</p><p>CLIENT: Public Works Bureau\n  Kaohsiung City Government</p><p>SITE AREA: 23,108sm</p><p>Height / Floors: 38.2m</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+WL Hsia</p><p>MAIN CONTRACTOR: Chun De Construction Co.,\n  Ltd.</p><p>cost: TWD 36,000,000</p><p>The First Session of the\n  Kaohsiung good urban design works fine landscape Choice Awards</p>",
        "9201": "<h3>Landscape Design for Kinmen Kaoliang L</h3><p>LOCATION: Kinmen, Fujian</p><p>DESIGN / COMPLETION: 2003 / 2004</p><p>PROGRAM: Park</p><p>CLIENT: Kinmen Kaoliang Liquor\n  Inc.</p><p>SITE AREA: 224,000sm</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: WL Hsia+Vincent Chao</p><p>CO-ARCHITECTS / LDI: -</p><p>MAIN CONTRACTOR: JUNG Construction Co.,\n  Ltd.</p><p>cost: TWD 47,450,000</p>",
        "9217": "<h3>Administration Building &Assembly Hal</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2003 / 2007</p><p>PROGRAM: Classroom / offic</p><p>CLIENT: Shu-Te University</p><p>SITE AREA: 158,793sm</p><p>BUILDING AREA: 31,330sm</p><p>Height / Floors: 25.8m / B2+5F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+WL Hsia</p><p>MAIN CONTRACTOR: Long Da Construction Co.,\n  Ltd.</p><p>cost: TWD 144,996,449</p>",
        "9230": "<h3>KMRT 05/R10 Formosa Boulevard Statio</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2003 / 2005</p><p>PROGRAM: Subway Station</p><p>CLIENT: Kaohsiung Rapid Transit\n  Corporation</p><p>SITE AREA: 27,000sm</p><p>BUILDING AREA: 35,000sm</p><p>Height / Floors: 20m / B3+1F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: Ryo Huang+Vin</p><p>CO-ARCHITECTS / LDI: Shin Takamatsu Architect\n  & Associates Co.,</p><p>MAIN CONTRACTOR: RSEA Engineering\n  Corporation / KAJIMA Co</p><p>2009Architecture Yuam-Yie\n  Award,Kaohsiung Special Award</p>",
        "9306": "<h3>Fuhui Mansion</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2004 / 2007</p><p>PROGRAM: Bank / Apartme</p><p>CLIENT: Mr. Dai Jin Ping</p><p>SITE AREA: 736sm</p><p>BUILDING AREA: 3,402sm</p><p>Height / Floors: 37m / B2+9F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: WL Hsia</p><p>MAIN CONTRACTOR: Darmaw Construction Co.,\n  Ltd.</p><p>cost: TWD 20,477,528</p>",
        "9311": "<h3>Chingfu Group Headquarters</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2004 / 2007</p><p>PROGRAM: Office</p><p>CLIENT: Ching Fu Group</p><p>SITE AREA: 7,123sm</p><p>BUILDING AREA: 25,179sm</p><p>Height / Floors: 55.6m / B2+10F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+WL Hsi</p><p>CO-ARCHITECTS / LDI: RSH+P (UK)</p><p>MAIN CONTRACTOR: Fu Tsu Construction Co.,\n  Ltd.</p><p>cost: TWD 910,000,000</p><p>RIBA Intern</p><p>First Republic of China\n  Urban Design Award finalists</p>",
        "9316": "<h3>Hai Guang Park</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2004 / 2005</p><p>PROGRAM: Park / Cultural r</p><p>CLIENT: Maintreance Office,\n  Public Works Bureau of Kaohsiung City Governme</p><p>SITE AREA: 61,622sm</p><p>Height / Floors: 2F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+WL Hsia</p><p>MAIN CONTRACTOR: Le Qing Shan\n  Construction Co., Ltd.</p><p>cost: TWD 18,000,000</p>",
        "9345": "<h3>SuperAlloy Industrial, Phase 3</h3><p>LOCATION: Yunlin, Taiwan</p><p>DESIGN / COMPLETION: 2004 / 2007</p><p>PROGRAM: Factory / Office</p><p>CLIENT: SuperAlloy Industrial\n  Co., Ltd</p><p>BUILDING AREA: 66,461sm</p><p>Height / Floors: 21.75m / B1+5F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+WL Hsia</p><p>MAIN CONTRACTOR: Gu Yu Ming Construction\n  Co., Ltd</p><p>cost: TWD 313,381,188</p>",
        "9350": "<h3>Library at I-Shou University</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2004 / 2006</p><p>PROGRAM: Library</p><p>CLIENT: I-Shou University</p><p>SITE AREA: 9,471sm</p><p>BUILDING AREA: 31,331sm</p><p>Height / Floors: 12.6m / B3+5F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+SM Lio</p><p>CO-ARCHITECTS / LDI: RSH+P (UK)</p><p>cost: TWD 156,652,900</p>",
        "9353": "<h3>Da Ya Dentistry</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2004 / 2005</p><p>PROGRAM: Clinic</p><p>CLIENT: Da Ya Dentistry</p><p>BUILDING AREA: 1,149sm</p><p>Height / Floors: 28.5m / B1+9F</p><p>SERVICE: Facade Design /</p><p>LEAD ARCHITEC: SM Liou</p>",
        "9437": "<h3>SUPER New Town</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2004 / 2011</p><p>PROGRAM: Housing</p><p>CLIENT: Yieh Mau Corp.</p><p>SITE AREA: 24,436sm</p><p>BUILDING AREA: 70,444sm</p><p>Height / Floors: 17.3m / B1+5F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Ryo Huang</p><p>MAIN CONTRACTOR: Xinquan Construction Co.,\n  Ltd</p>",
        "9441": "<h3>E-DA Tower & Exhibition and Conventio</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2005 - 2006</p><p>PROGRAM: E-DA Tower / Ex</p><p>CLIENT: E United Group</p><p>SITE AREA: 361,681sm</p><p>BUILDING AREA: 216,687sm</p><p>Height / Floors: 398m / B4+15F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Vincent Chao</p>",
        "9442": "<h3>E-DA Outlet Mall</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2005 / 2010</p><p>PROGRAM: Retail / Departm</p><p>CLIENT: E United Group</p><p>BUILDING AREA: 129,052sm</p><p>Height / Floors: B4+5F</p><p>SERVICE: Architectural Faç</p><p>LEAD ARCHITEC: MY Hsu</p><p>CO-ARCHITECTS / LDI: cdi (JAPAN)</p>",
        "9444": "<h3>Earl's District in E-DA World</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2005 / 2011</p><p>PROGRAM: Villa</p><p>CLIENT: Eliter International\n  Corp.</p><p>SITE AREA: 9,937sm</p><p>BUILDING AREA: 11,608sm</p><p>Height / Floors: 18.1m / 4F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+Ryo Huang</p><p>MAIN CONTRACTOR: Xinquan Construction\n  Co., Ltd</p><p>cost: TWD 340,371,044</p>",
        "9445": "<h3>Ling Xiu Village</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2005 / 2008</p><p>PROGRAM: Villa</p><p>CLIENT: Xin Lin Construction Co.,\n  Ltd</p><p>SITE AREA: 4,974sm</p><p>BUILDING AREA: 4,314sm</p><p>Height / Floors: 9.94m / 3F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: Ryo Huang</p><p>MAIN CONTRACTOR: Shenglin Construction\n  Co., Ltd.</p><p>cost: TWD 22,359,729</p>",
        "9456": "<h3>Garden Villa Kaohsiung</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2005 / 2008</p><p>PROGRAM: Hotel</p><p>CLIENT: Taiwan Shoufu University</p><p>SITE AREA: 17,251sm</p><p>BUILDING AREA: 34,152sm</p><p>Height / Floors: 34.8m / B2+10F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+Ryo Huang</p><p>MAIN CONTRACTOR: Fangyuanhao Construction\n  Co., Ltd</p><p>cost: TWD 500,000,000</p>",
        "M0804": "<h3>Weihai New Dongyang Huleitang Hot Sp</h3><p>LOCATION: Wendeng, Shandong</p><p>DESIGN / COMPLETION: 2008 / 2009</p><p>PROGRAM: Hot Spring Hote</p><p>CLIENT: Xin Dong Yang Group</p><p>SITE AREA: 2,400,000sm</p><p>BUILDING AREA: 334,000sm</p><p>Height / Floors: 21m / 5F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+WL Hsia+LM Kuo</p>",
        "M1029": "<h3>Green Forest World</h3><p>LOCATION: Huishui, Guizhou</p><p>DESIGN / COMPLETION: 2010 / 2011</p><p>PROGRAM: Hotel / Villa / Ret</p><p>CLIENT: Careall Group</p><p>SITE AREA: 2,933,348sm</p><p>BUILDING AREA: 332,700sm</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: WL Hsia+Jason Huang</p>",
        "M1112": "<h3>Conceptual Design for Little Kaohsiung </h3><p>LOCATION: Pingtan, Fujian</p><p>DESIGN / COMPLETION: 2011 / 2012</p><p>PROGRAM: Office / Hotel / Retail /\n  Apartment</p><p>SITE AREA: 117,988sm</p><p>BUILDING AREA: 827,773sm</p><p>Height / Floors: B2+58F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+WL Hsia+Jason\n  Huang</p>",
        "M1104": "<h3>Conceptual Design for Qian jiang New T</h3><p>LOCATION: Wenling, Zhejiang</p><p>DESIGN / COMPLETION: 2011 / 2013</p><p>PROGRAM: Hotel / Villa / Ret</p><p>CLIENT: E United Group</p><p>SITE AREA: 2,918,700sm</p><p>BUILDING AREA: 3,436,900sm</p><p>Height / Floors: 60m / B1+20F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Jason Huang</p>",
        "Dream Mall Phase 2": "<h3>M1203</h3><p>LOCATION: Xiangyang HuBei</p><p>PROGRAM: Hotel / Commer</p><p>CLIENT: Xiangyang Yake Business District Development Co.,Ltd.</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: WL Hsia+Jason Huang</p>",
        "M1203": "<h3>Xiangyang Xintiandi</h3><p>LOCATION: Xiangyang, Hubei</p><p>DESIGN / COMPLETION: 2012 / 2013</p><p>PROGRAM: Hotel / Commer</p><p>CLIENT: Xiangyang Yake Business\n  District Development Co.,Ltd.</p><p>SITE AREA: 117,993sm</p><p>BUILDING AREA: 734,899sm</p><p>Height / Floors: B2+46F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Jason</p><p>CO-ARCHITECTS / LDI: DCI Designgroup\n  International</p>",
        "M1310": "<h3>Ching Fu Green Headquarters Park</h3><p>LOCATION: Zhangzhou, Fujian</p><p>DESIGN / COMPLETION: 2013 / 2014</p><p>PROGRAM: Hotel / Commer</p><p>CLIENT: Ching Fu Group</p><p>SITE AREA: 1,552,000sm</p><p>BUILDING AREA: 570,000sm</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Jason Huang</p>",
        "1206": "<h3>Jinmen sanchuang</h3><p>LOCATION: Kinmen, Fujian</p><p>DESIGN / COMPLETION: 2012-</p><p>PROGRAM: Hotel / Commer</p><p>CLIENT: Hon Hai Technology Group</p><p>SITE AREA: 28,300sm</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Jason Huang</p>",
        "M1306": "<h3>yu high-speed logistics park concept</h3><p>LOCATION: Yunxiao, Fujian</p><p>DESIGN / COMPLETION: 2013-</p><p>PROGRAM: Office / Hotel / R</p><p>CLIENT: Ching Fu Group</p><p>SITE AREA: 188644sm</p><p>BUILDING AREA: 746,182sm</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Jason Huang</p>",
        "M0311": "<h3>Guangxi Museum of Nationalities</h3><p>LOCATION: Nanning, Guangxi</p><p>DESIGN / COMPLETION: 2003</p><p>PROGRAM: Exhibition / boo</p><p>CLIENT: Bureau of Cultural\n  Affairs Guangxi</p><p>SITE AREA: 86,000sm</p><p>BUILDING AREA: 30,763sm</p><p>Height / Floors: B1+4F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: WL Hsia</p><p>CO-ARCHITECTS / LDI: RTKL (USA)</p><p>cost: CNY 148,230,000</p>",
        "M0414": "<h3>Shiyan Museum</h3><p>LOCATION: Shiyan, Hubei</p><p>DESIGN / COMPLETION: 2004</p><p>PROGRAM: Museum</p><p>CLIENT: Shiyan City Government</p><p>BUILDING AREA: 9,900sm</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: LM Kuo</p>",
        "0738": "<h3>E-DA Royal Theater</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2007 / 2010</p><p>PROGRAM: Professional Theater Performances</p><p>CLIENT: E United Group</p><p>SITE AREA: 8,841sm</p><p>BUILDING AREA: 10,322sm </p><p>Height / Floors: 21.6m / B4+3F</p><p>SERVICE: Interior Design / Stage Equipment Design</p><p>LEAD ARCHITEC: MY Hsu+SM Liou</p><p>CO-ARCHITECTS / LDI: Lin & Associates, Architects</p><p>CONSULTANTS: Xinquan Construction Co., Ltd</p>",
        "0801": "<h3>Turnkey Project for Kaohsiung Exhibition</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2008 / 2010</p><p>PROGRAM: Exhibition / Mee</p><p>CLIENT: Kaohsiung City\n  Government</p><p>SITE AREA: 44,929sm</p><p>BUILDING AREA: 63,228sm</p><p>Height / Floors: 37.8m / B1+3F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+WL Hsi</p><p>CO-ARCHITECTS / LDI: RTKL (USA)</p><p>cost: TWD 2,830,000,000</p><p>TurnKey Competition\n  invited and The Third</p>",
        "M1201": "<h3>Ching Fu College Zhangzhou Campus</h3><p>LOCATION: Yunxiao, Fujian</p><p>DESIGN / COMPLETION: 2012 -</p><p>PROGRAM: Administration /</p><p>CLIENT: Ching Fu Group</p><p>SITE AREA: 990,000sm</p><p>BUILDING AREA: 263,630sm (Total2</p><p>Height / Floors: B1+8F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+WL Hsi</p><p>CO-ARCHITECTS / LDI: 10 Design (HK) / Fengyu\n  Design</p><p>MAIN CONTRACTOR: China MCC20 Group Ltd.</p><p>UNDER CO</p><p>Hong Kong Institute of\n  Architects Architectural Design ForumFour Places and Grand Awards 2013</p>",
        "M0815": "<h3>Nanjing Agricultural Exhibition Hall</h3><p>LOCATION: Nanjing, Jiangsu</p><p>DESIGN / COMPLETION: 2008-2011</p><p>PROGRAM: Exhibition / Meeting /\n  Office / Retail / Restaurant</p><p>SITE AREA: 34,459sm</p><p>BUILDING AREA: 83,710sm</p><p>Height / Floors: 107m / B1+25F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+Jason Huang</p>",
        "M0208": "<h3>Bright Light Center</h3><p>LOCATION: Putuo, Shanghai</p><p>DESIGN / COMPLETION: 2002 / 2004</p><p>PROGRAM: Office / Exhibitio</p><p>CLIENT: Bright International\n  Group Ltd.</p><p>SITE AREA: 1,653sm</p><p>BUILDING AREA: 3,800sm</p><p>Height / Floors: 35.5m / 7F</p><p>SERVICE: Architectural Re</p><p>LEAD ARCHITEC: Ryo Huang</p><p>CO-ARCHITECTS / LDI: DFD (CN) / STADRI (CN)</p><p>MAIN CONTRACTOR: Shanghai Jinlu Decoration\n  Co., Ltd.</p><p>cost: TWD 32,000,000</p>",
        "M0405": "<h3>DF Nissan Office, R&D</h3><p>LOCATION: Guangzhou, Guangdong</p><p>DESIGN / COMPLETION: 2004 / 2006</p><p>PROGRAM: Office / R&D</p><p>CLIENT: Passenger Vehicle\n  Company, Dongfeng Motor Co., Ltd.</p><p>SITE AREA: 270,000sm</p><p>BUILDING AREA: 42,000sm</p><p>Height / Floors: 22m / B1+5F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: Ryo Huang</p><p>CO-ARCHITECTS / LDI: Jianxue Architecture and\n  Engineering Design Institute Co., Ltd.</p><p>cost: TWD 560,000,000</p>",
        "M0411": "<h3>DF Motor Headquarters</h3><p>LOCATION: Wuhan, Hubei</p><p>DESIGN / COMPLETION: 2004</p><p>PROGRAM: Office / R&D</p><p>CLIENT: Dongfeng Motor\n  Corporation</p><p>BUILDING AREA: 185,504sm</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: WL Hsia</p>",
        "M0523": "<h3>Songjiang Public Training Center</h3><p>LOCATION: Songjiang, Shanghai</p><p>DESIGN / COMPLETION: 2005</p><p>PROGRAM: Office / Educatio</p><p>CLIENT: Shanghai Songjiang\n  District Government</p><p>BUILDING AREA: 104,000sm</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: LM Kuo</p>",
        "M0510": "<h3>DF Honda Headquarters</h3><p>LOCATION: Wuhan, Hubei</p><p>DESIGN / COMPLETION: 2005 / 2007</p><p>PROGRAM: Office</p><p>CLIENT: Dongfeng Motor\n  Corporation</p><p>BUILDING AREA: 18,900sm</p><p>Height / Floors: 3F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: LM Kuo</p><p>CO-ARCHITECTS / LDI: DFD (CN)</p>",
        "M0526": "<h3>Wanhong Headquarters</h3><p>LOCATION: Kunshan, Jiangsu</p><p>DESIGN / COMPLETION: 2005 / 2007</p><p>PROGRAM: Office</p><p>CLIENT: Kunshan FA Construction\n  Co., Ltd.</p><p>BUILDING AREA: 149,000sm</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: LM Kuo</p>",
        "M0826": "<h3>Fengsheng Tech.Park Lot C</h3><p>LOCATION: Nangjing, Jiangsu</p><p>DESIGN / COMPLETION: 2008 - 2009</p><p>PROGRAM: Commercial / Of</p><p>CLIENT: Nanjing Fengsheng\n  Industrial Holding Group</p><p>BUILDING AREA: 266,080sm</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: WL Hsia+LM Ku</p><p>CO-ARCHITECTS / LDI: SEED (CN)</p>",
        "M0900": "<h3>Socialism Cause Building of Huaiyin</h3><p>LOCATION: Huaiyin, Jiangsu</p><p>DESIGN / COMPLETION: 2009</p><p>PROGRAM: Public Administr</p><p>CLIENT: People's Government of\n  Huaiyin District, Huaian City</p><p>SITE AREA: 19,320sm</p><p>BUILDING AREA: 20,031sm</p><p>Height / Floors: B1+8F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: WL Hsia+Jason Huang</p>",
        "0919": "<h3>Foxconn R&D Incubation Office And Digi</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2009 -</p><p>PROGRAM: Office / R&D</p><p>CLIENT: Hon Hai Technology Group</p><p>SITE AREA: 18,500sm</p><p>BUILDING AREA: 62,919sm</p><p>Height / Floors: 56.1m / B4+14F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+WL Hsia+SM Liou</p><p>MAIN CONTRACTOR: Darmaw Construction Co.,\n  Ltd.</p><p>cost: TWD 1,830,000,000</p><p>UNDER CO</p><p>The First Session of\n  the 2014 Golden Construction Quality of New Buildings in Kaohsiung: Gold\n  Medal Award</p>",
        "0945": "<h3>Manufacturing and Marketing Area Wit</h3><p>LOCATION: Pingtung, Taiwan</p><p>DESIGN / COMPLETION: 2010 / 2013</p><p>PROGRAM: Office / R&D / L</p><p>CLIENT: Pingtung Agricultural\n  Biotechnology Park (PABP)</p><p>SITE AREA: 39,440sm</p><p>BUILDING AREA: 27,327sm</p><p>Height / Floors: 38.5m / B1+5F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+WL Hsia+Vincent\n  Chao+Jason Huang</p><p>MAIN CONTRACTOR: Evergreen Construction\n  Corp.</p><p>cost: TWD 1,025,000,000</p>",
        "M1020": "<h3>Haimen Internal Revenue Service</h3><p>LOCATION: Kinmen, Fujian</p><p>DESIGN / COMPLETION: 2010 / 2014</p><p>PROGRAM: Public Administr</p><p>CLIENT: Haimen Govement\n  Investment Project Construction Center</p><p>SITE AREA: 19,770sm</p><p>BUILDING AREA: 19,079sm</p><p>Height / Floors: 61.4m / B1+12F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: Jason Huang</p><p>CO-ARCHITECTS / LDI: Nantong Planning and\n  Design Institude (CN</p><p>MAIN CONTRACTOR: Wuxi Haotian\n  Construction Co., Ltd.</p><p>UNDER CONSTRUCTION</p>",
        "M1121": "<h3>Dongguan China Post Building</h3><p>LOCATION: Dongguan, Guangdong</p><p>DESIGN / COMPLETION: 2011</p><p>PROGRAM: Office</p><p>CLIENT: China Post Group</p><p>SITE AREA: 13.629sm</p><p>BUILDING AREA: 72,761sm</p><p>Height / Floors: 114.5m / B2+22</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: Jason Huang</p>",
        "M0708": "<h3>Nantong Rugaosix\n  construction headq</h3><p>LOCATION: Nantong, Jiangsu</p><p>DESIGN / COMPLETION: 2007-2011</p><p>PROGRAM: Office / R&D</p><p>CLIENT: Nantong six construction\n  group</p><p>SITE AREA: 10,000sm</p><p>BUILDING AREA: 21796sm</p><p>Height / Floors: 71m / B1+16F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: Jason Huang</p><p>CO-ARCHITECTS / LDI: Nantong Planning and\n  Design Institude (CN)</p>",
        "0000": "<h3>Dream Mall</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2000 / 2007</p><p>PROGRAM: Department Sto</p><p>CLIENT: Uni-President</p><p>SITE AREA: 50,158sm</p><p>BUILDING AREA: 401,219sm</p><p>Height / Floors: 49.95m / B5+11</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu</p><p>CO-ARCHITECTS / LDI: RTKL (USA) / Principal\n  Architects & Associat</p><p>MAIN CONTRACTOR: International Engineering\n  & Construction G</p><p>cost: TWD 3,156,142,248</p><p>First Republ</p><p>Third Sessio</p><p>2008 Grand Award best in\n  the west, In Recognition of Excellence and Value, Best International\n  Commercial / Retail Project</p>",
        "0709": "<h3>E-DA Campus-Elysees Avenue</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2007 / 2010</p><p>PROGRAM: Retail</p><p>CLIENT: E United Group</p><p>SITE AREA: 5,551sm</p><p>BUILDING AREA: 13,842.48sm</p><p>Height / Floors: 19.35m /4F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu</p><p>MAIN CONTRACTOR: Xinquan Construction\n  Co., Ltd</p><p>cost: TWD 74,487,550</p>",
        "V0802": "<h3>Vietnam Bac Ninh Casino Hotel</h3><p>LOCATION: Bac Ninh, Vietnam</p><p>DESIGN / COMPLETION: 2008</p><p>PROGRAM: Hotel / Casino</p><p>CLIENT: Vietnam Hoang Long\n  Development</p><p>SITE AREA: 23,806sm</p><p>BUILDING AREA: 120,566sm</p><p>Height / Floors: 79.4m / B2+21F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+SM Liou+Jason\n  Huang</p>",
        "0829": "<h3>E-DA World Association Tourist Center</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2008 / 2010</p><p>PROGRAM: Retail / Office</p><p>CLIENT: E United Group</p><p>SITE AREA: 1,749sm</p><p>BUILDING AREA: 2,717sm</p><p>Height / Floors: 15.3m / B1+3F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu</p><p>MAIN CONTRACTOR: Xinquan Construction\n  Co., Ltd</p><p>cost: TWD 13,847,400</p>",
        "M1026": "<h3>T-Mark Wholesale</h3><p>LOCATION: Dongguan, Guangdong</p><p>DESIGN / COMPLETION: 2010 / 2011</p><p>PROGRAM: Retail / Wholesal</p><p>CLIENT: T-Mark Commercial Co.\n  Ltd.</p><p>SITE AREA: 40,672sm</p><p>BUILDING AREA: 28,806sm</p><p>Height / Floors: 18.6m / 4F</p><p>SERVICE: Architectural Re</p><p>LEAD ARCHITEC: Jason Huang</p><p>CO-ARCHITECTS / LDI: Dongguan Dongcheng\n  Architecture Design</p><p>MAIN CONTRACTOR: Dongguan RichengSteel Deck Co.</p>",
        "Queena Plaza Hotel Hall 3": "<h3>1143</h3><p>LOCATION: Kaohsiung Taiwan</p><p>PROGRAM: Hotel / Departm</p><p>CLIENT: E United Group</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+MY Hsu+WL Hsia+SM Vincent Chao+Jason Huang</p><p>MAIN CONTRACTOR: San Min Construction\n  Development Co., Ltd</p>",
        "M1302": "<h3>Boly Culture and Commercial Plaza in Yu</h3><p>LOCATION: Yuyao, Zhejiang</p><p>DESIGN / COMPLETION: 2013 -</p><p>PROGRAM: Department Sto</p><p>CLIENT: Poly Property Group Co.,\n  Ltd.</p><p>SITE AREA: 119,000sm</p><p>BUILDING AREA: 340,000sm</p><p>Height / Floors: 100m / B2+21F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+Jason</p><p>CO-ARCHITECTS / LDI: United Design Group</p>",
        "V1302": "<h3>Entertainment Building A2/A3 beside Da</h3><p>LOCATION: Ha Tinh, Vietnam</p><p>DESIGN / COMPLETION: 2013 -</p><p>PROGRAM: Restautant / Ret</p><p>CLIENT: Cong Ty Tnhh Quoc Te\n  Polaris Kty Vietnam</p><p>SITE AREA: 25,013sm</p><p>BUILDING AREA: 6,931sm</p><p>Height / Floors: 14.57m / 3F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: WL Hsia</p>",
        "M1317": "<h3>Baiyupao Hot Spring & Resort in Harbin</h3><p>LOCATION: Harbin, Heilongjiang</p><p>DESIGN / COMPLETION: 2013 -</p><p>PROGRAM: Hotel / Hot sprin</p><p>CLIENT: Harbin Baiyupao Elderly\n  Treatment and Nursing Institute</p><p>SITE AREA: 50,000sm</p><p>BUILDING AREA: 15,000sm</p><p>Height / Floors: 15m / 3F</p><p>SERVICE: Architectural Design /\n  Landscape Design</p><p>LEAD ARCHITEC: Jason Huang</p>",
        "0909": "<h3>Nature Loving Wonderland</h3><p>LOCATION: Hsinchu, Taiwan</p><p>DESIGN / COMPLETION: 2009 / 2011</p><p>PROGRAM: Religion</p><p>CLIENT: Providence Maitreya</p><p>SITE AREA: 119,993sm</p><p>BUILDING AREA: 396,898sm</p><p>Height / Floors: 43.28m / B4+8F</p><p>SERVICE: Interior Design</p><p>LEAD ARCHITEC: MY Hsu+SM Liou</p><p>CO-ARCHITECTS / LDI: JL Cai Architect</p><p>CONSULTANTS: Da Zun Gui Construction Co., Ltd</p>",
        "9437-1": "<h3>DA Chang Hospital</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2006 - 2014</p><p>PROGRAM: Hospital</p><p>CLIENT: E United Group</p><p>SITE AREA: 18,742.57sm</p><p>BUILDING AREA: 69,786.9sm</p><p>Height / Floors: 49.95m / B3+14</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu</p><p>MAIN CONTRACTOR: Xinquan Construction Co.,\n  Ltd</p><p>cost: TWD 867,604,000</p>",
        "SuperAlloy Industrial, Phase 3": "<h3>M0601</h3><p>LOCATION: Guangzhou Guangdong</p><p>PROGRAM: Training</p><p>CLIENT: Dongfeng Nissan Passenger Vehicle Company</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: LM Kuo</p><p>MAIN CONTRACTOR: Gu Yu Ming Construction\n  Co., Ltd</p>",
        "M0601": "<h3>DF Nissan Training Center</h3><p>LOCATION: Guangzhou, Guangdong</p><p>DESIGN / COMPLETION: 2006 / 2007</p><p>PROGRAM: Training</p><p>CLIENT: Dongfeng Nissan\n  Passenger Vehicle Company</p><p>BUILDING AREA: 6,640sm</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: LM Kuo</p><p>CO-ARCHITECTS / LDI: DFD (CN)</p>",
        "0629": "<h3>NanoWin Thin Film Tech Factory and Offi</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2006 / 2009</p><p>PROGRAM: Factory / Office</p><p>CLIENT: NanoWin Technology Co.,\n  Ltd</p><p>SITE AREA: 12,545sm</p><p>BUILDING AREA: 12,938sm</p><p>Height / Floors: 9.45m / 2F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+Ryo Huang</p><p>MAIN CONTRACTOR: Absolute Construction\n  Engineering Co., Ltd.</p><p>cost: TWD 203,940,000</p>",
        "0937": "<h3>Liang Dar Tech Factory Renovation</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2009</p><p>PROGRAM: Factory / Office</p><p>CLIENT: Liang Dar Technology\n  Co., Ltd.</p><p>SERVICE: Facade Design /</p><p>LEAD ARCHITEC: WL Hsia</p>",
        "M0121": "<h3>Seaside Royal</h3><p>LOCATION: Qinghuangdao, Heibei</p><p>DESIGN / COMPLETION: 2001 / 2005</p><p>PROGRAM: Apartment</p><p>CLIENT: Qinhuangdao Aptions\n  International Invest Co., Ltd</p><p>SITE AREA: 12,400sm</p><p>BUILDING AREA: 43,800m</p><p>Height / Floors: 106m / B1+31F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: Ryo Huang</p><p>CO-ARCHITECTS / LDI: Jianxue Architecture and\n  Engineering Design Institute Co., Ltd.</p><p>cost: TWD 200,000,000</p>",
        "M0409": "<h3>The Garden of Townhouse</h3><p>LOCATION: Kunshan, Jiangsu</p><p>DESIGN / COMPLETION: 2004 / 2011</p><p>PROGRAM: Housing</p><p>CLIENT: Kunshan Bao Yu Real\n  Estate Exploitation Co., Ltd</p><p>BUILDING AREA: 140,000sm</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: Ryo Huang+WL</p><p>CO-ARCHITECTS / LDI: South East Engineering\n  Design Co.</p>",
        "0716": "<h3>Chen's Residence</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2007</p><p>PROGRAM: Villa / Office</p><p>CLIENT: Mr. Chen Ming Zhi</p><p>SITE AREA: 4,960sm</p><p>BUILDING AREA: 6,959sm</p><p>Height / Floors: 27.1m / B1+7F</p><p>SERVICE: Master Planning</p><p>LEAD ARCHITEC: MY Hsu+SM Liou</p><p>CO-ARCHITECTS / LDI: cdi (JAPAN)</p><p>cost: TWD 48,658,487</p>",
        "M0801": "<h3>Souxihu Hotel Yangzhou and Villa</h3><p>LOCATION: Yangzhou, Jiangsu</p><p>DESIGN / COMPLETION: 2008 / 2010</p><p>PROGRAM: Villa</p><p>CLIENT: Slender West Lake\n  Property Co., Ltd</p><p>BUILDING AREA: 60,000sm</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu+WL Hsi</p><p>CO-ARCHITECTS / LDI: Nanjing Architecture\n  Design & Research Institute Co., Ltd.</p>",
        "0804": "<h3>Guan Yin Shan Luxurious Villa</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2008 / 2011</p><p>PROGRAM: Villa</p><p>CLIENT: E United Group</p><p>SITE AREA: 6,172sm</p><p>BUILDING AREA: 7,860sm</p><p>Height / Floors: 21.5m / B2+3F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: MY Hsu</p><p>MAIN CONTRACTOR: Xinquan Construction\n  Co., Ltd</p><p>cost: TWD 40,657,200</p>",
        "M0816": "<h3>Tiantai Jiaqi Building</h3><p>LOCATION: Nanjing, Jiangsu</p><p>DESIGN / COMPLETION: 2008 / 2009</p><p>PROGRAM: Apartment / Offi</p><p>CLIENT: Jiangsu Tian Tai\n  Construction Co., Ltd</p><p>SITE AREA: 13,596sm</p><p>BUILDING AREA: 71,000sm</p><p>Height / Floors: B1+27F</p><p>SERVICE: Architectural De</p><p>LEAD ARCHITEC: WL Hsia+Jason</p><p>CO-ARCHITECTS / LDI: South East Engineering\n  Design Co.</p>",
        "V1001": "<h3>Palais de Lotus</h3><p>LOCATION: Hanoi, Vietnam</p><p>DESIGN / COMPLETION: 2010 / 2012</p><p>PROGRAM: Residence Public</p><p>CLIENT: Anphu Developmen</p><p>BUILDING AREA: 929sm</p><p>SERVICE: Interior Scheme</p><p>LEAD ARCHITEC: SM Liou</p>",
        "0922": "<h3>Landscape Design for Liudui Hakka Cult</h3><p>LOCATION: Pingtung, Taiwan</p><p>DESIGN / COMPLETION: 2007 / 2009</p><p>PROGRAM: Park</p><p>CLIENT: The Liudui Hakka Cultural\n  Park</p><p>SITE AREA: 155,878sm</p><p>BUILDING AREA: 983sm</p><p>Height / Floors: 9.4m / 2F</p><p>SERVICE: Landscape Desi</p><p>LEAD ARCHITEC: Vincent Chao</p><p>MAIN CONTRACTOR: Shuo Hong Construction\n  Co., Ltd.</p><p>cost: TWD 224,753,089</p><p>2009 Architecture\n  Yuam-Yie Award,Ping-Tung County Public Landscape Design Award</p>",
        "0811": "<h3>E-DA 123 Plaza</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2008 / 2010</p><p>PROGRAM: Commercial Plaz</p><p>CLIENT: E United Group</p><p>SITE AREA: 13,464sm</p><p>Height / Floors: Music Res 11.7m /</p><p>SERVICE: Landscape Desi</p><p>LEAD ARCHITEC: MY Hsu</p><p>MAIN CONTRACTOR: Taiwan Taiyokogyo Inc. /\n  Old Farmer Landscape Architecture Co.</p>",
        "M1208": "<h3>Ching Fu College Phase 1</h3><p>LOCATION: Yunxiao, Fujian</p><p>DESIGN / COMPLETION: 2012 -</p><p>PROGRAM: School</p><p>CLIENT: Ching Fu Group</p><p>BUILDING AREA: 123,565sm</p><p>SERVICE: Interior Design /</p><p>LEAD ARCHITEC: SM Liou</p><p>CO-ARCHITECTS / LDI: W-R Design Association /\n  Merge Interiors</p>",
        "Ching Fu College Phase 1": "<h3>1243</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>PROGRAM: Bamboo Hotel</p><p>CLIENT: Hong Yang Ji Ye Co.</p><p>SERVICE: Interior Design</p><p>LEAD ARCHITEC: SM Liou</p><p>CO-ARCHITECTS / LDI: W-R Design Association /\n  Merge Interiors</p><p>UNDER CONSTRUCTION</p>",
        "0919-1": "<h3>Foxconn Digital Convergence Data Cent</h3><p>LOCATION: Kaohsiung, Taiwan</p><p>DESIGN / COMPLETION: 2013 - 2014</p><p>PROGRAM: Office / Server R</p><p>CLIENT: Hon Hai Technology</p><p>BUILDING AREA: 365sm</p><p>SERVICE: Interior Design a</p><p>LEAD ARCHITEC: SM Liou</p>",
        "1151-1": "<h3>TCI Fab S9 Showroon</h3><p>LOCATION: Pingtung, Taiwan</p><p>DESIGN / COMPLETION: 2013 -</p><p>PROGRAM: Office / Showroo</p><p>CLIENT: TCI Integrated Biosci</p><p>BUILDING AREA: 521sm</p><p>SERVICE: Interior Design /</p><p>LEAD ARCHITEC: MY Hsu+SM Liou</p>"
      };
      LANG = {
        casename: 'PROJECT: ',
      }
    }

    if (window.location.pathname.indexOf('/zh.html') !== -1) {
      $.extend(true, CASEDICT, {
        "1003": {
          "text": "易宏工业新厂及办公楼"
        },
        "1006": {
          "text": "天恩弥勒殿"
        },
        "1008": {
          "text": "中钢总部大楼方案"
        },
        "1010": {
          "text": "国立潮州高级中学明德楼"
        },
        "1024": {
          "text": "许晴哲皮肤科诊所"
        },
        "1110": {
          "text": "桂田酒店三馆"
        },
        "1122": {
          "text": "左营蔡宅"
        },
        "1130": {
          "text": "统正梦时代二期开发项目",
          "desc": "<h4>设计概念</h4><p>海洋 健康 永续再生</p><p>节能 绿化 货柜</p><p>&nbsp;</p><p>绿建筑计划</p><p>室内环境</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 噪音防制</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 震动音防制</p><p>•&nbsp;&nbsp;&nbsp; 室内采光</p><p>•&nbsp;&nbsp;&nbsp; 通风计划</p><p>•&nbsp;&nbsp;&nbsp; 室内污染控制</p><p>•&nbsp;&nbsp;&nbsp; 室内空气净化设备</p><p>•&nbsp;&nbsp;&nbsp; 地面与地下室防潮</p><p>•&nbsp;&nbsp;&nbsp; 绿建材</p><p>•&nbsp;&nbsp;&nbsp; 绿色装修设计</p><p>基地保水</p><p>•&nbsp;&nbsp;&nbsp; 透水铺面</p><p>•&nbsp;&nbsp;&nbsp; 贮留渗透空地</p><p>•&nbsp;&nbsp;&nbsp; 渗透井与渗透管</p><p>•&nbsp;&nbsp;&nbsp; 人工地盘贮留</p><p>水资源指标</p><p>•&nbsp;&nbsp;&nbsp; 省水器材</p><p>•&nbsp;&nbsp;&nbsp; 中水利用</p><p>•&nbsp;&nbsp;&nbsp; 雨水再利用</p><p>•&nbsp;&nbsp;&nbsp; 植栽浇灌节水</p><p>绿化指标</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 生态绿化</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 立体绿化</p><p>•&nbsp;&nbsp;&nbsp; 墙面绿化浇灌</p><p>•&nbsp;&nbsp;&nbsp; 人工地盘绿化</p><p>•&nbsp;&nbsp;&nbsp; 绿化防水排水技术</p><p>•&nbsp;&nbsp;&nbsp; 绿化防风透气技术</p><p>日常节能</p><p>•&nbsp;&nbsp;&nbsp; 建筑配置节能</p><p>•&nbsp;&nbsp;&nbsp; 适当的开口率</p><p>•&nbsp;&nbsp;&nbsp; 外遮阳</p><p>•&nbsp;&nbsp;&nbsp; 开口部玻璃</p><p>•&nbsp;&nbsp;&nbsp; 开口部隔热与气密性</p><p>•&nbsp;&nbsp;&nbsp; 外壳构造及材料</p><p>•&nbsp;&nbsp;&nbsp; 屋顶构造及材料</p><p>•&nbsp;&nbsp;&nbsp; 帷幕墙</p><p>•&nbsp;&nbsp;&nbsp; 善用地形风</p><p>•&nbsp;&nbsp;&nbsp; 善用中庭风</p><p>•&nbsp;&nbsp;&nbsp; 开窗通风性能</p><p>•&nbsp;&nbsp;&nbsp; 风力通风设计</p><p>•&nbsp;&nbsp;&nbsp; 浮力通风设计</p><p>•&nbsp;&nbsp;&nbsp; 空调分区</p><p>•&nbsp;&nbsp;&nbsp; 空调主机节能设计</p><p>•&nbsp;&nbsp;&nbsp; 大空间分层空调</p><p>•&nbsp;&nbsp;&nbsp; 照明光源</p><p>•&nbsp;&nbsp;&nbsp; 再生能源（太阳能、风力）</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><br/></p>"
        },
        "1138": {
          "text": "天恩慈氏祠堂"
        },
        "1141": {
          "text": "垦丁白沙民宿"
        },
        "1143": {
          "text": "义大亚洲广场"
        },
        "1144": {
          "text": "钜橡企业F厂及办公楼"
        },
        "1150": {
          "text": "国际星辰旅馆更新整建"
        },
        "1151": {
          "text": "大江生医S9厂"
        },
        "1210": {
          "text": "缅甸眉苗佛院方案"
        },
        "1216": {
          "text": "恒春福乐酒店式公寓方案"
        },
        "1221": {
          "text": "义大癌治疗医院"
        },
        "1225": {
          "text": "高雄美国学校总体规划方案"
        },
        "1228": {
          "text": "义大游乐世界二期及古堡酒店"
        },
        "1238": {
          "text": "德商罗曼动物疫苗厂办新建方案"
        },
        "1243": {
          "text": "竹 精致商旅更新整建"
        },
        "1249": {
          "text": "国立海洋科技博物馆海洋生态展示馆"
        },
        "1303": {
          "text": "印尼天慧弥勒佛院方案"
        },
        "1315": {
          "text": "国立海洋科技博物馆商业空间"
        },
        "1320": {
          "text": "王冠铝业永安厂"
        },
        "1323": {
          "text": "大江生医中兴大学产学联合研发中心方案"
        },
        "1334": {
          "text": "印尼巴丹岛佛院方案"
        },
        "1401": {
          "text": "佛光山惠中寺新建方案"
        },
        "1402": {
          "text": "乐林宴会饭店"
        },
        "1406": {
          "text": "金三荣市港段集合住宅"
        },
        "1408": {
          "text": "大高雄俯瞰式观光设施可行性评估计画"
        },
        "9015": {
          "text": "同盟大楼",
          "desc": "<h4>精品意识与精品建筑</h4><p>&nbsp;</p><p>业主的精品意识</p><p>-&nbsp;&nbsp;&nbsp; 家族自用、休闲娱乐</p><p>-&nbsp;&nbsp;&nbsp; 景观条件、物环兼容</p><p>-&nbsp;&nbsp;&nbsp; 实用空间、大宅格局</p><p>-&nbsp;&nbsp;&nbsp; 新潮设备、经济建材</p><p>-&nbsp;&nbsp;&nbsp; 安全私密、生活价值</p><p>&nbsp;</p><p>我们的精品建筑</p><p>我们对精品建筑的定义：人性文化、环保节能、管理服务。</p><p>&nbsp;</p><p>我们的建筑设计以时尚的简约来表现，这种简约可以体现在建筑功能空间的简化、空间分隔的弱化、装修装饰的简洁。然而，如何满足业主坚持的意念与展现新型态之住宅意象才是最值得自豪的优势。我们企图从整体规划到建筑细部表现人性化、现代化来引导潮流，同时尝试建材的新组合，来实现领先的设计理念。</p><p>&nbsp;</p><p>本设计期以体现对“人性”的关注并严格遵循着“豪华源于舒适”的设计理念；让住宅主动满足人的需求，处处以人为中心。业主家族每个家庭因其丰富的生活，各需丰富的空间需求，每户分置一个楼层，并设休闲健身空间与招待会所，致以弹性空间之留设及设备管道间来解决各层空间需求各异的配置型态。本基地临高雄爱河畔之绿带公园，有优越的自然景观优势，故每层的住户大堂均为阳光清风电梯大堂，并每层留设大面积之阳台，结合外部公园绿带与空中花园的视觉景观与空间设计，长向南北通透，通风采光，节约能源，彰显环保生态之效。住宅内使用大窗型式之高质量气密窗，隔音隔热，并将都市美景带入窗内。</p><p>&nbsp;</p><p>精品住宅仅依靠建筑价值还难以成就经典，其还必须赋予管理服务更大的附加值，以使其价值最大化。本设计更使用先进的智能化设施和周到的保安管理系统，提供最安全舒适的生活环境。</p><p>&nbsp;</p><p><br/></p>"
        },
        "9101": {
          "text": "高雄市临港线铁路客运列车站体暨轮渡站",
          "desc": "<h4>现代风与影的对话</h4><p>&nbsp;</p><p>基地特性</p><p>高雄市政府为有效利用其市内临港线铁路闲置资源，结合台湾铁路公司开启<span style=\"position:relative;margin-left:-4px;\">「</span>嘟嘟火车」，以类似轻轨捷运系统的型态，未来串接高雄市红、橘线捷运系统，提供市民交通的便利性；同时又配合<span style=\"position:relative;margin-left:-4px;\">「</span>蓝色公路」与爱河观光渡轮计划，以海陆联运方式连接商圈与观光景点，扩大高雄市全面性的经济活动，故选定本基地兴辟铁路车站及渡轮站。基地位置于新光路景观大道端点，直临高雄港，且为高雄港埠转折处，宛如陆上街廓之角地，为知名之临港开放空间。</p><p>&nbsp;</p><p>设计需求</p><p>本计划分三期开发，第一期以铁路车站与渡轮站之连结设施为主体，第二期以渡轮站及公交车转运车站与景观工程为主体，未来第三期将以亲水与商业设施为开发目标。</p><p>&nbsp;</p><p>设计构想</p><p>高雄是阳刚的，微风中，煊烈的阳光下，反射着慵懒的都市节奏，透着一幅对比强烈的热带风情。设计尝试捕捉高雄的风与光影，藉由设计组件的媒介，让风与影开启现代的对话，光影透过时间展现的变幻，诉说它顽皮的性格，风也因律动的旋律，证明它怀柔大地的情绪，透过对话的诠释，建构高雄的地域空间。</p><p>&nbsp;</p><p>设计手法</p><p>以地标物与海洋光廊反映地方轴线：设计上延续新光路景观大道的轴线，架构出由地面水平连续的<span style=\"position:relative;margin-left:-4px;\">「</span>海洋光廊」〈第三期工程〉及45度斜向升起指向海洋的地标物，此地标物长54公尺，功能与造型类似船桅或起重吊杆，支撑本构造系统的主要杆件。<span style=\"position:relative;margin-left:-4px;\">「</span>海洋光廊」系地景设计的一部分，全长60公尺，以水池及水雾喷泉设施为主，水池底部埋设冷极光之光导管，白天提供亲水功能，夜间配合地标物的照明，增强轴线的视觉效果，以展现趣味性及多样性。</p><p>以铁路车站及渡轮站及其连结设施隐喻高雄〈港〉工业文化：高雄以工业立市，期间拆船、钢铁、石化、造船等大型产业皆为台湾纪录下经济的指针，也奠定高雄港市的国际地位。设计上尝试以钢骨、缆索与膜等元素展现出港都的海洋与工业意象，车站月台长66公尺，并延伸为景观的一部分，而其三片翼型半透明顶棚的轻结构造型，展现未来的科技感，提供对车站的新空间经验；因车站月台与渡轮站体被新光大排分为南北两侧，以地标物为圆心，张启钢索支撑十个<span style=\"position:relative;margin-left:-4px;\">「</span>人字型」钢骨架构，组立成一座外径45公尺的圆弧<span style=\"position:relative;margin-left:-4px;\">「</span>天桥」，横跨新光大排；而渡轮站以<span style=\"position:relative;margin-left:-4px;\">「</span>天桥」底层设置售票办公室、候船区、公共厕所及商业附属空间〈第三期工程〉等。<span style=\"position:relative;margin-left:-4px;\">「</span>天桥」顶层宽６公尺的平台通道，提供行人眺望高雄港的景观，<span style=\"position:relative;margin-left:-4px;\">「</span>天桥」内环所围塑出来的区域，形成活动广场，未来利用广场上方钢索及<span style=\"position:relative;margin-left:-4px;\">「</span>人字型」钢骨架撑膜体构造物，提供遮阳、捕风的功能，及船帆的造型意象，呼应挑动风影的设计意念；另其他附属设施结合将所有地景元素，创造出和谐的都市场所。</p><p>&nbsp;</p><p><br/></p>"
        },
        "9201": {
          "text": "金酒公司金宁厂整体景观规划",
          "desc": "<h4>流觞曲水、酒乡新声</h4><p>&nbsp;</p><p>高粱不独产于金门，然而却唯有金门高粱酒能如此驰名中外。生产金门高粱酒的金门酒厂原名九龙江酒厂，成立于1953年，迄今已历半个世纪，但在国民所得日渐提高，产业结构与消费习惯逐渐转型，以及全球化浪潮的总体环境之下，传统制酒面临成本优势的消褪，亟待发展服务产业，朝高附加价值之观光酒厂转型。本规划案整体目标如下：</p><p>&nbsp;</p><p>一、为金宁厂转型为观光酒厂之目标，擘划长远可行之整体发展架构。</p><p>二、合理规划配置使用分区，兼顾观光、生产与办公之机能。</p><p>三、统整安排全区动线，以使人车物流发挥最大效益。</p><p>四、提供造型及照明策略，期能融合地域特色与企业形象，美化全区环境。</p><p>五、具体实践产业文化化与文化产业化，维系、发扬地方产业特色，使金宁厂成为示范性的观光酒厂。</p><p>&nbsp;</p><p>先行施工的第一期工程包括下列内容：景观中轴、厂办分离围墙、角地地标、酒瓶公园改善、行政大楼美化，其中以景观中轴为主体景观设施。</p><p>&nbsp;</p><p>景观中轴重新建构了厂区的入口轴线及意象，以草原上蜿蜒长达143公尺的<span style=\"position:relative;margin-left:-4px;\">「</span>曲水流觞」作为象征主题，连接轴向两端的<span style=\"position:relative;margin-left:-4px;\">「</span>迎宾水池」与<span style=\"position:relative;margin-left:-4px;\">「</span>宝月新泉」；曲水流觞为酒文化中的典故借用，在王羲之的兰亭集序里所描绘的，是一种文人雅士的生活境界，在设计上，将这个概念放大并置入这片开阔的地景中，成为人体与自然之间的一种介质，可以游逛、奔跃、驻足、观演，一如有酒助兴。</p><p>&nbsp;</p><p>作为金门岛上的公共地景，试图以不同于传统闽南的样式着手，希望将形式的内涵提升到形式的表象之上，而大量采用以概念为主的景观元素，例如几何、立体构成，形成整体风格，或许<span style=\"position:relative;margin-left:-4px;\">「</span>创新」对于金门来说，也是一股活力的甘泉吧。</p><p>&nbsp;</p><p><br/></p>"
        },
        "9217": {
          "text": "树德科技大学行政大楼暨礼堂",
          "desc": "<h4>前传</h4><p>本建筑物源起于1999年校方举办以<span style=\"position:relative;margin-left:-4px;\">「</span>学生活动中心暨体育馆」为题目的竞图，由新明建筑师事务所、李炳辉建筑师事务所及本所共同合作参与。竞图后，校方依使用需求调整为兴建一座<span style=\"position:relative;margin-left:-4px;\">「</span>1,500人专业级演艺厅暨学生活动中心」的复合建筑。</p><p>科技大学的办学精神在于精益求精、实事求是。规划设计的初衷，设定在提出一个师生交流的平台！由于使用机能的多样性、空间场域的丰富性、人群流动的错杂性等诸多繁复纷陈的因子并存，本建筑物希望在校园环境的现存架构下，产出新的交流场所，以弥补原有之不足。</p><p>规划设计期间，校方为求慎重，由董事会与校园规划委员会共同对设计内容及成果密切检视，由于复杂的建筑机能及显著的区位关系，各方意见整合颇见难度，期间历经了36次的设计会议及变更调整，费时一年半始获定案，进入工程执行准备阶段。正当备妥发包书图文件、取得建造执照之际，校方却迫于教育部私校融资比例上限规定影响而于2001年中止了招标及兴建进程，原设计合约解除。</p><p>&nbsp;</p><p>主题</p><p>2003年夏季，校方通知工程拟恢复进行，并协议由本所接续原设计合约，惟须配合需求修正而调整部分设计内容，将<span style=\"position:relative;margin-left:-4px;\">「</span>演艺厅暨学生活动中心」修改为<span style=\"position:relative;margin-left:-4px;\">「</span>行政大楼暨多功能礼堂」。建筑物须在校方功能性的考虑下，解决原来行政管理单位空间之不足，并满足中大型集会、学生课内外活动等空间，及专业表演、室内运动等新办科系 (表演艺术、休闲事业管理) 所需之场所，以符合<span style=\"position:relative;margin-left:-4px;\">「</span>多功能」的目的。</p><p>延续前期规划设计的初衷，主要量体由行政大楼及多功能礼堂两大部分依山顺势所组成：行政大楼平面为L型配置，量体内植入了由通廊、厅堂、平台及楼梯所串接的公领域空间，连通各使用区域，并作为师生活动、休憩、交流之场所，其平面与垂直向度的延展与交迭关系，亦与导风采光的节能手法互为运用，活化建筑生命；多功能礼堂则为一组合量体，舞台部分需满足吊具高度，观众席及球场部分需符合排球竞赛标准，均为挑高大跨度空间。</p><p>户外部分以扇型剧场为核心、环绕多重的广场、通道、绿地，链接不同地势高程的外部空间，共同形成景观构图，并与校区既有景观系统及校门口区域的重建延伸衔接，修补校园边界隙地的风貌。</p><p>&nbsp;</p><p>余响</p><p>从专业级演艺厅演变为多功能礼堂，其落差在于设计对象原为两个极端，由精准的专业表演场所，转化成须兼顾集会、讲演、音乐、戏剧、伸展、运动……等复合功能的场地，在设计条件上甚至存有本质上的冲突矛盾，如空间布设、席位视角、光源照度、残响时间、材料选配、后勤管理等问题；在与校方各使用与管理单位重新反复检讨后，所基本兼顾的<span style=\"position:relative;margin-left:-4px;\">「</span>多功能」标准，虽似满足，实则妥协。</p><p>校方董事会与设计院系对于校园建筑风格及空间表现的延续具有殷切的提示，建筑形式及材料色彩的选用亦属执行过程中保持征询及沟通的要项，使本建筑物能不脱离现存校园环境的质地与气氛。</p><p>本建筑物因为前期中止，加上后续几乎是重新设计以致耗费期程，拖延至2004年底实际发包时，又逢建材原物料的成本高涨而造成了预算居高不下，产生了营建费用上的重大代价。</p><p>工程管理组织由校方营缮单位统筹，以协调校方代表、不同分包的建筑、结构、机电等设计单位，及委外监造单位、施工单位等复杂的体系及接口，幸而透过务实的态度、每周的工地会议及难以数计的现场协调，终究克服了所有的难题，于2007年春天，历时8年之后落成启用。</p><p>&nbsp;</p><p>&nbsp;</p><p><br/></p>"
        },
        "9230": {
          "text": "高雄捷运O5/R10美丽岛站"
        },
        "9306": {
          "text": "福慧大楼",
          "desc": "<h4>设计命题</h4><p>福慧大楼基地位于凤山市区中的零星工业地块，外围为密集发展之典型住商混合街巷，都市景观目前尚无明显的特色；因邻近县政府、凤山高中、卫武营公园、捷运橘线等重要的环境区位，业主希望透过<span style=\"position:relative;margin-left:-4px;\">「</span>厂办」建筑的重新定义，以丰富其使用型态，提升土地的利用价值。</p><p>&nbsp;</p><p>整体构想</p><p>设计策略上采低建蔽率 (约36%)，控制单层面积使每层各可为独立使用单元，并将210%之容积率拉高至九层楼，如此可保留较多空地、降低对北面现有幼儿园的遮挡，上部楼层亦具有较佳之景观视野。建筑方位依面前道路为座北朝南，矩形基地因西侧及南侧均为丁字路口，建筑量体主要配置于西侧以避开正向<span style=\"position:relative;margin-left:-4px;\">「</span>路冲」的风水忌讳；沿街面保持较宽的退缩步道，与两端的传统骑楼衔接。</p><p>&nbsp;</p><p>健康建筑</p><p>内部平面尽量将垂直动线、共享及服务设施集中留设于东面，以利使用维护并可延长建筑物的生命周期，其余为完整空间以利各使用单元不同之需求；各向均保有充分的采光通风机会，西向以垂直遮阳板减低直接热得，南向则以深开口方式作为窗户遮阳，因空地及外围街道所退让之邻房距离，使建筑物之自然对流有明显效果。</p><p>&nbsp;</p><p>形式语言</p><p>正面造型以两边对称的量体构成双塔的轮廓，强调垂直向上的形体，相对于所坐落的环境中多为水平发展的透天街屋，呈现较明显之目标作用，而主楼之外，于东侧空地上延伸了基座形式的二层量体，以呼应并维持临街建筑立面及都市空间的连续性。立面原则大致依循基座、屋身、屋顶三段式之古典模式，细部元素及文法亦采用具秩序感、稳定感之质地及简化之样式，应可使目前纷扰拥挤的都市涵构获得舒缓，空间质量获得提升。</p><p>&nbsp;</p><p>福慧双修</p><p>福慧二自来自于业主<span style=\"position:relative;margin-left:-4px;\">「</span>修福不修慧，福中也造罪；修慧不修福，慧中也胡涂」的生活哲学：从学习当中，了解到人要常行布施，培植福德，同时亦要修习智慧，了脱生死轮回；<span style=\"position:relative;margin-left:-4px;\">「</span>智慧」与<span style=\"position:relative;margin-left:-4px;\">「</span>福德」二者，犹如鸟之双翼、车之双轮，缺一不可。本案于规划过程中，感受于业主的生活哲学，以试图寻求内部机能与外部形貌的调和，建筑本体及都市环境的兼顾，作为主要的思路；此外，自设计至监造期间，充分获得业主的支持，及对专业的尊重态度，一并鸣谢。</p><p>&nbsp;</p><p><br/></p>"
        },
        "9311": {
          "text": "庆富集团运营总部大楼",
          "desc": "<h4>Richard Rogers 的设计原创</h4><p>庆富集团以在地产业的心情，期待为高雄市未来留下一只都市的记忆符号，一栋代表高雄市及集团文化的建筑语汇，特别邀请普立兹克建筑大师英国Richard Rogers爵士担任总部大楼的规划设计， Richard Rogers擅长以建筑结构表现空间美学，采用鲜艳的原色区分建筑机能，具备优异的细部设计能力，创新的设计潮流及风格。</p><p>Richard Rogers对于本大楼的设计理念系以豪壮的建筑结构之于海洋的微观矛盾，将企业的内化自省升华为对环境关怀的宏观表现。<span style=\"position:relative;margin-left:-4px;\">「</span>外放结构」与<span style=\"position:relative;margin-left:-4px;\">「</span>内纳海景」为本案的空间操作手法，而建筑物的表情来自于因基地环境的水岸氛围及港口视觉景观的独特条件却伴随着西晒日照的挑战，Richard Rogers考虑日照角度与特殊的外部深遮阳百叶格栅设计，以控制建筑物的日照环境兼顾穿透欣赏海景的需求；另将建筑结构外露且电梯、楼梯、服务管道等空间，外放于建筑物南北两侧，以维持办公室内部空间的完整与使用的弹性；而箱型结构的设计，以框景的方式将空间外伸<span style=\"position:relative;margin-left:-4px;\">「</span>独立」出来，成为一个独立会议、展示等空间；更以鲜艳的原色表现建筑机能，使其外观充满建筑活力。</p><p>&nbsp;</p><p>禾扬建筑的设计执行</p><p>禾扬联合建筑师事务所以国内建筑师的角色，承接并深化Richard Rogers设计及外墙、结构收头等细部发展，同时更须落实庆富集团对绿建筑及智能建筑应用的机电整合界面设计的执行︰</p><p>1.外墙帷幕采用双层镀钛低耗能玻璃，热传导效率较RC构造为低，有效阻绝台湾亚热带气候造成大量的空调负荷。</p><p>2.建筑外观格栅遮阳板深度及角度亦依台湾经纬度的日照轨迹计算机仿真计算及设计。</p><p>3.空调系统采用VRV变频式冷暖气系统，耗电量随负荷大小变动，有效降低空调电力之需求.预计可较一般空调系统节省约40%之用电。</p><p>4.照明系统方面在建筑外部采LED灯具，室内采用T5高效率照明灯具；另本大楼西侧部份均设日光照明控制系统，充份利用环境的自然采光，有效降低照明用电。</p><p>5.大楼内部所有门禁管制及机电设备均纳入监控系统内，随时记录各设备之用电状态，可作为日后使用保养上之参考。</p><p>6.建筑顶层Double Roof设计，最上层屋顶以格栅遮阳板及太阳能集热板作为遮阳及太阳能发电运用，预留太阳能发电与市电并联的扩充考虑，将太阳能电力储存用于公共空间及景观照明。</p><p>除用电量节约设计外，本大楼于水资源方面亦设置雨水回收系统，回收再过滤后用于室外及顶层景观之喷灌系统；另大楼内设置小型气象系统，监控阴雨天时喷灌系统不作用，以节省用水量。</p><p>&nbsp;</p><p>众家的成果</p><p>2007年12月25日由总统、副总统首度偕同南太平洋基里巴斯、帕劳、图瓦卢三邦交国元首，南下高雄参加民间企业庆富集团营运总部大楼开幕典礼及剪彩，众家除盛赞庆富集团成功企业外交典范外，更感佩集团对建筑景观与环境生态的要求，当欣赏外露结构与悬吊系统的建筑造型、简洁实用的弹性机能配置、效率便利的公共环境系统、科技节能的先进建材设备、人文质感的企业总部形象、内外贯通的流畅视觉空间、前瞻未来的规划理念等刚柔并济的建筑语汇外，更透过空间的安排感受丰富而细腻的高雄水岸城市风情。</p><p>&nbsp;</p><p><br/></p>"
        },
        "9316": {
          "text": "海光三村公园地景保育再生利用工程",
          "desc": "<h4>基地与环境</h4><p>海光三村公园位于高雄市左营区海光三村眷村旧址内，邻近为大龟山公园、凤山旧城遗址(一级古迹)及莲池潭间，高雄市政府因本区位的历史特殊性与生态的敏感性，已向国防部协调取得现阶段的委托管理，并决定未来完成有偿拨用的程序，成为公园用地；而其内原来之海胜里活动中心亦将配合计划调整用途，一部分作为高雄市政府工务局养工处养护大队区队办公室，就近照顾北高雄半屏山、洲仔湿地、莲池潭及大、小龟山的生态环境；另一部分作为N.G.O.民间社团办公室及文物陈列空间，同时结合自然生态左营旧城的人文特质，引进绿色团体、湿地保护联盟、野鸟协会、左营旧城文化协会等N.G.O.民间社团参与认养及经营管理，达成环境生态保育、教育、观光休闲等多元性功能。</p><p>&nbsp;</p><p>课题与任务</p><p>全区整体规划：</p><p>(1)&nbsp;&nbsp;&nbsp;&nbsp; 入口广场的重塑。</p><p>(2)&nbsp;&nbsp;&nbsp;&nbsp; 历史与生态教育两大分区。</p><p>(3)&nbsp;&nbsp;&nbsp;&nbsp; 左营旧城、眷村旧址及林相生态之解说导览动线。</p><p>旧有建筑再利用：</p><p>(1)&nbsp;&nbsp;&nbsp;&nbsp; 海胜里活动中心旧址整建为N.G.O.民间社团办公室及文物陈列空间、养护大队区队办公室、厕所等。</p><p>(2)&nbsp;&nbsp; 复兴幼儿园旧址先预留规划构想，另案办理整建计划。</p><p>现有生态景观保存：</p><p>(1)&nbsp;&nbsp; 重新整理并保存现有茄苳、血桐、南美假樱桃、榕树及凤凰木等自然林相。</p><p>(2)&nbsp;&nbsp; 增设地下水补注池，提供鸟类、昆虫栖息用途，延续生态物种的多样性。</p><p>&nbsp;</p><p>构想与设计</p><p>环境：</p><p>(1)&nbsp;&nbsp; 融合生态环境、旧城、眷村旧址等不同时期文化迭层风貌。</p><p>(2)&nbsp;&nbsp; 重建环境地景的整体布局与动线系统。</p><p>(3)&nbsp;&nbsp; 保留原有环境构成物，如电线杆、围墙、标语、植栽等。</p><p>(4)&nbsp;&nbsp;&nbsp;&nbsp; 展示废弃眷舍建筑其当时构筑的材料与工法，宛如一件大型的历史展示物。</p><p>(5)&nbsp;&nbsp;&nbsp;&nbsp; 改善全区的照明计划。</p><p>建筑：</p><p>(1)&nbsp;&nbsp; 融合环境风貌与建筑语汇，增设阳台次空间提供一个可亲自然的机会。</p><p>(2)&nbsp;&nbsp;&nbsp;&nbsp; 赋予旧空间新的建筑生命周期，完善其设备更新与满足展示、办公、服务等复合使用机能。</p><p>(3)&nbsp;&nbsp; 增设户外楼梯，内外双垂直动线系统满足不通单位使用及管制需求。</p><p>(4)&nbsp;&nbsp; 保留未来整建复兴幼儿园旧址成为眷村博物馆空间与动线的连结。</p><p>(5)&nbsp;&nbsp; 运用自然石、木等素材及与大地贴近的颜色。</p><p>&nbsp;</p><p>期与待</p><p>在这里，期许自然、历史能跟我们产生时空的对话；在这里，等待大家在慵懒午后来份下午茶，放慢步调，看看我们的环境，聊聊我们的情趣。</p><p>&nbsp;</p><p><br/></p>"
        },
        "9345": {
          "text": "巧新科技三期厂房"
        },
        "9350": {
          "text": "守义大学图资大楼方案"
        },
        "9353": {
          "text": "大雅牙医诊所"
        },
        "9437": {
          "text": "SUPER 新都"
        },
        "9441": {
          "text": "义大天悦塔暨会议展览中心"
        },
        "9442": {
          "text": "义大世界购物广场"
        },
        "9444": {
          "text": "义大世界伯爵特区"
        },
        "9445": {
          "text": "领秀山庄"
        },
        "9456": {
          "text": "莲潭国际文教会馆",
          "desc": "<p>本案为高雄市首件<span style=\"position:relative;margin-left:-4px;\">「</span>ROT」，原属<span style=\"position:relative;margin-left:-4px;\">「</span>公教人员训练中心」。因邻近莲池潭、原生植物园及半屏山，生态环境良好；又与高铁车站、国道十号闸口接壤，交通近便。致远管理学院与福华饭店经评选取得运营权，连手打造结合休闲娱乐、渡假住宿、教育训练的综合性场所。</p><p>&nbsp;</p><p>既有建筑群使用机能为高雄市政府人力发展局暨所属办公、会议、训练、住宿空间，建筑造型凹凸变化大，建材调性冷硬无趣；新建筑整合既有空间并重塑建筑风格，除了原使用机能外，又增设了大型会展及宴会厅之多功能空间、中西式餐厅、211间之客房、游泳池等，同时增建入口大厅乙栋并围塑户外中庭活动广场，分流住宿、会议、洽公、餐饮等人潮，并将外部生态的绿意引入内部公共空间，营造自然休闲度假的氛围。</p><p>&nbsp;</p><p>增改建有别于新建设计的操作，须先调查原建筑、结构、机电设备等状态及堪用程度，再配合运营单位调整空间机能，乃至于大规模变更；在既有建筑的问题会诊、再生空间的设计命题之间，需历经繁复的调校过程，成为本案最大的挑战。</p><p>&nbsp;</p><p>设计策略考虑<span style=\"position:relative;margin-left:-4px;\">「</span>呼应场域环境」、<span style=\"position:relative;margin-left:-4px;\">「</span>符合经营定位」两大课题，形塑休闲建筑风格，主要手法如下：</p><p>&nbsp;</p><p>增建量体，改造空间结构</p><p>在原三合院的临街面增设一层量体，机能上作为最适当的大厅位置，空间上将开放广场围塑成内庭，使之内外有别；对外开窗量小、对内大面开窗，产生视而不透的空间趣味，改变原有公务机构的空间结构。</p><p>&nbsp;</p><p>内庭新生，重新活化利用</p><p>内庭广场结合水池、水生植物、植栽、平台、活动广场等空间元素，满足多样性的使用需求，例如户外集会、庆典婚宴等；同时作为大厅的延伸，提供具有多重层次的空间经验。</p><p>&nbsp;</p><p>下沉广场，呈现宁静美感</p><p>延续内庭广场的水池成为落瀑，下沉广场自成一处宁静、安逸的非封闭性户外空间，不仅上下串联开放，并具有延伸自餐厅的视觉，将休闲的优雅美感在此处铺陈。</p><p>&nbsp;</p><p>形象色彩，融合环境氛围</p><p>整体休息形象的塑造，为融入原生植物园等外部绿意环境及南台湾饱满的阳光，采用白色为基本色彩，强调休闲建筑的明朗、活跃。夜间照明的构想，则表达在开阔场域里的明示效果，争取更远距离的视觉感受。</p><p>&nbsp;</p><p>造型风格，突破限制再生</p><p>建筑造型风格的改造实为本案的重要课题，它亦要体现文化、教育的意涵，亦要展现休闲旅馆的特色，然而受限于公有财产避免面积减少灭失的限制条件下，公部门不希望改变既有建筑量体，惟有运用外装材料及色彩统合旧有语汇；另因外观改建的预算有限，本案以不破坏原磁砖面为原则，在使用防水材料涂布后，全面施以涂料工法完成造型风格的再生。</p><p>&nbsp;</p><p><br/></p>"
        },
        "1151-1": {
          "text": "大江生医S9厂展示大庁"
        },
        "0000": {
          "text": "统一梦时代购物中心"
        },
        "0629": {
          "text": "威奈科技厂办"
        },
        "0709": {
          "text": "义大世界香榭大街"
        },
        "0716": {
          "text": "左营陈宅方案"
        },
        "0738": {
          "text": "义大皇家剧院"
        },
        "0801": {
          "text": "高雄世界贸易展览会议中心统包工程方案"
        },
        "0804": {
          "text": "观音山景观住宅"
        },
        "M0804": {
          "text": "威海新东阳呼雷汤温泉旅游开发项目规划方案"
        },
        "0811": {
          "text": "义大世界123广场"
        },
        "0829": {
          "text": "义大世界团客中心"
        },
        "0909": {
          "text": "大自然文化世界"
        },
        "0919-1": {
          "text": "鸿海高雄数位汇流数据中心"
        },
        "0919": {
          "text": "鸿海高雄研发育成大楼及数位汇流数据中心"
        },
        "0922": {
          "text": "六堆客家文化园区整体景观",
          "desc": "<h4>计划缘由背景</h4><p>一、计划缘由</p><p>六堆园区计划做为一个文化保存与观光交流的机制平台，在于体认到六堆深厚朴实的文化内涵，无可取代，六堆浓郁的乡土地景，亦不能复制。故将实行<span style=\"position:relative;margin-left:-4px;\">「</span>生态博物馆」(Eco- museum) 概念规划，以<span style=\"position:relative;margin-left:-4px;\">「</span>核心园区」及<span style=\"position:relative;margin-left:-4px;\">「</span>地方园区」同步进行之方式推动，积极发展营造既有客家庄聚落风貌，而六堆客家文化园区做为地方对外展现的窗口，将引领大众认识客家、走入六堆，而其衍生的良性经济效果，也将扮演促进地方永续活化，厚植乡镇竞争力的推手。</p><p>&nbsp;</p><p>二、历史背景</p><p>客家人渡海来台早期拓垦主要区域集中在台湾南部，<span style=\"position:relative;margin-left:-4px;\">「</span>六堆」地区更为南台湾客家重镇，据有平畴辽阔的高屏平原，形成完整聚集区域范围，六堆地区所拥有的丰富客家文化资产，几乎是台湾各界公认的<span style=\"position:relative;margin-left:-4px;\">「</span>台湾之最」，最古老的客家地区、最纯粹的客家聚落、最浓郁的客家风土，理所当然是体验客家文化必经途径。</p><p>&nbsp;</p><p>设计规划理念</p><p>一、设计理念说明</p><p>1、将六堆客家特色融入景观规划</p><p>将六堆客家常民礼祭习俗、生活印象及特色建筑融入景观规划，如用于伯公祭祀盘花的香花植物(泛指客家九香)、客家传统建物(烟楼、伙房等)以及特有农事(烟叶种植)，丰富整体景观深度。</p><p>&nbsp;</p><p>2、创造自然生态与生活地景的结合</p><p>六堆先民主要在于平地及山林间进行开拓，园区规划以客庄田园做为地景主题，展现客家人朴质生活特性，并与现代乐活生活观契合。</p><p>&nbsp;</p><p>3、传统建物地景与客家意象建筑的对话</p><p>田园区以烟楼，垄间及伙房等传统建物进行设置，与以<span style=\"position:relative;margin-left:-4px;\">「</span>伞」为意象建筑的伞架区形成有趣的传统与概念客庄对比。</p><p>&nbsp;</p><p>二、景观规划发展分区</p><p>1、伞架客家聚落景观区</p><p>以美浓纸伞为意象，为阿猴城遮荫，伞下规划客庄产业与文化聚落作为营运主轴，而为减少伞下活动区域耗能，伞架建筑除结合动能设置太阳能光电板，伞下建物亦规划可回收环保建材进行设置。</p><p>&nbsp;</p><p>&nbsp;</p><p>2、自然及田园景观区</p><p>在山林与平原间开拓是先民的生活史，客家人崇尚自然，乐天如命，以田园与自然景观搭配，营造客家人取之自然的生活环境，田园区规划以稻作、烟叶为主，并有客庄常见果树及经济作物，另配制烟楼、伙房及垄间等传统建物，做为文化体验之户外展场。</p><p>&nbsp;</p><p>3、九香花园景观区</p><p>以开基伯公为中心的九香花园，取自客家人以盘花拜伯公的生活习惯，当然还有生男的拜新丁习俗等，以带状配置之景观区域编织有如客家花布地景，搭配户外演出空间，让文化演艺与周边地景产生关联。</p><p>&nbsp;</p><p><br/></p>"
        },
        "0937": {
          "text": "良达科技厂房更新设计"
        },
        "0945": {
          "text": "农业科技园区外销观赏鱼及水产种苗产销营运区暨研发物流区",
          "desc": "<h4>设计概念</h4><p>1.鱼．鳞</p><p>亮丽闪动，能反射及折射亮光，犹如镜体，能使敌人炫目，亦能水天一色，不辨物体，成为天然伪装。</p><p>保护屏障，能隔绝外物感染，形成外部骨架，保持外型，减少与水的摩擦力。</p><p>有机生长，能随而展现生物的成长与健康指标。</p><p>2.建筑．外皮</p><p>建筑外皮的格栅屏幕，宛若本地人文的客家细编竹帘，保护着建筑墙体的大面开口与屋顶，导风遮阳，绿化隔热，体现节能的生态建筑。</p><p>重复律动的垂直羽版，随时间光影的变化，若鱼鳞般似的展现建筑物不同的幻化与活力，隐喻建筑内部涵养着无数的生命。</p><p>配置构想</p><p>1.分区明确完整</p><p>本工程用地主要分为研发物流区及外销观赏鱼产销营运区两部分。研发物流中心（1栋）位于基地北侧之研发物流区，具有独立之运输动线，避免与他栋厂区动线干扰。产销营运区标准厂房12栋位于物流中心之南侧，各栋建筑物正面皆面向道路，形成各自独立之出入口。各厂房之间留设足够间距以复层杂生混种绿化作为区隔，确保各栋厂房之私密性。</p><p>&nbsp;</p><p>2. 土地利用效率最大化</p><p>沿产销营运区外围配置厂房用地，使各厂房用地均为面宽30M、深50M，且正面皆面道路，提供最便利之运输条件，保留最大空地供厂区使用。厂房围塑出之中庭则作为景观公园及公用活动中心，期使土地使用发挥最大效益。</p><p>&nbsp;</p><p>3. 配合园区纹理，延续生态绿地</p><p>基地绿带配合园区现有绿轴之纹理，延伸现有生态绿地。</p><p>&nbsp;</p><p>4. 景观公园化</p><p>主要景观处为各厂房背面所围塑之中庭，结合生态水池构筑水景，成为园区工作人员漫步、休憩之处。人车动线分离及道路外围与基地内人行步道之林荫步道，提供园区如同公园般舒适的步行环境。</p><p>&nbsp;</p><p>5. 广告塔与LED电子屏幕</p><p>利用绿轴线之延伸向上，以斜坡植被之地景方式共构而成本区最高之构造物，形成地标型之广告高塔，其内并设置供应本区之海水、淡水、软水水源。</p><p>&nbsp;</p><p>6. 公用设备配置于区域核心，管线布设经济效率</p><p>公用设备(动力中心)配置于基地核心，其优点可使各厂房获得最短的管线距离，为最经济而有效益之配置。</p><p>&nbsp;</p><p>&nbsp;</p><p><br/></p>"
        },
        "9437-1": {
          "text": "大昌医院"
        },
        "1206": {
          "text": "金门三创"
        },
        "M0121": {
          "text": "渤海皇家",
          "desc": "<h4>渤海湾的空间尺度</h4><p>&nbsp;</p><p>建筑空间是为适应人的生理行为和精神需求而建造的，因此，在可能的条件下，人们会选择一个适宜的尺度，以满足其生理需求、领域感、私密性、邻里关系以及自我等方面的需要。</p><p>&nbsp;</p><p>我们想要掌握的尺度：</p><p>环境与密度的尺度：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 人居环境要考虑人口密度与公共空间及设施的合理性，兼顾交通、景观、邻里尺度等方面的条件。</p><p>开间与进深的尺度：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于居住者来说，大的开间、小的进深意味着获得多的阳光和景观。</p><p>楼高与层高的尺度：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 高层集合住宅历来存在着不同的习惯：低层可接近花园，高处可开阔视野；低处上下方便，高层减少尘埃。</p><p>内门与外窗的尺度：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 高门是大宅的标志，大窗是时尚的标志，门是居室的屏障，不仅蕴涵着便利，同时体现着美观；窗是连接户外的采光、通风，不仅影响着舒适，同时关系到健康。</p><p>&nbsp;</p><p>无所不在的风景阳光</p><p>每户住宅向着秦皇岛渤海湾的碧海云天敞开胸怀，八面来风，洗心涤尘，面面采光，阳光明媚。住高观远，水天交接，美不胜收。建筑前方为气势宏伟的花园广场，后侧则为运动休闲活动区，结合地下的休闲会所，可赏可亲，风情无限。</p><p>&nbsp;</p><p>全新天地的雅致生活</p><p>建筑物的表情丰富，鲜明的现代主义风格，彰显个性更为独特，朝迎旭日，暮送夕阳，生活不仅仅是更上一层楼，而是别开一番天地。建筑物因留设花园广场而退缩，净化空气更阻隔了喧闹的嘈杂，氛围祥和；大堂门厅庄重堂皇，彰显风雅文化；每户专设透明玻璃栏杆的阳台，提供观景休闲另一个层次的选择，让温暖来自阳光，更来自彼此的笑容。</p><p>&nbsp;</p><p>&nbsp;</p><p><br/></p>"
        },
        "M0208": {
          "text": "莹辉照明应用中心",
          "desc": "<h4>夹缝中的黑盒子</h4><p>&nbsp;</p><p>本项目为上海市区内旧有大楼的改建设计案，基地挤身于普陀区内环高架与轻轨明珠线之间，原有建筑物为1994年完工之七层RC办公大楼；除依业主要求保留其原有梁柱楼板结构外，其平面配置及立面造型均重新规划设计。</p><p>因主要用途是作为照明公司的办公、设计及展售中心，故夜间照明计划是为本案的表现重点。整体设计概念上，以<span style=\"position:relative;margin-left:-4px;\">「</span>BLACKBOX」为出发点，为表现特殊的灯光效果及照明韵律，我们利用建筑物的基本长方形体，作为灯光展演的舞台或屏幕。</p><p>在操作手法上，二层以上总计五个楼层高的封闭式外墙面，不规则配置了200个15×30㎝的埋入式全彩LED灯盒，灯盒采用内退于铝板外墙的设计方式，适当的隐藏了玻璃面的固定及防水所需的硅利康填缝。在白天，灯盒退缩造成的阴影凹凸关系，形成有如奶酪块般的趣味性；在夜间，透过喷砂玻璃的运用及灯盒内部的白色烤漆，对LED光源的均匀投射、反射，可得到较佳的呈现效果。每当夜幕低垂时，建筑物的深灰色形体渐渐隐入夜色之中，LED灯盒则开始幻化出不同颜色的点点星光。</p><p>此外，在建筑物的东侧立面上，设置了四个楼层高的连续垂直遮阳板，除白天有遮光的效果外，夜晚则利用隐藏于遮阳板背面的照明灯具，投射蓝色冷光于建筑物的侧面开口上，斜面遮阳板在间接照明的投射下形成蓝色序列式条状灯带，与LED灯盒的光点形成另一种点与面的对比感，在炫丽繁华的城市夜景中，这个夹缝中的黑盒子呈现了与招牌、霓虹灯相异的照明情境。</p><p>&nbsp;</p><p>&nbsp;</p><p><br/></p>"
        },
        "M0311": {
          "text": "广西民族博物馆方案"
        },
        "M0405": {
          "text": "东风日产汽车办公楼+研发中心",
          "desc": "<h4>设计目标</h4><p>&nbsp;</p><p>东风汽车有限公司系中国东风汽车集团与日本日产汽车集团共组之全中国最大之外资企业，除了在武汉地区设立总部基地及商用车研发中心外，本项目更是乘用车公司设计研发部门最重要之总部基地。</p><p>&nbsp;</p><p>东风乘用车公司办公楼与研发中心两者均是企业体核心价值的反映，但于外部环境关系上两者却思考着截然不同的设计布局：研发中心与试车道要求绝对的隐敝性，办公大楼则结合展示的开放感与工作的人性化；同时，更能兼顾汽车工业的科技意象与环境共生的永续精神。</p><p>&nbsp;</p><p>设计构想</p><p>&nbsp;</p><p>开放与隐蔽：为了满足不同的隐蔽条件，办公楼与研发中心两者均采用内向性的设计方式，使隐蔽的空间仍能在内庭产生对话，再藉由不同的入口与空间机能配置，达成不同程度的开∕蔽需求。造型则以方体简约的量体表现工业建筑的精神，而实虚的两个椭圆形隐含开放与交流的协调圆融，整体场域与建筑展现中、日企业及文化的内涵。</p><p>&nbsp;</p><p>办公大楼主要由两栋实体建筑量体所构成，其间围塑一处大挑空中庭的虚体空间，办公大楼前栋兼容对外展示及会议的机能所构筑的公共空间，藉由挑空中庭将活动向上延伸且串接后栋内部办公环境，让访客与工作者的视觉能穿透至各层的办公区，并以空中廊道连接前后栋之空间，隐喻人性化工作环境将沟通协调的机能关系反映在实体的元素上。</p><p>&nbsp;</p><p>研发中心是以外方体与椭圆形内庭形成的建筑，周边则以草坡围绕外围区域，将建筑物的外部视觉意象降至最低程度，强烈的宣示隐蔽性；并以内庭作为各空间单元之垂直水平联系动线，也作为沟通交流的公共领域。</p><p>&nbsp;</p><p><br/></p>"
        },
        "M0409": {
          "text": "花都艺墅小区"
        },
        "M0411": {
          "text": "东风汽车有限公司总部方案"
        },
        "M0414": {
          "text": "十堰市博物馆方案"
        },
        "M0510": {
          "text": "东风本田汽车办公楼"
        },
        "M0523": {
          "text": "松江公共实训中心方案"
        },
        "M0526": {
          "text": "万泓企业总部大楼方案"
        },
        "M0601": {
          "text": "东风日产汽车培训中心",
          "desc": "<h4>设计构想</h4><p>在现有的条件限制下利用现代建筑造型手段，以求通过建筑形式本身直接表达建筑物的内部基本功能和时代精神。</p><p>通过探索空间机能的内在关系并使之有机相连，对比例、虚实关系、对比等分析后，决定使用一个实的系统将复杂分散的立面元素统一起来，同时保持各个元素自身的特点与张力，使其形成对比，产生了鲜活的空间氛围.通过白色、中灰、红色铝塑板作为外墙立面材料，结合玻璃幕墙、聚碳酸酯、金属细部构件及浅黄色的外墙遮阳板，使建筑立面具有现代而活跃的气氛，在统一中蕴涵微妙的变化，使人产生丰富的视觉感受.</p><p>将多功能厅与阶梯教室分离于体系外形成体块的穿插与咬合，作为均衡与活力的要点。倾斜的造型加强了建筑的张力和动感。并形成了与屋面的空间关系.</p><p>展示厅位于建筑入口东侧，使用轻质的金属框与玻璃幕墙形成的体量仿佛悬挂于空中，取景框强调了展示的功能，有效凝聚视线，运用红色的铝塑板强化了入口的存在，而相同的形式表明了它与展示功能的关系.</p><p>教室的防晒系统由可推拉的遮阳板与室内织物遮阳来完成，形成了活跃的空间元素。延续的实体将复杂的造型元素连接，形成了统一的系统，强调了量体的雕塑感。</p><p>聚碳酸酯化学材料的使用在立面上产生了半透明材质效果，形成微妙的变化，在透明与不透明间形成中性地带，符合内部隐蔽的使用功能，有效的采光而遮挡视线。</p><p>绿色屋顶设计将建筑与周围环境天然地联系起来，减轻阳光直射产生的热量，优化周边空气，形成阶梯教室与多功能厅的室外休息平台。有效利用空间，使建筑产生更丰富的空间层次感。</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><br/></p>"
        },
        "M0708": {
          "text": "如皋南通六建总部",
          "desc": "<h4>设计概念：</h4><ol><li><p>本方案之规模为地上十六层地下一层，基地三面临路，南向面临惠政西路退缩绿带，北与东各邻15m纪庄路及宣化南路，向西则隔一建筑空地与公园对望。基地车行主入口设至于北侧纪庄路上，邻主要道路惠政西路则留设人行入口。</p></li><li><p>配置上群楼部分分成两栋，西栋楼为办公楼入口大厅、咖啡厅、餐厅等，东栋喽则设有商场健身房及多用途等空间，三搂以上之办公主楼则横跨于两栋群楼之上，呈南北座向，三量体之间形成一开放的URBAN HALL。地面层与地下一楼停车场以挑空的半开放空间串连，间接将阳光与空气导引至地下停车空间。</p></li><li><p>平面的布局转化于南通六建的LOGO，立面造型上则利用清水混凝土与玻璃帷幕，塑造出利落的工程形象，并将主楼设置于邻近惠政西路上，以提高沿街立面的视觉感。</p></li></ol><p>&nbsp;</p><p><br/></p>"
        },
        "M0801": {
          "text": "扬州瘦西湖华庄低层住宅项目方案"
        },
        "M0815": {
          "text": "南京农业展馆",
          "desc": "<h4>设计概念：</h4><p><span style=\"position:relative;margin-left:-4px;\">「</span>长江」、<span style=\"position:relative;margin-left:-4px;\">「</span>农田」孕育了无数的生命。田是农业发展的<span style=\"position:relative;margin-left:-4px;\">「</span>本」；亦是实现农业科技的<span style=\"position:relative;margin-left:-4px;\">「</span>场所」。</p><p>长江<span style=\"position:relative;margin-left:-4px;\">「</span>水」提供农田灌溉的来源，水跟农田的结合，形成农业科技最重要的<span style=\"position:relative;margin-left:-4px;\">「</span>前因」。</p><p>本设计方案藉由<span style=\"position:relative;margin-left:-4px;\">「</span>水」跟<span style=\"position:relative;margin-left:-4px;\">「</span>田」意像，作为农业科技国际交流中心设计发展的主要构想。</p><p><span style=\"position:relative;margin-left:-4px;\">「</span>水」-----光影的、闪耀的</p><p>水因光而产生了光影及闪耀的视觉，<span style=\"position:relative;margin-left:-4px;\">「</span>光影」展现了水的姿态，<span style=\"position:relative;margin-left:-4px;\">「</span>闪耀」活泼了水的表情，光影的舞动与闪耀的光芒，让水有了生命。</p><p><span style=\"position:relative;margin-left:-4px;\">「</span>田」-----系统的、有机的</p><p>阡陌纵横的田埂，在路网的分割下自成一套系统，而系统中因地块大小不同而成有机分布。不同的<span style=\"position:relative;margin-left:-4px;\">「</span>田」因耕种的差异有了多样的表情与丰富的色彩变化，让大地生意盎然。</p><p>基地环境分析：</p><p>本设计方案基地位于南京市河西新城区内，南临65M河西大街（纬九路）、东临35M乐山路、北临24M楠溪江西街、西临24M计划道路与公园预定地相望，为河西新城区总体规划之<span style=\"position:relative;margin-left:-4px;\">「</span>舞动之轴」的西侧端点。</p><p>&nbsp;</p><p><br/></p>"
        },
        "M0816": {
          "text": "天泰佳祺大厦方案",
          "desc": "<h4>设计概念</h4><p>a、 “佳祺大厦”设计遵从一种以人、文化及特定场所出发的特殊价值观和理念，是在上述要素错综复杂的基础之上为文脉进行的设计。 “佳祺大厦”的设计力图体现出其设计和建造的时间和场所的特征，平衡经济效益和环境资源，针对现有场地、气侯、历史和已经存在的建筑先例，去寻求并找出最适宜、最得体的建筑及规划解决方案。 <br/>B、“佳祺大厦”建筑规划设计由于受临近的小区日照问题的困扰我们在设计层面上力图在多元思维中追求平衡，运用连贯的设计哲学提供不同表现形式的解决方法。经过设计者的集思广益，与业主、规划部门及其他社会既得利益者的沟通和交流，协助业主做出对推进项目必不可少的决定，从而最终确定本案的综合发展主题。因此， “佳祺大厦”的设计没有采用一种既定或统一的标签，而是在多样化中进行创造，既表现了个人的智慧和技能，又具有符合规划部门规划要点业主愿望和团队合作的精神，使建筑风格能保持在同一地区的稳定水准。 <br/>C、“佳祺大厦”的设计概念的推出，我们相信一个好的作品是增值的，它不仅反映了设计者付出劳动的价值，开发建造者追寻的价值和使用者期待的价值，而且也提升了社区、社会和环境的广义整体价值。我们希望以这种对文化附加值的追求来适应城市变迁和建筑革新的挑战，在进行创造工作的过程中体现一份对历史、文化、环境和社会的责任和职业使命。</p><p>室外特征</p><p>建筑外部空间形态构成：为最大限度降低、回避建筑体量对临近小区住宅日照采光和建筑背景景观带来的影响和冲突，建筑外部构成采用板式平顶等组合元素和虚实体量处理手法，并以中性稳定的外墙色彩和现代块面组合，使规则的外部空间形态赋予江南文化印记并富有变化也减小对临近小区的过多遮挡，同时也与将军山景区形成一种建筑文脉上的呼应。建筑商场外墙材料以干挂花岗岩火烧板、住宅则以仿石面砖涂料为主；窗为喷塑铝合金中空反光银蓝玻璃窗。</p><p>室内特征</p><p>建筑空间营造：建筑空间营造处理上，住宅部分：采用单元入口楼层相连的平面布局方式，住户在一楼电梯垂直交通空间主导空间引领下，进入各个居住楼层，利用单元之间的过渡连接段，设公共交流平台。商场部分：两层商场面从室外交通流线组织，到内部交通和垂直交通勾连，都与住宅部分明显区分开来。为最大限度保护现有绿地和用地利用率及强度，整个建筑构成采用单元串联式布局元素形态，采用剪切、相贯、加减等设计处理手法，在满足临近小区标准日照和通风要求基础上，将整体建筑形体亲融在将军山、翠屏山整体景观之中。</p><p>&nbsp;</p><p><br/></p>"
        },
        "M0826": {
          "text": "丰盛集团科技园C地块建筑概念设计方案"
        },
        "M0900": {
          "text": "淮阴区社会事业大厦方案"
        },
        "M1020": {
          "text": "海门市国税局数据处理中心",
          "desc": "<h4>设计说明：</h4><p>1、“功能第一的原则”，本工程包括办公，服务大厅，汽车库等多项功能，综合性较强，设计应首先从满足各项使用功能出发，“形式追随功能”。</p><p>2、“以人为本”的原则。办公楼的功能主体是办公，办公人员始终是工程考虑的中心，本着让每一个办公人员都能有一个阳光的办公环境的想法，本工程营造一个可持续发展的各主要办公房间均朝南的阳光建筑</p><p>3、“可持续发展”的原则，根据办公环境长远发展规划要求，将生态建筑及可持续发展的先进理念引入本工程设计中，注重节能、环保及相关新技术、新材料、新设备的使用，使新建筑真正符合新时代的要求。</p><p>4、“注重空间景观再造”的原则，在合理组织院内各种人流物流，使之便捷顺畅、简洁高效、互不干扰的同时,努力塑造和谐、宜人的内外部空间环境，建立崭新有序的国税对外形象，使国税大楼成为国税人员和交税人的绿色秩站。</p><p><br/></p>"
        },
        "M1026": {
          "text": "大麦客量贩店"
        },
        "M1029": {
          "text": "格林芙洛斯世界生态旅游区规划方案"
        },
        "M1104": {
          "text": "钱江新城概念性总体规划方案"
        },
        "M1112": {
          "text": "平潭小高雄综合开发项目规划方案"
        },
        "M1121": {
          "text": "东莞中国邮政大楼方案"
        },
        "M1201": {
          "text": "漳州庆富学院"
        },
        "M1203": {
          "text": "襄阳新天地项目规划方案"
        },
        "M1208": {
          "text": "漳州庆富学院一期"
        },
        "M1302": {
          "text": "馀姚保利文化商业广场",
          "desc": "<h4>规划总体布局</h4><p>1、总体布局</p><p>创造一个充满文化艺术、丰富多样、井然有序的商业综合体总体规划的目标。</p><p>地块呈梯形的基地，东西长约400米，南北宽约190米,局部约500米，地块用地面积为119,070平方米。根据地块的特点，建筑主要采用片状布局及利用步行街街道来串连各片区，局部地段南北布局形成内街，以丰富整体文化艺术商业街的空间形态。</p><p>1） 空间结构</p><p>沿南边起分布有八栋1-12层的电子商务楼及1-2层的艺术创作街商业，往北依次分布1-3层的文化新天地步行街，临谭家岭东路及城东路设置1-4层文化娱乐购物、影城、时尚运动中心及42层的塔楼建筑体形成一个完整的空间序列。序列的两端是独立的、体量偏大的商业旗舰店；中间的商业体量偏小，灵活的布局创造了商业街内外穿插的变化；中央文化艺术步行街商业建筑一条龙的布局营造整个序列的高潮。</p><p>2）空间特色</p><p>1）连廊：连廊仿佛一根纽带将各栋独立的商业建筑联结为一个有机的整体；同时它也联结了文化娱乐购物、影城、时尚运动中心及文化新天地等商业项目。不同特色的商业的结合将大大提高商业的整体的竞争力和活力。两层的连廊环绕建筑内外交错创造了丰富多样的空间体验，即是商业的交通要道又是观景平台。</p><p>2）露台阳台：文化新天地的商业街体现在更多优质丰富的室外活动空间的营造上。利用建筑高低的变化在沿步行街面形成的屋顶平台以及一层的大露台是游客亲近街景、品茗赏月、领略文化艺术氛围的场所。屋顶绿化的处理手法柔化了室内外的过渡及屋顶商业平台；是人们体验自然最敏感之处。</p><p>3）文化艺术步行街道：沿着基地东侧天然形成的自然水系是项目亟须利用的环境资源，将人导入步行街道进而渗透至文化娱乐购物、影城、时尚运动中心及会展中心等等商业体。商业业态以餐饮为主艺术文化为辅。中央圆形艺术广场点缀其中以丰富其室外活动空间，为潜在的应用提供可能性。圆形集露天表演舞台、儿童游乐场所和各种庆典活动的举办等应用为一体。</p><p>&nbsp;</p><p><br/></p>"
        },
        "M1306": {
          "text": "云霄高铁物流园区概念",
          "desc": "<h4>设计概念：</h4><p>以浮岛现象联想概念</p><p>生态浮岛的概念，它的主要作用就是为了改善生态，在此概念中河流也可以有景观功效但偏重于改善水质、处理污水，吸收和富集水体当中的营养物质及其它污染物, 并通过最终收获植物体的形式, 彻底去除水体中被植物积累的营养负荷等污染物。融入整个基地使用水源，而绿色建筑与河流融洽联系组合成生态浮岛概念。</p><p>概念其中将花园至入空中桥梁与商业空间 ，从而种植绿化建筑提供阴影和富氧环境。</p><p>办公楼内部采用生态体系</p><p>每层办公室都设有外阳台和通高的推拉玻璃门以便控制自然通风的程度。</p><p>住宅区与公寓都应用生态建筑构想改善环境与休息绿洲屋顶达到生态效果。</p><p>加入电流走向形象的动态，转化成人脉动线延续性与链接性。而人群将像电子一样被电流带动置入致商业，办公，住宅等每个停留的位置。</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><br/></p>"
        },
        "M1310": {
          "text": "庆富绿色总部园区规划方案"
        },
        "M1317": {
          "text": "哈尔滨白鱼泡温泉度假村"
        },
        "V0802": {
          "text": "越南北宁赌场酒店方案",
          "desc": "<p>开发业主乃越南当地知名的地产开发商，因应越南首都河内市外围省份外商进驻的成熟性及商务住宿的需求，并配合CASINO赌场执照的取得，计划兴建七百间客房规模的五星级商务饭店，饭店内配属会议展示、购物餐饮、夜总会、健康俱乐部、赌场、秀场等多元多姿的功能空间；饭店外部建构一处三层楼落差的音乐水瀑景观意象，让光、影、水幻化成夜间的表演精灵。</p><p>&nbsp;</p><p>越南深受中国文化的影响，再则因为赌场设计对于<span style=\"position:relative;margin-left:-4px;\">「</span>风水」的思维，于设计之初已确立了主要空间的方位架构；然<span style=\"position:relative;margin-left:-4px;\">「</span>动线」安排更是赌场饭店的另一挑战，举凡赌客(VIP)、住客通道到管理服务动线串通了分区设施与后场安排。越南风俗文化<span style=\"position:relative;margin-left:-4px;\">「</span>待客之道」的理解将运用于此案在空间转化、建材选配与内装主题上，<span style=\"position:relative;margin-left:-4px;\">「</span>市场考虑、功能主导、效益为先」让CASINO的冒险之旅欢乐无限，为住客贴心的服务而倍显尊荣。</p><p>&nbsp;</p><p><br/></p>"
        },
        "V1001": {
          "text": "安富Palais de Lotus 住宅社区开发方案"
        },
        "V1302": {
          "text": "象湖生态旅游区A2/A3商业娱乐项目"
        }
      });

      CASEDETAILS = {
        "1003": "<h3>易宏工业新厂及办公楼</h3><p>地点：台湾高雄</p><p>设计 / 完工：2010 / 2012</p><p>性质：厂房 / 办公 / 宿舍</p><p>业主：易宏热镀锌工业股份有限公司</p><p>基地面积：7,200sm</p><p>楼地板面积：5,220sm</p><p>高度 / 楼层：19.33m / 3F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：夏雯霖</p><p>专业顾问：结构：柳碧贞 / 机电：尚展</p><p>施工单位：宏明营造有限公司</p><p>工程造价：TWD 42,576,000元</p>",
        "1006": "<h3>天恩弥勒殿</h3><p>地点：台湾新竹</p><p>设计 / 完工：2010 -</p><p>性质：宗教设施</p><p>业主：财团法人天恩弥勒佛院</p><p>基地面积：77,549sm</p><p>楼地板面积：8,023sm</p><p>高度 / 楼层：34.7m</p><p>服务范围：建筑设计</p><p>建筑师：刘湘梅</p><p>专业顾问：结构：天珩 / 机电：联立 / 水保：新兴</p><p>设计中</p>",
        "1008": "<h3>中钢总部大楼方案</h3><p>地点：台湾高雄</p><p>设计 / 完工：2010 / 2011</p><p>性质：总部办公</p><p>业主：中国钢铁股份有限公司</p><p>楼地板面积：6,673sm</p><p>服务范围：室内设计方案</p><p>建筑师：刘湘梅</p><p>合作设计 / 当地设计单位：长益友室内装修股份有限公司</p>",
        "1010": "<h3>国立潮州高级中学明德楼 </h3><p>地点：台湾屏东 </p><p>设计 / 完工：2010 / 2012</p><p>性质：教室</p><p>业主：国立潮州高级中学</p><p>基地面积：53,671sm</p><p>楼地板面积：4,883sm</p><p>高度 / 楼层：19.98m / 4F</p><p>服务范围：建筑设计 / 景观设计</p><p>建筑师：夏雯霖+黄建盛</p><p>专业顾问：结构：蔡人寿 / 机电：立盛 / 幕牆：比晰 / 太阳能：茂迪</p><p>施工单位：兴发营造有限公司</p><p>工程造价：TWD 85,945,000元</p>",
        "1024": "<h3>许晴哲皮肤科诊所</h3><p>地点：台湾高雄</p><p>设计 / 完工：2010 / 2011</p><p>性质：诊所</p><p>业主：许晴哲医师</p><p>楼地板面积：207sm</p><p>服务范围：室内设计工程 / 家具选配</p><p>建筑师：刘湘梅</p><p>专业顾问：CIS：柏美</p><p>施工单位：大林室内装潢设计有限公司</p><p>工程造价：TWD 3,600,000元</p>",
        "1110": "<h3>桂田酒店三馆</h3><p>地点：台湾台南</p><p>设计 / 完工：2011 -</p><p>性质：酒店</p><p>业主：桂田关系企业</p><p>基地面积：4,532sm</p><p>楼地板面积：32,123sm</p><p>高度 / 楼层：90.2m / B4+17F</p><p>服务范围：建筑设计 / 景观设计</p><p>建筑师：许铭阳+夏雯霖</p><p>专业顾问：结构：京鼎 / 机电：高英</p><p>施工单位：三民营造股份有限公司</p><p>设计中</p>",
        "1122": "<h3>左营蔡宅</h3><p>地点：台湾高雄</p><p>设计 / 完工：2011</p><p>性质：住宅</p><p>业主：蔡秀玉</p><p>楼地板面积：191sm</p><p>服务范围：室内设计工程 / 家具选配</p><p>建筑师：刘湘梅</p><p>施工单位：大林室内装潢设计有限公司</p><p>工程造价：TWD 1,165,000元</p>",
        "1130": "<h3>统正梦时代二期开发项目</h3><p>地点：台湾高雄</p><p>设计 / 完工：2011 / 2013</p><p>性质：酒店 / 商场 / 办公 / 住宅</p><p>业主：统正开发股份有限公司</p><p>基地面积：27,634sm</p><p>楼地板面积：371,950sm</p><p>高度 / 楼层：B4+55F</p><p>服务范围：总体规划</p><p>建筑师：许铭阳+黄建盛</p><p>专业顾问：开发：高力国际</p>",
        "1138": "<h3>天恩慈氏祠堂</h3><p>地点：台湾苗栗</p><p>设计 / 完工：2011 -</p><p>性质：宗教设施</p><p>业主：财团法人天恩弥勒佛院</p><p>基地面积：9,775sm</p><p>楼地板面积：8,327sm</p><p>高度 / 楼层：17.95m</p><p>服务范围：建筑设计</p><p>建筑师：刘湘梅</p><p>专业顾问：结构：天珩 / 机电：联立 / 水保：新兴</p><p>设计中</p>",
        "1141": "<h3>垦丁白沙民宿</h3><p>地点：台湾屏东</p><p>设计 / 完工：2011 -</p><p>性质：民宿</p><p>业主：大帑殿企业有限公司</p><p>基地面积：29,283sm</p><p>楼地板面积：3,370sm</p><p>高度 / 楼层：10.7m / 3F</p><p>服务范围：建筑设计 / 景观设计 / 室内设计</p><p>建筑师：许铭阳+赵文绅+刘湘梅</p><p>合作设计 / 当地设计单位：结构：中泰 / 机电：高英</p><p>施工单位：设计中</p>",
        "1143": "<h3>义大亚洲广场</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2011 -</p><p>性质：酒店 / 百货 / 宴会</p><p>业主：义联集团 </p><p>基地面积：18,024sm</p><p>楼地板面积：240,000sm</p><p>高度 / 楼层：122.4m / B6+29F</p><p>服务范围：建筑设计</p><p>建筑师：许铭阳+赵文绅+黄建盛</p><p>专业顾问：结构：超伟 / 机电：正弦 / 交通：行易网 /  环评：能硕 / 防灾：捷力士</p><p>设计中</p>",
        "1144": "<h3>钜橡企业F厂及办公楼</h3><p>地点：台湾台南</p><p>设计 / 完工：2011 -</p><p>性质：厂房 / 办公</p><p>业主：钜橡企业股份有限公司</p><p>基地面积：10,843sm</p><p>楼地板面积：15,352sm</p><p>高度 / 楼层：20.1m / 5F</p><p>服务范围：总体规划 / 建筑设计 / 室内设计</p><p>建筑师：夏雯霖+刘湘梅</p><p>专业顾问：结构：京鼎 / 机电：安立 / 消防：专益</p><p>施工单位：华丰营造股份有限公司</p><p>工程造价：TWD 215,627,000元</p><p>施工中</p>",
        "1150": "<h3>国际星辰旅馆更新整建</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2011 / 2012</p><p>性质：酒店</p><p>业主：国际星辰旅馆</p><p>基地面积：514sm</p><p>楼地板面积：7,125sm</p><p>高度 / 楼层：43.4m / B3+14F</p><p>服务范围：建筑改造设计</p><p>建筑师：许铭阳+夏雯霖</p><p>专业顾问：结构：天珩 / 机电：高英 / 室内：理杰</p><p>施工单位：福喜建设股份有限公司</p><p>工程造价：TWD 62,700,000</p>",
        "1151-1": "<h3>大江生医S9厂展示大厅</h3><p>地点：台湾屏东</p><p>设计 / 完工：2013 - </p><p>性质：办公展示</p><p>业主：大江生医生物整合设计公司</p><p>楼地板面积：521sm</p><p>服务范围：室内设计 / 多媒体规划</p><p>建筑师：许铭阳+刘湘梅</p><p>设计中</p>",
        "1151": "<h3>大江生医S9厂</h3><p>地点：台湾屏东</p><p>设计 / 完工：2011 - </p><p>性质：厂房 / 办公</p><p>业主：大江生医生物整合设计公司</p><p>基地面积：10,866sm</p><p>楼地板面积：7,504sm</p><p>高度 / 楼层：　9.89m / 2F</p><p>服务范围：总体规划 / 建筑设计 / 室内设计</p><p>建筑师：许铭阳+刘湘梅+黄建盛 </p><p>专业顾问：结构：远代 / 机电：伟盟 / 空调：广达 / 消防：冠懋</p><p>施工单位：诠兴营造股份有限公司/p><p>工程造价：TWD 129,900,000元</p><p>施工中</p>",
        "1210": "<h3>缅甸眉苗佛院方案</h3><p>地点：缅甸眉苗</p><p>设计 / 完工：2012</p><p>性质：宗教设施</p><p>业主：弥勒大道</p><p>基地面积：8,712sm</p><p>楼地板面积：15,476sm</p><p>高度 / 楼层：36m / 5F</p><p>服务范围：建筑设计</p><p>建筑师：刘湘梅</p>",
        "1216": "<h3>恒春福乐酒店式公寓方案</h3><p>地点：台湾屏东</p><p>设计 / 完工：2012</p><p>性质：酒店</p><p>业主：福乐企业集团</p><p>楼地板面积：29,575sm</p><p>服务范围：室内设计方案</p><p>建筑师：刘湘梅</p>",
        "1221": "<h3>义大癌治疗医院</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2009 / 2011</p><p>性质：医院</p><p>业主：义大医疗财团法人</p><p>基地面积：138,455sm</p><p>楼地板面积：114,496sm </p><p>高度 / 楼层：49.9m / B2+12F</p><p>服务范围：建筑设计</p><p>建筑师：许铭阳+刘湘梅</p><p>合作设计 / 当地设计单位：-</p><p>专业顾问：结构：超伟 / 机电：信伟 / 空调：协展 / 消防：铉弘 /  室内：义大开发</p><p>施工单位：新泉营造股份有限公司</p><p>施工中</p>",
        "1225": "<h3>高雄美国学校总体规划方案</h3><p>地点：台湾高雄</p><p>设计 / 完工：2012</p><p>性质：行政 / 教学 / 餐厅 / 集会堂 / 图书馆</p><p>业主：财团法人高雄美国学校</p><p>基地面积：29,302sm</p><p>楼地板面积：23,600sm</p><p>高度 / 楼层：B1+4F</p><p>服务范围：总体规划 / 建筑设计 / 室内设计</p><p>建筑师：许铭阳+彭信苍+夏雯霖+刘湘梅</p><p>专业顾问：结构：天珩 / 机电：联立 / 空调：协展</p><p>工程造价：TWD 464,633,813元</p><p>邀请竞图第二名</p>",
        "1228": "<h3>义大游乐世界二期及古堡酒店</h3><p>地点：台湾高雄</p><p>设计 / 完工：2012 -</p><p>性质：主题乐园 / 滑雪场/ 商场 / 酒店 / Villa / 电影后製</p><p>业主：义联集团</p><p>基地面积：179,800sm</p><p>楼地板面积：177,708sm</p><p>高度 / 楼层：21.6m / B1+6F</p><p>服务范围：总体规划</p><p>建筑师：许铭阳+黄建盛</p><p>设计中</p>",
        "1238": "<h3>德商罗曼动物疫苗厂办新建</h3><p>地点：台湾屏东</p><p>设计 / 完工：2012 -</p><p>性质：厂房 / 办公</p><p>业主：罗曼台湾有限公司</p><p>基地面积：29,256sm</p><p>楼地板面积：7,408sm</p><p>高度 / 楼层：18.4m / 3F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：许铭阳+赵文绅</p><p>合作设计 / 当地设计单位：印度 DCPL 国际顾问</p><p>专业顾问：结构：天珩 / 机电：明哲 / 空调：协展</p><p>工程造价：TWD 750,000,000元</p><p>设计中</p>",
        "1243": "<h3>竹精緻商旅更新整建</h3><p>地点：台湾高雄</p><p>设计 / 完工：2012 / 2014</p><p>性质：酒店</p><p>业主：泓扬基业股份有限公司</p><p>楼地板面积：3,060sm</p><p>服务范围：室内设计工程</p><p>建筑师：刘湘梅</p><p>专业顾问：CIS：柏美 / 机电：高英</p><p>施工中</p>",
        "1249": "<h3>国立海洋科技博物馆海洋生态展示馆</h3><p>地点：台湾基隆</p><p>设计 / 完工：2012 -</p><p>性质：水族馆</p><p>业主：庆阳海洋企业股份有限公司</p><p>基地面积：11,614sm</p><p>楼地板面积：15,488sm</p><p>高度 / 楼层：20.6m / B1+4F</p><p>服务范围：建筑设计 / 景观设计</p><p>建筑师：许铭阳+彭信苍+夏雯霖</p><p>合作设计 / 当地设计单位：英国福斯特建筑师事务所 / 澳洲AAT</p><p>专业顾问：结构：信业 / 机电：联立 / 空调：协展 / 外牆：比晰 /  景观：颐和 / 水保：智全 / 性能设计：巨江 / 还评：光宇 / 绿建筑：绿建筑学会</p><p>施工单位：互助营造股份有限公司</p><p>工程造价：TWD 1,350,000,000元</p><p>设计中</p>",
        "1303": "<h3>印尼天慧弥勒佛院方案</h3><p>地点：印尼</p><p>设计 / 完工：2013</p><p>性质：宗教设施</p><p>业主：弥勒大道</p><p>基地面积：12,984sm </p><p>楼地板面积：24,141sm</p><p>高度 / 楼层：38.6m / 6F</p><p>服务范围：建筑设计</p><p>建筑师：刘湘梅</p><p>专业顾问：结构：天珩</p>",
        "1315": "<h3>国立海洋科技博物馆商业空间</h3><p>地点：台湾基隆</p><p>设计 / 完工：2013 / 2014</p><p>性质：餐饮 / 卖店</p><p>业主：庆阳海洋企业股份有限公司</p><p>楼地板面积：2,771sm</p><p>服务范围：室内工程</p><p>建筑师：刘湘梅</p><p>施工单位：大林室内装潢设计有限公司</p><p>工程造价：TWD 54,179,957元</p>",
        "1320": "<h3>王冠铝业永安厂</h3><p>地点：台湾高雄</p><p>设计 / 完工：2013 -</p><p>性质：厂房 / 办公</p><p>业主：王冠铝业股份有限公司</p><p>基地面积：3,382sm</p><p>楼地板面积：4,640sm</p><p>高度 / 楼层：17.85m / 4F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：许铭阳+赵文绅</p><p>专业顾问：结构：蔡泰昌 / 机电：高英</p><p>施工单位：正辰营造有限公司</p><p>工程造价：TWD 93,920,000元</p><p>施工中</p>",
        "1323": "<h3>大江生医中兴大学产学联合研发中心</h3><p>地点：台湾台中</p><p>设计 / 完工：2013 - 2014</p><p>性质：科研实验室</p><p>业主：大江生医生物整合设计公司</p><p>楼地板面积：640sm</p><p>服务范围：室内设计方案</p><p>建筑师：刘湘梅</p>",
        "1334": "<h3>印尼巴丹岛佛院方案</h3><p>地点：印尼巴丹岛</p><p>设计 / 完工：2014 -</p><p>性质：宗教设施</p><p>业主：弥勒大道</p><p>基地面积：217,856sm</p><p>楼地板面积：300,288sm</p><p>高度 / 楼层：72m / 6F</p><p>服务范围：建筑设计</p><p>建筑师：刘湘梅</p>",
        "1401": "<h3>佛光山惠中寺方案</h3><p>地点：台湾台中</p><p>设计 / 完工：2014</p><p>性质：宗教设施</p><p>业主：佛光山惠中寺</p><p>基地面积：8,052sm</p><p>楼地板面积：34,612sm</p><p>服务范围：室内设计方案</p><p>建筑师：刘湘梅</p>",
        "1402": "<h3>乐林宴会饭店</h3><p>地点：台湾高雄</p><p>设计 / 完工：2014 -</p><p>性质：餐饮</p><p>业主：林园婚旅机构</p><p>基地面积：5,086sm</p><p>楼地板面积：25,902sm</p><p>高度 / 楼层：36.6m / B3+9F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：许铭阳+夏雯霖</p><p>专业顾问：结构：天珩 / 机电：陈照荣 / 空调：协展 /  交通：安得 / 厨房：振凌</p><p>施工单位：设计中</p>",
        "1406": "<h3>金三荣市港段集合住宅</h3><p>地点：福建金门</p><p>设计 / 完工：2014 -</p><p>性质：集合住宅</p><p>业主：金三荣开发建设股份有限公司</p><p>基地面积：490sm</p><p>楼地板面积：3,323sm</p><p>高度 / 楼层：32.25m / B2+9F</p><p>服务范围：建筑设计 / 景观设计</p><p>建筑师：夏雯霖</p><p>专业顾问：结构：柳碧贞 / 机电：源盛</p><p>施工单位：泉昇营造股份有限公司</p><p>工程造价：TWD 15,283,684元 (法定)</p><p>设计中</p>",
        "1408": "<h3>大高雄俯瞰式观光设施可行性评估计</h3><p>地点：台湾高雄</p><p>设计 / 完工：2014 -</p><p>性质：观光设施</p><p>业主：高雄市政府观光局</p><p>楼地板面积：景观设计</p><p>高度 / 楼层：赵文绅</p><p>合作设计 / 当地设计单位：城都国际开发规划管理顾问有限公司</p><p>设计中</p>",
        "9015": "<h3>同盟大楼</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2001 / 2004</p><p>性质：集合住宅</p><p>业主：南和兴产实业股份有限公司</p><p>基地面积：2,014sm</p><p>楼地板面积：11,546sm </p><p>高度 / 楼层：48.2m / B2+14F</p><p>服务范围：总体规划 / 建筑设计 / 内装设计</p><p>建筑师：许铭阳+黄茂良+刘湘梅</p><p>专业顾问：结构：吕清心+刘张钦彦+蔡人寿 / 机电：联立</p><p>施工单位：宇泰营造股份有限公司</p><p>工程造价：TWD 163,000,000元</p>",
        "9101": "<h3>高雄市临港线铁路客运列车站体暨轮</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2002 / 2003</p><p>性质：轻轨站 / 渡船站 / 公共景观设施</p><p>业主：高雄市政府工务局</p><p>基地面积：23,108sm </p><p>高度 / 楼层：38.2m</p><p>服务范围：总体规划 / 景观设计</p><p>建筑师：许铭阳+夏雯霖</p><p>专业顾问：结构：超伟 / 机电：陈春成 / 照明：袁宗南</p><p>施工单位：春德营造股份有限公司＋全力营造有限公司</p><p>工程造价：TWD 36,000,000元</p><p>第一届高雄市优良都市设计景观评选大奖 优良作品</p>",
        "9201": "<h3>金酒公司金宁厂整体景观规划 </h3><p>地点：福建金门 </p><p>设计 / 完工：2003 / 2004</p><p>性质：厂区景观设施</p><p>业主：金门酒厂实业股份有限公司</p><p>基地面积：224,000sm</p><p>服务范围：总体规划 / 景观设计 / 建筑改造设计</p><p>建筑师：夏雯霖+赵文绅</p><p>专业顾问：结构：吕清心+刘张钦彦+蔡人寿 / 机电：联立</p><p>施工单位：泉昇营造股份有限公司</p><p>工程造价：TWD 47,450,000元</p>",
        "9217": "<h3>树德科技大学行政大楼暨礼堂</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2003 / 2007</p><p>性质：教室 / 办公 / 多功能礼堂兼体育馆</p><p>业主：树德科技大学</p><p>基地面积：158,793sm</p><p>楼地板面积：31,330sm</p><p>高度 / 楼层：25.8m / B2+5F</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：许铭阳+夏雯霖</p><p>专业顾问：结构：赖建诚 / 机电：东立 / 监造：中兴</p><p>施工单位：隆大营造股份有限公司</p><p>工程造价：TWD 144,996,449元</p>",
        "9230": "<h3>高雄捷运O5/R10美丽岛站</h3><p>地点：台湾高雄</p><p>设计 / 完工：2003 / 2005</p><p>性质：交通设施</p><p>业主：高雄捷运股份有限公司</p><p>基地面积：27,000sm</p><p>楼地板面积：35,000sm</p><p>高度 / 楼层：20m / B3+1F</p><p>服务范围：建筑设计 / 装修设计</p><p>建筑师：黄茂良+赵文绅</p><p>合作设计 / 当地设计单位：株式会社高松伸建筑设计事务所</p><p>专业顾问：结构 / 机电：中兴工程顾问有限公司</p><p>施工单位：荣民工程 / 日商鹿岛联合承揽</p><p>2009建筑园冶奖，高雄地区特别奖</p>",
        "9306": "<h3>福慧大楼</h3><p>地点：台湾高雄</p><p>设计 / 完工：2004 / 2007</p><p>性质：银行/ 集合住宅</p><p>业主：戴晋平</p><p>基地面积：736sm</p><p>楼地板面积：3,402sm</p><p>高度 / 楼层：37m / B2+9F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：夏雯霖</p><p>专业顾问：结构：蔡人寿 / 机电：立盛</p><p>施工单位：达茂营造股份有限公司</p><p>工程造价：TWD 20,477,528元</p>",
        "9311": "<h3>庆富集团营运总部大楼</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2004 / 2007</p><p>性质：办公</p><p>业主：庆富集团</p><p>基地面积：7,123sm</p><p>楼地板面积：25,179sm</p><p>高度 / 楼层：55.6m / B2+10F</p><p>服务范围：建筑设计</p><p>建筑师：许铭阳+夏雯霖</p><p>合作设计 / 当地设计单位：英国理查．罗杰斯建筑师事务所</p><p>专业顾问：结构：超伟 / 机电：协扬+彩镱 / 空调：协展 / 外牆：比晰 /  室内：汇侨+亚浩+莱格</p><p>施工单位：互助营造股份有限公司</p><p>工程造价：TWD 910,000,000元</p><p>RIBA International Awards 2009</p><p>2008 中华民国第一届都市设计大奖 入选决赛</p>",
        "9316": "<h3>海光三村公园地景保育再生利用工程</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2004 / 2005</p><p>性质：公共景观设施 / 文物馆</p><p>业主：高雄市政府工务局养护工程处</p><p>基地面积：61,622sm</p><p>高度 / 楼层：2F</p><p>服务范围：建筑设计 / 景观设计 / 旧建筑再利用</p><p>建筑师：许铭阳+夏雯霖</p><p>专业顾问：结构：黄益 / 机电：罗月瑛</p><p>施工单位：李青山营造有限公司</p><p>工程造价：TWD 18,000,000元</p>",
        "9345": "<h3>巧新科技三期厂房</h3><p>地点：台湾云林 </p><p>设计 / 完工：2004 / 2007</p><p>性质：厂房 / 办公</p><p>业主：巧新科技工业股份有限公司</p><p>楼地板面积：　66,461sm</p><p>高度 / 楼层：21.75m / B1+5F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：许铭阳+夏雯霖</p><p>专业顾问：结构：天珩 / 机电：立达</p><p>施工单位：固裕营造有限公司</p><p>工程造价：TWD 313,381,188元</p>",
        "9350": "<h3>义守大学图资大楼方案  </h3><p>地点：台湾高雄 </p><p>设计 / 完工：2004 / 2006</p><p>性质：图书馆</p><p>业主：义守大学</p><p>基地面积：9,471sm</p><p>楼地板面积：31,331sm </p><p>高度 / 楼层：12.6m / B3+5F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：许铭阳+刘湘梅</p><p>合作设计 / 当地设计单位：英国理查．罗杰斯建筑师事务所</p><p>专业顾问：结构：超伟 / 机电：协扬 / 空调：协展</p><p>工程造价：TWD 156,652,900元</p>",
        "9353": "<h3>大雅牙医诊所</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2004 / 2005</p><p>性质：诊所</p><p>业主：大雅牙医诊所</p><p>楼地板面积：1,149sm </p><p>高度 / 楼层：28.5m / B1+9F</p><p>服务范围：建筑改造设计 / 室内设计</p><p>建筑师：刘湘梅</p>",
        "9437": "<h3>SUPER新都</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2004 / 2011</p><p>性质：别墅住宅</p><p>业主：烨茂实业股份有限公司</p><p>基地面积：24,436sm</p><p>楼地板面积：70,444sm</p><p>高度 / 楼层：17.3m / B1+5F</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：许铭阳+黄茂良</p><p>专业顾问：结构：郑隆山 / 机电：亚泰</p><p>施工单位：新泉营造股份有限公司</p>",
        "9441": "<h3>义大天悦塔暨会议展览中心</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2005 - 2006</p><p>性质：景观高塔 / 展览中心 / 会议中心 / 缆车站 / 电影文化中心  / 餐饮 / 零售 / VILLA / SPA汤屋 / 酒店公寓</p><p>业主：义联集团</p><p>基地面积：361,681sm</p><p>楼地板面积：216,687sm </p><p>高度 / 楼层：398m / B4+15F</p><p>服务范围：总体规划 / 景观设计</p><p>建筑师：许铭阳+赵文绅</p><p>专业顾问：cdi / 开创</p>",
        "9442": "<h3>义大世界购物广场</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2005 / 2010</p><p>性质：零售 / 百货</p><p>业主：义联集团</p><p>楼地板面积：129,052sm </p><p>高度 / 楼层：B4+5F</p><p>服务范围：建筑造型设计</p><p>建筑师：许铭阳</p><p>合作设计 / 当地设计单位：日本cdi设计公司</p>",
        "9444": "<h3>义大世界伯爵特区</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2005 / 2011</p><p>性质：别墅住宅</p><p>业主：泛乔股份有限公司</p><p>基地面积：9,937sm</p><p>楼地板面积：11,608sm</p><p>高度 / 楼层：18.1m / 4F</p><p>服务范围：建筑设计</p><p>建筑师：许铭阳+黄茂良</p><p>专业顾问：结构：吕清心 / 机电：高英</p><p>施工单位：新泉营造股份有限公司</p><p>工程造价：TWD 340,371,044元</p>",
        "9445": "<h3>领秀山庄</h3><p>地点：台湾高雄</p><p>设计 / 完工：2005 / 2008</p><p>性质：别墅住宅</p><p>业主：信林建设股份有限公司</p><p>基地面积：4,974sm</p><p>楼地板面积：4,314sm</p><p>高度 / 楼层：9.94m / 3F</p><p>服务范围：建筑设计 / 景观设计</p><p>建筑师：黄茂良</p><p>专业顾问：结构：朱鑫龙+柳碧贞 / 机电：巨成</p><p>施工单位：圣林营造股份有限公司</p><p>工程造价：TWD 22,359,729元</p>",
        "9456": "<h3>莲潭国际文教会馆 </h3><p>地点：台湾高雄 </p><p>设计 / 完工：2005 / 2008</p><p>性质：酒店</p><p>业主：台湾首府大学</p><p>基地面积：17,251sm</p><p>楼地板面积：34,152sm</p><p>高度 / 楼层：34.8m / B2+10F</p><p>服务范围：建筑设计 / 景观设计</p><p>建筑师：许铭阳+黄茂良</p><p>专业顾问：结构：朱鑫龙 / 机电：锦泰丰 / 空调：祥易 / 消防：国介 /  室内：鸿匠+亿特 / 音响：黄炳勳</p><p>施工单位：芳源号营造股份有限公司</p><p>工程造价：TWD 500,000,000元</p>",
        "M0804": "<h3>威海新东阳呼雷汤温泉旅游开发项目规划方案</h3><p>地点：山东文登</p><p>设计 / 完工：2008 / 2009</p><p>性质：温泉酒店 / 别墅 / 商店街 / 高尔夫球厂及会所</p><p>业主：新东阳集团</p><p>基地面积：2,400,000sm</p><p>楼地板面积：334,000sm</p><p>高度 / 楼层：21m / 5F</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：许铭阳+夏雯霖+郭律民</p><p>专业顾问：策划：青腾 / 高尔夫球场：Pacific  Coast Design (澳洲)</p>",
        "M1029": "<h3>格林芙洛斯世界生态旅游区规划方</h3><p>地点：贵州惠水</p><p>设计 / 完工：2010 / 2011</p><p>性质：酒店 / 别墅 / 商店街 / 高尔夫球会所</p><p>业主：深圳康沃投资控股集团</p><p>基地面积：2,933,348sm</p><p>楼地板面积：332,700sm </p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：夏雯霖+黄建盛</p>",
        "M1112": "<h3>平潭小高雄综合开发项目规划方案</h3><p>地点：福建平潭</p><p>设计 / 完工：2011 / 2012</p><p>性质：办公 / 酒店 / 商业 / 住宅</p><p>业主：高平投资开发促进会</p><p>基地面积：117,988sm</p><p>楼地板面积：827,773sm</p><p>高度 / 楼层：B2+58F</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：许铭阳+夏雯霖+黄建盛</p>",
        "M1104": "<h3>钱江新城概念性总体规划方案</h3><p>地点：浙江温岭</p><p>设计 / 完工：2011 / 2013</p><p>性质：酒店 / 别墅 / 商店街 / 医院 / 集合住宅 / 学校 /  游乐场</p><p>业主：义联集团</p><p>基地面积：2,918,700sm</p><p>楼地板面积：3,436,900sm</p><p>高度 / 楼层：60m / B1+20F</p><p>服务范围：总体规划</p><p>建筑师：许铭阳+黄建盛</p>",
        "M1203": "<h3>襄阳新天地项目规划方案</h3><p>地点：湖北襄阳</p><p>设计 / 完工：2012 / 2013</p><p>性质：酒店 / 商场 / 集合住宅 / 学校</p><p>业主：襄阳雅可商务区开发有限公司</p><p>基地面积：117,993sm</p><p>楼地板面积：734,899sm</p><p>高度 / 楼层：B2+46F</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：许铭阳+黄建盛</p><p>合作设计 / 当地设计单位：DCI思亚国际</p>",
        "1206": "<h3>金门三创</h3><p>地点：福建金门</p><p>设计 / 完工：2012 -</p><p>性质：酒店 / 商场 / 集合住宅 / 学校</p><p>业主：鸿海科技集团</p><p>基地面积：28,300sm</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：许铭阳+黄建盛</p>",
        "M1306": "<h3>云霄高铁物流园区概念</h3><p>地点：福建云霄</p><p>设计 / 完工：2013 -</p><p>性质：办公 / 酒店 / 商业 / 住宅</p><p>业主：庆富集团</p><p>基地面积：188644sm</p><p>楼地板面积：746,182sm</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：许铭阳+黄建盛</p><p>设计中</p>",
        "M1310": "<h3>庆富绿色总部园区规划方案</h3><p>地点：福建漳州</p><p>设计 / 完工：2013 / 2014</p><p>性质：酒店 / 商场 / 集合住宅 / 学校</p><p>业主：庆富集团</p><p>基地面积：1,552,000sm</p><p>楼地板面积：570,000sm</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：许铭阳+黄建盛</p><p>设计中</p>",
        "M0311": "<h3>广西民族博物馆方案</h3><p>地点：广西南宁 </p><p>设计 / 完工：2003</p><p>性质：展示 / 典藏 / 研究 / 办公</p><p>业主：广西壮族自治区文化厅</p><p>基地面积：86,000sm</p><p>楼地板面积：30,763sm </p><p>高度 / 楼层：B1+4F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：夏雯霖</p><p>合作设计 / 当地设计单位：美国RTKL国际有限公司</p><p>施工单位：CNY 148,230,000元</p>",
        "M0414": "<h3>十堰市博物馆方案</h3><p>地点：湖北十堰 </p><p>设计 / 完工：2004</p><p>性质：博物馆</p><p>业主：湖北十堰市人民政府</p><p>楼地板面积：9,900sm </p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：郭律民</p>",
        "M0708": "<h3>如皋南通六建总部</h3><p>地点：江苏南通</p><p>设计 / 完工：2007-2011</p><p>性质：办公 / 科研</p><p>业主：南通六建建设集团</p><p>基地面积：10,000sm</p><p>楼地板面积：21796sm</p><p>高度 / 楼层：71m / B1+16F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：黄建盛</p><p>合作设计 / 当地设计单位：南通市规划设计院有限公司</p>",
        "M0815": "<h3>南京农业展馆</h3><p>地点：江苏南京</p><p>设计 / 完工：2008-2011</p><p>性质：展览 / 会议 / 办公 / 零售 / 餐饮</p><p>基地面积：34,459sm</p><p>楼地板面积：83,710sm</p><p>高度 / 楼层：107m / B1+25F</p><p>服务范围：建筑设计 / 景观设计</p><p>建筑师：许铭阳+黄建盛</p>",
        "0738": "<h3>义大皇家剧院</h3><p>地点：台湾高雄</p><p>设计 / 完工：2007 / 2010</p><p>性质：专业表演剧场</p><p>业主：义联集团 </p><p>基地面积：8,841sm</p><p>楼地板面积：10,322sm </p><p>高度 / 楼层：21.6m / B4+3F</p><p>服务范围：室内设计 / 舞台音响灯光设备设计</p><p>建筑师：许铭阳+刘湘梅</p><p>合作设计 / 当地设计单位：林益庆建筑师事务所</p><p>专业顾问：结构：中泰 / 机电：高英新泉营造股份有限公司</p>",
        "0801": "<h3>高雄世界贸易展览会议中心统包工程</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2008 / 2010</p><p>性质：展览 / 会议 / 办公 / 零售 / 餐饮</p><p>业主：高雄市政府工务局新建工程处</p><p>基地面积：44,929sm</p><p>楼地板面积：63,228sm</p><p>高度 / 楼层：37.8m / B1+3F</p><p>服务范围：建筑设计</p><p>建筑师：许铭阳+夏雯霖</p><p>合作设计 / 当地设计单位：美国RTKL国际有限公司</p><p>专业顾问：结构：永峻 / 机电：安鼎 / 空调：协展 /  景观：老圃 / 交通：康地 / 幕牆：比晰 / 视听：大誉 / 装修：长荷</p><p>工程造价：TWD 2,830,000,000元</p><p>统包评选第三名</p>",
        "M1201": "<h3>漳州庆富学院</h3><p>地点：福建云霄</p><p>设计 / 完工：2012 -</p><p>性质：行政 / 教学 / 餐厅 / 住宿</p><p>业主：庆富集团</p><p>基地面积：990,000sm</p><p>楼地板面积：263,630sm (共22栋)</p><p>高度 / 楼层：B1+8F</p><p>服务范围：建筑设计 / 室内设计</p><p>建筑师：许铭阳+夏雯霖＋刘湘梅＋黄建盛</p><p>合作设计 / 当地设计单位：香港10 Design / 陕西丰宇设计工程有限公司</p><p>专业顾问：室内：风河、集艺、欧坊 / 景观：山水园</p><p>施工单位：中国二十冶集团有限公司</p><p>施工中</p><p>香港建筑师学会两岸四地建筑设计论坛及大奖2013</p>",
        "M0208": "<h3>莹辉照明应用中心</h3><p>地点：上海普陀 </p><p>设计 / 完工：2002 / 2004</p><p>性质：办公 / 展示</p><p>业主：莹辉集团有限公司</p><p>基地面积：1,653sm</p><p>楼地板面积：3,800sm</p><p>高度 / 楼层：35.5m / 7F</p><p>服务范围：建筑改造设计</p><p>建筑师：黄茂良</p><p>合作设计 / 当地设计单位：东风设计研究院 / 上海纺织建筑设计研究院</p><p>专业顾问：项目管理：上海掘坷</p><p>施工单位：上海金鹿建筑实业有限公司</p><p>工程造价：TWD 32,000,000元</p>",
        "M0405": "<h3>东风日产汽车办公楼+研发中心</h3><p>地点：广东广州 </p><p>设计 / 完工：2004 / 2006</p><p>性质：办公 / 科研</p><p>业主：东风汽车有限公司乘用车公司</p><p>基地面积：270,000sm</p><p>楼地板面积：42,000sm</p><p>高度 / 楼层：22m / B1+5F</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：黄茂良</p><p>合作设计 / 当地设计单位：上海建学建筑与工程设计所有限公司</p><p>工程造价：TWD 560,000,000元</p>",
        "M0411": "<h3>东风汽车有限公司总部方案 </h3><p>地点：湖北武汉 </p><p>设计 / 完工：2004</p><p>性质：办公 / 研发</p><p>业主：武汉东风汽车集团</p><p>楼地板面积：185,504sm</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：夏雯霖</p>",
        "M0523": "<h3>松江公共实训中心方案 </h3><p>地点：上海松江 </p><p>设计 / 完工：2005</p><p>性质：办公 / 教育 / 多功能礼堂兼体育馆</p><p>业主：上海松江区人民政府</p><p>楼地板面积：104,000sm</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：郭律民</p>",
        "M0510": "<h3>东风本田汽车办公楼</h3><p>地点：湖北武汉 </p><p>设计 / 完工：2005 / 2007</p><p>性质：办公</p><p>业主：武汉东风汽车集团</p><p>楼地板面积：18,900sm </p><p>高度 / 楼层：3F</p><p>服务范围：建筑设计</p><p>建筑师：郭律民</p><p>合作设计 / 当地设计单位：东风设计研究院</p>",
        "M0526": "<h3>万泓企业总部大楼方案 </h3><p>地点：江苏昆山 </p><p>设计 / 完工：2005 / 2007</p><p>性质：办公</p><p>业主：昆山万泓建设开发有限公司</p><p>基地面积：149,000sm</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：郭律民</p>",
        "M0826": "<h3>丰盛集团科技园C地块建筑概念设计方案</h3><p>地点：江苏南京  </p><p>设计 / 完工：2008 - 2009</p><p>性质：商业 / 办公</p><p>业主：南京丰盛产业控股集团 </p><p>基地面积：266,080sm </p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：夏雯霖+郭律民+黄建盛</p><p>合作设计 / 当地设计单位：南京东南联合工程设计有限公司</p>",
        "M0900": "<h3>淮阴区社会事业大厦方案</h3><p>地点：江苏淮阴</p><p>设计 / 完工：2009</p><p>性质：公共行政</p><p>业主：淮安市淮阴区政府</p><p>基地面积：19,320sm</p><p>楼地板面积：20,031sm</p><p>高度 / 楼层：B1+8F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：夏雯霖+黄建盛</p>",
        "0919-1": "<h3>鸿海高雄数位汇流数据中心</h3><p>地点：台湾高雄</p><p>设计 / 完工：2013 - 2014</p><p>性质：办公</p><p>业主：鸿海科技集团</p><p>楼地板面积：365sm</p><p>服务范围：室内设计工程</p><p>建筑师：刘湘梅</p>",
        "0919": "<h3>鸿海高雄研发育成大楼及数位汇流数据中心</h3><p>地点：台湾高雄</p><p>设计 / 完工：2009 -</p><p>性质：办公 / 科研</p><p>业主：鸿海科技集团</p><p>基地面积：　18,500sm</p><p>楼地板面积：62,919sm</p><p>高度 / 楼层：　56.1m / B4+14F</p><p>服务范围：总体规划 / 建筑设计 / 景观设计 / 室内设计</p><p>建筑师：许铭阳+夏雯霖+刘湘梅</p><p>专业顾问：　结构：超伟 / 机电：正弦 / 空调：协展 / 外牆：比晰 / 交通：安得</p><p>施工单位：　达茂营造股份有限公司</p><p>工程造价：TWD 1,830,000,000元</p><p>施工中</p><p>第一届2014年高雄市新建建筑物工程品质金质奖：金质奖</p>",
        "0945": "<h3>农业科技园区外销观赏鱼及水产种苗</h3><p>地点：台湾屏东 </p><p>设计 / 完工：2010 / 2013</p><p>性质：办公 / 科研 / 物流 / 仓储 / 展览 / 厂房</p><p>业主：屏东农业生物技术园区筹备处</p><p>基地面积：39,440sm</p><p>楼地板面积：27,327sm </p><p>高度 / 楼层：38.5m / B1+5F</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：许铭阳+夏雯霖+赵文绅+黄建盛</p><p>专业顾问：协同主持人：方力行 / 结构：黄武龙 / 机电：联立 / 空调：协展  / 消防：王志民 / 维生：协兑 / 养殖：增彧 / 观赏鱼：优石 / 幕牆：比晰 / 大地：开通 / 测量：永承</p><p>施工单位：长鸿营造股份有限公司</p><p>工程造价：TWD 1,025,000,000元</p>",
        "M1020": "<h3>海门市国税局数据处理中心</h3><p>地点：江苏海门</p><p>设计 / 完工：2010 / 2014</p><p>性质：公共行政</p><p>业主：海门市政府投资项目工程建设中心</p><p>基地面积：19,770sm</p><p>楼地板面积：19,079sm </p><p>高度 / 楼层：61.4m / B1+12F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：黄建盛</p><p>合作设计 / 当地设计单位：南通市规划设计院有限公司</p><p>专业顾问：无锡昊天建筑工程有限公司</p><p>施工中</p>",
        "M1121": "<h3>东莞中国邮政大楼方案</h3><p>地点：广东东莞</p><p>设计 / 完工：2011</p><p>性质：办公</p><p>业主：中国邮政集团公司</p><p>基地面积：13.629sm</p><p>楼地板面积：72,761sm</p><p>高度 / 楼层：114.5m / B2+22F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：黄建盛</p>",
        "0000": "<h3>统一梦时代购物中心</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2000 / 2007</p><p>性质：百货 / 零售 / 娱乐</p><p>业主：统正开发股份有限公司</p><p>基地面积：50,158sm</p><p>楼地板面积：401,219sm </p><p>高度 / 楼层：49.95m / B5+11F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：许铭阳</p><p>合作设计 / 当地设计单位：美国RTKL国际有限公司 / 刘显宗+曹毅豪+黄士国建筑师事务所</p><p>专业顾问：结构：超伟 / 机电：正弦 / 景观：RTKL+carol R  Johnson / 室内：RTKL+IDA+衡美 / 外牆：比晰</p><p>施工单位：理成营造工程股份有限公司</p><p>工程造价：TWD 3,156,142,248元</p><p>中华民国第一届都市设计大奖 民间开发空间设计类优选</p><p>第三届高雄市都市设计景观评选 优质大楼组优选作品</p><p>2008 Grand Award best in  the west， In Recognition of Excellence and Value，Best International  Commercial / Retail Project </p>",
        "0709": "<h3>义大世界香榭大街</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2007 / 2010</p><p>性质：零售</p><p>业主：义联集团 </p><p>基地面积：5,551sm</p><p>楼地板面积：13,842.48sm</p><p>高度 / 楼层：19.35m /4F</p><p>服务范围：建筑设计 / 景观设计</p><p>建筑师：许铭阳</p><p>专业顾问：结构：中泰 / 机电：高英</p><p>施工单位：新泉营造股份有限公司</p><p>工程造价：TWD 74,487,550元</p>",
        "V0802": "<h3>越南北宁赌场酒店方案</h3><p>地点：越南北宁</p><p>设计 / 完工：2008</p><p>性质：酒店 / 赌场</p><p>业主：越南黄龙开发</p><p>基地面积：23,806sm</p><p>楼地板面积：120,566sm</p><p>高度 / 楼层：79.4m / B2+21F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：许铭阳+刘湘梅+黄建盛</p>",
        "0829": "<h3>义大世界团客中心</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2008 / 2010</p><p>性质：零售 / 办公</p><p>业主：义联集团</p><p>基地面积：1,749sm</p><p>楼地板面积：2,717sm</p><p>高度 / 楼层：15.3m / B1+3F</p><p>服务范围：建筑设计</p><p>建筑师：许铭阳</p><p>专业顾问：结构：中泰 / 机电：高英</p><p>施工单位：新泉营造股份有限公司</p><p>工程造价：TWD 13,847,400元</p>",
        "M1026": "<h3>大麦客量贩店</h3><p>地点：广东东莞</p><p>设计 / 完工：2010 / 2011</p><p>性质：零售 / 量贩</p><p>业主：大麦客商贸有限公司</p><p>基地面积：40,672sm</p><p>楼地板面积：28,806sm </p><p>高度 / 楼层：18.6m / 4F</p><p>服务范围：建筑改造设计</p><p>建筑师：黄建盛</p><p>合作设计 / 当地设计单位：东莞市东城建筑规划设计院</p><p>施工单位：东莞日盛钢板成型有限公司</p>",
        "M1302": "<h3>余姚保利文化商业广场</h3><p>地点：浙江余姚</p><p>设计 / 完工：2013 -</p><p>性质：百货 / 零售 / 娱乐</p><p>业主：保利置业集团有限公司</p><p>基地面积：119,000sm</p><p>楼地板面积：340,000sm</p><p>高度 / 楼层：100m / B2+21F</p><p>服务范围：建筑设计 / 景观设计</p><p>建筑师：许铭阳+黄建盛</p><p>合作设计 / 当地设计单位：UDG联创国际</p><p>施工单位：设计中</p>",
        "V1302": "<h3>象湖生态旅游区A2/A3商业娱乐项</h3><p>地点：越南河静</p><p>设计 / 完工：2013 -</p><p>性质：餐饮 / 娱乐</p><p>业主：宝珑(越南)开发责任有限公司</p><p>基地面积：25,013sm</p><p>楼地板面积：6,931sm</p><p>高度 / 楼层：14.57m / 3F</p><p>服务范围：建筑设计</p><p>建筑师：夏雯霖</p><p>专业顾问：结构：天珩 / 水疗：李恒德</p><p>设计中</p>",
        "M1317": "<h3>哈尔滨白鱼泡温泉度假村</h3><p>地点：黑龙江哈尔滨</p><p>设计 / 完工：2013 -</p><p>性质：酒店 / 温泉会馆</p><p>业主：哈尔滨市白鱼泡老年医疗护理院</p><p>基地面积：50,000sm</p><p>楼地板面积：15,000sm</p><p>高度 / 楼层：15m / 3F</p><p>服务范围：建筑设计 / 景观设计</p><p>建筑师：黄建盛</p><p>设计中</p>",
        "0909": "<h3>大自然文化世界</h3><p>地点：台湾新竹</p><p>设计 / 完工：2009 / 2011</p><p>性质：宗教设施</p><p>业主：财团法人天恩弥勒佛院</p><p>基地面积：119,993sm</p><p>楼地板面积：396,898sm </p><p>高度 / 楼层：43.28m / B4+8F</p><p>服务范围：建筑设计顾问 / 景观设计 / 室内设计</p><p>建筑师：许铭阳+刘湘梅</p><p>合作设计 / 当地设计单位：蔡金龙建筑师事务所</p><p>专业顾问：结构：欣扬 / 机电：正弦 / 外牆：比晰大尊贵工程股份有限公司</p>",
        "9437-1": "<h3>大昌医院</h3><p>地点：台湾高雄</p><p>设计 / 完工：2006 - 2014</p><p>性质：医院</p><p>业主：义联集团 </p><p>基地面积：18,742.57sm</p><p>楼地板面积：69,786.9sm</p><p>高度 / 楼层：49.95m / B3+14F</p><p>服务范围：建筑设计</p><p>建筑师：许铭阳</p><p>专业顾问：结构：柳碧贞 / 机电：立盛</p><p>施工单位：新泉营造股份有限公司</p><p>工程造价：TWD 867,604,000元</p>",
        "M0601": "<h3>东风日产汽车培训中心 </h3><p>地点：广东广州 </p><p>设计 / 完工：2006 / 2007</p><p>性质：培训</p><p>业主：东风日产乘用车公司</p><p>楼地板面积：6,640sm</p><p>服务范围：建筑设计</p><p>建筑师：郭律民</p><p>合作设计 / 当地设计单位：东风设计研究院</p>",
        "0629": "<h3>威奈科技厂办</h3><p>地点：台湾高雄</p><p>设计 / 完工：2006 / 2009</p><p>性质：厂房 / 办公</p><p>业主：威奈联合科技股份有限公司</p><p>基地面积：12,545sm</p><p>楼地板面积：12,938sm</p><p>高度 / 楼层：9.45m / 2F</p><p>服务范围：总体规划 / 建筑设计</p><p>建筑师：许铭阳+黄茂良</p><p>专业顾问：结构：天珩 / 机电：协展</p><p>施工单位：汇城营造工程股份有限公司</p><p>工程造价：TWD 203,940,000元</p>",
        "0937": "<h3>良达科技厂房更新设计</h3><p>地点：台湾高雄</p><p>设计 / 完工：2009</p><p>性质：厂房 / 办公</p><p>业主：良达科技股份有限公司</p><p>服务范围：　建筑改造设计 / 室内设计</p><p>建筑师：夏雯霖</p><p></p><p>　</p>",
        "M0121": "<h3>渤海皇家</h3><p>地点：河北秦皇岛 </p><p>设计 / 完工：2001 / 2005</p><p>性质：集合住宅</p><p>业主：秦皇岛爱普森国际置业有限公司 </p><p>基地面积：12,400sm</p><p>楼地板面积：43,800m </p><p>高度 / 楼层：106m / B1+31F</p><p>服务范围：总体规划 / 建筑设计 / 景观设计</p><p>建筑师：黄茂良</p><p>合作设计 / 当地设计单位：北京建学建筑与工程设计所有限公司</p><p>工程造价：TWD 200,000,000元</p>",
        "M0409": "<h3>花都艺墅小区</h3><p>地点：江苏昆山 </p><p>设计 / 完工：2004 / 2011</p><p>性质：别墅住宅</p><p>业主：昆山宝裕房产开发有限公司</p><p>基地面积：140,000sm</p><p>服务范围：建筑设计 / 景观设计</p><p>建筑师：黄茂良+夏雯霖+黄建盛</p><p>合作设计 / 当地设计单位：南京东南联合设计工程有限公司</p>",
        "0716": "<h3>左营陈宅方案</h3><p>地点：台湾高雄</p><p>设计 / 完工：2007</p><p>性质：别墅住宅 / 办公</p><p>业主：陈明志</p><p>基地面积：4,960sm</p><p>楼地板面积：6,959sm</p><p>高度 / 楼层：27.1m / B1+7F</p><p>服务范围：总体规划 / 建筑设计 / 景观设计 / 室内设计</p><p>建筑师：许铭阳+刘湘梅</p><p>合作设计 / 当地设计单位：日本cdi设计公司</p><p>工程造价：TWD 48,658,487元</p>",
        "M0801": "<h3>扬州瘦西湖华庄低层住宅项目方案 </h3><p>地点：江苏扬州 </p><p>设计 / 完工：2008 / 2010</p><p>性质：别墅住宅</p><p>业主：扬州瘦西湖置业有限公司 </p><p>基地面积：60,000sm </p><p>服务范围：建筑设计</p><p>建筑师：许铭阳+夏雯霖</p><p>合作设计 / 当地设计单位：南京市建筑设计研究院有限责任公司</p>",
        "0804": "<h3>观音山景观住宅</h3><p>地点：台湾高雄</p><p>设计 / 完工：2008 / 2011</p><p>性质：别墅住宅</p><p>业主：义联集团</p><p>基地面积：6,172sm</p><p>楼地板面积：7,860sm</p><p>高度 / 楼层：21.5m / B2+3F</p><p>服务范围：建筑设计</p><p>建筑师：许铭阳</p><p>专业顾问：结构：蔡人寿 / 机电：高英</p><p>施工单位：新泉营造股份有限公司</p><p>工程造价：TWD 40,657,200元</p>",
        "M0816": "<h3>天泰佳家祺大厦方案</h3><p>地点：江苏南京</p><p>设计 / 完工：2008 / 2009</p><p>性质：住宅 / 办公</p><p>业主：江苏天泰建设有限公司</p><p>基地面积：13,596sm</p><p>楼地板面积：71,000sm</p><p>高度 / 楼层：B1+27F</p><p>服务范围：建筑设计</p><p>建筑师：夏雯霖+黄建盛</p><p>合作设计 / 当地设计单位：南京东南联合设计工程有限公司</p>",
        "V1001": "<h3>安富Palais de Lotus 住宅社区开发方案</h3><p>地点：越南河内</p><p>设计 / 完工：2010 / 2012</p><p>性质：集合住宅</p><p>业主：越南安富开发投资公司</p><p>基地面积：4,370sm</p><p>楼地板面积：80,615sm</p><p>高度 / 楼层：93.2m / B2+32F</p><p>服务范围：建筑设计 / 景观设计 / 室内设计</p><p>建筑师：许铭阳+夏雯霖+刘湘梅+黄建盛</p><p>合作设计 / 当地设计单位：越南河内UAC设计院</p>",
        "0922": "<h3>六堆客家文化园区整体景观</h3><p>地点：台湾屏东 </p><p>设计 / 完工：2007 / 2009</p><p>性质：公共景观设施</p><p>业主：行政院客家委员会六堆客家文化园区筹备处</p><p>基地面积：155,878sm</p><p>楼地板面积：983sm</p><p>高度 / 楼层：9.4m / 2F</p><p>服务范围：地景总体规划 / 景观设计 / 建筑设计</p><p>建筑师：赵文绅</p><p>专业顾问：结构：蔡人寿 / 机电：翰鳞 / 景观：藏生 /  专案管理：亚新(第2阶段)</p><p>施工单位：硕宏营造有限公司 / 超晟营造有限公司 / 顺裕营造有限公司 /  南屏营造股份有限公司</p><p>工程造价：TWD 224,753,089元</p><p>2009建筑园冶奖，屏东地区公共景观设计奖</p>",
        "0811": "<h3>义大世界123广场</h3><p>地点：台湾高雄 </p><p>设计 / 完工：2008 / 2010</p><p>性质：商业景观设施 / 音乐餐厅</p><p>业主：义联集团 </p><p>基地面积：13,464sm</p><p>高度 / 楼层：音乐餐厅11.7m / 垦丁大街6.5m</p><p>服务范围：景观设计 / 建筑设计</p><p>建筑师：许铭阳</p><p>合作设计 / 当地设计单位：林益庆建筑师事务所</p><p>专业顾问：室内：汇侨 / 结构：中泰 / 音响：黄炳勳 / 灯光：公祥</p><p>施工单位：台湾太阳鹰开发股份有限公司 (膜构) /  老圃造园工程有限公司 (植栽) / 公祥贸易有限公司 (灯光)</p>",
        "M1208": "<h3>漳州庆富学院一期</h3><p>地点：福建云霄</p><p>设计 / 完工：2012 -</p><p>性质：学校</p><p>业主：庆富集团</p><p>楼地板面积：123,565sm</p><p>服务范围：室内设计 / 家具选配 / 影音设备</p><p>建筑师：刘湘梅</p><p>合作设计 / 当地设计单位：风河设计工程顾问有限公司 / 集艺室内装修设计工程有限公司</p><p>专业顾问：细设+机电：上海欧坊 / 厨房：小马驹 /  灯光：亿光 / 影音：上海莹声</p><p>施工单位：设计中</p>"
      };
    }

    $('.page').each(function() {
      PAGEINITED[$(this).attr('id')] = false;
    });

    function __pageTransation($page, atype, isRevert, callback) {
      callback = callback || function() {
        void 0;
      }
      switch (atype) {
        case 'fade':
          if (isRevert) {
            $page.fadeOut(200, function() {
              callback();
            });
          } else {
            $page.fadeIn(200, function() {
              callback();
            });
          }
        default:
          isRevert ? $page.hide(function() {
            callback();
          }) : $page.show(function() {
            callback();
          });
      }
      $page.addClass('p-active');
    }

    function __changePage(pageid, callback) {
      var _currentPage = $('.page.p-active');

      _currentPage && __pageTransation(_currentPage, _currentPage.attr('data-amt'), true);

      _currentPage.removeClass('p-active');

      var _nextPage = $('#' + pageid);
      _nextPage.find('img[data-src]').each(function() {
        $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
      });
      __pageTransation(_nextPage, _nextPage.attr('data-amt'), false, function() {
        callback();
        $('.footer').css('top', 'auto');
        var _dw = $(document).height() - $(window).height();
        if (_dw > 0) {
          $('.footer').css('top', $(document).height() - 30 + 'px');
        }
      });
    }

    var LFN = {
      _load_main: function() {
        __changePage('main', function() {
          if (!PAGEINITED['main']) {
            var _my_tetris = $('#my_index_tetris');
            tetrisConf = {
              container: _my_tetris,
              tclass: 'tetris',
              tbclass: 'tetris-block',
              tetris: [{
                bgColor: '#864C9B',
                textColor: '#fff',
                text: ['M1026', 'M1020', '0945', '1010'],
                shape: 2,
                orientation: 2,
                aIndex: 14,
                aType: 3,
                x: 0,
                y: 3
              }, {
                bgColor: "#2F4891",
                textColor: '#fff',
                text: ['', '1406', '', '1334'],
                shape: 4,
                orientation: 4,
                aIndex: 13,
                aType: 1,
                x: 1,
                y: 3
              }, {
                bgColor: "#E61923",
                textColor: '#fff',
                text: ['0804', 'M0816', 'V0802', '0829'],
                shape: 7,
                orientation: 1,
                aIndex: 11,
                aType: 1,
                x: 3,
                y: 5
              }, {
                bgColor: "#5D4097",
                textColor: '#fff',
                text: ['M1104', '1110', 'M1112', 'M1121'],
                shape: 3,
                orientation: 2,
                aIndex: 10,
                aType: 1,
                x: 4,
                y: 4
              }, {
                bgColor: "#6DB14D",
                textColor: '#fff',
                text: ['9350', '9306', 'M0409', 'M0411'],
                shape: 4,
                orientation: 2,
                aIndex: 9,
                aType: 1,
                x: 5,
                y: 3
              }, {
                bgColor: "#6043D1",
                textColor: '#fff',
                text: ['M1203', '1228', 'M1201', '1238'],
                shape: 4,
                orientation: 4,
                aIndex: 8,
                aType: 2,
                x: 6,
                y: 3
              }, {
                bgColor: "#1E8F78",
                textColor: '#fff',
                text: ['9441', '9444', 'M0523', 'M0510'],
                shape: 7,
                orientation: 1,
                aIndex: 15,
                aType: 3,
                x: 8,
                y: 5
              }, {
                bgColor: "#F39900",
                textColor: '#fff',
                text: ['M0208', '', '9101', ''],
                shape: 7,
                orientation: 1,
                aIndex: 12,
                aType: 1,
                x: 9,
                y: 5
              }, {
                bgColor: "#1F8D79",
                textColor: '#fff',
                text: ['9456', '9442', 'M0526', '9445'],
                shape: 5,
                orientation: 1,
                aIndex: 7,
                aType: 1,
                x: 10,
                y: 3
              }, {
                bgColor: "#5D4097",
                textColor: '#fff',
                text: ['1138', '1144', '1143', '1122'],
                shape: 6,
                orientation: 2,
                aIndex: 6,
                aType: 1,
                x: 0,
                y: 5
              }, {
                bgColor: "#2E6BB4",
                textColor: '#fff',
                text: ['M1317', '1151-1', '', '1323'],
                shape: 1,
                orientation: 1,
                aIndex: 16,
                aType: 3,
                x: 6,
                y: 5
              }, {
                bgColor: "#2F4891",
                textColor: '#fff',
                text: ['1401', '', '1408', '1402'],
                shape: 6,
                orientation: 2,
                aIndex: 17,
                aType: 3,
                x: 8,
                y: 6
              }, {
                bgColor: "#6043D1",
                textColor: '#fff',
                text: ['1243', 'M1208', '1249', '1216'],
                shape: 3,
                orientation: 2,
                aIndex: 18,
                aType: 3,
                x: 10,
                y: 5
              }, {
                bgColor: "#F0820E",
                textColor: '#fff',
                text: ['0738', 'M0708', '0709', '0922'],
                shape: 7,
                orientation: 1,
                aIndex: 24,
                aType: 2,
                x: 0,
                y: 9
              }, {
                bgColor: "#6DB14B",
                textColor: '#fff',
                text: ['M0414', '', '9311', '9316'],
                shape: 6,
                orientation: 2,
                aIndex: 5,
                aType: 1,
                x: 1,
                y: 7
              }, {
                bgColor: "#EFC23C",
                textColor: '#fff',
                text: ['M0601', '9437-1', '0629', ''],
                shape: 2,
                orientation: 4,
                aIndex: 4,
                aType: 1,
                x: 3,
                y: 7
              }, {
                bgColor: "#DD4291",
                textColor: '#fff',
                text: ['M0900', '0919', '1221', '0909'],
                shape: 7,
                orientation: 1,
                aIndex: 25,
                aType: 3,
                x: 5,
                y: 9
              }, {
                bgColor: "#F4A700",
                textColor: '#fff',
                text: ['M0121', '', '9015', ''],
                shape: 4,
                orientation: 1,
                aIndex: 23,
                aType: 1,
                x: 6,
                y: 7
              }, {
                bgColor: "#C7CF39",
                textColor: '#fff',
                text: ['9201', '9230', '9217', 'M0311'],
                shape: 2,
                orientation: 1,
                aIndex: 3,
                aType: 1,
                x: 1,
                y: 9
              }, {
                bgColor: "#2E6BB4",
                textColor: '#fff',
                text: ['M1302', 'M1310', '1320', '1303'],
                shape: 2,
                orientation: 4,
                aIndex: 2,
                aType: 1,
                x: 3,
                y: 10
              }, {
                bgColor: "#6DB14B",
                textColor: '#fff',
                text: ['M0405', '9353', '9345', '9437'],
                shape: 2,
                orientation: 3,
                aIndex: 19,
                aType: 4,
                x: 6,
                y: 8
              }, {
                bgColor: "#E61923",
                textColor: '#fff',
                text: ['0811', '0801', 'M0804', 'M0801'],
                shape: 2,
                orientation: 1,
                aIndex: 20,
                aType: 4,
                x: 9,
                y: 8
              }, {
                bgColor: "#E61923",
                textColor: '#fff',
                text: ['M0826', 'M0815', '', ''],
                shape: 2,
                orientation: 4,
                aIndex: 21,
                aType: 4,
                x: 0,
                y: 11
              }, {
                bgColor: "#864C9B",
                textColor: '#fff',
                text: ['1003', '', 'V1001', ''],
                shape: 4,
                orientation: 4,
                aIndex: 22,
                aType: 4,
                x: 5,
                y: 11
              }, {
                bgColor: "#6043D1",
                textColor: '#fff',
                text: ['', '1206', '1225', '1210'],
                shape: 5,
                orientation: 2,
                aIndex: 1,
                aType: 1,
                x: 7,
                y: 10
              }, {
                bgColor: "#864C9B",
                textColor: '#fff',
                text: ['1008', '1024', 'M1029', '1006'],
                shape: 2,
                orientation: 4,
                aIndex: 26,
                aType: 3,
                x: 10,
                y: 10
              }, {
                bgColor: "#F0820E",
                textColor: '#fff',
                text: ['', '', '0000', ''],
                shape: 3,
                orientation: 3,
                aIndex: 27,
                aType: 3,
                x: 0,
                y: 12
              }, {
                bgColor: "#5D4097",
                textColor: '#fff',
                text: ['1130', '1150', '1141', '1151'],
                shape: 5,
                orientation: 1,
                aIndex: 28,
                aType: 4,
                x: 3,
                y: 12
              }, {
                bgColor: "#F0820E",
                textColor: '#fff',
                text: ['', '', '0716', ''],
                shape: 3,
                orientation: 3,
                aIndex: 29,
                aType: 4,
                x: 5,
                y: 12
              }, {
                bgColor: "#2D6CB4",
                textColor: '#fff',
                text: ['1315', 'V1302', 'M1306', '0919-1'],
                shape: 6,
                orientation: 1,
                aIndex: 30,
                aType: 4,
                x: 8,
                y: 12
              }, {
                bgColor: "#DD4291",
                textColor: '#fff',
                text: ['', '0937', '', ''],
                shape: 2,
                orientation: 2,
                aIndex: 31,
                aType: 4,
                x: 10,
                y: 12
              }],
              tCaseData: CASEDICT,
              _dy: _my_tetris.height(),
              standard: 40, // 1个x/y坐标单位
              speed: ANIMATE.c // 单帧动画速度
            };
            my_tetris = new HY.tetris(tetrisConf);

            my_tetris.init(function() {
              HY.loadimg($('#my_index_tetris').find('img[data-src]'), false, function() {
                $('#my_index_tetris').find('img[data-src]').each(function() {
                  $(this).attr('src', $(this).attr('data-src'));
                });
                HY.loading(false);
              }, function() {
                setTimeout(function() {
                  $('#my_index_tetris').find('img[data-src]').each(function() {
                    $(this).attr('src', $(this).attr('data-src'));
                  });
                  HY.loading(false);
                }, 22222);
              });
            }).start(function() {
              // HY.loading(false);
            });

            setTimeout(function() {
              $('.nav-item:first').click();
            }, 288);
            PAGEINITED['main'] = true;
          } else {
            $('#main').find('.nav-item[data-delay_click=yes]').click().removeAttr('data-delay_click');
          }
        });

      },

      _load_about: function() {
        if (!PAGEINITED['about']) {
          // function __getRandomCss(num) {
          //   return Math.ceil(num / 2 - Math.random() * num);
          // }
          // $('#about-list > li').each(function() {
          //   $(this).css({
          //     'margin-top': __getRandomCss($(window).height() / 1) + 'px',
          //     'margin-left': __getRandomCss($(window).width() / 1.1) + 'px'
          //   }).fadeTo(0, 0);
          // });
          $('#about-list').css('top', '-10%');
          $('.my_tetris-wrapper').width($(window).width()).height($(window).height());

          my_tetris.flyAway(ANIMATE.a, ANIMATE.b);

          setTimeout(function() {
            __changePage('about', function() {
              $('#about-list').animate({
                'top': ['50%', 'easeOutQuart']
              }, 500, function() {
                my_tetris.reset();
              });
            });
          }, tetrisConf.tetris.length * ANIMATE.b);
          PAGEINITED['about'] = true;
        } else {
          __changePage('about', function() {
            // if (!PAGEINITED['about']) {
            // $('#about-list > li').each(function(key, val) {
            //   $(this).animate({
            //     'marginTop': ['0px', 'easeOutBounce'],
            //     'marginLeft': [key * 48 + 'px', 'easeOutBounce'],
            //     'opacity': '1'
            //   }, 1200);
            // });

            // }
          });
        }
      }
    };

    function _init_simple_load_fn(key_ary) {
      $.each(key_ary, function(key, val) {
        LFN['_load_' + val] = function() {
          __changePage(val, function() {
            console.log(val + ' loaded..');
            PAGEINITED[val] = true;
          });
        };
      });
    }

    _init_simple_load_fn(['survey', 'culture', 'team', 'list', 'research', 'honor', 'media', 'recruit', 'contact']);

    $('.nav-item').click(function() {
      var this_list = $(this).attr('data-list');

      var _order = $(this).attr('data-order');
      $('.nav-item.active').removeClass('active');
      $('.nav-item[data-order=' + _order + ']').addClass('active');

      $('.nav-list > li.active').click();

      if (this_list) {
        if (!$(this_list).hasClass('active')) {
          $('.nav-list.active').animate({
            'bottom': ['-600px', 'easeInExpo']
          }, 200).removeClass('active');
          $(this_list).animate({
            'bottom': ['0px', 'easeOutExpo']
          }, 200).addClass('active');
        }
      } else if ($(this).attr('data-fake') === 'yes') {
        var _idx = $(this).parent().children('.nav-item').index($(this));
        $('#main').find('.nav-item').eq(_idx).attr('data-delay_click', 'yes');
        // __changePage('main', function() {
        //   $('#main').find('.nav-item').click();
        // });
      }
    });
    // var ii = 0
    // $.each(CASEDICT,function(){ii++})
    // console.log(CASEDICT,ii)


    $('.nav-list > li').hover(function() {
      var _key = $(this).attr('data-year') ? {
        key: 'data-year',
        val: $(this).attr('data-year')
      } : {
        key: 'data-category',
        val: $(this).attr('data-category')
      };

      $('.nav-list > li.active').removeClass('active');
      $(this).addClass('active');
      $('#my_index_tetris').find('.tetris-block').addClass('tetris-transparent').end().find('.tetris-block[' + _key.key + '=' + _key.val + ']').removeClass('tetris-transparent');
    }, function() {
      $('body').one('click', function(e) {
        if (!$(e.target).parents('.nav-list').length) {

          $('.nav-list > li.active').removeClass('active');
          $('#my_index_tetris').find('.tetris-block').removeClass('tetris-transparent');
        }
      });
    });
    // $('.nav-list > li').on('click', function() {
    //   if ($(this).hasClass('active')) {
    //     $('#my_index_tetris').find('.tetris-block').removeClass('tetris-transparent');
    //     $(this).removeClass('active');
    //   } else {
    //     $('.nav-list > li.active').removeClass('active');
    //     $(this).addClass('active');
    //     var _key = $(this).attr('data-year') ? {
    //       key: 'data-year',
    //       val: $(this).attr('data-year')
    //     } : {
    //       key: 'data-category',
    //       val: $(this).attr('data-category')
    //     };

    //     $('#my_index_tetris').find('.tetris-block').addClass('tetris-transparent').end().find('.tetris-block[' + _key.key + '=' + _key.val + ']').removeClass('tetris-transparent');
    //   }
    // });

    $('#my_index_tetris').on('click', '.tetris-block', function() {
      var $t_block = $(this);
      var $t_block_bg = $t_block.css('background-color');
      var _case = $.trim($t_block.attr('data-case'));

      if ($t_block.hasClass('tetris-transparent')) {
        return false;
      }

      if (CASEDICT[_case]) {
        if (!$('#case_' + _case).length) {


          var _case_img = '';
          CASEDICT[_case].desc = CASEDICT[_case].desc || '';
          for (var i = 1; i <= CASEDICT[_case].img; i++) {
            if (i === 2) {
              // _case_img += '<div class="nivoSlider-item nivoSlider-item_desc"><div class="nivoSlider-item_desc-content" style="background-color: ' + $t_block_bg + '">' + '<p style="margin-top: 60px;">' + LANG.casename + '</p>' + CASEDETAILS[_case] + '<br/><br/>' + CASEDICT[_case].desc + '</div></div>';
              _case_img += '<div class="nivoSlider-item nivoSlider-item_desc"><div class="nivoSlider-item_desc-content" style="background-color: ' + $t_block_bg + '">' + '<p style="margin-top: 40px;"></p>' + CASEDETAILS[_case] + '<br/><br/>' + CASEDICT[_case].desc + '</div></div>';
            }
            _case_img += '<div class="nivoSlider-item"><img src="images/case/' + _case + '/' + i + '.jpg?20140629" /></div>';
          }
          if (i === 2) {
            // _case_img += '<div class="nivoSlider-item nivoSlider-item_desc"><div class="nivoSlider-item_desc-content" style="background-color: ' + $t_block_bg + '">' + '<p style="margin-top: 60px;">' + LANG.casename + '</p>' + CASEDETAILS[_case] + '<br/><br/>' + CASEDICT[_case].desc + '</div></div>';
            _case_img += '<div class="nivoSlider-item nivoSlider-item_desc"><div class="nivoSlider-item_desc-content" style="background-color: ' + $t_block_bg + '">' + '<p style="margin-top: 40px;"></p>' + CASEDETAILS[_case] + '<br/><br/>' + CASEDICT[_case].desc + '</div></div>';
          }
          $('.footer').before('<div id="case_' + _case + '" class="page case_page" data-amt="fade"><div class="atc-nav"><a href="#main" class="atc-nav-main">&nbsp;</a></div><div id="case_slider-' + _case + '" class="nivoSlider">' + _case_img + '</div></div>');

          var $t_block_title = $t_block.children('.case_title').clone();
          $t_block_title.width($t_block_title.width() + 10);
          $t_block_title.css({
            left: 0,
            display: 'block',
            zIndex: 999999,
            top: 0
          }).appendTo($('#case_' + _case));
          $('#case_' + _case).on('mousemove.t_b_t_' + _case, function(e) {
            if (e.pageX < 180 || e.pageX > $(window).width() - 180 || e.pageY < 30 || e.pageY > $(window).height() - 50) {
              $t_block_title.css({
                display: 'none'
              });
            } else {
              $t_block_title.css({
                display: 'block'
              });
            }
            $t_block_title.offset({
              top: e.pageY - 10,
              left: e.pageX + 10
            });
          });

          LFN['_load_case_' + _case] = function() {
            __changePage('case_' + _case, function() {
              if (!PAGEINITED['case_' + _case]) {
                $('#case_slider-' + _case).append('<div class="nivoSlider-ctrl">' + new Array($('#case_slider-' + _case).children('.nivoSlider-item').length + 1).join('<span></span>') + '</div>').children('.nivoSlider-ctrl').on('click', 'span', function() {
                  if ($(this).hasClass('active')) {
                    return;
                  }
                  $(this).addClass('active').siblings('.active').removeClass('active');

                  var _prev = $(this).parent().siblings('.nivoSlider-item.active');

                  var __idx = $(this).parent().children('span').index($(this));
                  var _next = $(this).parent().siblings('.nivoSlider-item').eq(__idx);
                  if (__idx === 1) {
                    var nidc = _next.children('.nivoSlider-item_desc-content');
                    if (nidc.attr('data-setted') !== 'yes') {
                      nidc.width(_next.prev().children('img:first').height() * 1247 / 795 - 200);
                      nidc.attr('data-setted', 'yes');
                    }
                  }

                  if (_prev.length) {
                    _prev.stop(true, true).fadeOut(200, function() {
                      _prev.removeClass('active');
                    });
                  }
                  setTimeout(function() {
                    _next.stop(true, true).fadeIn(200, function() {
                      _next.addClass('active');
                    });
                  }, 100);
                }).children('span:first').click();
                $('#case_slider-' + _case).on('click', '.nivoSlider-item', function(e) {
                  // console.log(e.pageX, e.pageY, $(this).offset(), $(this).width())
                  var _niem = $(this).parent().children('.nivoSlider-item');
                  var _idx = _niem.index($(this));
                  if ($(this).width() / 2 + $(this).offset().left > e.pageX) {
                    _idx--;
                  } else {
                    _idx++;
                  }
                  (_idx === _niem.length) && (_idx = 0);
                  (_idx === -1) && (_idx = _niem.length - 1);
                  $(this).parent().children('.nivoSlider-ctrl').children('span').eq(_idx).click();
                });

                PAGEINITED['case_' + _case] = true;

              }

              // $('.case_thumbnail:visible').hide();
              // $('#my_index_tetris').removeClass('tetris-transparent');
            });
          };
          // console.log(LFN)
        }

        window.location.hash = '#case_' + _case;

        // $('.case_thumbnail').hide();
        // $(_case_thumbnail_id).show();
        // $('#my_index_tetris').addClass('tetris-transparent');

        // $('body').one('click', function(e) {
        //   var _etarget = $(e.target);
        //   if (!_etarget.parents(_case_thumbnail_id).length) {
        //     $('.case_thumbnail:visible').hide();
        //     $('#my_index_tetris').removeClass('tetris-transparent');
        //   }
        // });
      }
      return false;
    });

    // $('.tetris-block').hover(function() {
    //   if (!$(this).find('img').length) {
    //     return;
    //   } else {

    //   }
    // }, function() {
    //   if (!$(this).find('img').length) {
    //     return;
    //   } else {

    //   }
    // });

    $('.team-name-list').on('click', 'li', function() {
      var $this = $(this);
      var _lis = $this.parent().children('li');
      var _idx = _lis.index($this);
      // console.log(_idx)
      _lis.removeClass('active');
      $this.addClass('active');

      $this.parent().siblings('.team-detail').addClass('dn').eq(_idx).removeClass('dn');
    });

    $(document).on('keydown', function(e) {
      var _c_p_a = $('.case_page.p-active');
      var _c_p_a_ctrl = _c_p_a.find('.nivoSlider-ctrl');
      if (_c_p_a.length) {
        var _idx = _c_p_a_ctrl.children('span').index(_c_p_a_ctrl.children('span.active'));

        if (e.which === 37 || e.which === 38) {
          _idx--;
        } else if (e.which === 39 || e.which === 40) {
          _idx++;
        }

        (_idx === _c_p_a_ctrl.children('span').length) && (_idx = 0);
        (_idx === -1) && (_idx = _c_p_a_ctrl.children('span').length - 1);
        _c_p_a_ctrl.children('span').eq(_idx).click();
      }
    });



    $(window).hashChange(function() {
      var _hash = window.location.hash.replace('#', '');

      switch (_hash) {
        case 'main':
        default:
          _hash = _hash || 'main';
          var loadfn = '_load_' + _hash;
          // console.log(loadfn)
          LFN[loadfn]();
      }
    });
    window.location.hash = '';
    $(window).hashChange();
  });
})();