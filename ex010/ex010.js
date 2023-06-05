var Nome = document.getElementById("nome")
var Senha = document.getElementById("senha")
var aviso = document.getElementById("aviso")
function Login(){
    var nome = Nome.value
    var senha = Senha.value

    if (nome == "adm" && senha == "123"){
        aviso.innerHTML = `Você validou seu login`
        aviso.style.color = 'green'
    }
    else {
        aviso.innerHTML = `Senha ou login está incorreto`
        aviso.style.color = 'red'
    }

}