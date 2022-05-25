import {generarToken} from './servicioGenerarToken.js'

//llamar funcion generar token
let tokenRespuesta=await generarToken()
let token=`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`


//URI del servicio
const URI="https://api.spotify.com/v1/artists/7iK8PXO48WeuP03g8YR51W/top-tracks?market=US"


//configuro la peticion
const PETICION={
    method:"GET",
    headers:{Authorization:token}
}


//consumo el servicio

export async function obtenerCanciones(){
    
    let respuesta= await fetch(URI,PETICION)
    return respuesta.json()

}