var filmes = []
var imagens = []

function input2() {
    var inp = document.getElementById('input1').value
    var inp2 = document.getElementById('input2').value

    filmes.push(inp)
    imagens.push(inp2)
    resultado.innerHTML = ''
    for (let i = 0; i < filmes.length; i++) {
        document.getElementById("resultado").innerHTML += `<div><p>${filmes[i]}</p>
        <img src="${imagens[i]}" alt="" height = '100px' ;width = '100px';></p></div>`
    }
}
function sugerir() {
    var i = parseInt(Math.random()*filmes.length)

    document.getElementById("resultado-sugerido").innerHTML += `<div><h1>Sugerido</h1><p>${filmes[i]}</p>
        <img src="${imagens[i]}" alt="" height = '100px' ;width = '100px';></p></div>`

}

