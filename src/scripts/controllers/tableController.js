import { createTableRow } from '../views/tableView'

export function handleFormData(formData) {
  console.log('Form data received via callback:', formData)
  createTableRow(formData)
}
