// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

let numero

function parOuImpar(numero){
    if (numero % 2 == 0){
        return 'É par'
    }else{
        return 'É impar'
    }
}

console.log(parOuImpar(11))