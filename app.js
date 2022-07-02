const container = document.querySelector('.container');

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 10,
      stretch: 50,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    loop: true
});



