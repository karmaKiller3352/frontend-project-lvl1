import readlineSync from 'readline-sync';
import { mess, randomNumber } from '../index.js';

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let element = start; progression.length < length; element += step) {
    progression.push(element);
  }
  return progression;
};

const makeTask = (collection, index) => {
  const progression = [...collection];
  progression[index] = '..';
  return progression.join(' ');
};

const findElement = (start, step, index) => start + index * step;

export default () => {
  const size = 10;
  const startNumber = randomNumber(10);
  const step = randomNumber(10);
  const progression = makeProgression(startNumber, step, size);
  const randIndex = randomNumber(10);
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
