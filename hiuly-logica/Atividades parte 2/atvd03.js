let qtdNumero, numeroEscolhido

do {
qtdNumero = parseInt(prompt("Quantos números fatoriais voce deseja saber?"))
if(qtdNumero <=0 || isNaN (qtdNumero)){
    alert ("Numero invalido")
}
} while (qtdNumero <=0 || isNaN (qtdNumero));

for(let i = 0; i <= qtdNumero; I++){
    
    do{
        numeroEscolhido = parseInt(prompt(`Digite o ${i} numero para saber o fatorial`));
        if(numeroEscolhido <= 0 || isNaN(numeroEscolhido)){
            alert("Numero inválido!")
        }
    } while (numeroEscolhido <= 0 || isNaN(numeroEscolhido));
    }