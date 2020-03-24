import readlineSync from 'readline-sync';

let name = '';

const maxRound = 3;

const mess = {
  greets: 'Welcome to the Brain Games!',
  hi: 'Hello, ',
  name: 'May I have your name? ',
  evengame: 'Answer \'yes\' if the number is even, otherwise answer \'no\'',
  calc: 'What is the result of the expression?',
  gcdgame: 'Find the greatest common divisor of given numbers.',
  progressiongame: 'What number is missing in the progression?',
  correct: 'Correct!',
  fail: 'Let\'s try again, ',
  win: 'Congratulations, ',
  question: 'Question: ',
  answer: 'Your answer: ',
  wrong: 'is wrong answer ;(. Correct answer was',
};

const greetings = () => {
  console.log(mess.greets);
  name = readlineSync.question(mess.name);
  console.log(`${mess.hi + name}`);
};

const randomNumber = (maxNumber = 100) => Math.floor(Math.random() * maxNumber);


const playGame = (game, rules, turn = 0) => {
  let round = turn;
  if (round === maxRound) {
    console.log(`${mess.win + name}`);
  } else {
    if (round === 0) {
      greetings();
      console.log(rules);
    }
    const { result, received, right } = game();
    if (result) {
      console.log(mess.correct);
      round += 1;
      playGame(game, rules, round);
    } else {
      console.log(`"${received}" ${mess.wrong} "${right}"`);
      console.log(`${mess.fail + name}`);
    }
  }
};

// playGame(round, evenGame, mess.evengame );

export {
  greetings,
  playGame,
  mess,
  randomNumber,
};
