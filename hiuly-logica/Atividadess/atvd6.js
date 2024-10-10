let salario,novoSalario,anoAtual,percentual

salario = Number(prompt("Digite o salário"))
anoAtual = Number(prompt("Digite o ano atual!"))

document.write(`<h3>Salário 2005: ${novoSalario}</h3>`)

//PROCESSAMENTO 
percentual = 0.15

novoSalario = salario + (percentual * salario)
document.write(`<h3>Salário 2006: ${novoSalario}</h3>`)


// FOR -> ENQUANTO

for(let i = 2007 ; i <= anoAtual ; i ++){
percentual = percentual * 2
novoSalario = novoSalario + (percentual * novoSalario) //<- Aqui ele esta add os 15% em cada ano que dobra!
document.write(`<h3>Salário ${i} : ${novoSalario}</h3>`)

}
document.write(`<h3 class = "sfinal">Salário Final: ${novoSalario.toFixed(2)}</h3>`) // -> "toFixed Arredonda o numero, ex: 1000 = 10,00"
