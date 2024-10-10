let titulo,hr,min,minutos

titulo = prompt(`Me fale o nome do filme!`)
minutos = parseFloat(prompt(`Me fale quantos minutos ele tem!`))

hr = Math.floor(minutos/60)

min = minutos%60

alert(`O filme ${titulo}, tem a duração de ${hr} horas e ${min} minutos!`)