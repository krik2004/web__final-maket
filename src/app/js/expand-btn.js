const btn = document.querySelector('.first-block__expand-btn')
const hideP = document.querySelector('.first-block__p2')
function showCards() {
  console.log('remove')
  hideP.classList.remove('hidden')
  btn.textContent = 'Скрыть'
}

function hideCards() {
  btn.textContent = 'Читать далее'
  hideP.classList.add('hidden')
}

btn.addEventListener('click', () => {
  btn.textContent === 'Читать далее' ? showCards() : hideCards()
  // поворачиватет стрелки у кнопки
  btn.classList.toggle('first-block__expand-btn--open')
})
