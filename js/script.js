document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    let hasErrors = false;

    const emailInput = document.getElementById("email");
    if (emailInput.value.trim() !== "" && !isValidEmail(emailInput.value)) {
      showError(emailInput, "Please provide a valid email address");
      hasErrors = true;
    }
  });

  function showError(input, message) {
    const errorElement = document.createElement("span");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    input.parentNode.insertBefore(errorElement, input.nextSibling);
  }

  function clearErrors() {
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((error) => error.remove());
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
