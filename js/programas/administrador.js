import { caja_formulario } from "./login.js";
import { menuI } from "./login.js";
import { fondo } from "./login.js";
import { cajaDatos } from "./login.js";

let userTrue = document.getElementById("contraseñaCorrecta");
let userFalse = document.getElementById("contraseñaIncorrecta");
let userEmpty = document.getElementById("Nocontraseña");

let passwordTrue = document.getElementById("contraseñaInputCorrecta");
let PasswordFalse = document.getElementById("contraseñaInputIncorrecta");
let passwordEmpty = document.getElementById("NocontraseñaInput");

let root_contenido = document.getElementById("root_contenido");

export function interfaz(){
    caja_formulario.classList.add('desactivar');
    root_contenido.classList.add('datos');
    menuI.classList.add('activar');
    fondo.classList.add('fondoInterfaz');
    cajaDatos.classList.add('activar');
}
export function usuarioCorrecto(){
    userTrue.classList.add('contraseñaCorrecta2');
    userFalse.classList.remove('contraseñaIncorrecta2');
    userEmpty.classList.remove('Nocontraseña2');
}
export function usuarioIncorrecto(){
    userFalse.classList.add('contraseñaIncorrecta2');
    userTrue.classList.remove('contraseñaCorrecta2');
    userEmpty.classList.remove('Nocontraseña2');
}
export function colocarUsuario(){
    userFalse.classList.remove('contraseñaIncorrecta2');
    userTrue.classList.remove('contraseñaCorrecta2');
    userEmpty.classList.add('Nocontraseña2');
}
export function contraseñaCorrectaa(){
    passwordTrue.classList.add('contraseñaInputCorrecta2');
    PasswordFalse.classList.remove('contraseñaInputIncorrecta2');
    passwordEmpty.classList.remove('NocontraseñaInput2');
}
export function contraseñaIncorrecta(){
    PasswordFalse.classList.add('contraseñaInputIncorrecta2');
    passwordTrue.classList.remove('contraseñaInputCorrecta2');
    passwordEmpty.classList.remove('NocontraseñaInput2');
}
export function colocarContraseña(){
    PasswordFalse.classList.remove('contraseñaInputIncorrecta2');
    passwordTrue.classList.remove('contraseñaInputCorrecta2');
    passwordEmpty.classList.add('NocontraseñaInput2');
}