import readlineSync from 'readline-sync';

let name = '';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

const evenGame = (questionsCount) => {
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'');

  const isEven = (num) => (!(num % 2) ? 'yes' : 'no');
  const randomNumber = () => Math.round(Math.random() * 100);

  let askCounter = 0;

  const ask = () => {
    if (askCounter === questionsCount) {
      console.log(`Congratulations, ${name}`);
    } else {
      const num = randomNumber();
      console.log(`Question: ${num}`);
      const answer = readlineSync.question('Your answer: ');
      if (isEven(num) === answer) {
        console.log('Correct!');
        askCounter += 1;
        ask();
      } else {
        console.log(`Let's try again, ${name}!`);
      }
    }
  };

  ask();
};
export {
  greetings,
  evenGame,
};
