// Carne - 400 gr por pessoa + de 6 horas = 650 
// cerveja - 1200 ml por pessoa + de 6 horas = 2000ml
// refrigerente/agua 1000ml por pessoa + 6 horas = 1500ml

// Criança valem por metade de um adulto, não contando a cerveja

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")


function calc() {

    // Valores dos inputs 
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    // funções dentro das variáveis 
    let carne = carnePP(duracao)
    let cerveja = cervejaPP(duracao)
    let bebida = bebidaPP(duracao)

    // calculo
    let qTotalCarne = carne * adultos + (carne / 2 * criancas)
    let qTotalCerveja = cerveja * adultos
    let qTotalBebidas = bebida * adultos + (bebida / 2 * criancas)

    // incrementação
    resultado.innerHTML = "<h1>Você vai precisar de:"

    resultado.innerHTML += `
    <div class="boxResultado">
        <img class="imgResultado" src="images/carne1.png" alt="Carne">
        <p class="pResultado">  ${qTotalCarne / 1000}Kg de carne
    </div>
    `
    resultado.innerHTML += `
    <div class="boxResultado">
        <img class="imgResultado" src="images/cerveja.png" alt="cerveja">
        <p class="pResultado">  ${Math.ceil(qTotalCerveja / 350)} latas de cerveja
    </div>
    `
    resultado.innerHTML += `
    <div class="boxResultado">
        <img class="imgResultado" src="images/bebida.png" alt="bebida">
        <p class="pResultado">${Math.ceil(qTotalBebidas / 2000)} Garrafa de Bebidas
    </div>
    `
}

// PP = Por Pessoa
function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}
function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}