console.log('Olá, Javascript!')

var userName = 'Hiroshi'

document.getElementById('userName').innerHTML = userName

// Variáveis //

var nome = 'Mestre Yoda'
var idade = 900
var jedi = true

/*console.log(nome)
console.log(idade)
console.log(jedi)*/

// Operadores matemáticos //

var n1 = 5
var n2 = 5
var total = n1 + n2
console.log(total)

// Operadores de comparação //

var v1 = 5
var v2 = 5

var resultado = v1 === v2
console.log(resultado)

// Funções //

function soma(n1, n2) {
    console.log(n1 + n2)
}

soma(5, 5)

function boasVindas(nome) {
    alert('Sejam bem-vindo(a), ' + nome)
}

boasVindas('Hiroshi')

function soma2(n1, n2) {
    return n1 + n2
}

var resultado = soma(5, 5)
console.log(resultado)

// Controle de fluxos //

//dado
//quando
//então

// Arrays //
var gaveteiro = ['meias', 'gravatas', 'documentos', 'salgadinhos']


gaveteiro = gaveteiro.filter(function (g) {
    return g !== 'salgadinhos'
})

console.log(gaveteiro)

// Controles de repetição (loops) //

var personagens = ['Mestre Yoda', 'Anakin Skywalker', 'Princesa Leia', 'Darth Vader']

personagens.forEach(function (p) {
    console.log(p)
})

// Objetos //

var yoda = {
    nome: 'Mestre Yoda',
    idade: 900,
    jedi: true,
    status: 'Morto',
    mostraIdade: function(){
        console.log(`A idade do ${this.nome} é ${this.idade} anos`)
    }
}



console.log(yoda)
yoda.mostraIdade()

// Constantes //

//const nome = 'Anakin Skywalker'

//console.log(nome)