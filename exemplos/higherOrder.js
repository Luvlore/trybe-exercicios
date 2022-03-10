// HIGHER ORDER FUNCTIONS
// São funções que usam outras funções em suas operações, devendo aceit-á-las como parâmetros e/ou retorná-las.

/* EXEMPLO (botão):
  const button = document.querySelector('#signup-button');

  const registerUser = () => console.log('Registrado com sucesso!');

  button.addEventListener('click', registerUser);
*/

// perceba que criamos uma função que simula o registro de uma nova pessoa e ela foi passada como argumento pada uma segunda função, sendo essa o addEventListener, sendo esta, uma HOF.

// NOTA: First-Class são funções que são definidas pela forma como a linguagem trata suas funções, permitindo que sejam em operações que são usadas em outros tipos, como atribuições, retorno, parâmetro. Ja as HOF, são funções que atendem ao critério de receber como parâmetro e/ou retornar outra função.

// ESTRUTURANDO UMA HOF

// as HOF nos permitem compactar ações e não somente repassar valores.

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  };
};

// repeat(5, console.log);

// note que nessa função foi criado um laço de repetição que vai de acordo com o número que o usuário exigir, além de que também é possível trocar qual será sua saída, podendo ser o console.log, como no exemplo, ou qualquer outra, como console.table ou até mesmo um document.write caso o usuário queria imprimir isso numa página html.

/*
  repeat(3, number => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    };
  });

*/

// nessa implementação foi-se criado uma função que verifica os números que está sendo passado lá no action de repeat e apenas retorna os que são pares

const isEven = number => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  };
};

const isOdd = number => {
  if (number % 2 > 0) {
    console.log((number, 'is odd'));
  }
};

repeat(3, isEven); // testa quais números serão pares
repeat(3, isOdd) // testa quais números serão ímpares

// a função recebida como argumento pela HOF, também é conhecida por callback. repeat é uma HOF, por receber isEven e isOdd como callback, por exemplo

const numberGenerator = () => Math.random() * 100;

console.log(numberGenerator);

// ao executar esse código, a única coisa que se é recebida é a escrita da função e não o retorno dela em si. isso acontece por não termo utilizado o () para executá-la e por isso ela não gerou uma número aleatório.
// essa mesma lógica serve para quando se utiliza o callback dentro de outras funções.

// CALLBACK: Função passada como parâmetro