import Swiper from 'swiper/bundle'
// import { Navigation, Pagination } from 'swiper/modules'

let elementsToShow = 0

let swiper = new Swiper('.swiper-rep-brand__swiper', {
  spaceBetween: 26,
  pagination: {
    el: '.swiper-rep-brand__swiper-pagination',
    clickable: true
  },
  slidesPerView: 1.3,
  on: {
    resize: function enableOnlyMobile(swiper) {
      if (window.innerWidth < 768) {
        btn.classList.add('hidden')
        elementsToShow = 100
        swiper.enable()
        swiper.el.classList.remove('-non-slider')
      } else {
        if (window.innerWidth >= 768) {
          btn.classList.remove('hidden')
          swiper.disable()
          swiper.el.classList.add('-non-slider')
          elementsToShow = 3
        } else {
          if (window.innerWidth > 1440) {
            btn.classList.remove('hidden')
            elementsToShow = 4
            swiper.disable()
            swiper.el.classList.add('-non-slider')
          }
        }
      }
    }
  }
})

const btn = document.querySelector('.swiper-rep-brand__expand-btn')
const cards = Array.from(document.querySelectorAll('.swiper-rep-brand__swiper-slide'))

let visibleElements

function countVisibleElements() {
  if (window.innerWidth < 768) {
    cards.forEach(item => item.classList.remove('swiper-rep-brand__swiper-slide--hidden'))
    btn.classList.add('hidden')
    visibleElements = 100
    elementsToShow = 100
  } else {
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      btn.classList.remove('hidden')
      visibleElements = 5
      swiper.disable()
      swiper.el.classList.add('-non-slider')
      if (btn.textContent === 'Показать все') {
        cards.forEach((item, index) => {
          item.classList.remove('swiper-rep-brand__swiper-slide--hidden')
          if (index > visibleElements) {
            item.classList.add('swiper-rep-brand__swiper-slide--hidden')
          }
        })
      }
    } else {
      if (window.innerWidth >= 1440) {
        btn.classList.remove('hidden')
        console.log('удалил после 1440')
        visibleElements = 7
        swiper.el.classList.add('-non-slider')
        swiper.disable()
        if (btn.textContent === 'Показать все') {
          cards.forEach((item, index) => {
            item.classList.remove('swiper-rep-brand__swiper-slide--hidden')
            if (index > visibleElements) {
              item.classList.add('swiper-rep-brand__swiper-slide--hidden')
            }
          })
        }
      }
    }
  }
  return visibleElements
}

window.addEventListener('resize', countVisibleElements)
window.addEventListener('load', countVisibleElements)

let areElementsShown = false

function showCards() {
  btn.textContent = 'Скрыть все'
  console.log(visibleElements)
  cards.forEach(item => item.classList.remove('swiper-rep-brand__swiper-slide--hidden'))
}

function hideCards() {
  btn.textContent = 'Показать все'
  console.log(visibleElements)
  cards.forEach((item, index) => {
    if (index > visibleElements) {
      item.classList.add('swiper-rep-brand__swiper-slide--hidden')
    }
  })
}

btn.addEventListener('click', e => {
  btn.textContent === 'Показать все' ? showCards() : hideCards()
  // поворачиватет стрелки у кнопки
  btn.classList.toggle('swiper-rep-brand__expand-btn--open')
})
