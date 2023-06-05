var resultado = document.getElementById("resultado")
var nome = document.getElementById("nome")

function previsao() {
 var num = Number (nome.value)
 var contador = 1

 resultado.innerHTML =  `<p>Tabuada do ${num}</p><br>`

 while ( contador <= 10) {

   resultado.innerHTML += `<p>${num} x ${contador} = ${num*contador}</p>`
    contador++
 }

}
//for (let index = 0; index <= 10; index++) {
   // resultado.innerHTML += `<p>${num} x ${contador} = ${num*contador}</p>`}