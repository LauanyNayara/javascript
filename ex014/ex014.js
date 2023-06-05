var resultado = document.getElementById("resultado")

var numero = 0


function Sortearnumero() {
    while (numero < 6) {
        numero++
        resultado.innerHTML += `  ${parseInt(Math.random() * 60) + 1}` 
    }
}