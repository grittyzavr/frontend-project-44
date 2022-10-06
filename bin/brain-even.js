#!/usr/bin/env node
/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';
import { nameOfUser } from '../src/cli.js';

const randomNumbers = [
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
];

// eslint-disable-next-line import/prefer-default-export
export function checkEven() {
  let rightAnswer = '';
  for (const randomNumber of randomNumbers) {
    console.log(`Question: ${randomNumber}`);
    if (randomNumber % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes') {
      if (randomNumber % 2 === 0) {
        console.log('Correct!');
      } else {
        console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'');
        console.log(`Let's try again, ${nameOfUser}`);
        // eslint-disable-next-line no-useless-return
        return;
      }
    } else if (answer === 'no') {
      if (randomNumber % 2 !== 0) {
        console.log('Correct!');
      } else {
        console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'');
        console.log(`Let's try again, ${nameOfUser}`);
        // eslint-disable-next-line no-useless-return
        return;
      }
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      return;
    }
  }
  console.log(`Congratulations, ${nameOfUser}`);
}

checkEven();
