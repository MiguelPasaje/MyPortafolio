/* validacion */
const formulario = document.getElementById('my-form');
const inputs = document.querySelectorAll('#my-form input');
const expresiones = {
  //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  //password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  //telefono: /^\d{7,14}$/ // 7 a 14 numeros.

}

const campos = {
  nombre: false,
  correo: false
}

const btnForm = document.querySelector('.btn');
btnForm.disabled = true;




const validarForm = (e) => {
  
  switch (e.target.name) {
    case "name":
      if (expresiones.nombre.test(e.target.value)) {
        document.querySelector("#validarInputName").innerHTML = ""
        //btnForm.disabled = false;
        campos['nombre'] = true;
      } else {
        document.querySelector('#validarInputName').innerHTML = "Error, hay símbolos y el tamaño debe ser menor a 40 "
        //btnForm.disabled = true;
        campos['nombre'] = false;

      }
      break;
    case "email":
      if (expresiones.correo.test(e.target.value)) {
        document.querySelector("#validarInputEmail").innerHTML = ""
        //btnForm.disabled = false;
        campos['correo'] = true;


      } else {
        document.querySelector('#validarInputEmail').innerHTML = "Error, e-mail incorrecto"
        //btnForm.disabled = true;
        campos['correo'] = false;


      }

      break;
  }
  if(campos.nombre && campos.correo){
    btnForm.disabled = false;
  }else{
    btnForm.disabled = true;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarForm);
  input.addEventListener('blur', validarForm);



});

/* formulario.addEventListener("my-form-button", ()=>{

} ); */

var mensaje = document.getElementById("my-form-status");
mensaje.style.display = "none";
var mensajeError = document.getElementById("my-form-status-error");
mensajeError.style.display = "none";
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  if (campos.nombre && campos.correo) {

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
  } else {
    form.addEventListener("submit", handleSubmit2)

  }

}
form.addEventListener("submit", handleSubmit)


async function handleSubmit2(event) {
  event.preventDefault();
  console.log(campos.nombre, campos.correo, "2")
  var status = document.getElementById("my-form-status-error");
  status.innerHTML = "Oops! There was a problem submitting your form";
  mensajeError.style.display = "block";

}
