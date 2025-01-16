export const createElement = (tag, options = {}) => {
  const { classes = [], attributes = {}, textContent } = options
  const element = document.createElement(tag)
  if (classes.length) element.classList.add(...classes)
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
  if (textContent) element.textContent = textContent
  return element
}
