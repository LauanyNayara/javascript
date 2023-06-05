let resultado = document.getElementById("resultado")

function impar() {
    resultado.innerHTML = `<p>Relações de N° impares até 20</p><br>`
    for (let index = 0; index <= 20; index++) {
        if (index % 2 == 1) {

            document.getElementById("resultado").innerHTML += `${index} <br>`
        }
    }
}
