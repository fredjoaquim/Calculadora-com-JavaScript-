let valorDisplay = '0';
let primeiroNumero = null;
let operadorSelecionado = null;
let aguardandoSegundoNumero = false;

function atualizarDisplay() {
    document.getElementById('display').value = valorDisplay;
}

function adicionarNumero(numero) {
    if (aguardandoSegundoNumero) {
        valorDisplay = numero;
        aguardandoSegundoNumero = false;
    } else {
        valorDisplay = valorDisplay === '0' ? numero : valorDisplay + numero;
    }
    atualizarDisplay();
}

function adicionarOperador(operador) {
    if (primeiroNumero === null) {
        primeiroNumero = parseFloat(valorDisplay);
    } else if (!aguardandoSegundoNumero) {
        calcular();
        primeiroNumero = parseFloat(valorDisplay);
    }
    
    operadorSelecionado = operador;
    aguardandoSegundoNumero = true;
}

function calcular() {
    if (primeiroNumero === null || operadorSelecionado === null) return;
    
    const segundoNumero = parseFloat(valorDisplay);
    let resultado;
    
    switch (operadorSelecionado) {
        case '+':
            resultado = primeiroNumero + segundoNumero;
            break;
        case '-':
            resultado = primeiroNumero - segundoNumero;
            break;
        case '*':
            resultado = primeiroNumero * segundoNumero;
            break;
        case '/':
            resultado = segundoNumero !== 0 ? primeiroNumero / segundoNumero : 'Erro!';
            break;
        default:
            return;
    }
    
    valorDisplay = String(resultado);
    primeiroNumero = null;
    operadorSelecionado = null;
    aguardandoSegundoNumero = false;
    atualizarDisplay();
}

function limparTudo() {
    valorDisplay = '0';
    primeiroNumero = null;
    operadorSelecionado = null;
    aguardandoSegundoNumero = false;
    atualizarDisplay();
}

function calcularPorcentagem() {
    let numeroAtual = valorDisplay;
    let numero = parseFloat(numeroAtual);
    let resultado = numero / 100;
    valorDisplay = String(resultado);
    atualizarDisplay();
}

function trocarSinal() {
    if (valorDisplay === '0' || valorDisplay === '') return;
    
    if (valorDisplay.startsWith('-')) {
        valorDisplay = valorDisplay.substring(1);
    } else {
        valorDisplay = '-' + valorDisplay;
    }
    atualizarDisplay();
}

function adicionarParenteses(parenteses) {
    valorDisplay = valorDisplay === '0' ? parenteses : valorDisplay + parenteses;
    atualizarDisplay();
}

atualizarDisplay();
