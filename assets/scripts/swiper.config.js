const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#swiper-next',
    prevEl: '#swiper-prev',
  },

  // And if we need scrollbar
});