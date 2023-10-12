import readlineSync from 'readline-sync';
import getRandomInRange from '../utils.js';

function isPrime() {
  const primeArray = [];
  const notPrimeArray = [];
  let count = 0;

  for (let j = 2; j <= 100; j += 1) {
    for (let i = 1; i <= j; i += 1) {
      if (j % i === 0) {
        count += 1;
      }
    }
    if (j === 1 || count === 2) {
      primeArray.push(j);
    } else notPrimeArray.push(j);
    count = 0;
  }

  let answer = 'no';
  console.log(`Question: ${getRandomInRange()}`);
  const userAnswer = readlineSync.question('Your answer: ');
  for (let i = 0; i <= notPrimeArray.length; i += 1) {
    if (getRandomInRange() === primeArray[i]) {
      answer = 'yes';
    }
    if ((primeArray[i] === getRandomInRange() && userAnswer === 'yes')
    || (getRandomInRange() === notPrimeArray[i] && userAnswer === 'no')) {
      return true;
    }
  } console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return answer;
}

export default isPrime;
