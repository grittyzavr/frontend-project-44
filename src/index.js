/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { nameOfUser } from './cli.js';

export const randomNumber = () => Math.floor(Math.random() * 100);

export const rounds = 3;

export function game(taskOfGame, question, answer) {
  console.log(taskOfGame);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    console.log('Correct!');
  } if (userAnswer !== answer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}')`);
    console.log(`Let's try again, ${nameOfUser}`);
    return;
  }
  console.log(`Congratulations, ${nameOfUser}`);
}
