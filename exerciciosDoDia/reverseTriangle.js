n = 6;

for (let space = n; space > 0; space -= 1) {
    console.log(' '.repeat(space))
    for (let len = 0; len > n; len += 1) {
        console.log('*'.repeat(4));
    }
}