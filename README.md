PALÍNDROMO: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa.
Esse projeto tem como objetivo criar uma função que identifique um palindromo, contendo no código a versão escrita usando uma function declaration e também uma function expression, mostrando as suas diferenças. 

## FUNCTION DECLARATION
consegue ser usada antes de ser declarada no código chamando a função antes dela ter sido declarada (comportamento chamado de  hoisting ("içamento"), js lê todo o código e mesmo chamando a função antes de ser declarada, já se sabe que ela está ali, e ele a executa normalmente


## FUNCTION EXPRESSION
1 - DIFERENÇA: sintaxe (a forma como se declara ela), 
ela é declarada sempre dentro de uma constante e a function declaration pode ser declarada direto no código. <br>
2 - DIFERENÇA: não aceita hoisting<br>
3 - DIFERENÇA: uso dos parâmetros: num projeto real a var não é passada dentro da função
as informações vem de fora da função, porque a função está 
sempre conversando com o código, então deve-se passar o parâmetro dentro da função
