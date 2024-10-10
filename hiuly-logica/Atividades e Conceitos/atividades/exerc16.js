let salario,aumento,resposta,valorAumento

salario = parseFloat(prompt ("Me fale seu salario!"))
aumento = parseFloat(prompt("Agora,me fale seu aumento em porcentagem!"))

valorAumento = salario * (aumento / 100)

resposta = salario + valorAumento

document.write (`Com o aumento de ${aumento} seu salario ficara de: ${resposta}.`)