let quantidade,ano 

quantidade = parseInt(prompt(`Me fale quantas chinchilas tem em sua fazenda!`))
ano = parseInt(prompt(`Me fale em quantos anos fazem que voce comprou elas(caso nao tenha feito um ano,comente "um ano"!) `))


for (let i = ano; i > 1; i++) {
    ano = quantidade*3
    console.log (`${i} <br>`)
}