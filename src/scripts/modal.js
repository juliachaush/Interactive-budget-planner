const modal = document.getElementById("modal");
const modalHeader = document.querySelector(".modal-header");
const modalTextVariant = document.querySelector(".modal-text-variant");
const modalContentContainer = document.querySelector(".modal-content");
const closeButton = document.querySelector(".close-button");

export function openModal(headerText, textVariant, isCreditCardVisible = true) {
  modal.style.display = "flex";
  modalHeader.innerText = headerText;
  modalTextVariant.innerText = textVariant;

  const buttonCreditCard = document.querySelector(".credit-card");
  buttonCreditCard.style.display = isCreditCardVisible ? "inline" : "none";
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
