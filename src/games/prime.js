import readlineSync from 'readline-sync';
import { mess, randomNumber } from '../index.js';

const isPrime = (num) => {
  if (num === 1 || num === 0) return 'no';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

export default () => {
  const num = randomNumber();
  console.log(`${mess.question + num}`);
  const answer = readlineSync.question(mess.answer);
  const results = {
    result: true,
    received: answer,
    right: isPrime(num),
  };
  if (isPrime(num) !== answer) {
    results.result = false;
  }
  return results;
};
