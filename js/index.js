let mostradores=[
    {id:'inmejorable',foto:'img/mostrador/Actor.jpg',titulo:'Grant Gustin, un Flash inmejorable',texto:'The Flash’ no es una serie perfecta, pero sí que tiene a un protagonista inmejorable. Su nombre es Grant Gustin y no le costó nada dotar a Barry Allen del tono necesario para que nos lo creyéramos como héroe, pero también para que sus vaivenes románticos nunca resultasen empalagosos o incluso que la dinámica de amistad con el resto de personajes fluyera con una naturalidad envidiable.'},
    {id:'Ligereza',foto:'img/mostrador/Lider.jpg',titulo:'Ligereza sin caer en lo simple',texto:'No es tan sencillo conseguir que una serie resulte ligera sin acabar siendo todo el rato más de lo mismo, evitando también que eso suponga que las amenazas pierdan todo credibilidad. A eso hay que añadir la necesidad de alguna subtrama romántica aquí y allá pensada para el público adolescente, el caldo de cultivo ideal para que la serie se viniera abajo. Una de sus grandes fortalezas, sobre todo en su estupenda primera temporada, fue precisamente la capacidad para balancear todo eso con una precisión envidiable.    Luego han llegado ciertos altibajos, el más notable para mí por la necesidad de la cadena de usar ‘The Flash’ durante la segunda temporada como plataforma de lanzamiento de ‘Legends of Tomorrow’. Esto provocó cierto estancamiento en las aventuras de Barry Allen, de las que, por suerte, se ha recuperado en una tercera tanda de episodios que puede que no haya llegado al nivel de la primera -empieza a ser urgente que el gran villano de la temporada no sea otro velocista-, pero que ha gozado de una solidez envidiable en términos de entretenimiento.'},
    {id:'Villanos',foto:'img/mostrador/villanos.jpg',titulo:'Villanos interesantes',texto:'Puede sonar curioso que digo esto tras lo apuntado al final el párrafo anterior, pero lo cierto es que ‘The Flash’ ha sabido crear arcos de temporada bastante estimulantes alrededor de su villano central. Además, en todos ellos han sabido conectarlo de forma adecuada a las emociones de Allen, brillando con especial intensidad en la primera y tercera -Zoom, el de la segunda, tenía una presencia imponente, pero acabó quedándose un escalón por debajo de Flash reverso y Savitar-    Los guionistas también han sabido jugar bien con las motivaciones de esos enemigos, administrando las revelaciones sobre qué les ha llevado a querer acabar con Flash -aunque a veces haya episodios en los que no se logra progresión alguna- y viendo cómo evoluciona su plan sin que parezca que se está estirando más de la cuenta. Esto último es cierto que ha dado pie a una presencia bastante amplia de los villanos episódicos, optando por el regreso de los más inspirados y siempre llegando a unos mínimos con aquellos que no dejaban de ser relleno necesario. Es verdad que todo habría tenido un puntito extra de intensidad si las temporadas se hubiesen acortado, pero a ‘The Flash’ le interesa más ir oscilando dentro de un tono amable, preparando con calma los grandes enfrentamientos para que nunca sean una sobrecarga dramática. Ahí es donde gana importancia el hecho de poder ir matizando sus personajes con calma, dando la sensación de que detrás de todo hay un plan bien pensado.'},
    {id:'entretenimiento',foto:'img/mostrador/Entretenimiento.jpg',titulo:'El entretenimiento por encima de todo',texto:'Los responsables de ‘The Flash’ tienen una cosa muy clara, y es la necesidad de que los espectadores disfruten viendo la serie. Sí, hay momentos muy intensos, otros románticos, comedia, aventura, drama -es increíble lo optimista que es Allen si tenemos cuenta todo lo que ha tenido que sufrir, y tiene mucho mérito que en todo momento lo veamos como algo lógico- y muchas cosas más, pero el objetivo primordial de la serie es entretenernos y es algo de lo que nunca se avergüenza o intente compensar creando desequilibrios.   El hecho de emitirse en The CW también tiene mucho que ver en ello, pero a veces es poco menos que milagroso lo bien que saben manejar todos los ingredientes a su disposición para que los 40 minutos de cada episodio normalmente se pasen volando. De hecho, es una candidata ideal para esos insanos maratones en los que pasan varias horas y nosotros estamos tan felices viendo un capítulo detrás de otro.'},
    {id:'Secundarios',foto:'img/mostrador/Secundarios.jpg',titulo:'Secundarios con gancho',texto:'Ya he hablado un poco de todo lo que aporta Grant Gustin a la serie, pero sería insuficiente si no contase con una gama de personajes regulares que le complementasen de una forma u otra sin acabar siendo relegados a ser poco más que eso. ‘The Flash’ no es su protagonista y gente a su alrededor que igual le propone la idea necesaria en el momento oportuno para derrotar al enemigo. Es bastante más que eso. Aquí tengo que señalar que los guionistas aún tienen que dar lo mejor de sí mismos en lo referente al tratamiento de los personajes femeninos, pero tanto Danielle Panabaker como, sobre todo, Candice Patton han hecho un gran trabajo para compensarlo. Ninguna de ellas ha contado, por norma general, con tramas que les permitieran lucirse, pero han sabido dotar de esa calidez necesaria a sus personajes para que uno llegue a preocuparse por lo que pueda acabar pasando con ellas.'},
]

let fila=document.getElementById("filaMostrador")
    mostradores.forEach(function(mostrador){
        console.log(mostrador.texto);
        console.log(mostrador.titulo);
        

        let columna = document.createElement("div")
        columna.classList.add("col")

        columna.id=mostrador.id
        

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("row")
        tarjeta.classList.add("g-0")
        
        let imagen = document.createElement("div")
        imagen.classList.add("col-md-4")
        imagen.classList.add("d-flex")
        imagen.classList.add("align-items-center")

        let foto = document.createElement("img")
        foto.classList.add("img-fluid")
        foto.classList.add("rounded-start")

       
        foto.src=mostrador.foto

        let mostrar = document.createElement("div")
        mostrar.classList.add("col-md-8")

        let cuerpoTarjeta = document.createElement("div")
        cuerpoTarjeta.classList.add("card-body")

        let titulo = document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=mostrador.titulo

        let texto = document.createElement("p")
        texto.classList.add("text-justify")
        texto.textContent=mostrador.texto

        imagen.appendChild(foto)
        cuerpoTarjeta.appendChild(titulo)
        cuerpoTarjeta.appendChild(texto)
        mostrar.appendChild(cuerpoTarjeta)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(mostrar)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })


// --------- [ Pruebas ] ---------

const titulo = document.querySelector('#cambiar');

    titulo.classList.add('degradado')
