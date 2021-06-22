
// Ищем в дом дереве елементы
const openModal = document.querySelector('.modal-window-open');
const closeModal = document.querySelector('.modal-window-close');
const modalWindow = document.querySelector('.modal-window');

// Функция открытия модалки
openModal.addEventListener('click',() => {
  modalWindow.classList.add('modal-window-active')
})

// Функция Закрытия модалки
closeModal.addEventListener('click',() => {
  modalWindow.classList.remove('modal-window-active')
})
