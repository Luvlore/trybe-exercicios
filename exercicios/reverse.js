function reverse(word) {
    if (word == word.split('').reverse('').join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(reverse('arara'))