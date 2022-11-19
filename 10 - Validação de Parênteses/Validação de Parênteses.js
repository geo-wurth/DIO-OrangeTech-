// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

const chars = gets().split("");
//const chars = "({[{}]})".split("");

print(isValid(chars));

function isValid(chars) {
    //TODO: implemente a lógica de caracteres válidos e retorne se a string é valida ou não.
 
    /*Para este exercício é válido utilizar a estrutura de pilha LIFO (Last In, First Out),
    assim é possível verificar se ocorrerá o fechamento das simbologias de forma correta.
    
    Para esta implementação, utilizarei uma estrutura de LIFO disponível na internet e ajustarei
    sua funcionalidade para atender as necessidades do exercício.*/
    
    let stackLIFO = new LIFO();
    
    for (let i = 0; i < chars.length; i++){
        switch (chars[i]){
            case "(":
            case "[":
            case "{":
                stackLIFO.Inserir(chars[i]);
                break;
            
            case ")":
                if (stackLIFO.RemoverUltimo() != "("){
                    return 'false';
                }
                break;
                
            case "]":
                if (stackLIFO.RemoverUltimo() != "["){
                    return 'false';
                }
                break;
                
            case "}":
                if (stackLIFO.RemoverUltimo() != "{"){
                    return 'false';
                }
                break;
            
            default:
                return 'false';
        }
    }
    return stackLIFO.lista.length > 0 ? 'false' : 'true';
}

function LIFO(){
    this.lista = new Array();
 
    this.Inserir = function(obj){
        this.lista[this.lista.length] = obj;       
    }
 
    this.RemoverUltimo = function(){
        if(this.lista.length > 0){
            var obj = this.lista[this.lista.length - 1];
            this.lista.splice(this.lista.length - 1,1);
            return obj;    
        }else{
            alert("Não há objetos na pilha.")
        }
    }
 
    this.LerUltimo = function(){
        if(this.lista.length > 0){
            return this.lista[this.lista.length - 1];
        }else{
            alert("Não há objetos na pilha.")
        }
    }  
}