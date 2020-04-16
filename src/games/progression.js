import playGame from '../index.js';
import randomNumber from '../utils.js';

// создание строки вопроса
const buildQuestion = (start, step, length, replaceIndex) => {
  const question = [];
  for (let i = 0; i < length; i += 1) {
    question.push(start + (step * i));
  }
  question[replaceIndex] = '..';
  return question.join(' ');
};

const description = 'What number is missing in the progression?';

const generateData = () => {
  const size = 10; // задаем длину прогрессии
  const startNumber = randomNumber(0, 10); // стартовое число
  const step = randomNumber(0, 10); // шаг
  const hiddenElementIndex = randomNumber(0, size - 1); // случайный индекс для формирования вопроса
  const question = buildQuestion(startNumber, step, size, hiddenElementIndex);
  return {
    question,
    rightAnswer: String(startNumber + hiddenElementIndex * step),
  };
};

export default () => playGame(description, generateData);
