import playGame from '../index.js';
import randomNumber from '../utils.js';

// создание строки вопроса
const buildQuestion = (start, step, length, replaceIndex) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (step * i));
  }
  progression[replaceIndex] = '..';
  return progression.join(' ');
};

// получение значения индекса для ответа
const getValueOfIndex = (start, index, step) => start + index * step;

const description = 'What number is missing in the progression?';

const generateData = () => {
  const size = 10; // задаем длину прогрессии
  const startNumber = randomNumber(0, 10); // стартовое число
  const step = randomNumber(0, 10); // шаг
  const hiddenElementIndex = randomNumber(0, size - 1); // случайный индекс для формирования вопроса
  const question = buildQuestion(startNumber, step, size, hiddenElementIndex);
  const answer = getValueOfIndex(startNumber, hiddenElementIndex, step);
  return {
    question,
    rightAnswer: String(answer),
  };
};

export default () => playGame(description, generateData);
