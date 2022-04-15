/*3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

  - Se a media for igual ou maior que 7 - Aprovado (10,9,8 e 7)
  - Se a media for maior e igual a cinco e menor que 7 - Recuperação (5 e 6)
  - Se a media for menor que 5 - Reprovado (0,1,2,3 e 4) */ 

  let nota1 = 4
  let nota2 = 4
  let nota3 = 4
  const media = (nota1 + nota2 + nota3) / 3 


  function boletim(media){
    if (media >= 7 ){
      return 'Aprovado'
    } else if (media >=5 && media < 7){      
      return 'Recuperação'
    } else{
      return 'Reprovado'
    }
  }
  
console.log(boletim(media))