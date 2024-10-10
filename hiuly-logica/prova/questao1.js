let numero , resposta, resposta1,resposta2

numero = parseInt(prompt(`Me fale um valor!`))

if(numero%2==0)
resposta1 = numero*2
alert(`Esse é o dobro do seu numero:${resposta1}`)

if (numero%3==0){
resposta2 = numero*3
alert(`Esse é o triplo do seu numero:${resposta2}`)
 
} else{
    alert(`Digite outro valor!`)
}
