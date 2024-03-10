//FUNCTION DECLARATION, consegue ser usada antes de ser declarada no código
// chamando a função antes dela ter sido declarada (comportamento chamado de 
// hoisting "içamento"), js lê todo o código e mesmo chamando a função antes 
//de ser declarada, já se sabe que ela está ali, e ele a executa normalmente

essaPalavraEUmPalindromo()

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
}

