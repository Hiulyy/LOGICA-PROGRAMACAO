let valor

valor = parseFloat(prompt(`Me fale um valor!`))

if ((valor%3==0) && (valor%5==0)) {
    alert(`O valor é multiplo de 3 e 5!`)
} else {
    alert(`Esse numero nao é multiplo de 3 e 5!`)
}
