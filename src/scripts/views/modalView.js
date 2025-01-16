import {
  circleButtonsDataOutcome,
  circleButtonsDataIncome,
} from '../models/dataModel'
import { createCircleButtons } from '../views/buttonview'

export const showModal = () => {
  const modal = document.getElementById('modal')
  modal.style.display = 'flex'
}

export const closeModal = () => {
  const modal = document.getElementById('modal')
  modal.style.display = 'none'
}

const updateModalHeader = (headerText, textVariant) => {
  document.querySelector('.modal-header').innerText = headerText
  document.querySelector('.modal-text-variant').innerText = textVariant
}

const toggleCreditCard = (isVisible) => {
  const buttonCreditCard = document.querySelector('.credit-card')
  buttonCreditCard.style.display = isVisible ? 'inline' : 'none'
}

const updateSubmitButton = (textVariant) => {
  const submitButton = document.querySelector('.submit-button')
  const isIncome = textVariant === 'income'
  const isOutcome = textVariant === 'outcome'

  submitButton.classList.toggle('income-button', isIncome)
  submitButton.classList.toggle('outcome-button', isOutcome)
  submitButton.textContent = isIncome
    ? '+Add income'
    : isOutcome
      ? '+Add outcome'
      : submitButton.textContent
}

const updateCircleButtonContainer = (textVariant) => {
  const circleButtonContainer = document.querySelector(
    '#circle-button-container'
  )
  circleButtonContainer.innerHTML = ''

  const circleButtonsData =
    textVariant === 'income'
      ? circleButtonsDataIncome
      : textVariant === 'outcome'
        ? circleButtonsDataOutcome
        : []

  circleButtonsData.forEach(({ src, alt, disabled, text }) => {
    createCircleButtons(src, alt, disabled, text)
  })
}

export const openModal = (
  headerText,
  textVariant,
  isCreditCardVisible = true
) => {
  showModal()

  updateModalHeader(headerText, textVariant)
  toggleCreditCard(isCreditCardVisible)
  updateSubmitButton(textVariant)
  updateCircleButtonContainer(textVariant)
}
