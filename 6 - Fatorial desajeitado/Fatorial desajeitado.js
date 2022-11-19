// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 


let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

if (n <= 2) { 

 print(n); 

} 

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".
function fatorialDesajeitado(n) {
    /*O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n.
    Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação
    por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'.
    Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as
    operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre
    resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.
    
    n(4) => ((((4 * 3) / 2) | 0) + 1) => 7
    n(10) => (((10 * 9) / 8) | 0)  + 7 - (((6 * 5) / 4) | 0) + 3 - (2 * 1)  => 12
    n(12) => (((12 * 11) / 10) | 0) + 9 - (((8 * 7) / 6) | 0) + 5 - (((4 * 3) / 2) | 0) + 1 => 13

    */

    if (n === 1) {
        return 1;
    }

    let mulArray = [];
    let divArray = [];
    let somArray = [];
    let subArray = [];
    let result = 0;

    while (n > 0) {
        if (n >= 4) {
            mulArray.push(n--);
            divArray.push(n--);
            somArray.push(n--);
            subArray.push(n--);
        } else if ( n === 3) {
            mulArray.push(n--);
            divArray.push(n--);
            somArray.push(n--);
        } else if ( n === 2) {
            mulArray.push(n--);
            divArray.push(n--);
        } else {
            mulArray.push(n--);
        }
    }

    for (let i = 0; i < mulArray.length; i++) {
        if (divArray[i]) {
            divArray[i] *= mulArray[i];
        } else {
            divArray.push(mulArray[i]);
        }
    }

    for (let i = 0; i < divArray.length; i++) {
        if (somArray[i]) {
            somArray[i] = (divArray[i] / somArray[i]) | 0;
        } else {
            somArray.push(divArray[i]);
        }
    }

    for (let i = 0; i < somArray.length; i++) {
        if (i === 0) {
            result = somArray[0];
        } else if (somArray[i]) {
            result -= somArray[i]
        }
        
        if (subArray[i]) {
            result += subArray[i]
        }
    }

    return result;
}

console.log(fatorialDesajeitado(n))