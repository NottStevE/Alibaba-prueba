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
        root_contenido.classList.remove('datos');
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
    function funcionOption(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + option[0][0] + '</td>' + '<td>' + option[0][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[1][0] + '</td>' + '<td>' + option[1][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[2][0] + '</td>' + '<td>' + option[2][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[3][0] + '</td>' + '<td>' + option[3][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[4][0] + '</td>' + '<td>' + option[4][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[5][0] + '</td>' + '<td>' + option[5][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[6][0] + '</td>' + '<td>' + option[6][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[7][0] + '</td>' + '<td>' + option[7][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[8][0] + '</td>' + '<td>' + option[8][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[9][0] + '</td>' + '<td>' + option[9][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[10][0] + '</td>' + '<td>' + option[10][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[11][0] + '</td>' + '<td>' + option[11][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[12][0] + '</td>' + '<td>' + option[12][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[13][0] + '</td>' + '<td>' + option[13][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[14][0] + '</td>' + '<td>' + option[14][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + option[15][0] + '</td>' + '<td>' + option[15][1] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionOrden(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + orden[0][0] + '</td>' + '<td>' + orden[0][1] + '</td>' + '<td>' + orden[0][2] + '</td>' + '<td>' + orden[0][3] + '</td>' + '<td>' + orden[0][4] + '</td>' + '<td>' + orden[0][5] + '</td>' + '<td>' + orden[0][6] + '</td>' + '<td>' + orden[0][7] + '</td>' + '<td>' + orden[0][8] + '</td>' + '<td>' + orden[0][9] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orden[1][0] + '</td>' + '<td>' + orden[1][1] + '</td>' + '<td>' + orden[1][2] + '</td>' + '<td>' + orden[1][3] + '</td>' + '<td>' + orden[1][4] + '</td>' + '<td>' + orden[1][5] + '</td>' + '<td>' + orden[1][6] + '</td>' + '<td>' + orden[1][7] + '</td>' + '<td>' + orden[1][8] + '</td>' + '<td>' + orden[1][9] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orden[2][0] + '</td>' + '<td>' + orden[2][1] + '</td>' + '<td>' + orden[2][2] + '</td>' + '<td>' + orden[2][3] + '</td>' + '<td>' + orden[2][4] + '</td>' + '<td>' + orden[2][5] + '</td>' + '<td>' + orden[2][6] + '</td>' + '<td>' + orden[2][7] + '</td>' + '<td>' + orden[2][8] + '</td>' + '<td>' + orden[2][9] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orden[3][0] + '</td>' + '<td>' + orden[3][1] + '</td>' + '<td>' + orden[3][2] + '</td>' + '<td>' + orden[3][3] + '</td>' + '<td>' + orden[3][4] + '</td>' + '<td>' + orden[3][5] + '</td>' + '<td>' + orden[3][6] + '</td>' + '<td>' + orden[3][7] + '</td>' + '<td>' + orden[3][8] + '</td>' + '<td>' + orden[3][9] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orden[4][0] + '</td>' + '<td>' + orden[4][1] + '</td>' + '<td>' + orden[4][2] + '</td>' + '<td>' + orden[4][3] + '</td>' + '<td>' + orden[4][4] + '</td>' + '<td>' + orden[4][5] + '</td>' + '<td>' + orden[4][6] + '</td>' + '<td>' + orden[4][7] + '</td>' + '<td>' + orden[4][8] + '</td>' + '<td>' + orden[4][9] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orden[5][0] + '</td>' + '<td>' + orden[5][1] + '</td>' + '<td>' + orden[5][2] + '</td>' + '<td>' + orden[5][3] + '</td>' + '<td>' + orden[5][4] + '</td>' + '<td>' + orden[5][5] + '</td>' + '<td>' + orden[5][6] + '</td>' + '<td>' + orden[5][7] + '</td>' + '<td>' + orden[5][8] + '</td>' + '<td>' + orden[5][9] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orden[6][0] + '</td>' + '<td>' + orden[6][1] + '</td>' + '<td>' + orden[6][2] + '</td>' + '<td>' + orden[6][3] + '</td>' + '<td>' + orden[6][4] + '</td>' + '<td>' + orden[6][5] + '</td>' + '<td>' + orden[6][6] + '</td>' + '<td>' + orden[6][7] + '</td>' + '<td>' + orden[6][8] + '</td>' + '<td>' + orden[6][9] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + orden[7][0] + '</td>' + '<td>' + orden[7][1] + '</td>' + '<td>' + orden[7][2] + '</td>' + '<td>' + orden[7][3] + '</td>' + '<td>' + orden[7][4] + '</td>' + '<td>' + orden[7][5] + '</td>' + '<td>' + orden[7][6] + '</td>' + '<td>' + orden[7][7] + '</td>' + '<td>' + orden[7][8] + '</td>' + '<td>' + orden[7][9] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionOrder(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + order[0][0] + '</td>' + '<td>' + order[0][1] + '</td>' + '<td>' + order[0][2] + '</td>' + '<td>' + order[0][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[1][0] + '</td>' + '<td>' + order[1][1] + '</td>' + '<td>' + order[1][2] + '</td>' + '<td>' + order[1][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[2][0] + '</td>' + '<td>' + order[2][1] + '</td>' + '<td>' + order[2][2] + '</td>' + '<td>' + order[2][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[3][0] + '</td>' + '<td>' + order[3][1] + '</td>' + '<td>' + order[3][2] + '</td>' + '<td>' + order[3][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[4][0] + '</td>' + '<td>' + order[4][1] + '</td>' + '<td>' + order[4][2] + '</td>' + '<td>' + order[4][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[5][0] + '</td>' + '<td>' + order[5][1] + '</td>' + '<td>' + order[5][2] + '</td>' + '<td>' + order[5][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[6][0] + '</td>' + '<td>' + order[6][1] + '</td>' + '<td>' + order[6][2] + '</td>' + '<td>' + order[6][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[7][0] + '</td>' + '<td>' + order[7][1] + '</td>' + '<td>' + order[7][2] + '</td>' + '<td>' + order[7][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[8][0] + '</td>' + '<td>' + order[8][1] + '</td>' + '<td>' + order[8][2] + '</td>' + '<td>' + order[8][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[9][0] + '</td>' + '<td>' + order[9][1] + '</td>' + '<td>' + order[9][2] + '</td>' + '<td>' + order[9][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[10][0] + '</td>' + '<td>' + order[10][1] + '</td>' + '<td>' + order[10][2] + '</td>' + '<td>' + order[10][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[11][0] + '</td>' + '<td>' + order[11][1] + '</td>' + '<td>' + order[11][2] + '</td>' + '<td>' + order[11][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[12][0] + '</td>' + '<td>' + order[12][1] + '</td>' + '<td>' + order[12][2] + '</td>' + '<td>' + order[12][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[13][0] + '</td>' + '<td>' + order[13][1] + '</td>' + '<td>' + order[13][2] + '</td>' + '<td>' + order[13][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[14][0] + '</td>' + '<td>' + order[14][1] + '</td>' + '<td>' + order[14][2] + '</td>' + '<td>' + order[14][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + order[15][0] + '</td>' + '<td>' + order[15][1] + '</td>' + '<td>' + order[15][2] + '</td>' + '<td>' + order[15][3] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionProductsBelong(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + productsBelong[0][0] + '</td>' + '<td>' + productsBelong[0][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[1][0] + '</td>' + '<td>' + productsBelong[1][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[2][0] + '</td>' + '<td>' + productsBelong[2][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[3][0] + '</td>' + '<td>' + productsBelong[3][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[4][0] + '</td>' + '<td>' + productsBelong[4][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[5][0] + '</td>' + '<td>' + productsBelong[5][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[6][0] + '</td>' + '<td>' + productsBelong[6][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[7][0] + '</td>' + '<td>' + productsBelong[7][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[8][0] + '</td>' + '<td>' + productsBelong[8][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[9][0] + '</td>' + '<td>' + productsBelong[9][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[10][0] + '</td>' + '<td>' + productsBelong[10][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[11][0] + '</td>' + '<td>' + productsBelong[11][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[12][0] + '</td>' + '<td>' + productsBelong[12][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[13][0] + '</td>' + '<td>' + productsBelong[13][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsBelong[14][0] + '</td>' + '<td>' + productsBelong[14][1] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionShoppingcard(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + shopping[0][0] + '</td>' + '<td>' + shopping[0][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + shopping[1][0] + '</td>' + '<td>' + shopping[1][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + shopping[2][0] + '</td>' + '<td>' + shopping[2][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + shopping[3][0] + '</td>' + '<td>' + shopping[3][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + shopping[4][0] + '</td>' + '<td>' + shopping[4][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + shopping[5][0] + '</td>' + '<td>' + shopping[5][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + shopping[6][0] + '</td>' + '<td>' + shopping[6][1] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionVendor(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + vendor[0][0] + '</td>' + '<td>' + vendor[0][1] + '</td>' + '<td>' + vendor[0][2] + '</td>' + '<td>' + vendor[0][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + vendor[1][0] + '</td>' + '<td>' + vendor[1][1] + '</td>' + '<td>' + vendor[1][2] + '</td>' + '<td>' + vendor[1][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + vendor[2][0] + '</td>' + '<td>' + vendor[2][1] + '</td>' + '<td>' + vendor[2][2] + '</td>' + '<td>' + vendor[2][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + vendor[3][0] + '</td>' + '<td>' + vendor[3][1] + '</td>' + '<td>' + vendor[3][2] + '</td>' + '<td>' + vendor[3][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + vendor[4][0] + '</td>' + '<td>' + vendor[4][1] + '</td>' + '<td>' + vendor[4][2] + '</td>' + '<td>' + vendor[4][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + vendor[5][0] + '</td>' + '<td>' + vendor[5][1] + '</td>' + '<td>' + vendor[5][2] + '</td>' + '<td>' + vendor[5][3] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + vendor[6][0] + '</td>' + '<td>' + vendor[6][1] + '</td>' + '<td>' + vendor[6][2] + '</td>' + '<td>' + vendor[6][3] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionProduct(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + product[0][0] + '</td>' + '<td>' + product[0][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[1][0] + '</td>' + '<td>' + product[1][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[2][0] + '</td>' + '<td>' + product[2][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[3][0] + '</td>' + '<td>' + product[3][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[4][0] + '</td>' + '<td>' + product[4][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[5][0] + '</td>' + '<td>' + product[5][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[6][0] + '</td>' + '<td>' + product[6][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[7][0] + '</td>' + '<td>' + product[7][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[8][0] + '</td>' + '<td>' + product[8][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[9][0] + '</td>' + '<td>' + product[9][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[10][0] + '</td>' + '<td>' + product[10][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[11][0] + '</td>' + '<td>' + product[11][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[12][0] + '</td>' + '<td>' + product[12][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + product[13][0] + '</td>' + '<td>' + product[13][1] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionProductsOption(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + productsOption[0][0] + '</td>' + '<td>' + productsOption[0][1] + '</td>' + '<td>' + productsOption[0][2] + '</td>' + '<td>' + productsOption[0][3] + '</td>' + '<td>' + productsOption[0][4] + '</td>' + '<td>' + productsOption[0][5] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsOption[1][0] + '</td>' + '<td>' + productsOption[1][1] + '</td>' + '<td>' + productsOption[1][2] + '</td>' + '<td>' + productsOption[1][3] + '</td>' + '<td>' + productsOption[1][4] + '</td>' + '<td>' + productsOption[1][5] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsOption[2][0] + '</td>' + '<td>' + productsOption[2][1] + '</td>' + '<td>' + productsOption[2][2] + '</td>' + '<td>' + productsOption[2][3] + '</td>' + '<td>' + productsOption[2][4] + '</td>' + '<td>' + productsOption[2][5] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsOption[3][0] + '</td>' + '<td>' + productsOption[3][1] + '</td>' + '<td>' + productsOption[3][2] + '</td>' + '<td>' + productsOption[3][3] + '</td>' + '<td>' + productsOption[3][4] + '</td>' + '<td>' + productsOption[3][5] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsOption[4][0] + '</td>' + '<td>' + productsOption[4][1] + '</td>' + '<td>' + productsOption[4][2] + '</td>' + '<td>' + productsOption[4][3] + '</td>' + '<td>' + productsOption[4][4] + '</td>' + '<td>' + productsOption[4][5] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsOption[5][0] + '</td>' + '<td>' + productsOption[5][1] + '</td>' + '<td>' + productsOption[5][2] + '</td>' + '<td>' + productsOption[5][3] + '</td>' + '<td>' + productsOption[5][4] + '</td>' + '<td>' + productsOption[5][5] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsOption[6][0] + '</td>' + '<td>' + productsOption[6][1] + '</td>' + '<td>' + productsOption[6][2] + '</td>' + '<td>' + productsOption[6][3] + '</td>' + '<td>' + productsOption[6][4] + '</td>' + '<td>' + productsOption[6][5] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsOption[7][0] + '</td>' + '<td>' + productsOption[7][1] + '</td>' + '<td>' + productsOption[7][2] + '</td>' + '<td>' + productsOption[7][3] + '</td>' + '<td>' + productsOption[7][4] + '</td>' + '<td>' + productsOption[7][5] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsOption[8][0] + '</td>' + '<td>' + productsOption[8][1] + '</td>' + '<td>' + productsOption[8][2] + '</td>' + '<td>' + productsOption[8][3] + '</td>' + '<td>' + productsOption[8][4] + '</td>' + '<td>' + productsOption[8][5] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsOption[9][0] + '</td>' + '<td>' + productsOption[9][1] + '</td>' + '<td>' + productsOption[9][2] + '</td>' + '<td>' + productsOption[9][3] + '</td>' + '<td>' + productsOption[9][4] + '</td>' + '<td>' + productsOption[9][5] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + productsOption[10][0] + '</td>' + '<td>' + productsOption[10][1] + '</td>' + '<td>' + productsOption[10][2] + '</td>' + '<td>' + productsOption[10][3] + '</td>' + '<td>' + productsOption[10][4] + '</td>' + '<td>' + productsOption[10][5] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionProducts(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + products[0][0] + '</td>' + '<td>' + products[0][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + products[1][0] + '</td>' + '<td>' + products[1][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + products[2][0] + '</td>' + '<td>' + products[2][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + products[3][0] + '</td>' + '<td>' + products[3][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + products[4][0] + '</td>' + '<td>' + products[4][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + products[5][0] + '</td>' + '<td>' + products[5][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + products[6][0] + '</td>' + '<td>' + products[6][1] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + products[7][0] + '</td>' + '<td>' + products[7][1] + '</td>' + '</tr>' +
     '</table>';
    }
    function funcionUsers(){
        root_contenido.innerHTML = '<table border="1">' + 
        '<tr>' + '<td>' + users[0][0] + '</td>' + '<td>' + users[0][1] + '</td>' + '<td>' + users[0][2] + '</td>' + '<td>' + users[0][3] + '</td>' + '<td>' + users[0][4] + '</td>' + '<td>' + users[0][5] + '</td>' + '<td>' + users[0][6] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + users[1][0] + '</td>' + '<td>' + users[1][1] + '</td>' + '<td>' + users[1][2] + '</td>' + '<td>' + users[1][3] + '</td>' + '<td>' + users[1][4] + '</td>' + '<td>' + users[1][5] + '</td>' + '<td>' + users[1][6] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + users[2][0] + '</td>' + '<td>' + users[2][1] + '</td>' + '<td>' + users[2][2] + '</td>' + '<td>' + users[2][3] + '</td>' + '<td>' + users[2][4] + '</td>' + '<td>' + users[2][5] + '</td>' + '<td>' + users[2][6] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + users[3][0] + '</td>' + '<td>' + users[3][1] + '</td>' + '<td>' + users[3][2] + '</td>' + '<td>' + users[3][3] + '</td>' + '<td>' + users[3][4] + '</td>' + '<td>' + users[3][5] + '</td>' + '<td>' + users[3][6] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + users[4][0] + '</td>' + '<td>' + users[4][1] + '</td>' + '<td>' + users[4][2] + '</td>' + '<td>' + users[4][3] + '</td>' + '<td>' + users[4][4] + '</td>' + '<td>' + users[4][5] + '</td>' + '<td>' + users[4][6] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + users[5][0] + '</td>' + '<td>' + users[5][1] + '</td>' + '<td>' + users[5][2] + '</td>' + '<td>' + users[5][3] + '</td>' + '<td>' + users[5][4] + '</td>' + '<td>' + users[5][5] + '</td>' + '<td>' + users[5][6] + '</td>' + '</tr>' +
        '<tr>' + '<td>' + users[6][0] + '</td>' + '<td>' + users[6][1] + '</td>' + '<td>' + users[6][2] + '</td>' + '<td>' + users[6][3] + '</td>' + '<td>' + users[6][4] + '</td>' + '<td>' + users[6][5] + '</td>' + '<td>' + users[6][6] + '</td>' + '</tr>' +
     '</table>';
    }
    botonRegresar.addEventListener('click', loginOn);
    botonLogin.addEventListener('click', perfilUser);

    boton_carts.addEventListener('click', funcionCarts);
    boton_category.addEventListener('click', funcionCategory);
    boton_orders.addEventListener('click', funcionOrders);
    boton_order_user.addEventListener('click', funcionOrderUser);
    boton_user_creditcard.addEventListener('click', funcionUserCreditcard);
    boton_option.addEventListener('click', funcionOption);
    boton_orden.addEventListener('click', funcionOrden);
    boton_order.addEventListener('click', funcionOrder);
    boton_products_belong.addEventListener('click', funcionProductsBelong);
    boton_shopping.addEventListener('click', funcionShoppingcard);
    boton_vendor.addEventListener('click', funcionVendor);
    boton_product.addEventListener('click', funcionProduct);
    boton_products_option.addEventListener('click', funcionProductsOption);
    boton_products.addEventListener('click', funcionProducts);
    boton_users.addEventListener('click', funcionUsers);
}