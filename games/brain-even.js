#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */

import { game, randomNumber } from '../src/index.js';

const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
// eslint-disable-next-line import/prefer-default-export

const question = () => {
  const random = randomNumber();
  const isEven = (num) => num % 2 === 0;
  const even = isEven(random) ? 'yes' : 'no';
  return [random, even];
};

export default function brainEven() {
  game(taskOfGame, question);
}
