
/* comentérios em 
multiplas linhas */
//comentário em uma única linhao alert é utilizado para exibir uma mensagem em popup
// alert("olá mundo!!!")
/* No console conseguimos visualizar informações sem exibir na pagina */
// console.log("olá mundo!!! utilizando console!")
//criando uma função chamadaa quando clicamos no botão
function Botaoteste() {
    alert("Você clicou no botão")
}
//tipo de exibição de mensagem no console
console.error("Essa é uma mensagem de erro")
console.warn("Essa é uma mensagem de alerta")
console.info("Essa é uma mensagem de informação")

//declarando variaveis

//String - conjunto de caracteres - declarar com "" ou ''
var nome = "Lauany"
var sobrenome = "Almeida"

//Number - Todo número em JS é do tipo Number - declarar sem ""
var idade = 16

//Boolean - somente recebe true or false
var aprovado = true

console.log(typeof nome)//comando typeof para saber o tipo do dado

console.log(nome + " " + sobrenome)//Concatenando strings com o +
//Se utilizarmos o + com string ele concatena se utilizar com number ele soma
var n1 = 10
var n2 = 25
console.log(n1 + n2)
var n3 = "10"
var n4 = "25"
console.log(n3 + n4)//irá concatenar "juntar" as variaveis("1025")

n1 = n2 // Uma váriavel pode receber o valor de outra variavel
console.log("n1 = " + n1 + 'e o n2 = ' + n2)

var salario = 1290.85//para atribuir um valor decimal utilizar . e não ,
salario = salario + 200 //posso tambem somar a variavel com ela mesmo
console.log(salario)
salario += 200 // representação mais simplificada da expressão acima
console.log(salario)

//Antigamente para juntar texto e váriaveis faziamos assim
console.log('Olá, ' + nome + ' você tem ' + idade + ' anos e recebe R$ ' + salario)
//hoje utilizamos o TemplasteString forma mais simples
console.log(`olá, ${nome} você tem ${idade} anos e recebe R$ ${salario}`)

//função do botão para obter o nome
function BotaoNome() {
    //No prompt abre a opção para digitar algo
    var nome2 = prompt('Qual é o seu nome?')
    //no confirm abre texto com opção ok e cancelar
    confirm(`olá ${nome2}, entendeu JS?`)
}
function Botaosoma() {
    //receber valor de um prompt
    var sn1 = prompt('digite um número')
    //receber valor 2 de um prompt
    var sn2 = prompt('digite outro  número')
    //variavel soma receber valor 1 + valor  2 
    //parsefloat transforma texto em número
    //posso utilizar parsefloat() , number() ou parseint() para transforma texto em número
    var soma = parseFloat(sn1) + parseFloat(sn2)
    //exibindo um alert e valor da soma
    alert(`soma de ${sn1} + ${sn2} resulta em ${soma}`)
    /* alterando o elemento buscando ele pelo ID e alterando o conteudo do HTML, podemos ler da seguinte forma 
    no documente pegar o elemento pelo ID resultadoSoma e alterar o conteúdo do HTML pela string */
    document.getElementById("resultadoSoma").innerHTML += (`<br>  A soma dos números ${sn1}
    e ${sn2} é = ${soma}`)
}
function botaocidade() {
    //variavel nomecidade recebendo o comteudo digitado no input
    var nomecidade = document.getElementById('cidade').value
    document.getElementById('resultadoCidade').innerHTML = nomecidade
}

//operadores aritméticos e ordem de precedencia
//operador de soma
var opSoma = 5 + 2 // operador de soma +
console.log(opSoma) // 7
var opSubstituicao = 5 - 2 // operador de subtração -
console.log(opSubstituicao) // 3
var opMultiplicacao = 5 * 2 // operador de multiplicação *
console.log(opMultiplicacao) // 10
var opDivisao = 5 / 2 // operador de divisão /
console.log(opDivisao) // 2.5

var opExpoenciacao = 5 ** 2 // operador de expoentação **
console.log(opExpoenciacao) // 25
var opResto = 5 % 2 // operador de resto da divisão %
console.log(opResto) // 1


//ordem de precedencia
var ordemPrecedencia1 = 5 + 3 / 2
console.log(ordemPrecedencia1) // 6.5
var ordemPrecedencia2 = (5 + 3) / 2
console.log(ordemPrecedencia2) // 4

/* 1° ()
   2° **
   3° * /
   4° %
   5° +-
*/

//constantes - o valor não pode ser alterado depois de atribuido
const pi = 3.14
// pi = 3 - se o valor for alterado dará erro no javascript

//Auto atribuição
var n = 3
n = n + 3 // a variavel recebe ela mesmo m+ 3 
n += 3 // quer dizer o mesmo que a expressão acima

n++ // quando precisamos somar + 1 ao valor da variavel
n-- // quando precisamos subtrair -1 ao valor da variavel

//Operadores Relacionais
var n1 = 5
var n2 = 6
console.log(n1 > n2) // > Maior que 
console.log(n1 < n2) // < Menor que
console.log(n1 >= n2) // >= Maior ou igual que
console.log(n1 <= n2) // <= Menor ou igual que 
console.log(n1 == n2) // == igual 
console.log(n1 != n2) // !=  diferente - Não igual

//Estruturas condicionais
if (n1 > n2) {  // Verificando a condição entre parenteses
    // se a condição for verdadeira "entra" nesse bloco
    console.log("O n1 é maior que o n2")
} else {
    // se a condição NÃO  for verdadeira " entra" nesse bloco ELSE
    console.log("o n1 não é maior que o n2")
}

//exemplo de condição
var minhaIdade = 15 // se for maior que o parenteses do if é true e se for menor é false
if (minhaIdade >= 16) {
    console.log("Você pode votar")
} else {
    console.log("Você NÃO pode votar")
}

//Operadores lógicos

//&& representa o E
var login = "adm"
var senha = "123"
//Para entrar na condição TRUE as 2 condições precisam ser verdadeiras
if (login == "adm" && senha == "123") {
    //Executa esse bloco se pelo menos 1 condição for FALSE 
}

var media = 6
//Operadores OU --> || (pipe)
//Para entrar na condição TRUE  pelo menos 1 condição precisa ser verdadeiro
if (media == 6 || media == 5) {//Executa esse bloco quando 1 condição é TRUE pelo menos
} else {
    //Aqui entra se todas as condições forem falsas
}

//Estruturas condicionais encerradas

if (media >= 7) {
    console.log("APROVADO")
} else if (media >= 5) { //Podemos fazer um novo if junto com o else
    console.log("RECUPERAÇÃO")
} else if (media < 5) {
    console.log("REPROVADO")
}

//debugger
//Podemos utilizar o debugger para analizar o código linha a linha

//exit
//Quando queremos parar de executar uma função do JS utilizamos o exit

/* Para sortearmos um valor aleatório utilizamos o Math.random() 
    o Math.random retorna um número decimal e precisamos multiplicar pelo número 
    máximo que desejamos e somar 1 quando necessário
    o paseInt utilizamos para obter apenas a parte inteira do número  */
var nrSorteado = parseInt(Math.random() * 100) + 1
console.log(nrSorteado)

//Switch case
// E como se fosse vários if else de forma mais simples
var diaSemana = 3

switch (diaSemana) {
    case 1:
        console.log("Hoje é : domingo")
        break // para o switch case e não verifica as outras opções
    case 2:
        console.log("Hoje é : Segunda")
        break
    case 3:
        console.log("Hoje é : Terça")
        break
    case 4:
        console.log("Hoje é : Quarta")
        break
    case 5:
        console.log("Hoje é : Quinta")
        break
    case 6:
        console.log("Hoje é : Sexta")
        break
    case 7:
        console.log("Hoje é : Sabado")
        break
    default:
        console.log("Dia invalido")
        break
}


//Laços de repetição WHILE (que quer dizer enquanto)
//while (condição)
/* enquanto a condição do parenteses for verdadeira 
continua repetindo o código do bloco*/

var nrVidas = 5
while (nrVidas > 5) {
    console.log (`Você ainda tem ${nrVidas} `)
    nrVidas--
}
console.log("sair")

//Verificando se número é par com while
var contador = 1 // iniciando o contador de vezes que irá executar
while ( contador <= 10) { // Enquanto a condição for verdadeira 
    if (contador % 2 == 0){ // condiçaõ para o contador for par
        console.log (`${contador} é par`)
    } else {
        console.log (`${contador} é impar`)
    }
    contador++ //adicionamos +1 ao contador para não ficar em looping infinito
}

for (var cont = 1; cont <= 5; cont++){
    console.log(cont)
}
//For - Laços de repetição
//1ª Expressão var i = 1
//(aqui eu inicio o controle de vezes)
//2ª Expressão i <= 10
//(aqui nós verificamos a condição para se manter no loop)
//3ª expressão i++
//(aqui acrecentamos na variavel +1 vez)
// Exibindo
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

