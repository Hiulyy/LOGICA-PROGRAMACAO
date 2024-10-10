let lado1,lado2,lado3,soma

lado1 = parseFloat(prompt(`Me fale o valor do lado 1!`))
lado2 = parseFloat(prompt(`Me fale o valor do lado 2!`))
lado3 = parseFloat(prompt(`Me fale o valor do lado 3!`))

soma = (lado1 + lado2)

if (soma>=lado3) {
    alert(`Esses valores podem formar um triangulo valido!`)
} else {
    alert(`Esses valores não podem formar um triangulo valido!`)
}