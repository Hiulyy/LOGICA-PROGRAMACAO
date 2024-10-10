let numero , somaDiv = 0

numero = parseInt(prompt("Digite um numero!"))
for(let i = 1; i < numero; i++){
    if (numero % i === 0){
        somaDiv= somaDiv + 1
    }
}
if (somaDiv == numero){
    document.write(`O numero ${numero} não é perfeito!`)
}else {
    document.write (`O numero ${numero} é perfeito!`)
}