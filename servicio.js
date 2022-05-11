//pasos para consumir un api con javascript puro

//paso 1 declaro la URI(para donde voy)

const URI="https://api.spotify.com/v1/artists/7iK8PXO48WeuP03g8YR51W/top-tracks?market=US"



// paso 2 declaro los párametros de la peticion (que voy hacer?)


const TOKEN ="Bearer BQBegc7kKGLlSzTcREyYRM-id1Z-XfisKgAFdsqU0UCRCbPsT9RpL0iFVr5cGJaYEc-r_JU4rbsdDm2BaYFyACkgqOKt4Fee5_sV4YovLn6Vtap2X_rDeSS6cDc503-76XRseDJc3OIeiDBhgEyrLkjoB3YsKfIiX0w"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//Paso 3 declaro el FETCH (voy al servidor)

fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})

.then(function(respuesta){
    console.log(respuesta)//respuesta es un objeto
    console.log(respuesta.tracks)

   
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
})

.catch(function(respuesta){
    console.log(respuesta)
})