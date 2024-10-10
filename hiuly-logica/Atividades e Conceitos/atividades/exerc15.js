let slario,nome,vendas,comissao

salario = parseFloat(prompt("Me fale o valor do seu salario fixo?"))
nome = prompt("Me fale o nome do vendedor!")
vendas = parseFloat(prompt("Digite a quantidades de vendas do vendedor(em reais)!"))

comissao = ((15/100) * vendas) + salario

alert(`O salario total de ${nome} foi de ${comissao}`)