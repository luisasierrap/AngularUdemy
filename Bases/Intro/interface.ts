interface Xmen {
    nombre:string,
    poder:string
}

function enviarMision(xmen : Xmen){
    console.log("Enviando a Misión: " + xmen.nombre);
}

function enviarCuartel(xmen : Xmen){
    console.log("Enviando a cuartel: " + xmen.nombre);
}


let wolverine:Xmen= { 
    nombre:"Logan",
    poder:"Regeneración"
}

enviarMision(wolverine);