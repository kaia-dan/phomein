'use strict';


//1. fullpage
$(function() {
	$('#fullpage').fullpage({
		fingersonly: true, 
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
		menu: '.rightNav',
		afterLoad: function(anchorLink, index){
				if(index == 2){ //두번째 페이지에 카운트업
					$('.count').counterUp({delay: 10,time: 550});
				}
					 if(index == 3){ //세번째 페이지에 카운트업
					$('.count2').counterUp({delay: 10,time: 550});
					}
		}
	});
});

	//2. gnb
	$(function(){
		setGnb();

		function setGnb(){
			$(".innerHeader .gnb > li > a").on("mouseenter focus", function(){
				$(".innerHeader").addClass("on");
				$(".innerHeader .gnb > li .inner").addClass("on");
				$("header").css({"border-bottom":"none"});
			});
			$("header").on("mouseleave blur", function(){
				$(".innerHeader").removeClass("on");
				$(".innerHeader .gnb > li .inner").removeClass("on");
				$("header").css({"border-bottom":"1px solid rgba(255,255,255,0.1)"});
			});
		};
	});


//3. 이미지슬라이드
$(function() {
  $(".visual").slick({
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2800,
      pauseOnHover:false,
      pauseOnFocus:false,
      customPaging: function(slider, i) {
          var tit = $(slider.$slides[i]).find('.dot').html(); // html .dot 에 써준 내용을 dots에 넣을것임 
          return '<div class="pager-tit" class=' + i + '>'+ tit + '</div>';  // 슬라이드 인덱스 의 내용(변수 tit)을 pager-tit 클래스로 반환
      }
  });
});  

//4. 이미지슬라이드 _ 넓이 높이 스크립트
$(function() {
  var winW = $(window).width(), 
      winH = $(window).height(),
    list = $('.visual .list');
    list.css({width: winW+'px', height: winH+'px'});
});  


  //scroll animation
	$(function(){
		$('.animate').scrolla({  //$('.등록할클래스명')
				moblie : true,  //모바일버전시 활성화
				once: true //스크롤시 딱 한번만 하고 싶을 때 true, 반복하고 싶을 때 false
		});
	});
