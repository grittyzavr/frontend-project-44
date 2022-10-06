import readlineSync from 'readline-sync';

export function askName() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return name;
}

export const nameOfUser = askName();
