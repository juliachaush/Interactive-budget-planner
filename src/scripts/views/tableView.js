import { createElement } from '../utils/createElemet'

export const createTableRow = (data) => {
  console.log('Tableview data', data)

  const { variantButton, amount, date, variant, paymentType } = data
  const tableContainer = document.querySelector('.table')

  if (!tableContainer) {
    console.error('Element with class "table" not found.')
    return
  }

  const fragment = document.createDocumentFragment()

  const tableRowWrapper = createElement('div', { classes: ['table-row'] })

  const checkPaymentType = (type) => {
    if (paymentType === 'Cash') {
      return { addingClass: 'status-cash', badgeName: 'Cash' }
    } else if (paymentType === 'Debit card') {
      return { addingClass: 'status-dbetcard', badgeName: 'Debet card' }
    } else if (paymentType === 'Credit card') {
      return { addingClass: 'status-cerditcard', badgeName: 'Credit card' }
    }
  }
  const paymentTypeChecking = checkPaymentType(paymentType)
  const { addingClass, badgeName } = paymentTypeChecking

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
          classes: ['badge', addingClass],
          textContent: badgeName,
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
