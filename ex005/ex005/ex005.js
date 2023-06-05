
var input = document.getElementById("numero")
var resultado = document.getElementById("resultado")

function Limpar() {
    resultado.innerHTML = " "

}

function Calcular() {
    var dobro = input.value * 2
    var metade = input.value / 2



    document.getElementById("resultado").innerHTML += (`<br> o dobro de ${input.value}é igual a 
${dobro}  e a metade é ${metade}`)
}


