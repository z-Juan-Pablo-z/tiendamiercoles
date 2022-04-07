import {llenarTienda}from "./llenatienda.js";
import{ampliarInformacionProducto} from "./ampliarinfo.js";
//creo un producto vacio
let producto={}

//despues de exportar e importar , llamar la funcion para que sirva 
llenarTienda()

//rutina para ampliar informacion
let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
let modalCompra = new bootstrap.Modal(document.getElementById('resumenCompra'))


let filaContenedora=document.getElementById("fila")
filaContenedora.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
      producto=ampliarInformacionProducto(evento)
      //console.log(producto);
      modalinfo.show();
      }
})

//rutina para añadir un producto al carrito de compras
//referencias de las variables globales para el archivo
let carrito=[];
let botonAddCarrito = document.getElementById("botonAddCarrito")
let capsula=document.getElementById("capsula")
botonAddCarrito.addEventListener("click",function(){
    let cantidad = document.getElementById("cantidadProducto").value
    //Debo capturar la cantidad y agregarla al producto 
    producto.cantidad=cantidad
    //pintar la capsula en el carrito
    carrito.push(producto);
    console.log(carrito);
    //pintar la capsula en ele carrito 
    let suma =0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    console.log(suma);
    capsula.classList.remove("invisible")
    capsula.textContent=suma
    modalinfo.hide()
    limpiarCarrito.classList.remove("invisible")
    subtotal(1)

    
    

})
//rutina para limpiar
let limpiarCarrito = document.getElementById("limpiarCarrito")
limpiarCarrito.addEventListener("click",function(){
    subtotal(0)
    capsula.textContent=0
    capsula.classList.add("invisible")
    limpiarCarrito.classList.add("invisible")
    carrito=[];    
})

//rutina para ver el carrito 
let verCarrito = document.getElementById("verCarrito")
let base=document.getElementById("baseCarro")

verCarrito.addEventListener("click",function(){
    //recorrer el carrito y pintar los productos (Traversing)
    base.innerHTML=""
    carrito.forEach(function(producto){
        let fila = document.createElement("div")
        fila.classList.add("row","mb-5")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4","align-self-center")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8","align-self-center")

        let foto=document.createElement("img")
        foto.src=producto.foto
        foto.classList.add("img-fluid","w-100")

        let nombre = document.createElement("h5")
        nombre.textContent=producto.nombre

        let precio = document.createElement("h5")
        precio.textContent=producto.precio

        let descripcion = document.createElement("p")
        descripcion.textContent=producto.descripcion

        let cantidad = document.createElement("p")
        cantidad.textContent=producto.cantidad

       

        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(descripcion)
        columna2.appendChild(cantidad)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)
    })

    modalCompra.show()
    
})

/*Hacer un subtotal para la muestra del valor*/
let mostrarSubtotal =document.getElementById("mostrarSubtotal")

function subtotal(validar){
    let total=0
    carrito.forEach(function(producto){
        if(validar==1){
            total=total+(Number(producto.cantidad)*Number(producto.precio))
            mostrarSubtotal.textContent=total
        }else{
            total=0
            mostrarSubtotal.textContent=""
        }
    })
}


