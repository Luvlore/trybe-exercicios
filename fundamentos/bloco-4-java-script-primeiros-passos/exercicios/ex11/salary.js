let salario = 3000;

if (salario <= 1556.94) {
    salarioInss = salario - (salario * 0.08);
} else if (salario >= 1556.95 && salario <= 2594.92) {
    salarioInss = salario - (salario * 0.09);
} else if (salario >= 2594.93 && salario <= 5189.82) {
    salarioInss = salario - (salario * 0.11);
} else if (salario >= 5189.83) {
    salarioInss = salario - 570.88;
} else if (salario < 0) {
    console.log('Salário inválido.')
}

if (salarioInss <= 1903.98) {
    salarioIr = salarioInss;
} else if (salarioInss >= 1903.99 && salarioInss <= 2826.65) {
    salarioIr = salarioInss * 0.075 - 142.8;
} else if (salarioInss >= 2826.66 && salarioInss <= 3751.05) {
    salarioIr = salarioInss * 0.015 - 354.8;
} else if (salarioInss >= 3752.06 && salarioInss <= 4664.68) {
     salarioIr = salarioInss * 0.225 - 636.13;
} else {
    salarioIr = salarioInss * 0.275 - 869.36
} 

salarioTotal = salarioInss - salarioIr

console.log('R$', salarioTotal)
