import readlineSync from 'readline-sync';

let name = '';

const maxRound = 3;

export const mess = {
  greets: 'Welcome to the Brain Games!',
  hi: 'Hello, ',
  name: 'May I have your name? ',
  evengame: 'Answer \'yes\' if the number is even, otherwise answer \'no\'',
  calc: 'What is the result of the expression?',
  correct: 'Correct!',
  fail: 'Let\'s try again, ',
  win: 'Congratulations, ',
  question: 'Question: ',
  answer: 'Your answer: ',
  wrong: ' is wrong answer ;(. Correct answer was ',
};

const showWrong = (wrong, right) => {
  console.log(`"${wrong}" ${mess.wrong} "${right}".`);
};

export const showMessage = (message, str = '') => {
  if (str) {
    console.log(`${message + str}`);
  } else {
    console.log(`${message}`);
  }
};
const greetings = () => {
  showMessage(mess.greets);
  name = readlineSync.question(mess.name);
  showMessage(mess.hi, name);
};

export const randomNumber = (maxNumber = 100) => Math.floor(Math.random() * maxNumber);

const playGame = (turn, game, rules) => {
  let round = turn;
  if (round === maxRound) {
    showMessage(mess.win, name);
  } else {
    if (round === 0) {
      greetings();
      showMessage(rules);
    }
    const { result, received, right } = game();
    if (result) {
      showMessage(mess.correct);
      round += 1;
      playGame(round, game, rules);
    } else {
      showWrong(received, right);
      showMessage(mess.fail, name);
    }
  }
};

// playGame(round, evenGame, mess.evengame );

export {
  greetings,
  playGame,
};
