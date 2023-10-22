import { getRandomInRange } from '../utils.js';

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

const rules = 'What is the result of the expression?';

export { rules, generateRound };

// const getRound = () => {
//   const number1 = getRandomNumber(0, 10);
//   const operator = getRandomOperator();
//   const number2 = getRandomNumber(0, 10);
//   const question = `${number1} ${operator} ${number2}`;
//   const correctAnswer = String(getResultExpression(number1, operator, number2));
//   return [question, correctAnswer];
// };

// const generateRound = () => {
//   const number1 = getRandomInRange(1, 100);
//   const number2 = getRandomInRange(1, 100);
//   const operatorIndex = getRandomInRange(0, 2);
//   const operators = ['+', '-', '*'];
//   const randomOperator = operators[operatorIndex];
//   const question = `${number1} ${operators} ${number2}`;
//   const answer = String(calculate(number1, number2, operators));
//   return [question, answer];
// };

// const runGame = () => {
//   const rules = 'What is the result of the expression?';
//   runEngine(rules, generateRound);
// };

// console.log(calculate());
// console.log(generateRound());
// export default runGame;

// function generateCalcRound() {
//   const randomOperator = getRandomInRange(0, 2);
//   const firstNumber = getRandomInRange(3, 20);
//   const secondNumber = getRandomInRange();
//   let question = '';
//   let answer = 0;
//   switch (randomOperator) {
//     case randomOperator === 0:
//       question = `${firstNumber} + ${secondNumber}`;
//       answer = firstNumber + secondNumber;
//       break;
//     case randomOperator === 1:
//       question = `${firstNumber} - ${secondNumber}`;
//       answer = firstNumber - secondNumber;
//       break;
//     default:
//       question = `${firstNumber} * ${secondNumber}`;
//       answer = firstNumber * secondNumber;
//   }
//   return [question, answer];
// }
// export default generateCalcRound;
