import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};
const generateRound = () => {
  const start = getRandomInRange();
  const step = getRandomInRange(0, 10);
  const length = 10;
  const progressionArray = generateProgression(start, step, length);
  const indexOfhiddenNumber = getRandomInRange(0, 9);
  const answer = String(progressionArray[indexOfhiddenNumber]);
  progressionArray[indexOfhiddenNumber] = '..';
  const question = progressionArray.join(' ');
  return [question, answer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};
