//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = Math.floor(Math.random() * 60);
console.log(idade);

console.log(idade >= 18 ? 'Pode dirigr' : (idade < 18, 'Não pode dirigir'));