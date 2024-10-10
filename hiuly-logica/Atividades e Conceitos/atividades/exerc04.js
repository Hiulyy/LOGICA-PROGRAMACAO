let distancia, combustivel, resultado

distancia = parseInt (prompt("DIgite a distacia percorrida!"))
combustivel = parseFloat (prompt("Digite o total de combustivel gasto!"))

resultado = distancia / combustivel

document.write ('O seu consumo médio é de: ' + resultado)