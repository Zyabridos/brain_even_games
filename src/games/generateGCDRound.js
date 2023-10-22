import { getRandomInRange } from '../utils.js';

function generateGCDRound() {
  let firstRandomNumber = getRandomInRange(2, 100);
  let secondRandomNumber = getRandomInRange(2, 100);
  while (secondRandomNumber) {
    const t = secondRandomNumber;
    secondRandomNumber = firstRandomNumber % secondRandomNumber;
    firstRandomNumber = t;
  }
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const answer = String(firstRandomNumber);
  return [question, answer];
}
export default generateGCDRound;
