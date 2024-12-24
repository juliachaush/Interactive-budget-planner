import { resetButtonStyles } from '../views/buttonview'
import { changePaymentButtonColors } from '../views/buttonview'
import { resetButtonBorders, addButtonBorder } from '../views/buttonview'

const buttonCreditCard = document.querySelector('.credit-card')
const buttonCash = document.querySelector('.cash')
const buttonDebitCard = document.querySelector('.debit-card')
const paymentButtons = [buttonDebitCard, buttonCash, buttonCreditCard]

const menu = document.querySelector('.oval-button-container')

menu.addEventListener('click', (event) => {
  resetButtonStyles(paymentButtons)
  changePaymentButtonColors(event)
})

export const handleCircleButtonClick = (event) => {
  const button = event.target.closest('button.circle-button')
  const circleButtons = document.querySelectorAll('button.circle-button')
  if (button) {
    resetButtonBorders(circleButtons)
    addButtonBorder(button, 'var(--color-textBuy)')
  }
}
