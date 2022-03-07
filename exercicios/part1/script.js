const twoNumbers = (value1, value2) => {
  if (value1 === '' || value2 === '') { throw new Error('Por favor, digite dois valores a serem somados.') }
}

const isNumber = (value1, value2) => {
  if (isNaN(value1) || isNaN(value2)) { throw new Error('Valor inválido! Por favor, digite um número.'); }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    twoNumbers(value1, value2)

    const num1 = Number(value1);
    const num2 = Number(value2);
    isNumber(num1, num2);

    const result = num1 + num2;
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  }
  catch (error) {
    document.getElementById('result').innerHTML = error.message
  }
  finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}