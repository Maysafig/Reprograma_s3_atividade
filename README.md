# Reprograma – Semana 3

**Conteúdo** 

 - Função
 - Escopo 
 - Estrutura Condicional ( If, else e Switch)

## Função
Uma função é um procedimento de JavaScript que contêm um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função é preciso defini-la em algum lugar no escopo em que você queira chamá-la.

**Declarando uma função**

Na definição da função é preciso usar a palavra chave **function**, seguido por :

- Nome da função.

- Lista de argumentos para a função, entre parênteses e separados por vírgulas.

- Declarações JavaScript que definem a função, entre chaves {}.

Exemplo :

*function square(numero) {
return numero * numero;
}*

A função square recebe um argumento chamado numero. A função consiste em uma instrução que indica para retornar o argumento da função (isto é, numero) multiplicado por si mesmo. A declaração especifica o valor retornado pela função.

**Chamando funções**

A definição de uma função não a executa. Definir a função é simplesmente nomear a função e especificar o que fazer quando a função é chamada. Chamar a função executa realmente as ações especificadas com os parâmetros indicados.

# **Escopo da função**

As variáveis que são definidas no interior de uma função não podem ser acessadas de nenhum outro lugar fora da função, porque a variável está definida apenas no escopo da função. Porém, uma função pode acessar todas as variáveis e funções definidas fora do escopo onde ela está definida.

## Condicionais

Em qualquer linguagem de programação, o código precisa tomar decisões e realizar ações de acordo, dependendo de diferentes entradas.

**Declarações if ... else"**

O tipo mais comum de declaração condicional usada em javascript é if else.

**Sintaxe básica if ... else**

Veja a sintaxe básica do if else no pseudocódigo:

*if (condicao_) {
codigo para executar caso a condição seja verdadeira
} else 
  senão, executar este código
}*

Aqui nós temos:

1.  A palavra reservada if seguida de um par de parênteses.
2.  Um teste condicional, localizado dentro dos parênteses (normalmente "este valor é maior que esse", ou "este valor existe"). Esta condição pode fazer uso dos operadores de comparação que discutimos no último módulo, e podem retornar true ou false.
3.  Um par de chaves, e dentro dele temos código — pode ser qualquer código que queiramos, e só vai ser executado se o teste condicional retornar true.
4.  A palavra reservada else.
5.  Outro par de chaves, dentro dele temos mais um pouco de código — pode ser qualquer código que queiramos, e só vai executar se o teste condicional retornar um valor diferente de true, neste caso not true ou false.

É preciso saber que NÃO é obrigado a colocar a palavra reservada ELSE e o segundo bloco de par de chaves.

## Instruções switch

A instrução switch tomam uma única expressão ou valor como entrada e, em seguida, examinam várias opções até encontrarem um que corresponda a esse valor, executando o código correspondente que o acompanha.

*switch (expression) {
 case choice1:
 run this code
 break;
 case choice2:
 run this code instead
 break;
 // include as many cases as you like
 default:
 actually, just run this code
}*

Aqui nós temos:

1.  A palavra-chave switch, seguido por um par de parênteses.
2.  Uma expressão ou valor dentro dos parênteses.
3.  A palavra-chave case , seguido por uma escolha que a expressão / valor poderia ser, seguido por dois pontos.
4.  Algum código para ser executado se a escolha corresponder à expressão.
5.  Uma instrução break , seguido de um ponto e vírgula. Se a opção anterior corresponder à expressão / valor, o navegador interromperá a execução do bloco de código aqui e passará para qualquer código que aparecer abaixo da instrução switch.
6.  Como muitos outros casos (marcadores 3 a 5) que você quiser.
7.  A palavra-chave default, seguido por exatamente o mesmo padrão de código de um dos casos (marcadores 3 a 5), exceto que o default não tem escolha após ele, e você não precisa da instrução break, pois não há nada para executar depois disso o bloco de qualquer maneira. Esta é a opção padrão que é executada se nenhuma das opções corresponder.