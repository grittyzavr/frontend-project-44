#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */

import { game } from '../src/index.js';

const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
// TODO: перенести всю логику в index.js(возможно другие файлы)
// TODO:(количество раундов, рандом, ответ, приветствие,
// TODO:поздравление)
// eslint-disable-next-line import/prefer-default-export

export default function brainEven() {
  game(taskOfGame);
}
