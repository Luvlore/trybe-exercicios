const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correction = (rAnswers, sAnswers) => {
  let score = 0;
  for (const answer in rAnswers) {
    if (rAnswers[answer] === sAnswers[answer]) {
      score += 1;
    } else if (rAnswers[answer] !== sAnswers[answer] && sAnswers[answer] !== 'N.A') {
      score -= 0.5;
    }
  }
  return score;
}

const template = (rightAnswers, studentAnswers, action) => `${action(rightAnswers, studentAnswers)} pontos.`;
