let miFunction = function(a:string){
    return a;
}

let miFunctionF = (a:string) => a;

let miFunction2 = function(a:number,b:number){
    return a+b; 
}

let miFunction2F = (a:number,b:number)=>a+b;
let miFunction3 = function(a:string){
    nombre = nombre.toUpperCase();
    return nombre;
}
let miFunction3F = (nombre:string)=>{
    nombre = nombre.toUpperCase();
    return nombre;
}

let nombre_ = 'mi mama'

let hulk = {
    nombre_: "Bruce",
    smash(){
        setTimeout(function(){
            console.log(this.nombre_ + " smash !!")
        }),1500
    }
}


let hulkF = {
    nombre_: "Bruce",
    smash(){
        setTimeout(()=>console.log(this.nombre_ + " smash !!")),1500
    }
}
// console.log(miFunction)
// console.log(miFunctionF)