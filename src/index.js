import "./styles/reset.css";

import "./styles/main.css";

import "./styles/variables.css";

console.log("Webpack працюєrrr!");

const closeButton = document.querySelector(".close-button");
const modalOutcome = document.getElementById("modal");
const addOutcomeButton = document.querySelector(".outcome-button");

closeButton.addEventListener("click", () => {
  modalOutcome.style.display = "none";
});

addOutcomeButton.addEventListener("click", () => {
  modalOutcome.style.display = "flex";
});
