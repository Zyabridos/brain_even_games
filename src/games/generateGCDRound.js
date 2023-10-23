import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  } return getGcd(num2 % num1, num1);
};

function generateRound() {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
}

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, generateRound);
};
