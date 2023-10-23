import { getRandomInRange } from '../utils.js';
import runEngine from '../index.js';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 20);
  const operatorIndex = getRandomInRange(0, 2);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[operatorIndex];
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = String(calculate(number1, number2, randomOperator));
  return [question, answer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, generateRound);
};
