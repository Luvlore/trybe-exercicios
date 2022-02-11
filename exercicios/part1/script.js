let elemento = document.getElementById('elementoOndeVoceEsta');
console.log(elemento.parentElement.style.color = 'grey');

let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoDoFilho.innerText = 'Texto no filho do filho aqui';

let pai = document.getElementById('pai');
console.log(pai.firstElementChild);

console.log(elemento.previousSibling);

console.log(elemento.nextSibling)

console.log(elemento.nextSibling.nextSibling);

console.log(pai.lastElementChild.previousElementSibling)

let irmao = document.createElement('section');
pai.appendChild(irmao)

let filhoVoce = document.createElement('section');
elemento.appendChild(filhoVoce);

let filhoDoFilhoDoFilho = document.createElement('section');
filhoDoFilho.appendChild(filhoDoFilhoDoFilho);

console.log(filhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling);