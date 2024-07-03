function sortear() {
    let campoResultado = document.getElementById('resultado');
    let qtdNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);
    let numerosSorteados = [];

    for(let i = 0; i < qtdNumeros; i++) {
        let numeroSorteado = obterNumeroAleatorio(doNumero, ateNumero);

        while(numerosSorteados.includes(numeroSorteado)) {
            numeroSorteado = obterNumeroAleatorio(doNumero, ateNumero);

        }
        
        numerosSorteados.push(numeroSorteado);
    }

    campoResultado.innerHTML = `<label class="texto__paragrafo"> Números sorteados: ${numerosSorteados} </label>`;

    ativarBotaoReiniciar();
    desativarBotaoSortear();

}

function reiniciar() {
    let campoResultado = document.getElementById('resultado');
    let qtdNumeros = document.getElementById('quantidade');
    let doNumero = document.getElementById('de');
    let ateNumero = document.getElementById('ate');

    campoResultado.innerHTML = `<label class="texto__paragrafo"> Números sorteados:  nenhum até agora </label>`;
    qtdNumeros.value = "";
    doNumero.value = "";
    ateNumero.value = "";

    desativarBotaoReiniciar();
    ativarBotaoSortear();

}


function obterNumeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function ativarBotaoReiniciar() {
    let btnReiniciar = document.getElementById('btn-reiniciar');
    btnReiniciar.classList = "container__botao";

}

function desativarBotaoReiniciar() {
    let btnReiniciar = document.getElementById('btn-reiniciar');
    btnReiniciar.classList = "container__botao-desabilitado";

}

function ativarBotaoSortear() {
    let btnSortear = document.getElementById('btn-sortear');
    btnSortear.classList = "container__botao";

}

function desativarBotaoSortear() {
    let btnSortear = document.getElementById('btn-sortear');
    btnSortear.classList = "container__botao-desabilitado";

}
