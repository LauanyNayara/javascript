var tentativas = 0

var aviso = document.getElementById("aviso")
var resultados = document.getElementById("chutei")

var nrSorteado = parseInt(Math.random() * 100) + 1
console.log(nrSorteado)

function chute() { 
    var num = Number(prompt("dgite um número"))
    tentativas++
    if (num == nrSorteado) {

        aviso.innerHTML += `<h4>PARABÉNS VOCÊ ACERTOU O N°  ${nrSorteado} EM ${tentativas} TENTATIVAS  </h4>`
    } else if (num > nrSorteado ) {
        aviso.innerHTML += `<h4> o número é menor que ${num}  </h4>`
    } else if (num < nrSorteado ) {
        aviso.innerHTML += `<h4> o número é maior que ${num}  </h4>`
    }
}

function novojogo() {
    aviso.innerHTML = ""
    tentativas = 0
    nrSorteado = parseInt(Math.random() * 100) + 1
}
