const sweepstake = number => {
  const random = Math.floor(Math.random() * 5 + 1);
  return random === number ? 'Parabéns, você ganhou!' :  'Tente novamente';
}

const bet = (number, action) => action(number);