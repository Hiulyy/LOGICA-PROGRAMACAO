//* FUNÇÕES */ --> fUNÇÃO É UM TEXTO DE CODIGO QUE PODEMOS UTILIZAR A QUALQUER MOMENTO

// 1º Função que não recebe parâmetros e não retorna valor:
function soma1() {
    let numero1,numero2,soma
    numero1 = 5
    numero2 = 5
    soma = numero1 + numero2
    console.log(`${soma}`)
    }

    soma1()
    console.log("somando=> " ,soma1() + 5)

    //2º Função que recebe parametros/ argumentos e não retorna valor:
    function soma2(numero1, numero2) {
        let soma
        soma = numero1 + numero2
        console.log(soma)
        }
        console.log('---------- função com param e sem retorno ------------')
        soma2() // não pode ser chamado pois não tem argumentos(valores)
        soma2(4) // aqui estamos passando apenas um argumento, o que irá gerar um erro,pois so foi passado um valor,e tem que ser dois:"NAN"
        soma2(4,4) //Retorna a soma
        soma2(4,4,4,4,4,4,4) // = 8
        console.log(soma(4,4) + 2)

        // 3º Função que recebe parâmetros/argumentos e retorna valor:
        function soma3(param1, param2){
            let soma = param1 + param2
            return soma
        }


        console.log('---------- função com param e retorno ------------')
        console.log(soma3(10,10)) // retorna a soma
        console.log(soma3(10,10) + 10) // aqui estamos somando o resultado da função com o valor 10

        function cadastro(nome, idade, altura){
            if(idade < 18){
                console.log(`${nome} com altura ${altura} não tem permissão`)
            }else{
                console.log(`${nome} com altura ${altura} tem permissão`)
            }

            }
        cadastro("Carlos", 32, 1.82)
        cadastro("Wilton", 16, 1.70)

