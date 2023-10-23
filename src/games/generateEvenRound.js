import { getRandomInRange } from '../utils.js';
import runEngine from '../index.js';

const isEven = (num) => num % 2 === 0;

function generateRound() {
  const question = getRandomInRange();
  const answer = String(isEven(question) ? 'yes' : 'no');
  return [question, answer];
}

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, generateRound);
};
