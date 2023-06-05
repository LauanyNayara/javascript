var placar1 = document.getElementById("placar1")
var placar2 = document.getElementById("placar2")

var valor1 = 0
var valor2 = 0
function Ponto1() {
    valor1++
    placar1.innerHTML = valor1
}
function Ponto2() {
    valor2++
    placar2.innerHTML = valor2
}
function Limpar() {

    placar1.innerHTML = "0"
    placar2.innerHTML = "0"
    valor1 = 0
    valor2 = 0
}