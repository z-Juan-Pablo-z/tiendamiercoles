let productos = [
    { foto: 'img/CamisaNegra.jpg',nombre:"Camisa", precio:34000,descripcion:"Camisa de color negro de The Flash "},
    { foto: 'img/CamisaNiño.jpg',nombre:"Camisa", precio:45000,descripcion:"Camisa de color rojo de The Flash"},
    { foto: 'img/BusoLogo.jpg',nombre:"Camibuso" , precio:45000,descripcion:"Camibuso de color rojo con el logo de The Flash"},
    { foto: 'img/Sudadera.png',nombre:"Sudadera", precio:55000,descripcion:"Sudadera de color rojo oscuro con cierre integrado de The Flash"},
    { foto: 'img/FunkoPopFlash.jpg',nombre:"Funko Pop", precio:30000,descripcion:"FunkoPop, muñeco coleccionable de The Flash"},
    { foto: 'img/Coleccionable.jpg',nombre:"Coleccionable", precio:30000,descripcion:"Muñeco coleccionable Kid Flash"},
    { foto: 'img/flashjunior.jpg',nombre:"Disfraz", precio:23000,descripcion:"Disfraz de The Flash para niño"},
    { foto: 'img/Disfraz2.jpg',nombre:"Disfraz", precio:56000,descripcion:"Disfraz de The Flash para mujer adulta"},
    { foto: 'img/PijamaFlash.png',nombre:"Pijama", precio:57000,descripcion:"Pijama de The Flash para hombre"},
    { foto: 'img/AnillosFlash.png',nombre:"Anillos", precio:60000,descripcion:"Anillos de buena calidad The Flash"},
    
]

console.log(productos)

//Como recorrer un arreglo con js
//1. Tener un arreglo
//* Crear variable para almacenar la base sobre la cual voy a pintar
let fila =document.getElementById("fila")
productos.forEach(function(producto){
    console.log(producto.precio);
    console.log(producto.descripcion);

    //**pintando etiquetas
    //div con la clase col
    let columna = document.createElement("div")
    columna.classList.add("col")
    //div con las clases card h-100
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")
    //img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top") 
    foto.src=producto.foto
    //nombre
    let nombre = document.createElement("h4")
    nombre.classList.add("text-center")
    nombre.textContent=producto.nombre
    //precio
    let precio=document.createElement("h5")
    precio.classList.add("text-center")
    precio.textContent=producto.precio
    //descripcion
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-justify")
    descripcion.textContent=producto.descripcion
    

    //*** PADRES E HIJOS
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})