import { game, randomNumber } from '../src/index.js';

const taskOfGame = 'Find the greatest common divisor of given numbers.';
function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

const expression = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  return [firstNumber, secondNumber];
};

const question = () => {
  const [firstNumber, secondNumber] = expression();
  return [`${firstNumber} ${secondNumber}`, String(gcd(firstNumber, secondNumber))];
};

export default function brainGcd() {
  game(taskOfGame, question);
}
