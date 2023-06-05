var resultado = document.getElementById('resultado')

var filmes = ['Kingsman: Serviço Secreto ', 'O Menino que Descobriu o Vento', 'Alerta Vermelho',
    'Veloses e furiosos 8', 'Avatar', 'Vingadores;Ultimato', 'Titanic', 'Harry Potter', 'Interestelar']

function Pegarfilmes() {
    for (let index = 0; index < filmes.length; index++) {
        const filme = filmes[index];

        resultado.innerHTML += `<h3> Posição no vetor ${index} - filme: ${filme}</h3>`
    }
}