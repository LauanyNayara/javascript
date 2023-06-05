var Nome = document.getElementById("nome")
var Idade = document.getElementById("Idade")
var CPF = document.getElementById("CPF")

var aviso = document.getElementById("aviso")

function Calcular() {
    var nome = Nome.value
    var idade = Idade.value
    var cpf = CPF.value
    if (cpf == ""){
        aviso.innerHTML = `Digite seu CPF`
        exit
    }
    if (idade >= 18 && idade <= 65) {
        aviso.innerHTML = `<h4 class='passou'>${nome},você é obrigado a votar</h4>`
    } else  if (idade < 16){
        aviso.innerHTML = `${nome} você não pode votar`
    } else  {
        aviso.innerHTML = `${nome} você não é obrigado a votar`
    }
}
