#!/usr/bin/env node
import { checkEven } from './brain-even.js';
import { nameOfUser } from '../src/cli.js';

function main() {
  console.log(`Hello, ${nameOfUser}!`);
}

main();
