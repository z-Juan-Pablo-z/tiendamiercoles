import {llenarTienda}from "./llenatienda.js";
import{ampliarInformacionProducto} from "./ampliarinfo.js";
//creo un producto vacio
let producto={}

//despues de exportar e importar , llamar la funcion para que sirva 
llenarTienda()

//rutina para ampliar informacion
let filaContenedora=document.getElementById("fila")
filaContenedora.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
      let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
      producto=ampliarInformacionProducto(evento)
      console.log(producto);
      modalinfo.show();
      }
})

//rutina para añadir un producto al carrito de compras
let carrito=[];

let botonAddCarrito = document.getElementById("botonAddCarrito")
botonAddCarrito.addEventListener("click",function(){
    carrito.push(producto);
    console.log(carrito);
})