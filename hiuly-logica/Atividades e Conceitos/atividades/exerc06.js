let A,B, temp

A = parseFloat(prompt("Me fale um valor A!"))
B = parseFloat(prompt("Me fale um valor B!"))

temp=A

A = B
B = temp

document.write (`O valor de A é ${A},e o valor de B é ${B}.`)
