// import { resetBorders } from '../views/buttonview'
// import {
//   formValidation,
//   validationSuccess,
//   validationError,
//   onlyLetters,
// } from '../models/formModel'

import { isValidPaymentType } from '../models/formModel'
const form = document.getElementById('myForm')

export const formSubmitHandler = (event) => {
  event.preventDefault()

  const form = document.getElementById('myForm')
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())
  console.log('datadatadata', data)
}

export const handlerPaymentVariantFormInput = (e) => {
  const value = e.target.value
  console.log('valuehandlePayment', value)
  isValidPaymentType(value)
}

form.addEventListener('submit', (event) => {
  formSubmitHandler(event)
})
