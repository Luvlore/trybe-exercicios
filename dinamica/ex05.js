// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let carolzita = Math.floor(Math.random()*60);
let murilo = Math.floor(Math.random()*60);
let baeta = Math.floor(Math.random()*60);

console.log(carolzita, murilo, baeta);

if (carolzita > murilo  && baeta > murilo) {
    console.log('Murilo é o mais novo.');
} else if (murilo > carolzita && baeta > carolzita) {    
    console.log('Carolzita é a mais nova.');
} else {
    console.log('Baêta é a mais nova.');
}