var resultado = document.getElementById("resultado")
var nome = document.getElementById("nome")

function previsao() {
 let nr = Number (document.getElementById("nr").value)
 document.getElementById("resultado").innerHTML = `Tabuada do ${nr} <br><br>`
 resultado.innerHTML =  `<p>Tabuada do ${num}</p><br>`
 for (let index = 0; index <= 10; index++) {

    document.getElementById("resultado").innerHTML += `${nr} x ${i} = ${res}<br>`
}
}
//while ( contador <= 10) {

    //resultado.innerHTML += `<p>${num} x ${contador} = ${num*contador}</p>`
    // contador++ }