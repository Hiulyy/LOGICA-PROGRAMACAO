let ano

ano = parseFloat(prompt("Digite um ano"))//parseFloat(prompt(`Me fale o ano!`))

if (ano%4==0){
    alert(`Esse ano é bissexto!`)
} else {
    alert(`Esse ano não é bissexto!`)
}