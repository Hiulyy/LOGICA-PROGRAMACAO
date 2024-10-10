let num_op, 
pecas_op, 
num_maior, 
cont_m, 
cont_f,
tot_pecas,
cont,
media_m,
media_f,
salario_maior,
salario_op,
tot_folha,
sexo_op;

tot_folha = 0;
tot_pecas = 0;
media_m = 0;
media_f = 0;
cont_m = 0;
cont_f = 0;

for(cont = 1; cont <= 1; cont++) {
    do {
     num_op = +prompt("Digite o numero do " + cont + "º operario");
     if (num_op <= 0 || isNaN(num_op))
     {
        alert("Numero de operario invalido");
     }
    } while (num_op <= 0 || isNaN (num_op));

    do{
        sexo_op = prompt("Digite o sexo do operario (M OU F)")
        toUppercase();
        if(sexo_op != "M" || sexo_op != "F"){
            alert("Sexo de operario invalido");
        }
    }while (sexo_op != "M" || sexo_op != "F");

    do {
        pecas_op = +prompt("Digite o total de peças fabricadas pelo " + cont + "º operario");
        if(pecas_op <= 0 || isNaN (pecas_op));
        if (pecas_op <= 20) {
       console.log(salario_op);
    } else if (pecas_op > 20 && pecas_op < 30){
        salario_op = salario_op + (pecas_op - 20) * (3 / 100) * salario_op;
    }else if (pecas_op > 30){
        salario_op = salario_op + (pecas_op - 20) * (3 / 100) * salario_op + (pecas_op - 30) * (5 / 100) * salario_op;
        {
            console.log("O operario de numero" + num_op + "recebe salario .: " + salario_op)

            if(sexo_op --- "M" || sexo_op --- "m"){
                media_m = media_m + pecas_op
                console.log (media_m)
                cont_m = cont_m + 1
            }
            else if(sexo_op --- "F" || sexo_op --- "f"){
                media_f = media_f + pecas_op
                console.log (media_f)
                cont_f = cont_f + 1

            }
            if (cont === 1){
                salario_maior = salario_op;
                num_maior = num_op;
            }else{
                if(salario_op > salario_maior){
                    salario_maior = salario_op
                    num_maior = num_op
                }
            }
