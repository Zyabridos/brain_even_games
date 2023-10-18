import { getRandomInRange } from '../utils.js';

function generateProgressionRound() {
  const progressionArray = [];
  const firstRandomNumber = getRandomInRange();
  const stepOfProgression = getRandomInRange(1, 10);
  const lengthOfProgression = 10;
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progressionArray.push(firstRandomNumber + i * stepOfProgression);
  }
  const indexOfhiddenNumber = getRandomInRange(1, 10);
  const answer = progressionArray[indexOfhiddenNumber];
  progressionArray[indexOfhiddenNumber] = '..';
  let question = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    question = `${question} ${progressionArray[i]}`;
  }
  return [question.slice(1), answer];
}

export default generateProgressionRound;
