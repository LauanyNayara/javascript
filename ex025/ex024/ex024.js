var Nome = document.getElementById("nome")
var Senha = document.getElementById("senha")
var aviso = document.getElementById("aviso")
function Login(){
    var nome = Nome.value
    var senha = Senha.value

    if (nome == "" , senha == ""){
        aviso.innerHTML = `Senha ou login está incorreto`
        aviso.style.color = 'red'
    }
    else {
        aviso.innerHTML = `Senha ou login está correto`
        aviso.style.color = 'green'
    }

}
