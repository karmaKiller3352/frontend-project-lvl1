import readlineSync from 'readline-sync';
import { mess, randomNumber } from '../index.js';

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

export default () => {
  const size = 10; // задаем длину прогрессии
  const startNumber = randomNumber(10); // стартовое число
  const step = randomNumber(10); // шаг
  const randIndex = randomNumber(10); // случайный индекс для формирования вопроса
  const progression = makeProgression(startNumber, step, size);
  const counted = String(findElement(startNumber, step, randIndex));
  const ask = makeTask(progression, randIndex);
  console.log(`${mess.question} ${ask}`);
  const answer = readlineSync.question(mess.answer);

  const results = {
    result: true,
    received: answer,
    right: counted,
  };
  if (counted !== answer) {
    results.result = false;
  }
  return results;
};
