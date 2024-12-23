import { createCircleButtons } from './form'
import {
  circleButtonsDataOutcome,
  circleButtonsDataIncome,
} from './models/dataModel'
import { resetBorders, addButtonBorder } from './views/buttonview'

const modal = document.getElementById('modal')
const modalHeader = document.querySelector('.modal-header')
const modalTextVariant = document.querySelector('.modal-text-variant')
const modalContentContainer = document.querySelector('.modal-content')
const closeButton = document.querySelector('.close-button')
const submitButton = document.querySelector('.submit-button')
const circleButtonContainer = document.querySelector('#circle-button-container')
const circleButtons = document.querySelectorAll(
  '.circle-button.circle-modal-button'
)

export const showModal = () => {
  modal.style.display = 'flex'
}

export const openModal = (
  headerText,
  textVariant,
  isCreditCardVisible = true
) => {
  showModal()

  modalHeader.innerText = headerText
  modalTextVariant.innerText = textVariant

  const buttonCreditCard = document.querySelector('.credit-card')
  buttonCreditCard.style.display = isCreditCardVisible ? 'inline' : 'none'

  const isIncome = textVariant === 'income'
  const isOutcome = textVariant === 'outcome'

  submitButton.classList.toggle('income-button', isIncome)
  submitButton.classList.toggle('outcome-button', isOutcome)

  const circleButtonContainer = document.querySelector(
    '#circle-button-container'
  )
  circleButtonContainer.innerHTML = ''
  if (isOutcome) {
    circleButtonsDataOutcome.forEach(({ src, alt, disabled, text }) => {
      createCircleButtons(src, alt, disabled, text)
    })
  }

  if (isIncome) {
    circleButtonsDataIncome.forEach(({ src, alt, disabled, text }) => {
      createCircleButtons(src, alt, disabled, text)
    })
  }

  submitButton.textContent = isIncome
    ? '+Add income'
    : isOutcome
      ? '+Add outcome'
      : submitButton.textContent
}

export function closeModal() {
  modal.style.display = 'none'
}

export function initializeModal() {
  modalContentContainer.addEventListener('click', (event) => {
    event.stopPropagation()
  })

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal()
    }
  })

  closeButton.addEventListener('click', () => {
    closeModal()
  })
}

export const handleCircleButtonClick = (event) => {
  const button = event.target.closest('button.circle-button')
  const circleButtons = document.querySelectorAll('button.circle-button')
  if (button) {
    resetBorders(circleButtons)
    addButtonBorder(button, 'var(--color-textBuy)')
  }
}
