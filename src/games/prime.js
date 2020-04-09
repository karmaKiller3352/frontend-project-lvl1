import playGame from '../index.js';
import randomNumber from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateData = () => {
  const num = randomNumber(-1, 100);
  return {
    question: num,
    rightAnswer: isPrime(num) ? 'yes' : 'no',
  };
};

export default () => playGame(description, generateData);
