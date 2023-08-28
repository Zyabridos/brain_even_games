import readlineSync from 'readline-sync';
import isEven from '../games/evenCheck.js';
import compareCalculation from '../games/calcCheck.js';
// первый и третий ответы проходят тест, но если во втором
// вопросе ответить неверно, то все равно выводится третий
function evenGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  if (isEven() === true) {
    console.log('Correct!');
    if (isEven() === true) {
      console.log('Correct!');
    } if (isEven() === true) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}

function calcGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  if (compareCalculation() === true) {
    console.log('Correct!');
    if (compareCalculation() === true) {
      console.log('Correct!');
    } if (compareCalculation() === true) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}

export default calcGame;
