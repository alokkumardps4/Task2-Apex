document.getElementById("contactForm").addEventListener("submit", function(event) {
  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});