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

export const resetBorders = (arrOfButtons) => {
  arrOfButtons.forEach((button) => {
    console.log('button from reset', button)
    button.style.outline = 'none'
  })
}
