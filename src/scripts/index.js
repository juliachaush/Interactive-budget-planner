import '../styles/reset.css'
import '../styles/main.css'
import '../styles/variables.css'
import '../styles/modal.css'
import '../styles/form.css'
import '../styles/table.css'

// Model: Всі дані, логіка валідації, створення кнопок тощо.
// View: Оновлення інтерфейсу, відображення модальних вікон, кнопок, форми.
// Controller: Обробка подій (натискання на кнопки, подача форми) та взаємодія з моделлю і виглядом.

import { openModal } from '../scripts/controllers/modalController.js'
import { initializeModal } from '../scripts/views/modalView.js'
import { handleCircleButtonClick } from '../scripts/controllers/buttoncontroller.js'
import { handlerPaymentVariantFormInput } from '../scripts/controllers/formController.js'

document.addEventListener('DOMContentLoaded', () => {
  initializeModal()

  const addIncomeButton = document.querySelector('.income-button')
  const addOutcomeButton = document.querySelector('.outcome-button')

  document
    .querySelector('#circle-button-container')
    .addEventListener('click', handleCircleButtonClick)

  document
    .getElementById('variant-input')
    .addEventListener('input', handlerPaymentVariantFormInput)

  addIncomeButton.addEventListener('click', () => {
    openModal('Add income', 'income', false)
  })

  addOutcomeButton.addEventListener('click', () => {
    openModal('Add outcome', 'outcome', true)
  })
})
