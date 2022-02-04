// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:

num = 0;

for (index = 1; index <= 50; index += 1) {
    console.log(`${num}+${index}`)
    num += index;
    console.log(num);
}

console.log(num);