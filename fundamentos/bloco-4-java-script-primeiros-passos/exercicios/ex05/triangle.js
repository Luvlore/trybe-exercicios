const a = 60;
const b = 60;
const c = 60;
const angulo = a + b + c;

if (angulo == 180) {
    console.log(true)
} else if (a < 0 || b < 0 || c < 0) {
    console.log('Ângulo inválido')
} else {
    console.log(false)
}