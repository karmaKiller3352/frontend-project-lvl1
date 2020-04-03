import playGame from '../index.js';
import randomNumber from '../utils.js';

const gcdGame = (n1, n2) => ((n1 % n2 === 0) ? n2 : gcdGame(n2, n1 % n2));

const rules = 'Find the greatest common divisor of given numbers.';

const generateData = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  return {
    question: `${num1} ${num2}`,
    rightAnswer: String(gcdGame(num1, num2)),
  };
};
export default () => playGame(rules, generateData);
