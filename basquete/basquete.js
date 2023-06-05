var placar1 = document.getElementById("placar1")
var placar2 = document.getElementById("placar2")
var placar3 = document.getElementById("placar3")
var placar4 = document.getElementById("placar4")

var valor1 = 0
var valor2 = 0
var valorbasquete1 = 0
var valorbasquete2 = 0

function Ponto1(valor) {
    valor1 += valor
    placar1.innerHTML = valor1
}
function Ponto2(valor) {
    valor2 += valor
    placar2.innerHTML = valor2
}
function Limpar() {
    
    placar1.innerHTML = "0"
    placar2.innerHTML =  "0"
     valor1 = 0
     valor2 = 0

}

function Ponto_basquete1(valor) {
    valorbasquete1 += valor
    placar3.innerHTML = valorbasquete1
}
function Ponto_basquete2(valor) {
    valorbasquete2 += valor
    placar4.innerHTML = valorbasquete2
}
function Limparbasquete() {
    
    placar3.innerHTML = "0"
    placar4.innerHTML =  "0"
     valorbasquete1 = 0
     valorbasquete2 = 0
     
}