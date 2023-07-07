var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 300){
      $('.movetopBtn').show();
    } else{
      $('.movetopBtn').hide();
    }
  });
  $('.movetopBtn').click(function(){
    $('html, body').animate({scrollTop:0},400);
    return false;
});
