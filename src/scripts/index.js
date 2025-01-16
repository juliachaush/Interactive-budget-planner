import '../styles/reset.css'
import '../styles/main.css'
import '../styles/variables.css'
import '../styles/modal.css'
import '../styles/form.css'
import '../styles/table.css'

// Model: Всі дані, логіка валідації, створення кнопок тощо.
// View: Оновлення інтерфейсу, відображення модальних вікон, кнопок, форми.
// Controller: Обробка подій (натискання на кнопки, подача форми) та взаємодія з моделлю і виглядом.

import { openModal } from '../scripts/views/modalView.js'
import { initializeModal } from '../scripts/controllers/modalController.js'
import {
  handleCircleButtonClick,
  handlePaymentTypeButtonClick,
} from '../scripts/controllers/buttoncontroller.js'

import {
  handlerPaymentTypeInput,
  handleDateInput,
  handleAmountInput,
} from '../scripts/controllers/formController.js'

window.onload = function () {
  document.getElementById('loading').style.display = 'block'
  document.querySelector('.header-container').style.visibility = 'hidden'
  document.querySelector('.container').style.visibility = 'hidden'
}

function hideLoaderAndShowContainer() {
  document.getElementById('loading').style.display = 'none'

  const container = document.querySelector('.container')
  const header = document.querySelector('.header-container')

  console.log(container)

  if (container && header) {
    container.style.visibility = 'visible'
    header.style.visibility = 'visible'
  } else {
    console.error('Container element not found.')
  }
}

function initializeButtons() {
  const addIncomeButton = document.querySelector('.income-button')
  const addOutcomeButton = document.querySelector('.outcome-button')

  addIncomeButton.addEventListener('click', () => {
    openModal('Add income', 'income', false)
  })

  addOutcomeButton.addEventListener('click', () => {
    openModal('Add outcome', 'outcome', true)
  })
}

function initializeEvents() {
  document
    .querySelector('#circle-button-container')
    .addEventListener('click', handleCircleButtonClick)

  document
    .querySelector('.oval-button-container')
    .addEventListener('click', handlePaymentTypeButtonClick)

  document
    .getElementById('variant-input')
    .addEventListener('input', handlerPaymentTypeInput)

  document.getElementById('date').addEventListener('input', handleDateInput)

  document
    .getElementById('sum-input')
    .addEventListener('input', handleAmountInput)
}

window.addEventListener('load', hideLoaderAndShowContainer)

initializeModal()
initializeButtons()
initializeEvents()
