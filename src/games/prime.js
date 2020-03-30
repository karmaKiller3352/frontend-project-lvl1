import { randomNumber, playGame } from '../index.js';

const isPrime = (num) => {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateData = () => {
  const num = randomNumber();
  return {
    question: num,
    rightAnswer: isPrime(num) ? 'yes' : 'no',
  };
};

export default () => playGame(rules, generateData);
