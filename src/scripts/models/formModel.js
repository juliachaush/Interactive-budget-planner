import { resetButtonBorders } from '../views/buttonview'

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
  // if ((value = 0.0)) {
  //   errorMessageForAmount.style.display = 'none'
  // }
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
