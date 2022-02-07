let array = ['java', 'javascript', 'python', 'html', 'css'];
higherWord = array[0];
smallestWord = array[0];

for (word of array) {
    if (word.length > higherWord.length){
        higherWord = word;
    } else if (word.length < smallestWord.length) {
        smallestWord = word;
    }
}

console.log(higherWord, smallestWord);