// 3 -
// Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let jokenpo = ['tesoura', 'pedra', 'papel'];
let player1 = jokenpo[Math.floor(Math.random() * 3)];
let player2 = jokenpo[Math.floor(Math.random() * 3)];

console.log(`Player 1: ${player1}\n\t   VS\nPlayer 2: ${player2}\n`); //console.log('Player 1'+ player1 + '\nVS' + 'Player 2:' + player2)

if (player1 == 'tesoura' && player2 == 'papel' || player1 == 'pedra' && player2 == 'tesoura' || player1 == 'papel' && player2 == 'pedra') {
    console.log('Player 1 won!');
} else if (player2 == 'tesoura' && player1 == 'papel' || player2 == 'pedra' && player1 == 'tesoura' || player2 == 'papel' && player1 == 'pedra') {
    console.log('Player 2 won!');
} else {
    console.log('A Ties');
}
