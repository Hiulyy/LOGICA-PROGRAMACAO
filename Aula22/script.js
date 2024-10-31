

function verificaDados(){
    const nome = document.querySelector("#nome")
    const sobrenome = document.querySelector("#sobrenome")
    const senha = document.querySelector("#senha")
    const resultado = document.querySelector(".resultado")

    if(nome === ""){
        
    }

    resultado.innerHTML = `<p>Nome: ${nome} </p>`
                           `<p>Sobrenome: ${sobrenome} </p>`
                           `<p>Senha: ${senha} </p>`
}

    