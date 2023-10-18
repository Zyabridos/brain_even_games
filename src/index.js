import readlineSync from 'readline-sync';
import generateEvenRound from './games/generateEvenRound.js';
import generateGCDRound from './games/generateGCDRound.js';
import generatePrimeRound from './games/generatePrimeRound.js';
// import generateProgressionRound from './games/generateProgressionRound.js';
import generateCalcRound from './games/generateCalcRound.js';
import makeWelcome from './cli.js';

const roundsCount = 3;

function runEvenGame() {
  const userName = makeWelcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateEvenRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer && i < roundsCount - 1) {
      console.log('Correct!');
    } else if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

function runCalcGame() {
  const userName = makeWelcome();
  console.log('What is the result of the expression?');
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateCalcRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === parseInt(userAnswer, 10) && i < roundsCount - 1) {
      console.log('Correct!');
    } else if (answer !== parseInt(userAnswer, 10)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

function runGCDGame() {
  const userName = makeWelcome();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateGCDRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === parseInt(userAnswer, 10) && i < roundsCount - 1) {
      console.log('Correct!');
    } else if (answer !== parseInt(userAnswer, 10)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

function runPrimeGame() {
  const userName = makeWelcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generatePrimeRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer && i < roundsCount - 1) {
      console.log('Correct!');
    } else if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);

// function runProgressionGame() {
//   const userName = makeWelcome();
//   console.log('What number is missing in the progression?');
//   for (let i = 0; i < roundsCount; i += 1) {
//     const [question, answer] = generateProgressionRound();
//     console.log(`Question: ${question}`);
//     const userAnswer = readlineSync.question('Your answer: ');
//     if (answer === parseInt(userAnswer, 10) && i < roundsCount - 1) {
//       console.log('Correct!');
//     } else if (answer !== parseInt(userAnswer, 10)) {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
//       return;
//     }
//   }
//   console.log(`Congratulations, ${userName}!`);
// }

export {
  runEvenGame, runGCDGame, runPrimeGame, runProgressionGame, runCalcGame,
};
