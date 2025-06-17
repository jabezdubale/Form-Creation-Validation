document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Name length is less than 3");
    }

    if (!email.includes("@")) {
      isValid = false;
      messages.push("Email does not contain @");
    } else if (!email.includes(".")) {
      isValid = false;
      messages.push("Email does not contain .");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("Password is too short");
    }

    feedbackDiv.style.display = "block";
    if (isValid === true) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.innerHTML = messages.join("<br>");
    }
  });
});
