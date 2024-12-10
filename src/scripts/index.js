import "../styles/reset.css";
import "../styles/main.css";
import "../styles/variables.css";
import { openModal, closeModal, initializeModal } from "./modal.js";

/* BUTTONS*/
const buttonCreditCard = document.querySelector(".credit-card");
const buttonCash = document.querySelector(".cash");
const buttonDebitCard = document.querySelector(".debit-card");

document.addEventListener("DOMContentLoaded", () => {
  initializeModal();

  const addIncomeButton = document.querySelector(".income-button");
  const addOutcomeButton = document.querySelector(".outcome-button");

  addIncomeButton.addEventListener("click", () => {
    openModal("Add income", "income", false);
  });

  addOutcomeButton.addEventListener("click", () => {
    openModal("Add outcome", "outcome", true);
  });
});

const ovalButtons = [buttonDebitCard, buttonCash, buttonCreditCard];

function resetButtonStyles() {
  ovalButtons.forEach((button) => {
    button.style.backgroundColor = "transparent";
    button.style.color = "var(--color-textWhite)";
  });
}

buttonDebitCard.addEventListener("click", () => {
  resetButtonStyles();
  buttonDebitCard.style.backgroundColor = "var(--color-primary)";
  buttonDebitCard.style.color = "var(--color-bg)";
});

buttonCash.addEventListener("click", () => {
  resetButtonStyles();
  buttonCash.style.backgroundColor = "var(--color-textBuy)";
  buttonCash.style.color = "var(--color-bg)";
});

buttonCreditCard.addEventListener("click", () => {
  resetButtonStyles();
  buttonCreditCard.style.backgroundColor = "var(--color-sellHover)";
  buttonCreditCard.style.color = "var(--color-bg)";
});
