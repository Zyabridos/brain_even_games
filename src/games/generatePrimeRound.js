import { getRandomInRange, getPrimeArray } from '../utils.js';

function generatePrimeRound() {
  const upperNumberInArray = 100;
  const primeArray = getPrimeArray(upperNumberInArray);
  const question = getRandomInRange();
  let answer = 'no';
  for (let i = 0; i <= 100; i += 1) {
    if (question === primeArray[i]) {
      answer = 'yes';
    }
  }
  return [question, answer];
}
export default generatePrimeRound;
