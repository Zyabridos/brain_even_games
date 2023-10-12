import readlineSync from 'readline-sync';
import getRandomInRange from '../utils.js';

function findGCD() {
  let firstRandomNumber = getRandomInRange();
  let secondRandomNumber = getRandomInRange();
  console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
  while (secondRandomNumber) {
    const t = secondRandomNumber;
    secondRandomNumber = firstRandomNumber % secondRandomNumber;
    firstRandomNumber = t;
  }
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer, 10) === firstRandomNumber) {
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${firstRandomNumber}'.`);
  return secondRandomNumber;
}

export default findGCD;
