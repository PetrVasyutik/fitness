const {Swiper} = window;

let heroSlider;
let simpleSlider;

const initHeroSlider = () => {
  heroSlider = new Swiper('.slider--hero', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  window.heroSlider = heroSlider;
};

const initSimpleSlider = () => {
  simpleSlider = new Swiper('.js-simple-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  window.simpleSlider = simpleSlider;
};

export {initHeroSlider, initSimpleSlider, heroSlider, simpleSlider};
