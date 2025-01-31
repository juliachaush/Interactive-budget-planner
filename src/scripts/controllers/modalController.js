import { closeModal } from '../views/modalView'

export const initializeModal = () => {
  const modalContentContainer = document.querySelector('.modal-content')
  modalContentContainer.addEventListener('click', (event) => {
    event.stopPropagation()
  })

  const modal = document.getElementById('modal')
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal()
    }
  })

  const closeButton = document.querySelector('.close-button')
  closeButton.addEventListener('click', () => {
    closeModal()
  })
}
