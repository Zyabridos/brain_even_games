import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

function generateRound() {
  const start = getRandomInRange();
  const step = getRandomInRange(0, 10);
  const length = 10;
  const progressionArray = generateProgression(start, step, length);
  const indexOfhiddenNumber = getRandomInRange(0, 9);
  const answer = String(progressionArray[indexOfhiddenNumber]);
  progressionArray[indexOfhiddenNumber] = '..';
  let question = '';
  for (let i = 0; i < length; i += 1) {
    question = `${question} ${progressionArray[i]}`;
  }
  return [question.slice(1), answer];
}

export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};
