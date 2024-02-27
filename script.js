var mySwiper = new Swiper('.swiper-container', {
  // Настройки
  loop: true, // Для эффекта бесконечной смены картинок
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000, // Интервал смены картинок в миллисекундах
  },
});