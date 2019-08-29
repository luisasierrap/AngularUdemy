let prom1  = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('Promesa terminada')
        resolve();
    },2000);
});


prom1
    .then(
        function(){
            console.log('Ejecutar cuando OK');
        },
        function(){
            console.log('Ejecutar cuando ERROR');
        }
    )