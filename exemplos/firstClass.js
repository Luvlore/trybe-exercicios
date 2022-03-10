// FIRST-CLASS FUNCTIONS
// funções de primeira classe são aquelas que suportam as mesmas operações que estão disponíveis para os outros tipos.

// função guardada dentro de uma varivável

function sum(number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable);

// função guardada dentro de uma variável através da arrow function

const sum = (number1, number2) => number1 + number2;

// funções como argumentos de outras funções

const sayHello = () => 'hello trybers';

const printGreeting = callback => console.log(callback());

printGreeting(sayHello);

// retorno de uma função de outra função

const sumFixAmount = amount => number => amount - number;

const initialSum = sumFixAmount(15);
console.log(initialSum(5));
