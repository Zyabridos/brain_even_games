import readlineSync from 'readline-sync';
import createProgression from '../src/createProgression.js';

const progressionArray = createProgression();

function isProgressionCorrect() {
  const indexOfhiddenNumber = Math.floor(Math.random() * 10);
  const hiddenNumber = progressionArray[indexOfhiddenNumber];
  progressionArray[indexOfhiddenNumber] = ' .. ';
  console.log(indexOfhiddenNumber);
  console.log(hiddenNumber);
  console.log(`${progressionArray}`);

  console.log(`Question: ${progressionArray}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer) === hiddenNumber) return true;
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
}

export default isProgressionCorrect;
