let numero, contador = 0 
let numPerfeito

do {
    numero = parseInt(prompt("Digite um numero para saber se ele é perfeito!"))
    if(numero <= 0 || isNaN (numero)){
    alert("Numero digitado invalido!")
}
} while (numero <= 0 || isNaN (numero));

for (let i = 1; i < numero; i++){
    if(numero % i === 0){
        numPerfeito = numPerfeito + i
    }
}

if(numPerfeito === numero){
    document.write(`O número ${numero} é um numero perfeito.`)
}else{
    document.write(`O numero ${numero} NÃO é um número perfeito`)
}