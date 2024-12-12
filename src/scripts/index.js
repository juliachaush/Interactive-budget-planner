import "../styles/reset.css";
import "../styles/main.css";
import "../styles/variables.css";
import "../styles/modal.css";
import "../styles/form.css";
import "../styles/table.css";
import { openModal, initializeModal, handleButtonClick } from "./modal.js";
import {
  changeButtonColors,
  addButtonBorder,
  resetButtonStyles,
  resetBorders,
} from "./components/button.js";
import { formSubmitting, formValidation } from "./form.js";

/* BUTTONS*/
const buttonCreditCard = document.querySelector(".credit-card");
const buttonCash = document.querySelector(".cash");
const buttonDebitCard = document.querySelector(".debit-card");

/* FORM*/
const form = document.getElementById("myForm");
const menu = document.querySelector(".oval-button-container");

const circleButtonContainer = document.querySelector(
  "#circle-button-container"
);

const variantFormInput = document.getElementById("variant-input");

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

circleButtonContainer.addEventListener("click", handleButtonClick);

form.addEventListener("submit", (event, form) => {
  formSubmitting(event);
});

const paymentButtons = [buttonDebitCard, buttonCash, buttonCreditCard];

menu.addEventListener("click", (event) => {
  resetButtonStyles(paymentButtons);
  changeButtonColors(event);
});
