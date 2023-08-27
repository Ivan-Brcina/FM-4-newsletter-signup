const email = document.getElementById("email-box");
const button = document.getElementById("btn");

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value === "" || !validateEmail(email.value)) {
    email.style.border = "solid 1px hsl(4, 100%, 67%)";
    document.getElementById("error-msg").style.display = "inline-block";
  } else {
    let textNode = "test"; //document.createTextNode("email.value");
    window.location.href = "success.html";
  }
});
