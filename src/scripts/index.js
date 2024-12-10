import "../styles/reset.css";
import "../styles/main.css";
import "../styles/variables.css";
import "../styles/modal.css";
import "../styles/form.css";
import { openModal, closeModal, initializeModal } from "./modal.js";
import { changeButtonColors, buttonBorder } from "./components/button.js";
import { formSubmitting } from "./form.js";

/* BUTTONS*/
const buttonCreditCard = document.querySelector(".credit-card");
const buttonCash = document.querySelector(".cash");
const buttonDebitCard = document.querySelector(".debit-card");
const circleButtons = document.querySelectorAll(".circle-modal-button");
/* FORM*/
const form = document.getElementById("myForm");

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

const resetBorders = () => {
  circleButtons.forEach((button) => {
    button.style.outline = "none";
  });
};

circleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resetBorders();
    buttonBorder(button, "var(--color-textBuy)");
  });
});

form.addEventListener("submit", (event, form) => {
  formSubmitting(event);
});
