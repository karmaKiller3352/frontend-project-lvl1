import readlineSync from 'readline-sync';

const maxRound = 3; // максимальное количество задаваемых раундов

// генератор случайных чисел, по умолчанию максимальное число равно 100, для упрощений подсчетов
const randomNumber = (maxNumber = 100) => Math.floor(Math.random() * maxNumber);

// запуск игры с внутренней рекурсивоной функцией, запускающейся нужное количество раз
// (может стоило сделать циклом?) показалось целесообразнее запустить рекурсивно
const playGame = (rules, generateData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  let round = 1;

  const start = () => {
    const data = generateData();
    console.log(`Question: ${data.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(data.rightAnswer)) {
      console.log('Correct');
      round += 1;
      return (round <= maxRound) ? start() : console.log(`Congratulations, ${name}!`);
    }
    return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${data.rightAnswer}".\nLet's try again, ${name}!`);
  };
  start();
};

export {
  playGame,
  randomNumber,
};
