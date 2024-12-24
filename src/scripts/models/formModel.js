import { resetButtonBorders } from '../views/buttonview'

const errorMessageForVariant = document.querySelector('.variant')

export const onlyLetters = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]*$/
export const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/
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

export const isValidDate = (value) => {
  if (!formValidation(value, dateRegex)) return false

  const [day, month, year] = value.split('.').map(Number)
  if (month < 1 || month > 12) return false
  if (day < 1 || day > 31) return false
  if (year < 1900 || year > 2100) return false

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
