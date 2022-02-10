let numbers= [5, 3, 9, 19, 100, 70, 27, 35];

console.log('EXERCÍCIO 1');
for (let number of numbers) {
    console.log(number);
}


console.log('\nEXERCÍCIO 2');
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(sum);


console.log('\nEXERCÍCIO 3');
let arithmeticAverage = sum/numbers.length;
console.log(arithmeticAverage);


console.log('\nEXERCÍCIO 4');
if (arithmeticAverage > 20) {
    console.log('Valor maior que 20.');
} else {
    console.log('Valor menod que 20.');
}


console.log('\nEXERCÍCIO 5');
let higherNumber = numbers[0];

for (number of numbers) {
  if (number > higherNumber) {
    higherNumber = number;
  }
}

console.log(higherNumber);


console.log('\nEXERCÍCIO 6');
let odd = 0
for (let number of numbers) {
    if (number % 2 != 0) {
        odd += 1;
    }
}

if (odd > 0) {
    console.log(`A quantidade de números ímpares é de ${odd}`);
} else {
    console.log('Nenhum valor ímpar encontrado.');
}


console.log('\nEXERCÍCIO 7');
let lowerNumber = numbers[0];

for (let number of numbers) {
  if (number < lowerNumber) {
    lowerNumber = number;
  }
}

console.log(lowerNumber);


console.log('\nEXERCÍCIO 8');
let twentyFiveNumbers = [];

for (let index = 0; index <= 25; index += 1) {
    twentyFiveNumbers.push(index);
}

console.log(twentyFiveNumbers)

console.log('\nEXERCÍCIO 9');

