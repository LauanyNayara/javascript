var Nome = document.getElementById("nome")
var Nota1 = document.getElementById("nota")
var Nota2 = document.getElementById("nota2")
var resultado = document.getElementById("resultado")

function Calcular() {
    var nome = Nome.value
    var n1 = Number(Nota1.value);
    var n2 = Number(Nota2.value);
    if (n1 > 10) {
        alert('Não pode nota maior que 10')
        return
    }
    if (n2 > 10) {
        alert('Não pode nota maior que 10')
        return
    }
    var media = (n1 + n2) / 2
    var result = `<div class="media1"> <p> O aluno(a) ${nome}
    tirou nota ${n1} e ${n2} sua média foi ${media} </p>`

    if (media >= 7) {
        result += `<h4>PASSOU DE ANO</h4></div>`
    } else {
        result += '<h4 >REPROVOU</h4>'
    }

    resultado.innerHTML = result
   

}

