let numero

do {
    numero = parseInt(prompt("Digite um numero para saber se ele é primo"))
    if(numero <= 0 || isNaN (numero)){
    alert("Digite um numero inteiro e maior que 0")
}
} while (numero <= 0 || isNaN (numero));
// essa estrutura vai repetir de 1 ate o numero que o usuario digitar
for(let i = 1; i <= numero; i++){
    document.write(`${numero}%${i} = ${numero%i} <br>`)
    // numero que o usuario digitou dividido pelo valor de i
if(numero % i === 0){
contador++ //vai receber 1 a cada divisão com o resto 0

}

}
//fim da estrutura que vai repetir de 1 ate o numero que o usuario digitar
if(contador === 2){
    document.write(`O numero ${numero} é primo`)
}else{
    document.write(`O numero ${numero} não é primo!`)
}