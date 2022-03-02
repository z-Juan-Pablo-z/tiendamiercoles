let productos = [
    {nombre: "CamisetaNegra", precio:40000,descripcion:"Camisa de color negro de The Flash "},
    {nombre: "CamisetaRoja", precio:40000,descripcion:"Camisa de color rojo de The Flash"},
    {nombre: "CamiBuso", precio:40000,descripcion:"Camibuso de color rojo con el logo de The Flash"},
    {nombre: "Sudadera", precio:40000,descripcion:"Sudadera de color rojo oscuro con cierre integrado de The Flash"},
    {nombre: "FunkoPop", precio:40000,descripcion:"FunkoPop, muñeco coleccionable de The Flash"},
    {nombre: "KidFlash", precio:40000,descripcion:"Muñeco coleccionable Kid Flash"},
    {nombre: "DisfrazJunior", precio:40000,descripcion:"Disfraz de The Flash para niño"},
    {nombre: "DisfrazMujer", precio:40000,descripcion:"Disfraz de The Flash para mujer adulta"},
    {nombre: "Pijama", precio:40000,descripcion:"Pijama de The Flash para hombre"},
    {nombre: "Anillos", precio:40000,descripcion:"Anillos de buena calidad The Flash"},
    
]
console.log(productos)

//Como recorrer un arreglo con js
//1. Tener un arreglo
productos.forEach(function(producto){
    console.log(producto.nombre);
    console.log(producto.precio);
})