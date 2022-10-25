import { game, randomNumber } from '../src/index.js';

const taskOfGame = 'What number is missing in the progression?';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
const expression = () => {
  const randomSum = randomNumber(10);
  const randomLength = getRandomInt(5, 15);
  const arrayExpression = Array.from({
    length: Math.ceil(randomLength),
  }, (_, i) => (i + 1) * randomSum);
  const randomItem = arrayExpression[Math.floor(Math.random() * arrayExpression.length)];
  arrayExpression[arrayExpression.indexOf(randomItem)] = '*';
  return [arrayExpression, String(randomItem)];
};

export default function brainProgression() {
  game(taskOfGame, expression);
}
