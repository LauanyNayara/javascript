var Nome = document.getElementById("nome")
var Idade = document.getElementById("Idade")
var resultado = document.getElementById("resultado")

function Calcular() {
    var nome = Nome.value
    var idade = Idade.value
    var result = ``

    if (idade >= 18) {
        resultado.innerHTML = `<h4 class='passou'>PARABÉNS ${nome} pode tirar a CNH</h4>`
        resultado.innerHTML += `<img src="aprovado.jpg" >`
    } else {
        resultado.innerHTML = `<h4 class='naopassou'>NÃO FOI DESSA VEZ ${nome}  não pode tirar a CNH</h4>`
        resultado.innerHTML += `<img src="cnh.png" >`
    }
}