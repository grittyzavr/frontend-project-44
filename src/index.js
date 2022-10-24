/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { nameOfUser } from './cli.js';

export const randomNumbers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 100));

export function game(taskOfGame) {
  for (let i = 0; i < 3; i += 1) {
    console.log(taskOfGame);
    console.log(`Question: ${randomNumbers[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = (num) => num % 2 === 0;
    const answer = isEven(randomNumbers[i]) ? 'yes' : 'no';
    if (userAnswer === answer) {
      console.log('Correct!');
    } if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}')`);
      console.log(`Let's try again, ${nameOfUser}`);
      return;
    }
  }
  console.log(`Congratulations, ${nameOfUser}`);
}
