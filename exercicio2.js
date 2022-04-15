//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let numero1 = 500
let numero2 = 600

function comparacao(numero1,numero2){
    if (numero1 > numero2){
        return `${numero1} é maior que ${numero2}`
    }else if(numero1 < numero2){
        return `${numero2} é maior que ${numero1}`
    }else {
        return `Os números são iguais`
    }
}

console.log(comparacao(numero1,numero2))

