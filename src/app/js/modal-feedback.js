const openModalBtn = document.querySelector('.upper-menu__btn-feedback')
const openModalBtnAside = document.querySelector('.chat-button')

const modal = document.querySelector('.popup-feedback')
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
