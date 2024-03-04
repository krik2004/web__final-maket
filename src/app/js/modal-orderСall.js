const openModalBtn = document.querySelector('.btn-orderСall') //кнопка из аппер меню
const openModalBtnAside = document.querySelector('.call-button') //кнопка из бургер меню
const modal = document.querySelector('.popup-orderСall')
const closeBtn = modal.querySelector('.close-btn')

openModalBtn.addEventListener('click', function () {
  modal.style.display = 'block'
})

openModalBtnAside.addEventListener('click', function () {
  modal.style.display = 'block'
})

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none'
})

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
})
