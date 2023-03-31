let saldo = 5000;


function somaSaldo(valor){
    soma = saldo + valor;
    return soma;
}

let somar = somaSaldo(1000);
console.log(somar);

function subtraiSaldo(valor){
    subtracao = saldo - valor;
    return subtracao
}

let subtrair = subtraiSaldo(500);
console.log(subtrair);

function multiplicarSaldo(valor){
    multiplicar = saldo * valor;
    return multiplicar
}

let multiplicando = multiplicarSaldo(0.05);
console.log(multiplicando);

function divideSaldo(valor){
    dividir = saldo / valor;
    return dividir
}

let divisor= divideSaldo(7);
console.log(divisor);