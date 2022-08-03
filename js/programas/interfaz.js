import { botonLogin } from "./login.js";
import { caja_formulario } from "./login.js";
import { menuI } from "./login.js";
import { fondo } from "./login.js";
import { cajaDatos } from "./login.js";

import { carts } from "../DATA/carts_has_products.js";
import { category } from "../DATA/category.js";
import { option } from "../DATA/option.js";
import { orden } from "../DATA/orden.js";
import { order } from "../DATA/order_has_product.js";
import { orders } from "../DATA/orders_paid_creditcard.js";
import { orderUser } from "../DATA/orders_placed_user.js";
import { product } from "../DATA/product_sold_vendor.js";
import { productsBelong } from "../DATA/products_belong_category.js";
import { productsOption } from "../DATA/products_has_option.js";
import { products } from "../DATA/products.js";
import { shopping } from "../DATA/shoppingcard.js";
import { userCreditcard } from "../DATA/user_has_creditcard.js"
import { users } from "../DATA/user.js"
import { vendor } from "../DATA/vendor.js"

let perfil = document.getElementById("perfil");
let botonRegresar = document.getElementById("botonVolver");
let root_contenido = document.getElementById("root_contenido");

let boton_carts = document.getElementById("carts");
let boton_category = document.getElementById("category");
let boton_option = document.getElementById("option");
let boton_orden = document.getElementById("orden");
let boton_order = document.getElementById("order");
let boton_orders = document.getElementById("orders");
let boton_order_user = document.getElementById("order_user");
let boton_product = document.getElementById("product");
let boton_products_belong = document.getElementById("products_belong");
let boton_products_option = document.getElementById("products_option");
let boton_products = document.getElementById("products");
let boton_shopping = document.getElementById("shopping");
let boton_user_creditcard = document.getElementById("user_creditcard");
let boton_users = document.getElementById("users");
let boton_vendor = document.getElementById("vendor");

export function panelDeContenido(){
    function perfilUser(){
        let userInput = document.querySelector("#inputUsuario").value;
        perfil.innerHTML = userInput;
    }
    perfilUser();
    function loginOn(){
        caja_formulario.classList.remove('desactivar');
        menuI.classList.remove('activar');
        fondo.classList.remove('fondoInterfaz');
        cajaDatos.classList.remove('activar');
    }
    function funcionCarts(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + carts[0][0] + '</td>' + '<td>' + carts[0][1] + '</td>' + '<td>' + carts[0][2] + '</td>' + '<td>' + carts[0][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[1][0] + '</td>' + '<td>' + carts[1][1] + '</td>' + '<td>' + carts[1][2] + '</td>' + '<td>' + carts[1][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[2][0] + '</td>' + '<td>' + carts[2][1] + '</td>' + '<td>' + carts[2][2] + '</td>' + '<td>' + carts[2][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[3][0] + '</td>' + '<td>' + carts[3][1] + '</td>' + '<td>' + carts[3][2] + '</td>' + '<td>' + carts[3][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[4][0] + '</td>' + '<td>' + carts[4][1] + '</td>' + '<td>' + carts[4][2] + '</td>' + '<td>' + carts[4][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[5][0] + '</td>' + '<td>' + carts[5][1] + '</td>' + '<td>' + carts[5][2] + '</td>' + '<td>' + carts[5][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[6][0] + '</td>' + '<td>' + carts[6][1] + '</td>' + '<td>' + carts[6][2] + '</td>' + '<td>' + carts[6][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[7][0] + '</td>' + '<td>' + carts[7][1] + '</td>' + '<td>' + carts[7][2] + '</td>' + '<td>' + carts[7][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[8][0] + '</td>' + '<td>' + carts[8][1] + '</td>' + '<td>' + carts[8][2] + '</td>' + '<td>' + carts[8][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[9][0] + '</td>' + '<td>' + carts[9][1] + '</td>' + '<td>' + carts[9][2] + '</td>' + '<td>' + carts[9][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[10][0] + '</td>' + '<td>' + carts[10][1] + '</td>' + '<td>' + carts[10][2] + '</td>' + '<td>' + carts[10][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[11][0] + '</td>' + '<td>' + carts[11][1] + '</td>' + '<td>' + carts[11][2] + '</td>' + '<td>' + carts[11][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[12][0] + '</td>' + '<td>' + carts[12][1] + '</td>' + '<td>' + carts[12][2] + '</td>' + '<td>' + carts[12][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[13][0] + '</td>' + '<td>' + carts[13][1] + '</td>' + '<td>' + carts[13][2] + '</td>' + '<td>' + carts[13][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[14][0] + '</td>' + '<td>' + carts[14][1] + '</td>' + '<td>' + carts[14][2] + '</td>' + '<td>' + carts[14][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + carts[15][0] + '</td>' + '<td>' + carts[15][1] + '</td>' + '<td>' + carts[15][2] + '</td>' + '<td>' + carts[15][3] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionCategory(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + category[0][0] + '</td>' + '<td>' + category[0][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + category[1][0] + '</td>' + '<td>' + category[1][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + category[2][0] + '</td>' + '<td>' + category[2][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + category[3][0] + '</td>' + '<td>' + category[3][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + category[4][0] + '</td>' + '<td>' + category[4][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + category[5][0] + '</td>' + '<td>' + category[5][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + category[6][0] + '</td>' + '<td>' + category[6][1] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionOrders(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + orders[0][0] + '</td>' + '<td>' + orders[0][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orders[1][0] + '</td>' + '<td>' + orders[1][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orders[2][0] + '</td>' + '<td>' + orders[2][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orders[3][0] + '</td>' + '<td>' + orders[3][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orders[4][0] + '</td>' + '<td>' + orders[4][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orders[5][0] + '</td>' + '<td>' + orders[5][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orders[6][0] + '</td>' + '<td>' + orders[6][1] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionOrderUser(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + orderUser[0][0] + '</td>' + '<td>' + orderUser[0][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orderUser[1][0] + '</td>' + '<td>' + orderUser[1][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orderUser[2][0] + '</td>' + '<td>' + orderUser[2][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orderUser[3][0] + '</td>' + '<td>' + orderUser[3][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orderUser[4][0] + '</td>' + '<td>' + orderUser[4][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orderUser[5][0] + '</td>' + '<td>' + orderUser[5][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orderUser[6][0] + '</td>' + '<td>' + orderUser[6][1] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionUserCreditcard(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + userCreditcard[0][0] + '</td>' + '<td>' + userCreditcard[0][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + userCreditcard[1][0] + '</td>' + '<td>' + userCreditcard[1][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + userCreditcard[2][0] + '</td>' + '<td>' + userCreditcard[2][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + userCreditcard[3][0] + '</td>' + '<td>' + userCreditcard[3][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + userCreditcard[4][0] + '</td>' + '<td>' + userCreditcard[4][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + userCreditcard[5][0] + '</td>' + '<td>' + userCreditcard[5][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + userCreditcard[6][0] + '</td>' + '<td>' + userCreditcard[6][1] + '</td>' + '</tr>' +
     '</table>';
    }
    botonRegresar.addEventListener('click', loginOn);
    botonLogin.addEventListener('click', perfilUser);

    boton_carts.addEventListener('click', funcionCarts);
    boton_category.addEventListener('click', funcionCategory);
    boton_orders.addEventListener('click', funcionOrders);
    boton_order_user.addEventListener('click', funcionOrderUser);
    boton_user_creditcard.addEventListener('click', funcionUserCreditcard);
}