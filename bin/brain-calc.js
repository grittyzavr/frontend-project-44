import { game } from '../src/index.js';

const taskOfGame = 'What is the result of the expression?';
const operators = ['*', '-', '+'];

const expression = () => {
  const randomNumber1 = () => Math.floor(Math.random() * 100);
  const randomNumber2 = () => Math.floor(Math.random() * 100);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return [randomNumber1(), operator, randomNumber2()];
};

const question = () => {
  let answer = '';
  const [firstNumber, operator, secondNumber] = expression();
  switch (operator) {
    case '*':
      answer = firstNumber * secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '+':
      answer = firstNumber + secondNumber;
      break;
    default:
      return null;
  }
  return [`${firstNumber} ${operator} ${secondNumber}`, String(answer)];
};

export default function brainCalc() {
  game(taskOfGame, question);
}
