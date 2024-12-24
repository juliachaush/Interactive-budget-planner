import {
  circleButtonsDataOutcome,
  circleButtonsDataIncome,
} from '../models/dataModel'
import { createCircleButtons } from '../views/buttonview'
import { showModal } from '../views/modalView'

import { initializeModal } from '../views/modalView'

export const openModal = (
  headerText,
  textVariant,
  isCreditCardVisible = true
) => {
  showModal()

  const modalHeader = document.querySelector('.modal-header')
  const modalTextVariant = document.querySelector('.modal-text-variant')
  const submitButton = document.querySelector('.submit-button')

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
