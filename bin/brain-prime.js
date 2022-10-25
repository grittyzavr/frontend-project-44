import { game, randomNumber } from '../src/index.js';

const taskOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
function testPrime(n) {
  if (n === 1) {
    return false;
  } if (n === 2) {
    return true;
  }
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
}

const question = () => {
  const randomQuestionNumber = randomNumber(100);
  let answer = '';
  if (testPrime(randomQuestionNumber) === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [randomQuestionNumber, answer];
};
export default function brainPrime() {
  game(taskOfGame, question);
}
