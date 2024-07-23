document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const loginForm = document.querySelector("form.login");
  const loginText = document.querySelector(".title.login");
  const signupLink = document.querySelector("form .signup-link a");

  signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  };

  loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  };

  signupLink.onclick = (e) => {
    e.preventDefault();
    signupBtn.click();
  };
});

function togglePassword(inputId) {
  const passwordInput = document.getElementById(inputId);
  const toggleBtn = passwordInput.nextElementSibling;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "Show";
  }
}

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", validateForm);
});

function validateForm(event) {
  event.preventDefault();

  const form = event.target;
  const inputs = form.querySelectorAll("input, select");
  let valid = false;

  inputs.forEach((input) => {
    const errorSpan = document.getElementById(`${input.id}-error`);

    if (!input.value) {
      errorSpan.textContent = `${input.placeholder} is required`;
      errorSpan.style.display = "block";
      valid = true;
    } else {
      errorSpan.textContent = "";
      errorSpan.style.display = "none";
    }

    if (input.type === "text" && input.id.includes("email")) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value)) {
        errorSpan.textContent = "Invalid email format";
        errorSpan.style.display = "block";
        valid = true;
      } else {
      }
    }
  });

  if (valid) {
    form.submit();
  } else {
  }
}
