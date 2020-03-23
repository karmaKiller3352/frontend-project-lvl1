import readlineSync from 'readline-sync';
import { mess, randomNumber, showMessage } from '../index.js';

const isEven = (num) => (!(num % 2) ? 'yes' : 'no');

export default () => {
  const num = randomNumber();
  showMessage(mess.question, num);
  const answer = readlineSync.question(mess.answer);
  const results = {
    result: true,
    received: answer,
    right: isEven(num),
  };
  if (isEven(num) !== answer) {
    results.result = false;
  }
  return results;
};
