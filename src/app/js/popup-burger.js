const openModalBtn = document.querySelector('.upper-menu__burger-button')
const modal = document.querySelector('.popup-burger')
const closeBtn = modal.querySelector('.popup-burger__button')

openModalBtn.addEventListener('click', function () {
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
