var resultado = document.getElementById('resultado')
var inp = document.getElementById('input1')

var filmes = []

function input1() {

    filmes.push(inp.value)

    resultado.innerHTML = ''

    for (let index = 0; index < filmes.length; index++) {
        const filme = filmes[index];

        resultado.innerHTML += `<h3> ${filme}</h3>`
    }
}