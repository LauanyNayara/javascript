var Nome = document.getElementById("nome")
var Senha = document.getElementById("senha")
var aviso = document.getElementById("aviso")
function Login(){
    var nome = Nome.value
    var senha = Senha.value

    if (nome == "" && senha == ""){
        
    }
    else {
        aviso.innerHTML = `Senha ou login está incorreto`
        aviso.style.color = 'red'
    }

}
function Limpar() {

    placar1.innerHTML = "0"
    placar2.innerHTML = "0"
    valor1 = 0
    valor2 = 0
}