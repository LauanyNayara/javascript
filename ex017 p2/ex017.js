let resultado = document.getElementById("resultado")

let input = document.getElementById("input1");
let input2 = document.getElementById("input2");

function impar() {
    resultado.innerHTML = `<p> N° impares de ${input.value} até ${input2.value}</p><br>`
    for (let index = Number(input.value); index <= Number(input2.value); index++) {
        if (index % 2 == 1) {

            resultado.innerHTML += `${index} <br>`
        }
    }
}
