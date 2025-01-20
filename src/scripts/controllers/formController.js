import { resetButtonBorders } from '../views/buttonview'
import { handleFormData } from './tableController'
import { closeModal } from '../views/modalView'

const form = document.getElementById('myForm')

export const formSubmitHandler = (event) => {
  event.preventDefault()

  const form = document.getElementById('myForm')
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())
}

function setupFieldDependencies() {
  const dependentField = document.getElementById('variant-input')
  const hiddenField = document.getElementById('selectedVariant')

  dependentField.addEventListener('input', () => {
    if (dependentField.value) {
      hiddenField.value = ''
    }
  })

  hiddenField.addEventListener('input', () => {
    if (hiddenField.value) {
      dependentField.value = ''
    }
  })
}
export const returnFormData = (data) => data

form.addEventListener('submit', (event) => {
  formSubmitHandler(event)
  setupFieldDependencies()

  const formData = {
    variantButton: document.getElementById('selectedVariant')?.value || null,
    amount: document.getElementById('sum-input')?.value || null,
    date: document.getElementById('date')?.value || null,
    variant: document.getElementById('variant-input')?.value || null,
    paymentType: document.getElementById('selectedPayment')?.value || null,
  }

  handleFormData(formData)

  clearHiddenInputs()
  closeModal()
})

//VALIDATION//
const errorMessageForVariant = document.querySelector('.variant')
const errorMessageForDate = document.querySelector('.date')
const errorMessageForAmount = document.querySelector('.amount')

export const onlyLetters = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]*$/
export const dateRegex = /^\d{4}\.\d{2}\.\d{2}$/
export const amountRegex = /^\d+(\.\d{2})?$/

export const formValidation = (value, reg) => reg.test(value)

export const validationSuccess = (errorMessage, errorTextMessage) => {
  errorMessage.innerText = errorTextMessage
  errorMessage.style.visibility = 'visible'
  errorMessage.classList.remove('error')
  errorMessage.classList.add('success')
}

export const validationError = (errorMessage, errorTextMessage) => {
  errorMessage.innerText = errorTextMessage
  errorMessage.style.visibility = 'visible'
  errorMessage.classList.remove('success')
  errorMessage.classList.add('error')
}

export const isValidateAmount = (value) => {
  if (!formValidation(value, amountRegex)) {
    validationError(
      errorMessageForAmount,
      'Incorrect amount Format. Use only 00.00 format'
    )
    return false
  }
  if (formValidation(value, amountRegex)) {
    validationSuccess(
      errorMessageForAmount,
      'Correct amount. Use only 00.00 format '
    )
  }
}

export const isValidDate = (value) => {
  const date = value.split('-').join('.')
  console.log('isVal', date)

  if (!formValidation(date, dateRegex)) {
    validationError(
      errorMessageForDate,
      'Incorrect date Format. Use only digit'
    )
    return false
  }

  const [year, month, day] = date.split('.').map((item) => Number(item))
  console.log('year', year)

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    validationError(errorMessageForDate, 'Date contains invalid characters')
    return false
  }

  if (String(year).length === 4 && String(year) > 1930 && String(year) < 2100) {
    validationSuccess(errorMessageForDate, 'Correct data format')
    return false
  }
  if (String(year).length !== 4) {
    validationError(errorMessageForDate, 'Year must be exactly 4 digits')
    return false
  }
  if (Number(year) > 9999 || Number(year) < 1000) {
    validationError(errorMessageForDate, 'Year must be a 4-digit number')
    return false
  }

  if (String(month) < 1 || String(month) > 12) {
    validationError(
      errorMessageForDate,
      'Incorrect date Format. Use only digit'
    )
  }
  if (String(day) < 1 || String(day) > 31) {
    validationError(
      errorMessageForDate,
      'Incorrect date Format. Use only digit'
    )
  }

  if (year < 1930 || year > 2100) {
    validationError(
      errorMessageForDate,
      'Incorrect date Format. Use only digit'
    )
  }

  const daysInMonth = new Date(year, month, 0).getDate()
  return day <= daysInMonth
}

export const isValidPaymentType = (value) => {
  const circleButtons = document.querySelectorAll(
    '.circle-button.circle-modal-button'
  )
  if (value === '') {
    errorMessageForVariant.style.visibility = 'hidden'
    circleButtons.forEach((button) => {
      button.disabled = false
    })

    return
  }

  if (value !== '') {
    resetButtonBorders(circleButtons)
    circleButtons.forEach((button) => {
      button.disabled = true
    })
  }

  if (formValidation(value, onlyLetters)) {
    validationSuccess(errorMessageForVariant, 'Correct variant format')
  } else {
    validationError(
      errorMessageForVariant,
      'Incorrect variant format. Use only letters'
    )
  }
}

let debounceTimeout

const handleInputChange = (e, validateFn) => {
  const value = e.target.value
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    validateFn(value)
  }, 300)
}

export const handlerPaymentTypeInput = (e) =>
  handleInputChange(e, isValidPaymentType)
export const handleDateInput = (e) => handleInputChange(e, isValidDate)
export const handleAmountInput = (e) => handleInputChange(e, isValidateAmount)

function clearHiddenInputs() {
  const hiddenInputs = document.querySelectorAll('input[type="hidden"]')
  hiddenInputs.forEach((input) => {
    input.value = ''
  })
}
