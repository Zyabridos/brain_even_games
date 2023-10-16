import { getRandomInRange } from '../utils.js';

function generateCalcRound() {
  const randomOperator = getRandomInRange(0, 2);
  const firstNumber = getRandomInRange(3, 20);
  const secondNumber = getRandomInRange();
  let question = '';
  let answer = 0;
  if (randomOperator === 0) {
    question = `${firstNumber} + ${secondNumber}`;
    answer = firstNumber + secondNumber;
  }
  if (randomOperator === 1) {
    question = `${firstNumber} - ${secondNumber}`;
    answer = firstNumber - secondNumber;
  }
  if (randomOperator === 2) {
    question = `${firstNumber} * ${secondNumber}`;
    answer = firstNumber * secondNumber;
  }
  return [question, answer];
}
export default generateCalcRound;
