import { resetBorders } from "./components/button.js";

const form = document.getElementById("myForm");
const variantFormInput = document.getElementById("variant-input");
const sumFormInput = document.getElementById("sum-input");
const dateFormInput = document.getElementById("date");
const errorMessageForVariant = document.querySelector(".variant");
const errorMessageForDate = document.querySelector(".date");
const errorMessageForSum = document.querySelector(".amount");
const circleButtons = document.querySelectorAll(
  ".circle-button.circle-modal-button"
);

export const formSubmitting = (event) => {
  event.preventDefault();

  const form = document.getElementById("myForm");

  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  console.log("my data", data);
};

// export const formValidation = (e) => {
//   console.log("event", e);
//   const variantFormInputValue = variantFormInput.value;
//   const onlyLetters = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]*$/;

//   if (!onlyLetters.test(variantFormInputValue)) {
//     e.preventDefault();
//     errorMessage.style.visibility = "visible";
//   }
// };

const onlyLetters = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]*$/;
const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
const amountRegex = /^\d+(\.\d{2})?$/;

export const formValidation = (value, reg) => {
  return reg.test(value);
};

export const validationSuccess = (errorMessage, errorTextMessage) => {
  errorMessage.innerText = errorTextMessage;
  errorMessage.style.visibility = "visible";
  errorMessage.classList.remove("error");
  errorMessage.classList.add("success");
};

export const validationError = (errorMessage, errorTextMessage) => {
  errorMessage.innerText = errorTextMessage;
  errorMessage.style.visibility = "visible";
  errorMessage.classList.remove("success");
  errorMessage.classList.add("error");
};

variantFormInput.addEventListener("input", (e) => {
  const value = e.target.value;

  if (value === "") {
    errorMessageForVariant.style.visibility = "hidden";
    circleButtons.forEach((button) => {
      button.disabled = false;
    });

    return;
  }
  /*Logic for circle button*/
  if (value !== "") {
    resetBorders(circleButtons);
    circleButtons.forEach((button) => {
      button.disabled = true;
    });
  }

  if (formValidation(value, onlyLetters)) {
    validationSuccess(errorMessageForVariant, "Correct variant format");
  } else {
    validationError(
      errorMessageForVariant,
      "Incorrect variant format. Use only letters"
    );
  }
});

const isValidDate = (value) => {
  if (!formValidation(value, dateRegex)) return false;

  const [day, month, year] = value.split(".").map(Number);
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;
  if (year < 1900 || year > 2100) return false;

  const daysInMonth = new Date(year, month, 0).getDate();
  return day <= daysInMonth;
};

dateFormInput.addEventListener("input", () => {
  const value = dateFormInput.value;

  if (value === "") {
    errorMessageForDate.style.visibility = "hidden";
    return;
  }

  if (isValidDate(value)) {
    validationSuccess(errorMessageForDate, "Correct date format");
  } else {
    validationError(
      errorMessageForDate,
      "Incorrect date format. Use like 01.11.2023"
    );
  }
});

console.log("sumFormInput", sumFormInput);
sumFormInput.addEventListener("input", () => {
  const value = sumFormInput.value;
  console.log(value);

  if (value === "") {
    errorMessageForSum.style.visibility = "hidden";
    return;
  }

  if (formValidation(value, amountRegex)) {
    validationSuccess(errorMessageForSum, "Correct amount format");
  } else {
    validationError(
      errorMessageForSum,
      "Incorrect amount format. Use like 23.35"
    );
  }
});
