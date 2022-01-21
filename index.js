

var mensaje = document.getElementById("my-form-status");
mensaje.style.display = "none";
var mensajeError = document.getElementById("my-form-status-error");
mensajeError.style.display = "none";
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    mensaje.style.display = "block";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form";
    mensajeError.style.display = "block";

  });
}
form.addEventListener("submit", handleSubmit)