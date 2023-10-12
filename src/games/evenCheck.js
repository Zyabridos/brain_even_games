import readlineSync from 'readline-sync';
import getRandomInRange from '../utils.js';

function isEven() {
  const randomNum = getRandomInRange();
  let answer = 'no';
  if (getRandomInRange() % 2 === 0) {
    answer = 'yes';
  }
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if ((userAnswer === 'yes' && randomNum % 2 === 0)
    || (userAnswer === 'no' && randomNum % 2 !== 0)) {
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return 42;
}

export default isEven;
