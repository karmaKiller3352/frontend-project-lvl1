import { randomNumber, playGame } from '../index.js';

const isEven = (num) => num % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const generateData = () => {
  const num = randomNumber();
  const answer = isEven(num) ? 'yes' : 'no';
  return {
    question: num,
    rightAnswer: answer,
  };
};
export default () => playGame(rules, generateData);
