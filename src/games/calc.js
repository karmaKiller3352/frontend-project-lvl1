import readlineSync from 'readline-sync';
import { mess, randomNumber, showMessage } from '../index.js';

export default () => {
  const num1 = randomNumber(10);
  const num2 = randomNumber(10);
  const operations = ['+', '-', '*'];
  const rand = randomNumber(operations.length);
  const str = `${num1 + operations[rand] + num2}`;
  showMessage(mess.question, str);
  const counted = String(eval(str));
  const answer = readlineSync.question(mess.answer);

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
