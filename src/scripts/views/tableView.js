import { createElement } from '../utils/createElemet'

export const createTableRow = (data) => {
  console.log('data data', data)

  const { variantButton, amount, date, variant, paymentType } = data
  const tableContainer = document.querySelector('.table')

  if (!tableContainer) {
    console.error('Element with class "table" not found.')
    return
  }

  const fragment = document.createDocumentFragment()

  const tableRowWrapper = createElement('div', { classes: ['table-row'] })

  const isCash = paymentType === 'Cash' ? 'status-cash' : 'status-card'

  const tableCellConfig = [
    { tag: 'div', classes: ['table-cell', 'table-cell--number'] },
    {
      tag: 'div',
      classes: ['table-cell', 'table-cell--date'],
      textContent: date,
    },
    {
      tag: 'div',
      classes: ['table-cell', 'table-cell--type'],
      textContent: variant === null ? variantButton : variant,
    },
    {
      tag: 'div',
      classes: ['table-cell', 'table-cell--bage'],
      children: [
        createElement('span', {
          classes: ['badge', isCash],
          textContent: isCash ? 'Cash' : 'Card',
        }),
      ],
    },
    {
      tag: 'div',
      classes: ['table-cell', 'table-cell--incomes', 'incomes', 'sum'],
      textContent: amount,
    },
  ]

  tableCellConfig.forEach((cellConfig) => {
    const element = createElement(cellConfig.tag, cellConfig)
    if (cellConfig.children) {
      cellConfig.children.forEach((child) => element.appendChild(child))
    }
    tableRowWrapper.appendChild(element)
  })

  fragment.appendChild(tableRowWrapper)
  tableContainer.appendChild(fragment)

  return tableRowWrapper
}
