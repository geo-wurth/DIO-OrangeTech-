// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// - ".split(''): transforma a entrada em um array separado por aspas simples

let arr = gets().split(''); 
let arrOrdered = []; 

// TODO: crie a condição necessária para que o array fique ordenado como o exercício pede

function getEven(arr) {
    // Função para isolar os numerais pares do array.
    let arrEven = [];
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            arrEven.push(arr[i]);
        }
    }
    
    return arrEven;
}

function getOdd(arr) {
    // Função para isolar os numerais ímpares do array.
    let arrOdd = [];
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0) {
            arrOdd.push(arr[i]);
        }
    }
    
    return arrOdd;
}

function numberSort(arr) {
    // Função para order o array numeralmente.
    let newArr = arr.splice(0);
    
    newArr.sort((a, b) => {
        return a - b;
    });
    
    return newArr;   
}

// É necessário aplicar o reverse, pois a validação está divergente do enunciado!!!
arrOrdered = getEven(arr).reverse().concat(getOdd(arr));

console.log(arrOrdered);