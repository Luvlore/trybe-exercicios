/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function changeText(texto) {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerText = texto;
}

function changeColor(element, color) {
    let colorChange = document.querySelector(element);
    colorChange.style.backgroundColor = color;
}

function text(text) {
    let textH1 = document.getElementsByTagName('h1')[0];
    textH1.innerHTML = text;
}

function paragraphUpperCase() {
    let paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}

function paragraphConsole() {
    let paragraph = document.getElementsByTagName('p');
    for (let index = 0; index < paragraph.length; index += 1) {
        console.log(paragraph[index].innerHTML);
    }
}

changeText('testeee');
changeColor('.main-content', 'rgb(46,164,109)');
changeColor('.center-content', 'white');
text('Exercícios 5.1 - JavaScript');
paragraphUpperCase()

paragraphConsole()