//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoNascimento

function maiorOuMenor(anoNascimento){
let idade = 2022 - anoNascimento 
    if (idade >= 18){
        return 'Maior de idade'
    }else{
        return 'Menor de idade'
    }
}

console.log(maiorOuMenor(2010))