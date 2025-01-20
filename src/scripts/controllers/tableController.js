import { createTableRow } from '../views/tableView'

function clearTable() {
  const tableContainer = document.querySelector('.table')
  if (tableContainer) {
    tableContainer.innerHTML = ''
  }
}

export function handleFormData(formData) {
  const dataArr = JSON.parse(localStorage.getItem('data')) || []
  dataArr.push(formData)
  localStorage.setItem('data', JSON.stringify(dataArr))

  clearTable()

  dataArr.forEach((data, index) => {
    createTableRow(data)
  })
}
