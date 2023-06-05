 var vidas = 0

function imagens(valor) {
    vidas += valor 
    document.getElementById("resultado").innerHTML= ""

    for (let index = 0; index < vidas; index++) {
        document.getElementById("resultado").innerHTML += `<img src="coração.jpg" alt="">`
    }
    
}
