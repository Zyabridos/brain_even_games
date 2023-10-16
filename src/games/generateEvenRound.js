import { getRandomInRange } from '../utils.js';

function generateEvenRound() {
  const question = getRandomInRange();
  let answer = 'no';
  if (question % 2 === 0) {
    answer = 'yes';
  }
  return [question, answer];
}
export default generateEvenRound;
