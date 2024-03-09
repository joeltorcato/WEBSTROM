function calcularValorAcrescido(valor, percentagem) {
    return valor + (valor * percentagem);
}

let valor = 100; // enter number
let percentagem = 0.10; // 10% is equivalent to 0.10 in decimal

let resultado = calcularValorAcrescido(valor, percentagem);
console.log(resultado);