export const formSubmitting = (event) => {
  event.preventDefault();

  const form = document.getElementById("myForm");

  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  console.log("my data", data);
};
