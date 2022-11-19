// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();
print(verificaPalindromo(resultado));

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.
function inverterString(str) {
    var separarString = str.split("");
    var inverterArray = separarString.reverse();
    var juntarArray = inverterArray.join("");
    
    return juntarArray;
}

function verificaPalindromo(str){
    let strInvertida = inverterString(str);
    if (str === strInvertida){
        return 'TRUE'
    } else {
        return 'FALSE'
    }
}