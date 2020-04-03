import playGame from '../index.js';
import randomNumber from '../utils.js';

// создание прогрессии с заданными параметрами
const makeProgression = (start, step, length) => {
  const progression = [];
  for (let element = start; progression.length < length; element += step) {
    progression.push(element);
  }
  return progression;
};

// созадние строки вопроса с заданным индексом
const makeTask = (collection, index) => {
  const progression = [...collection];
  progression[index] = '..';
  return progression.join(' ');
};

// вычисление числа по индексу в прогрессии
const findElement = (start, step, index) => start + index * step;

const rules = 'What number is missing in the progression?';

const generateData = () => {
  const size = 10; // задаем длину прогрессии
  const startNumber = randomNumber(10); // стартовое число
  const step = randomNumber(10); // шаг
  const randIndex = randomNumber(10); // случайный индекс для формирования вопроса
  const progression = makeProgression(startNumber, step, size);

  return {
    question: makeTask(progression, randIndex),
    rightAnswer: String(findElement(startNumber, step, randIndex)),
  };
};

export default () => playGame(rules, generateData);
