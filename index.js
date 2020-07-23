function enviar(){
  var email= document.querySelector('#email');
  var error = document.querySelector('#error-email');

  if(!email.checkValidity()){
    error.innerHTML = "Please provide a valid email address";
  }
}

function redefinirMsg(){
  var error = document.querySelector('#error-email');

  if(error.innerHTML == "Please provide a valid email address"){
    error.innerHTML = "";
  };
}