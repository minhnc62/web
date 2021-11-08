
// ------------------

$(document).ready(function () {
    $('.featured-links').each(function () {
      const navSlides = $(this).find('.featured-tabs--slider')
      const contentSlides = $(this).find('.tab-content--slider')
  
      contentSlides.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: false,
        asNavFor: navSlides
      });
  
      navSlides.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: contentSlides,
        dots: false,
        arrows: false,
        infinite: false,
        focusOnSelect: true
      });
    });
  });
// -----------------------------------------


var swiper = new Swiper(".banner-slide", {
  
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




var swiper = new Swiper(".pk-slider", {
  slidesPerView: 4,
  
  spaceBetween: 16,
  freeMode: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    450:{
      slidesPerView: 2,
    },
    768:{
      slidesPerView: 3,
      
    },
    1200:{
      slidesPerView: 4,
      
    },
  }
});























































































