
//1. uri para donde voy

const URI='https://accounts.spotify.com/api/token'

//2 ALMACENO LOS DATOS QUE VOY A ENVIAR

let dato1 ='client_id=d60e766025cd4f2782f0369ab18ea2f8'
let dato2 ='client_secret=59c24101e00c47f7acbf00644c4e8d4c'
let dato3 ='grant_type=client_credentials'


//3 configuro la peticion
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4 consumir el servicio

export async function generarToken(){

    let respuesta= await fetch(URI,PETICION)
    return (respuesta.json())

}