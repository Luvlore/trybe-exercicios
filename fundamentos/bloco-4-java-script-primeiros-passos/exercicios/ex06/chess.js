const piece = 'ToRRe'.toLowerCase()

if (piece == 'bispo') {
    console.log('diagonais')
} else if (piece == 'cavalo') {
    console.log('movimentos em L')
} else if (piece == 'peao' || piece == 'peão') {
    console.log('duas casas para frente na primeira jogada. uma casa para frente em jogadas subsequentes')
} else if (piece == 'rainha') {
    console.log('diagonais ou linhas')
} else if (piece == 'rei') {
    console.log('uma casa em todas as direções')
} else if (piece == 'torre') {
    console.log('linhas')
}  else {
    console.log('peça inválida')
}