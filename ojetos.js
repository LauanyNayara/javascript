var listaCarros = []

//Declarando um objeto e informando os atributos
//Todo objeto declaro com {}
var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'vw'
}

//Para exibir o atributo do objeto faço da seguinte forma objeto.atributo
console.log(carro.ano + ' - ' + carro.modelo)
console.log(`${carro.ano} - ${carro.modelo}`)


//Adicionando o objeto carro ao vetor listaCarros
listaCarros.push(carro)
console.log(listaCarros) // 1 - Só existe 1 item

//novo objeto- novo carro
carro = {
    ano: '2022',
    modelo: 'Onix',
    marca: 'GM'
}
listaCarros.push(carro)
console.log(listaCarros.length)

//Adicionando novo objeto carro ao vetor  listaCarros
listaCarros.push(carro)
console.log(listaCarros)

for (var andar in listaCarros){
    console.log ( listaCarros[andar].modelo )
}