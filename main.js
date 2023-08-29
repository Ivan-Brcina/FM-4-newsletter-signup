const email = document.getElementById("email-box");
const button = document.getElementById("btn-submit");
const mainForm = document.getElementById("main-container");
const mainSuccess = document.getElementById("success-main");
const emailOutput = document.getElementById("user-email");
const buttonDismiss = document.getElementById("btn-dismiss");
const errorMsg = document.getElementById("error-msg");

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// Button that submits the email information, checks validity, outputs error state, places information inside the second compontent and switches compontents.
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    email.value === "" ||
    !validateEmail(email.value) || // This looks like this because I'm using the Prettier formatter extension.
    email.value.length > 100
  ) {
    email.style.border = "solid 1px hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    errorMsg.style.display = "inline-block";
  } else {
    let emailText = document.createTextNode(email.value);
    emailOutput.appendChild(emailText);
    mainForm.style.display = "none";
    mainSuccess.style.display = "block";
    console.log(emailOutput.childNodes);
  }
});

// Resets the error colors if a user tried again.
email.addEventListener("click", (e) => {
  e.preventDefault();
  email.style.border = "solid 1px lightgray";
  email.style.color = "black";
  errorMsg.style.display = "none";
});

// A button that clears the input field, resets the output information and switches back to the first component.
buttonDismiss.addEventListener("click", (e) => {
  e.preventDefault();
  mainSuccess.style.display = "none";
  mainForm.style.display = "grid";
  email.value = "";
  emailOutput.removeChild(emailOutput.childNodes[0]);
});
