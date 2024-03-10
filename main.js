//FUNCTION DECLARATION, consegue ser usada antes de ser declarada no código
// chamando a função antes dela ter sido declarada (comportamento chamado de 
// hoisting "içamento"), js lê todo o código e mesmo chamando a função antes 
//de ser declarada, já se sabe que ela está ali, e ele a executa normalmente

/*essaPalavraEUmPalindromo()

function essaPalavraEUmPalindromo() {
    var palavra = "amor";
    var separandoAsLetrasDaPalavra = palavra.split("");
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida) {
        console.log("A palavra " + palavra + " é um palindromo!");
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo!");
    }
}/*

//FUNCTION EXPRESSION
/*1 - DIFERENÇA: sintaxe (a forma como se declara ela), 
ela sempre é declarada sempre dentro de uma constante e a declaration 
ela pode ser declarada direto no código
2 DIFERENÇA: não aceita hoisting
3- uso dos parâmetros: num projeto real a var não é passada dentro da função
as informações vem de fora da função, pq a função está 
sempre conversando com o código, então deve-se passar o parâmetro "palavra" dentro da função
*/



const essaPalavraEUmPalindromo = function (palavra) {
    // var palavra = "amor";
       var separandoAsLetrasDaPalavra = palavra.split("");
       var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
       palavraInvertida = palavraInvertida.join("");
       if (palavra == palavraInvertida) {
           console.log("A palavra " + palavra + " é um palindromo!");
       } else {
           console.log("A palavra " + palavra + " não é um palíndromo!");
       }
   }
   
   essaPalavraEUmPalindromo("radar");

