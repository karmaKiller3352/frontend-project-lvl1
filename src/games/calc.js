import { randomNumber, playGame } from '../index.js';

const toCount = (number1, number2, sign) => {
  switch (sign) {
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    default:
      return console.log('Error! Not used operation');
  }
};

const rules = 'What is the result of the expression?';

const generateData = () => {
  // для упрощения вычислений, максимальное число будет равно 10
  const num1 = randomNumber(10);
  const num2 = randomNumber(10);
  const operations = ['+', '-', '*'];
  const rand = randomNumber(operations.length);
  return {
    question: `${num1 + operations[rand] + num2}`,
    rightAnswer: toCount(num1, num2, operations[rand]),
  };
};

export default () => playGame(rules, generateData);
