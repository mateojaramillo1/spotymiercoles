import {obtenerCanciones} from './servicioGenerarCanciones.js'
import{pintarCanciones} from './pintarCanciones.js'

//llamar funcion generar token
let canciones=await obtenerCanciones()
console.log(canciones)



//llamar la funcion pintarcanciones

pintarCanciones(canciones.tracks)



