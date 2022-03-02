/*let etiquetaBoton =document.getElementById("boton")


etiquetaBoton.addEventListener("click",cambiarFoto)
function cambiarFoto(){
    let etiquetaTitulo=document.getElementById("titulo2")
    etiquetaTitulo.textContent="Cambiaso pa "
}
*/

let etiquetaImagen = document.getElementById("imagen")
etiquetaImagen.addEventListener("mouseover",cambiarFoto)
function cambiarFoto(){
    let etiquetaTituloImagen=document.getElementById("tituloImagen")
    etiquetaTituloImagen.textContent="Cambiaso pa "
}