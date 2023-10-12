import readlineSync from 'readline-sync';
import isEven from './games/evenCheck.js';
import calculateRandomExpression from './games/calcCheck.js';
import findGCD from './games/gcdCheck.js';
import isPrime from './games/primeCheck.js';
import generateRandomProgression from './games/progressionCheck.js';

const roundsCount = 3;

// function runEvenGame() {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   for (let i = 0; i < roundsCount; i++) {
//     const [question, answer] = generateRound();
//   }
// }

function runEvenGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  if (isEven() === true) {
    console.log('Correct!');
    if (isEven() === true) {
      console.log('Correct!');
      if (isEven() === true) {
        console.log(`Congratulations, ${userName}!`);
      } else console.log(`Let's try again, ${userName}!`);
    } else console.log(`Let's try again, ${userName}!`);
  } else console.log(`Let's try again, ${userName}!`);
}

function runCalcGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  if (calculateRandomExpression() === true) {
    console.log('Correct!');
    if (calculateRandomExpression() === true) {
      console.log('Correct!');
      if (calculateRandomExpression() === true) {
        console.log(`Congratulations, ${userName}!`);
      } else console.log(`Let's try again, ${userName}!`);
    } else console.log(`Let's try again, ${userName}!`);
  } else console.log(`Let's try again, ${userName}!`);
}

function runGCDGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  if (findGCD() === true) {
    console.log('Correct!');
    if (findGCD() === true) {
      console.log('Correct!');
      if (findGCD() === true) {
        console.log(`Congratulations, ${userName}!`);
      } else console.log(`Let's try again, ${userName}!`);
    } else console.log(`Let's try again, ${userName}!`);
  } else console.log(`Let's try again, ${userName}!`);
}

function runPrimeGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  if (isPrime() === true) {
    console.log('Correct!');
    if (isPrime() === true) {
      console.log('Correct!');
      if (isPrime() === true) {
        console.log(`Congratulations, ${userName}!`);
      } else console.log(`Let's try again, ${userName}!`);
    } else console.log(`Let's try again, ${userName}!`);
  } else console.log(`Let's try again, ${userName}!`);
}

function runProgressionGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  if (generateRandomProgression() === true) {
    console.log('Correct!');
    if (generateRandomProgression() === true) {
      console.log('Correct!');
      if (generateRandomProgression() === true) {
        console.log(`Congratulations, ${userName}!`);
      } else console.log(`Let's try again, ${userName}!`);
    } else console.log(`Let's try again, ${userName}!`);
  } else console.log(`Let's try again, ${userName}!`);
}

export {
  runEvenGame, runGCDGame, runPrimeGame, runProgressionGame, runCalcGame,
};
