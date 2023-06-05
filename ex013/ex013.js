var nome_ = document.getElementById("nome")

var Resultados = document.getElementById("resultados")
function previsao() {
    var mes = parseInt(Math.random()*14)

    switch (mes) {
        case 1:
            Resultados.innerHTML = `<h3> ${nome_.value} ,Você vai casar em JANEIRO</h3>`
            break
        case 2:
            Resultados.innerHTML = `<h3> ${nome_.value},Você vai casar em FEVEREIRO </h3>`
            break
        case 3:
            Resultados.innerHTML = `<h3> ${nome_.value},Você vai casar em MARÇO</h3>`
            break
        case 4:
            Resultados.innerHTML = `<h3> ${nome_.value},Você vai casar em ABRIL</h3>`
            break
        case 5:
            Resultados.innerHTML = `<h3> ${nome_.value},Você vai casar em MAIO</h3>`
            break
        case 6:
            Resultados.innerHTML = `<h3> ${nome_.value},Você vai casar em JUNHO</h3>`
            break
        case 7:
            Resultados.innerHTML = `<h3> ${nome_.value},Você vai casar em JULHO</h3>`
            break
        case 8:
            Resultados.innerHTML = `<h3> ${nome_.value},Você vai casar em AGOSTO</h3>`
            break
        case 9:
            Resultados.innerHTML = `<h3> ${nome_.value},Você vai casar em SETEMBRO</h3>`
            break
        case 10:
            Resultados.innerHTML = `<h3> ${nome_.value},Você vai casar em OUTUBRO</h3>`
            break
        case 11:
            Resultados.innerHTML = `<h3> ${nome_.value},Você vai casar em NOVEMBRO</h3>`
            break
        case 12:
            Resultados.innerHTML = `<h3> ${nome_.value},Você vai casar em DEZEMBRO</h3>`
            break
        default:
            Resultados.innerHTML = `<h4> ${nome_.value}, Você NÃO vai casar</h4>`
            break
    }
}