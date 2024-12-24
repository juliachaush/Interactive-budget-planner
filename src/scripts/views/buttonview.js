export const resetButtonStyles = (buttonsArr) => {
  buttonsArr.forEach((button) => {
    button.style.backgroundColor = 'transparent'
    button.style.color = 'var(--color-textWhite)'
  })
}

export const addButtonBorder = (
  button,
  color,
  width = '4px',
  style = 'solid'
) => {
  button.style.outline = `${width} ${style} ${color}`
}

export const resetButtonBorders = (arrOfButtons) => {
  arrOfButtons.forEach((button) => {
    button.style.outline = 'none'
  })
}

const createElement = (tag, options = {}) => {
  const { classes = [], attributes = {}, textContent } = options
  const element = document.createElement(tag)
  if (classes.length) element.classList.add(...classes)
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
  if (textContent) element.textContent = textContent
  return element
}

export const createCircleButtons = (src, alt, disabled, text) => {
  const circleButtonContainer = document.querySelector(
    '#circle-button-container'
  )

  if (!circleButtonContainer) {
    console.error('Element with id "circle-button-container" not found.')
    return
  }

  const circleButtonWrapper = createElement('div', {
    classes: ['button-with-text'],
  })

  const button = createElement('button', {
    classes: ['circle-button', 'circle-modal-button'],
    attributes: disabled
      ? { type: 'button', disabled: true }
      : { type: 'button' },
  })

  console.log('buttonnnnn', button)

  const img = createElement('img', {
    attributes: { src, alt },
  })

  const circleButtonText = createElement('div', {
    classes: ['text'],
    textContent: text,
  })

  button.appendChild(img)
  circleButtonWrapper.appendChild(button)
  circleButtonWrapper.appendChild(circleButtonText)
  circleButtonContainer.appendChild(circleButtonWrapper)

  return circleButtonWrapper
}

export const changePaymentButtonColors = (e) => {
  const isCash = e.target.innerText === 'Cash'
  const isCreditCard = e.target.innerText === 'Credit card'
  const isDebitCard = e.target.innerText === 'Debit card'

  e.target.style.backgroundColor = isCash
    ? 'var(--color-textBuy)'
    : isCreditCard
      ? 'var(--color-sellHover)'
      : isDebitCard
        ? 'var(--color-primary)'
        : 'transparent'
}
