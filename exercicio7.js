//7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Diga se esse resultado é par ou ímpar.

let numero1 
let numero2 

function divisaoParOuImpar(numero1, numero2){
let divisao = numero1 / numero2
    if (divisao % 2 == 0){
        return `${divisao} é par.`       
    } else{
        return `${divisao} é ímpar.`
    }
}

console.log(divisaoParOuImpar(10,2))