import "../styles/reset.css";
import "../styles/main.css";
import "../styles/variables.css";
import "../styles/modal.css";
import "../styles/form.css";
import { openModal, closeModal, initializeModal } from "./modal.js";
import { changeButtonColors } from "./components/button.js";

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

const paymentButtons = [buttonDebitCard, buttonCash, buttonCreditCard];

buttonDebitCard.addEventListener("click", () => {
  changeButtonColors(
    buttonDebitCard,
    "var(--color-primary)",
    "var(--color-bg)",
    paymentButtons
  );
});

buttonCash.addEventListener("click", () => {
  changeButtonColors(
    buttonCash,
    "var(--color-textBuy)",
    "var(--color-bg)",
    paymentButtons
  );
});

buttonCreditCard.addEventListener("click", () => {
  changeButtonColors(
    buttonCreditCard,
    "var(--color-sellHover)",
    "var(--color-bg)",
    paymentButtons
  );
});
