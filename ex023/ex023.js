var filmes = []
//Buscando as informações do localstorage gravadas no navegador
//Utilizamos o metodo getitem com o nome exatamente que utilizamos
filmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (filmes == null) {
    filmes = []
}
console.log(filmes);
exibirfilmesvetor()

function input2() {
    var inp = document.getElementById('input1').value
    var inp2 = document.getElementById('input2').value

    var filme = {
        Nome: inp,
        Link: inp2
    }

    filmes.push(filme)

    /* Utilizando o localStorage que ira gravar o nosso vetor de filmes no método setitem, preciso
    passar como parametro o nome do espaço que o navegador irá reservar e passo tambem o vetor
    de filmes convertido em formato JSON  */
    localStorage.setItem('bdFilmes', JSON.stringify(filmes))
    resultado.innerHTML = ''
    for (let i = 0; i < filmes.length; i++) {
        document.getElementById("resultado").innerHTML +=
            `<div>
         <p>${filmes[i].Nome}</p>
        <img src="${filmes[i].Link}" alt="" height = '100px' ;width = '100px';></p></div>`
    }
}
function sugerir() {
    var i = parseInt(Math.random() * filmes.length)

    document.getElementById("resultado-sugerido").innerHTML += `<div><h1>Sugerido</h1><p>${filmes[i].Nome}</p>
        <img src="${filmes[i].Link}" alt="" height = '100px' ;width = '100px';></p></div>`

}

function exibirfilmesvetor(){
    document
}

