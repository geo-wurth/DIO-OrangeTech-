// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = parseInt(gets());

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

function somatorio(n){
  if (n < 0) {
    return false;
  }
  
  if (n == 0){
    return 0;
  } else {
    return n + somatorio(n - 1)
  }
}

console.log(somatorio(n));