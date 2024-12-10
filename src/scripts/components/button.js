export const resetButtonStyles = (buttonsArr) => {
  buttonsArr.forEach((button) => {
    button.style.backgroundColor = "transparent";
    button.style.color = "var(--color-textWhite)";
  });
};

export const changeButtonColors = (e) => {
  const isCash = e.target.innerText === "Cash";
  const isCreditCard = e.target.innerText === "Credit card";
  const isDebitCard = e.target.innerText === "Debit card";

  e.target.style.backgroundColor = isCash
    ? "var(--color-textBuy)"
    : isCreditCard
    ? "var(--color-sellHover)"
    : isDebitCard
    ? "var(--color-primary)"
    : "transparent";
};

export const addButtonBorder = (
  button,
  color,
  width = "4px",
  style = "solid"
) => {
  button.style.outline = `${width} ${style} ${color}`;
};

export const resetBorders = (arrOfButtons) => {
  arrOfButtons.forEach((button) => {
    button.style.outline = "none";
  });
};
