// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

const dp = new Array(n + 1).fill(Infinity); 
dp[0] = 0;

print(quadradoPerfeito(n));

//TODO: Com base no valor total, retorne o menor número de quadrados perfeitos.

function quadradoPerfeito(n) {
    if (n < 4) {
        return n;
    }

    let melhor = Infinity;

    for (let i = 2; i <= (Math.sqrt(n) | 0); i++) {
        let auxiliar = Math.floor(n / (i * i));
        melhor = Math.min(melhor, auxiliar + quadradoPerfeito(n - auxiliar * i * i));
    }
    return melhor;
}