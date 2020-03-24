import readlineSync from 'readline-sync';
import { mess, randomNumber } from '../index.js';

const gcdGame = (n1, n2) => ((n1 % n2 === 0) ? n2 : gcdGame(n2, n1 % n2));

export default () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  console.log(`${mess.question} ${num1} ${num2}`);
  const answer = readlineSync.question(mess.answer);
  const counted = String(gcdGame(num1, num2));
  const results = {
    result: true,
    received: answer,
    right: counted,
  };
  if (counted !== answer) {
    results.result = false;
  }
  return results;
};
