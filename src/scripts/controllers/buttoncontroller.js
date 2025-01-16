import { resetButtonStyles } from '../views/buttonview'
import { changePaymentButtonColors } from '../views/buttonview'
import { resetButtonBorders, addButtonBorder } from '../views/buttonview'

const buttonCreditCard = document.querySelector('.credit-card')
const buttonCash = document.querySelector('.cash')
const buttonDebitCard = document.querySelector('.debit-card')
const paymentButtons = [buttonDebitCard, buttonCash, buttonCreditCard]

export const handlePaymentTypeButtonClick = (event) => {
  const button = event.target.closest('button.oval-button')
  const buttonText = button.getAttribute('data-name')
  document.getElementById('selectedPayment').value = buttonText
  resetButtonStyles(paymentButtons)
  changePaymentButtonColors(event)
}

export const handleCircleButtonClick = (event) => {
  const button = event.target.closest('button.circle-button')
  const buttonText = button.getAttribute('data-name')
  document.getElementById('selectedVariant').value = buttonText

  const circleButtons = document.querySelectorAll('button.circle-button')
  if (button) {
    resetButtonBorders(circleButtons)
    addButtonBorder(button, 'var(--color-textBuy)')
  }
}
