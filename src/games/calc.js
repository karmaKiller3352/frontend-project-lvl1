import playGame from '../index.js';
import randomNumber from '../utils.js';

const calculate = (number1, number2, sign) => {
  switch (sign) {
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    default:
      throw new Error('Error! Not used operation');
  }
};

const description = 'What is the result of the expression?';

const generateData = () => {
  // для упрощения вычислений, максимальное число будет равно 10
  const num1 = randomNumber(1, 10);
  const num2 = randomNumber(1, 10);
  const operations = ['+', '-', '*'];
  // выбираем случайную операцию
  const randomOperation = operations[randomNumber(0, operations.length - 1)];
  return {
    question: `${num1} ${randomOperation} ${num2}`,
    rightAnswer: String(calculate(num1, num2, randomOperation)),
  };
};

export default () => playGame(description, generateData);
