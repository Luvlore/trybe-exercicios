function smallestIndex(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
        console.log(indice)
        if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
        }
    }
    return indiceMenor;
};

teste = [2, 3, 6, 7, 10, 1];

console.log(smallestIndex(teste))