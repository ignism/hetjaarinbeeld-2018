import Swiper from 'swiper'

let swipers = Array.from(document.getElementsByClassName('swiper-container'))

swipers.forEach(container => {
  new Swiper (container, {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 6000
    },
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },
    threshold: 20,
  })
})
