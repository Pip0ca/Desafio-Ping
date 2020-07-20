const formulario = document.getElementById("formulario");
const email = document.getElementById("email");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.value;

  if (!validateEmail(emailVal)) {
    formulario.classList.add("error");
    alert("Insert a valid Email :(");
  } else {
    formulario.classList.remove("error");
    alert("Thanks for seeing my challenge solution :)");
  }
});

function validateEmail(email) {
  var re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+))|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}const formulario = document.getElementById("formulario");
const email = document.getElementById("email");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.value;

  if (!validateEmail(emailVal)) {
    formulario.classList.add("error");
    alert("Insert a valid Email :(");
  } else {
    formulario.classList.remove("error");
    alert("Thanks for seeing my challenge solution :)");
  }
});

function validateEmail(email) {
  var re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+))|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}