let personajes=[
    {foto:'img/personajes/BarryAllen.jpg',nombre:'Flash',eleccion:'Heroe',descripcion:'Barry Allen, el velocista escarlata'},
    {foto:'img/personajes/Wally.jpg',nombre:'Kid Flash',eleccion:'Heroe',descripcion:'Wally West, hermano de iris west'},
    {foto:'img/personajes/Cisco.jpg',nombre:'Vibe',eleccion:'Heroe',descripcion:'Cisco Ramon,Compañero y buen amigo de Flash'},
    {foto:'img/personajes/caitlin.jpg',nombre:'Caitilin Snow',eleccion:'Heroe',descripcion:'Compañera y medica responsable de la salud de Flash'},
    {foto:'img/personajes/Thawne.jpg',nombre:'Eobard Thawne',eleccion:'Villano',descripcion:'Archi-enemigo y tutor de Flash'},
    {foto:'img/personajes/Zoom.jpg',nombre:'Zoom',eleccion:'Villano',descripcion:'Hunter Zolomon, Enemigo por eleccion de Flash'},
    {foto:'img/personajes/Joe.jpg',nombre:'Joe West',eleccion:'Heroe',descripcion:''},
    {foto:'img/personajes/iris.jpg',nombre:'Iris West',eleccion:'Heroe',descripcion:'Acompañante y esposa de Barry Allen'},
    
]

console.log(personajes)

let fila = document.getElementById("filaPersonajes")
personajes.forEach(function(personaje){
    console.log(personaje.nombre);
    console.log(personaje.eleccion)


    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("Card")
    tarjeta.classList.add("h-100")

    let foto = document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=personaje.foto

    let nombre = document.createElement("h4")
    nombre.classList.add("text-center")
    nombre.textContent=personaje.nombre

    let eleccion = document.createElement("h5")
    eleccion.classList.add("text-center")
    eleccion.textContent=personaje.eleccion

    let descripcion=document.createElement("p")
    descripcion.classList.add("text-justify")
    descripcion.textContent=personaje.descripcion

    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(eleccion)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})