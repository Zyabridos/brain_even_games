import { getRandomInRange } from '../utils.js';
import runEngine from '../index.js';

const isEven = (num) => num % 2 === 0;

function generateRound() {
  const question = getRandomInRange();
  const answer = String(isEven(question) ? 'yes' : 'no');
  return [question, answer];
}

const runEvenGame = () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, generateRound);
};

export default runEvenGame;
