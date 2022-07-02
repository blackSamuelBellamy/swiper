const container = document.querySelector('.container');

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 360,
      stretch: 50,
      depth: 250,
      modifier: 1,
      slideShadows: true,
    },
    loop: true
});



