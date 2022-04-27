import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let boton= document.getElementById("btnRegistro")
let modalRegistro=new bootstrap.Modal(document.getElementById('mensajeInfo'))
let textoModal = document.getElementById("mensajeModalInfo")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("registrado");
            textoModal.textContent="Exito en el registro "
            modalRegistro.show()
            let formuolario = document.getElementById("formularioRegistro")
            formuolario.reset()
            setTimeout(function(){
                modalRegistro.hide()
            },6000)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log("Fallo"+errorMessage);
            textoModal.textContent="Fallo en el registro : "+errorMessage
            modalRegistro.show()
            setTimeout(function(){
                modalRegistro.hide()
            },6000)
            
        });
})