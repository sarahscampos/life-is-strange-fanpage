export default function initSlider() {

  const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 80,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      920: {
        slidesPerView: 2
      },
      1500: {
        slidesPerView: 3
      },
    }

  });

}