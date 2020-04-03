import readlineSync from 'readline-sync';


const maxRound = 3; // максимальное количество задаваемых раундов

// запуск игры с внутренней рекурсивоной функцией, запускающейся нужное количество раз
// (может стоило сделать циклом?) показалось целесообразнее запустить рекурсивно
const playGame = (rules, generateData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  const start = (count) => {
    let round = count;
    const { question, rightAnswer } = generateData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct');
      round += 1;
      if (round <= maxRound) {
        start(round);
      } else {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${name}!`);
    }
  };
  start(1); // стартуем игру и передаем номер раунда
};

export default playGame;
