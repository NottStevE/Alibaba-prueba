import { users } from "../DATA/user.js";

let inputUsuario = document.getElementById("inputUsuario");
let inputContrasenna = document.querySelector("#inputContrasenna").value;
let caja_formulario = document.getElementById("caja_formulario");

let menuI = document.getElementById("menu");
let botonRegresar = document.getElementById("botonVolver");
let fondo = document.getElementById("fondo");
let cajaDatos = document.getElementById("datosAlibaba");

export function loginForm(){
    function loginOff(){
        caja_formulario.classList.add('desactivar');
        menuI.classList.add('activar');
        fondo.classList.add('fondoInterfaz');
        cajaDatos.classList.add('activar');
    }
    function loginOn(){
        caja_formulario.classList.remove('desactivar');
        menuI.classList.remove('activar');
        fondo.classList.remove('fondoInterfaz');
        cajaDatos.classList.remove('activar');
    }
    botonLogin.addEventListener('click', loginOff)
    botonRegresar.addEventListener('click', loginOn);
}