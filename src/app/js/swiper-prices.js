
import Swiper from 'swiper/bundle'
// import { Navigation, Pagination } from 'swiper/modules'

// let elementsToShow = 0

// const headingContainer = document.querySelector('.swiper-prices__heading-container')

let swiper = new Swiper('.swiper-prices__swiper', {
  spaceBetween: 26,
  pagination: {
    el: '.swiper-prices__swiper-pagination',
    clickable: true
  },
  slidesPerView: 1.3,
  on: {
    resize: function enableOnlyMobile(swiper) {
      if (window.innerWidth <= 767) {
        swiper.enable()
        swiper.el.classList.remove('-non-slider')
        // headingContainer.classList.add('hidden')
      } else {
        if (window.innerWidth > 768) {
          swiper.el.classList.add('-non-slider')
          swiper.disable()
          // headingContainer.classList.remove('hidden')
        } else {
          if (window.innerWidth > 1440) {
            swiper.el.classList.add('-non-slider')
            swiper.disable()
            // headingContainer.classList.remove('hidden')
          }
        }
      }
    }
  }
})
 if (window.innerWidth <= 767) {
   swiper.enable()
   swiper.el.classList.remove('-non-slider')
   // headingContainer.classList.add('hidden')
 }