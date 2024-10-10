let preco,acre,resposta,valorAcre

preco = parseFloat(prompt ("Me fale o preço do seu produto!"))
acre = parseFloat(prompt("Agora me fale o valor do acréscimo em porcentagem!"))

valorAcre = preco * (acre / 100)

resposta = preco + valorAcre

document.write (`O valor do seu produto ficara de: ${resposta} `)
