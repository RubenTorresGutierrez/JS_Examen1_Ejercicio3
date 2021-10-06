//Rubén Torres
'use strict'

//Variables
let numeros = aleatorio(10);
let negativos = 0;
let positivomayor = 0;
let multiplos = 0;
let pares = 0;

console.log('~~~~~~~ Mostrar Números ~~~~~~~');
for(let i=0;i<numeros.length;i++)
    console.log(numeros[i]);

console.log('~~~~~~~ Cantidad Números Negativos ~~~~~~~');
for(let i=0;i<numeros.length;i++)
    if(numeros[i]<0)
        negativos++;
console.log(negativos);

console.log('~~~~~~~ Cantidad Números Positivos Mayores de 15 ~~~~~~~');
for(let i=0;i<numeros.length;i++)
    if(numeros[i]>15)
        positivomayor++;
console.log(positivomayor);

console.log('~~~~~~~ Cantidad Múltiplos de 15 ~~~~~~~');
for(let i=0;i<numeros.length;i++)
    if(numeros[i]%15==0)
        multiplos++;
console.log(multiplos);

console.log('~~~~~~~ Valor Números Pares ~~~~~~~');
for(let i=0;i<numeros.length;i++)
    if(numeros[i]%2==0)
        pares += numeros[i];
console.log(pares);


//Funciones
function aleatorio(cantidad){

    let numeros = [];
    for(let i=0;i<cantidad;i++)
        numeros[i] = Math.floor((Math.random() * 300) -150);
    return numeros;

}