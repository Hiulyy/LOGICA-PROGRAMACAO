let primo, i

do {
    do {
        primo = parseInt(prompt("Digite um numero!"))
        if (primo % 2 === 0 || isNaN){
            alert (`${primo} é um numero primo!`)
        }else{
            alert(`${primo} não é um numero primo!`)
        }
    } while(primo % 2 === 0 || isNaN);
    i = prompt("digite 1 para continuar e 0 para sair!")
} while ( i = 1);
