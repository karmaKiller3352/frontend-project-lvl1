import playGame from '../index.js';
import randomNumber from '../utils.js';

// создание прогрессии и создание вопроса решил объеденитьв одну функцию,
// возможно, это семантически неверно, но т.к. сам ряд прогрессии нигде не используется, сделал так
const buildQuestion = (start, step, length, replaceIndex) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (step * i));
  }
  const rightAnswer = String(progression[replaceIndex]);
  progression[replaceIndex] = '..';
  return {
    question: progression.join(' '),
    rightAnswer,
  };
};

const description = 'What number is missing in the progression?';

const generateData = () => {
  const size = 10; // задаем длину прогрессии
  const startNumber = randomNumber(0, 10); // стартовое число
  const step = randomNumber(0, 10); // шаг
  const randIndex = randomNumber(0, size - 1); // случайный индекс для формирования вопроса
  return buildQuestion(startNumber, step, size, randIndex);
};

export default () => playGame(description, generateData);
