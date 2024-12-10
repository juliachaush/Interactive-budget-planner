export const resetButtonStyles = (buttonsArr) => {
  buttonsArr.forEach((button) => {
    button.style.backgroundColor = "transparent";
    button.style.color = "var(--color-textWhite)";
  });
};

export const changeButtonColors = (
  button,
  backgroundColor,
  textColor,
  buttonsArr
) => {
  resetButtonStyles(buttonsArr);
  button.style.backgroundColor = backgroundColor;
  button.style.color = textColor;
};
