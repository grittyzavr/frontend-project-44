/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { nameOfUser } from './cli.js';

export const randomNumber = (number = 100) => Math.floor(Math.random() * number);

export function game(taskOfGame, question) {
  console.log(taskOfGame);
  for (let i = 0; i < 3; i += 1) {
    const [random, answer] = question();
    console.log(`Question: ${random} `);
    const userAnswer = readlineSync.question('Your answer: ');
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
