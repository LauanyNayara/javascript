 
function imagens() {
    var numero = document.getElementById(`input1`)
    var resultado = document.getElementById(`resultado`)
      
    for (let index = 0; index < numero.value; index++) {
        resultado.innerHTML += `<img src="coração.jpg" alt="">`
    }
}
