import playGame from '../index.js';
import randomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const generateData = () => {
  // без num обойтись нельзя
  const num = randomNumber(1, 10);
  // т.к. она используется для формирования ответа и передается как тело вопроса
  const answer = isEven(num) ? 'yes' : 'no';
  return {
    question: num,
    rightAnswer: answer,
  };
};
export default () => playGame(description, generateData);
