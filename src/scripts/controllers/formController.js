import {
  isValidPaymentType,
  isValidDate,
  isValidateAmount,
} from '../models/formModel'
const form = document.getElementById('myForm')

export const formSubmitHandler = (event) => {
  event.preventDefault()

  const form = document.getElementById('myForm')
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())
}

export const handlerPaymentTypeInput = (e) => {
  const value = e.target.value

  isValidPaymentType(value)
}

export const handleDateInput = (e) => {
  const value = e.target.value
  console.log('valueDate', value)
  isValidDate(value)
}

export const handleAmountInput = (e) => {
  const value = e.target.value
  isValidateAmount(value)
}

form.addEventListener('submit', (event) => {
  formSubmitHandler(event)
})
