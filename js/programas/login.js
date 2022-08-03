import { users } from "../DATA/user.js";
import { interfaz } from "./administrador.js";
import { usuarioCorrecto } from "./administrador.js";
import { usuarioIncorrecto } from "./administrador.js";
import { colocarUsuario } from "./administrador.js";
import { contraseñaCorrectaa } from "./administrador.js";
import { contraseñaIncorrecta } from "./administrador.js";
import { colocarContraseña } from "./administrador.js";

export let caja_formulario = document.getElementById("caja_formulario");
export let menuI = document.getElementById("menu");
export let fondo = document.getElementById("fondo");
export let cajaDatos = document.getElementById("datosAlibaba");
export let botonLogin = document.getElementById("botonLogin");

export function loginForm(){
    function loginOff(){
        let userInput = document.querySelector("#inputUsuario").value;
        let passwordInput = document.querySelector("#inputContrasenna").value;

        for(let i = 0; i <= 6; i++){
            if(userInput == users[i][1]){
                usuarioCorrecto();
                if(passwordInput == users[i][2]){
                    interfaz();
                    contraseñaCorrectaa();
                }else if(passwordInput == ""){
                    colocarContraseña();
                }else{
                    contraseñaIncorrecta();
                }
                break;
            }else if(userInput == ""){
                colocarUsuario();
                if(passwordInput == ""){
                    colocarContraseña();
                }else{
                    contraseñaIncorrecta();
                }
                break;
            }else{
                usuarioIncorrecto();
                if(passwordInput == ""){
                    colocarContraseña();
                }else{
                    contraseñaIncorrecta();
                }
            }
        }
    }
    botonLogin.addEventListener('click', loginOff)
}