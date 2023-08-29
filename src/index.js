import readlineSync from 'readline-sync';
import isEven from '../games/evenCheck.js';
import calc from '../games/calcCheck.js';
import findGCD from '../games/gcdCheck.js';
import isPrime from '../games/primeCheck.js';
import isProgressionCorrect from '../games/progressionCheck.js';
import createProgression from './createProgression.js';

function evenGame() {
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
      }
    }
  } console.log(`Let's try again, ${userName}!`);
}

function calcGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  if (calc() === true) {
    console.log('Correct!');
    if (calc() === true) {
      console.log('Correct!');
      if (calc() === true) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  } console.log(`Let's try again, ${userName}!`);
}

function gcdGame() {
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
      }
    }
  } console.log(`Let's try again, ${userName}!`);
}

function primeGame() {
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
      }
    }
  } console.log(`Let's try again, ${userName}!`);
}

function progressionGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  if (isProgressionCorrect() === true) {
    console.log('Correct!');
    if (isProgressionCorrect() === true) {
      console.log('Correct!');
      if (isProgressionCorrect() === true) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  } console.log(`Let's try again, ${userName}!`);
}

// function temp() {
//   createProgression();
// }

export {
  evenGame, calcGame, gcdGame, primeGame, progressionGame,
};
