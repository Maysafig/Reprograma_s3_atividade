// 1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

let dia
function diaDaSemana(dia) {
    switch(dia){
        case 1:
            return 'Domingo'
            break
        case 2:
            return 'Segunda'
            break
        case 3:
            return 'Terça'
            break
        case 4: 
            return 'Quarta'
            break
        case 5:
            return 'Quinta'
            break
        case 6:
            return 'Sexta'
            break
        case 7:
            return 'Sábado'
            break
        default:
            return 'Dia inexistente'
    }
}

console.log(diaDaSemana(7))