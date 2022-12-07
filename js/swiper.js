const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    loop: false,
  
    slidesPerView: 3,
    slidesPerGroup: 3,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  breakpoints: {
    320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    670: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      824: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      835: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1170: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },

watchOverflow: true,
  
  });
const swiper_comment = new Swiper('.swiper-comment', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    loop: true,
  
    slidesPerView: 1,
    slidesPerGroup: 1,

    spaceBetween: 200,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
watchOverflow: true,
  
  });


const swiper_news = new Swiper('.swiper-news', {
    direction: 'horizontal',
    loop: false,
  
    slidesPerView: 3,
    slidesPerGroup: 3,
  
    spaceBetween: 25,

  breakpoints: {
    320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    670: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    700: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },

watchOverflow: true,
  
  });