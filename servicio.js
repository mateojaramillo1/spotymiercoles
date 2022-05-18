//pasos para consumir un api con javascript puro

//paso 1 declaro la URI(para donde voy)

const URI="https://api.spotify.com/v1/artists/7iK8PXO48WeuP03g8YR51W/top-tracks?market=US"



// paso 2 declaro los párametros de la peticion (que voy hacer?)


const TOKEN ="Bearer BQCjYHQ1s-tamdX8wO80rbct3J-SMJkmMBMogIHTzdyoJnVRNhxAZAXRLneGcW2MqE_yhnV0lr2xjefbn8pSUKYIKEk9gO3B8_WAauVtHgKUeD9l9YWQXsCJ6YhnMHl-FvqrGfIkE1mdaxWWE09tT0oyZUIPv8BKvkM"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}




//rutina para consumir apis con metodo post

//1. uri para donde voy

const URIPOST='https://accounts.spotify.com/api/token'

//2 ALMACENO LOS DATOS QUE VOY A ENVIAR

let dato1 ='client_id=d60e766025cd4f2782f0369ab18ea2f8'
let dato2 ='client_secret=59c24101e00c47f7acbf00644c4e8d4c'
let dato3 ='grant_type=client_credentials'


//3 configuro la peticion
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}


//4 voy al servidor a consumi el servicio

fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token = respuesta.token_type+' '+respuesta.access_token

    console.log(token);
})
.catch(function(respuesta){
    console.log(respuesta)
})










//Paso 3 declaro el FETCH (voy al servidor)
/*
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})

.then(function(respuesta){
    console.log(respuesta)//respuesta es un objeto
    console.log(respuesta.tracks) // Arreglo de 10 canciones
    pintarCanciones(respuesta.tracks)

})

.catch(function(respuesta){
    console.log(respuesta)
})


// Funcion para recorrer un arreglo

function pintarCanciones(canciones){
    
    let fila= document.getElementById("fila")

    canciones.forEach(function(cancion){

        //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)


        // rutina creado

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta= document.createElement("div")
        columna.classList.add("card","h-100","shadow")

        let audio= document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let foto= document.createElement("img")
        foto.classList.add("w-100", "img-fluid")
        foto.src=cancion.album.images[0].url

        //padres e hijos
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)


    })
}*/