$(document).ready(function(){
  var swiper = new Swiper(".myswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
                breakpoints: {
        
          360: {
            slidesPerView: "auto", 
            spaceBetween: 30,
          },
          768: {
            slidesPerView: "auto", 
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,  
            spaceBetween: 50,
          },
        },
  });

  var swiper = new Swiper(".myswiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
                breakpoints: {
        
          360: {
            slidesPerView: "auto",  //브라우저가 375보다 클 때
            spaceBetween: 30,
          },
          768: {
            slidesPerView: "auto", 
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,  //브라우저가 1024보다 클 때
            spaceBetween: 50,
          },
        },
  });

   var swiper = new Swiper(".myswiper3", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                } ,
                  breakpoints: {
        
                  360: {
                    slidesPerView: "auto",  //브라우저가 375보다 클 때
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: "auto", 
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 2,  //브라우저가 1024보다 클 때
                    spaceBetween: 50,
                  },
                },
  });

/* < 스크롤을 내릴땐 헤더가 감춰지고 스크롤을 올릴땐 헤더가 생김 > */
var didScroll;
var lastScrollTop = 0;
var delta = 5; // 동작의 구현이 시작되는 위치
var navbarHeight = $('#header').outerHeight(); // 영향을 받을 요소를 선택


// 스크롤시에 사용자가 스크롤했다는 것을 알림
$(window).scroll(function(event){
    didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

// 동작을 구현
function hasScrolled() {
    // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
    var st = $(this).scrollTop();
    
    // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
    if(Math.abs(lastScrollTop - st) <= delta){
        return;
    }
    
    // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#header').removeClass('nav-up').addClass('navbar-down');
        $('#header').removeClass('header_on')
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#header').removeClass('navbar-down').addClass('nav-up');
        }
    }
    
    // lastScrollTop 에 현재 스크롤위치를 지정한다.
    lastScrollTop = st;
}


  
  $('#header').mouseenter(function(){
    $('#header').addClass('header_on');
})

$('#header').mouseleave(function(){
  $('#header').removeClass('header_on');
})

$('#header .container .site_lang li').on('click',function(){
  $('#header .container .site_lang li').removeClass('on');
  $(this).addClass('on');
});

$('.mobile_btn').on('click',function(){
  $('.nav').toggleClass('on');
  $('.mobile_btn').toggleClass('on');
  $('.mobile_header_menu').toggleClass('on');
});


  

  $('.family_site').on('click',function(){
    $('.family_site').toggleClass('on');
  });

  var width_size = window.outerWidth;
  if(width_size>992){
    $('.studio_box').mouseenter(function(){
      $('.studio_box').removeClass('on');
      $(this).addClass('on');
    })
    $('.studio_box').mouseleave(function(){
      $(this).addClass('on');
    });
  }else{
    $('.studio_box').removeClass('on');
  }


/*< 스크롤 내릴시 애니메이션 동작 >*/
var animation = function () {
var items, winH;

var initModule = function () {
items = document.querySelectorAll("section>.site_container");
winH = window.innerHeight;
_addEventHandlers();
}

var _addEventHandlers = function () {
window.addEventListener("scroll", _checkPosition);
window.addEventListener("load", _checkPosition);
window.addEventListener("resize", initModule);
};

var _checkPosition = function () {
for (var i = 0; i < items.length; i++) {
  var posFromTop = items[i].getBoundingClientRect().top;
  var itemgame = items[3].getBoundingClientRect().top;
  if (winH > posFromTop) {
    items[i].classList.add("active");
  }

/*세번째 site-container에 스크롤해서 도달할시 검정배경색 적용*/
  if (winH > itemgame) {
    $('.body').addClass('black');
    if(0 > itemgame){
      $('.body').removeClass('black');
    }
  }else{
    $('.body').removeClass('black');
  }
}

}

return {init: initModule}
}

animation().init();


});