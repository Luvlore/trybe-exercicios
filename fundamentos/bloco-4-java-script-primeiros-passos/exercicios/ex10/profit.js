const cost = 71;
const value = 90;
const profit = value - (cost * 1.2);
const profitPerThousand = profit * 1000

if (cost > 0 && value > 0 && profit > 0) {
    console.log('Seu lucro é de R$', profit,)
    console.log('E seu lucro ao vender 1000 unidades deste produto será de R$', profitPerThousand);
} else if (cost < 0) {
    console.log('Custo de produto inválido.');
} else if (value < 0) {
    console.log('Valor de produto inválido.');
} else if (profit < 0) {
    console.log('Lucro menor que zero.')
}