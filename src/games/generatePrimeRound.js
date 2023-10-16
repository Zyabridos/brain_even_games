import { getRandomInRange, generateArrayWithPrimeNumbers } from '../utils.js';

function generatePrimeRound() {
  const primeArray = generateArrayWithPrimeNumbers();
  const question = getRandomInRange(2, 100);
  let answer = 'no';
  for (let i = 0; i <= 100; i += 1) {
    if (question === primeArray[i]) {
      answer = 'yes';
    }
  }
  return [question, answer];
}
export default generatePrimeRound;
