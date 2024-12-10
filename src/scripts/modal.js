const modal = document.getElementById("modal");
const modalHeader = document.querySelector(".modal-header");
const modalTextVariant = document.querySelector(".modal-text-variant");
const modalContentContainer = document.querySelector(".modal-content");
const closeButton = document.querySelector(".close-button");
const submitButton = document.querySelector(".submit-button");

export function openModal(headerText, textVariant, isCreditCardVisible = true) {
  modal.style.display = "flex";
  modalHeader.innerText = headerText;
  modalTextVariant.innerText = textVariant;

  const buttonCreditCard = document.querySelector(".credit-card");
  buttonCreditCard.style.display = isCreditCardVisible ? "inline" : "none";

  const isIncome = textVariant === "income";
  const isOutcome = textVariant === "outcome";

  submitButton.classList.toggle("income-button", isIncome);
  submitButton.classList.toggle("outcome-button", isOutcome);

  submitButton.textContent = isIncome
    ? "+Add income"
    : isOutcome
    ? "+Add outcome"
    : submitButton.textContent;
}

export function closeModal() {
  modal.style.display = "none";
}

export function initializeModal() {
  modalContentContainer.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  closeButton.addEventListener("click", () => {
    closeModal();
  });
}
