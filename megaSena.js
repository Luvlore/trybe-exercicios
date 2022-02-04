let megaSenaJogo = [0, 1, 2, 3, 4, 5]

let isaacJogo = [0, 1, 2, 3, 4, 5]

let acertos = 0
for (let index = 0; index < isaacJogo.length; index += 1) {
    if (isaacJogo[index] == megaSenaJogo[index]) {
        acertos += 1;
    }
}

console.log(acertos)