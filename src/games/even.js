import playGame from '../index.js';
import randomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const generateData = () => {
  const question = randomNumber(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    rightAnswer,
  };
};
export default () => playGame(description, generateData);
