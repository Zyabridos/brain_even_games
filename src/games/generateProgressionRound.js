import { getRandomInRange } from '../utils.js';

function generateProgressionRound() {
  const progressionArray = [];
  const firstRandomNumber = getRandomInRange(1, 100);
  const stepOfProgression = getRandomInRange(1, 10);
  for (let i = 0; i <= 10; i += 1) {
    progressionArray.push(firstRandomNumber + i * stepOfProgression);
  }
  const indexOfhiddenNumber = getRandomInRange(1, 10);
  const answer = progressionArray[indexOfhiddenNumber];
  progressionArray[indexOfhiddenNumber] = '..';

  const question = `${progressionArray[0]} ${progressionArray[1]} ${progressionArray[2]} ${progressionArray[3]} ${progressionArray[4]} ${progressionArray[5]} ${progressionArray[6]} ${progressionArray[7]} ${progressionArray[8]} ${progressionArray[9]}`;
  return [question, answer];
}
export default generateProgressionRound;
