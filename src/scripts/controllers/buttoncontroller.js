export const changeButtonColors = (e) => {
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
