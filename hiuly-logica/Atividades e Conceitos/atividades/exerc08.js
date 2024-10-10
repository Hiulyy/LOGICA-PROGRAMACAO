let s,hora,minuto,dia

s = parseInt(prompt("Me fale uma quantidade de segundos e direi quantos dias,horas e minutos ele tem!"))

dia= s / 86400
hora = s / 3600
minuto = s / 60

document.write (` ${dia}:${hora}:${minuto}:${s} `)

//hh:mm:ss
//3600
//01:00:00