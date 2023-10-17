import readlineSync from 'readline-sync';
import generateEvenRound from './games/generateEvenRound.js';
import generateGCDRound from './games/generateGCDRound.js';
import generatePrimeRound from './games/generatePrimeRound.js';
import generateProgressionRound from './games/generateProgressionRound.js';
import generateCalcRound from './games/generateCalcRound.js';
import {
  generateEvenRules, generateCalcRules, generateGCDRules, generatePrimeRules,
  generateProgressionRules,
} from './generateGamesRules.js';

const roundsCount = 3;

function runEvenGame() {
  generateEvenRules();
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
    // console.log(`Congratulations, ${userName}!`);
  }
}

function runCalcGame() {
  generateCalcRules();
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
  // console.log(`Congratulations, ${userName}!`);
}

function runGCDGame() {
  generateGCDRules();
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
  // console.log(`Congratulations, ${userName}!`);
}

function runPrimeGame() {
  generatePrimeRules();
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
  // console.log(`Congratulations, ${userName}!`);
}

function runProgressionGame() {
  generateProgressionRules();
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateProgressionRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === parseInt(userAnswer, 10) && i < roundsCount - 1) {
      console.log('Correct!');
    } else if (answer !== parseInt(userAnswer, 10)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return;
    }
  }
  // console.log(`Congratulations, ${userName}!`);
}

export {
  runEvenGame, runGCDGame, runPrimeGame, runProgressionGame, runCalcGame,
};
