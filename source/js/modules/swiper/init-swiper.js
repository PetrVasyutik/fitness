const {Swiper} = window;

let coachesSlider;
let reviewsSlider;

const initCoachesSlider = () => {
  coachesSlider = new Swiper('.slider-coaches', {

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

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  window.coachesSlider = coachesSlider;
};

const initReviewsSlider = () => {
  reviewsSlider = new Swiper('.slider-reviews', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: true,

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
  window.reviewsSlider = reviewsSlider;
};

export {initCoachesSlider, initReviewsSlider, coachesSlider, reviewsSlider};
