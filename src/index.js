import readlineSync from 'readline-sync';


const maxRound = 3; // максимальное количество задаваемых раундов

// запуск игры решил переделать циклом, т.к. проще реализация, требующая меньше условий

const playGame = (description, generateData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < maxRound; i += 1) {
    const { question, rightAnswer } = generateData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
