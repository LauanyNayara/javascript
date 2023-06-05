//Declarando um array vazio
var meuVetor = []

//Criando vetores com dados
var numeros = [4, 1, 18, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [20, 'Sesi', true]

//Acessando os dados de um vetor
console.log(nomes[1])
console.log(novoVetor[1])

//Verificando o tamanho de um vetor
console.log(numeros.length)

//Indice
var frutas = ['Maçã', 'Laranja', 'Pera', 'Morango', 'Uva']
//Faço um for para percorrer todo o tamanho do vetor
for (let index = 0; index < frutas.length; index++) {
  //Coloco o i no indice da fruta para pegar o valor de cada indice do vetor
  console.log(frutas[index])
}

//adicionando novo valor no FINAL do vetor
frutas.push('Abacaxi')
console.log(frutas.length)
console.log(frutas)

var novaListaFrutas = [] // []
novaListaFrutas.push('limão')
console.log(novaListaFrutas) // ['limão']
novaListaFrutas.push('Melância')
console.log(novaListaFrutas)  // ['limão','Melância']

novaListaFrutas[0] = 'Melão'
console.log(novaListaFrutas) // ['Melão','Melância']

novaListaFrutas[1] = 'Banana'
console.log(novaListaFrutas) // ['Melão','Banana']

novaListaFrutas.push('Melância')
console.log(novaListaFrutas) // ['Limão','Banana','melância']


for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[1])
}

// for in -> não preciso inicializar uma variavel de contador do loop
for (var indice in novaListaFrutas) {
  console.log(indice + ' - ' + novaListaFrutas[indice])
}

//Metodo forEach de um vetor percorre e retorna todos os elementos do vetor 
/* o metodo forEach - significa para cada item do vetor dentro do parenteses colocamos a variavel que irá 
receber o conteúdo de cada linha do vetor e com o => {} informamos o bloco que irá executar para cada linha */

novaListaFrutas.forEach(fruta => {
  console.log(' Fruta pelo forEach ', fruta)
})
//quando precisamos 
novaListaFrutas.forEach((fruta, pos) => {
  console.log(' Fruta pelo forEach com posição ', pos , fruta)
})
