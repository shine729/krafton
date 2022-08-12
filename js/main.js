$(document).ready(function(){
  var swiper = new Swiper(".myswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
  });

  var swiper = new Swiper(".myswiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
  });

   var swiper = new Swiper(".myswiper3", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
  });
  
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
});
  
  $('.studio_box').mouseenter(function(){
    $('.studio_box').removeClass('on');
    $(this).addClass('on');
  })
  $('.studio_box').mouseleave(function(){
    $(this).addClass('on');
  });

  $('.family_site').on('click',function(){
    $('.family_site').toggleClass('on');
  });

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
  if (winH > posFromTop) {
    items[i].classList.add("active");
  }
  
}
}

return {
init: initModule
}
}

animation().init();



});