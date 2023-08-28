import readlineSync from 'readline-sync';

const firstNumber = (Math.floor(Math.random() * 30) + 1);
const secondNumber = Math.floor(Math.random() * 20);
let randomExpression = '';
const randomOperator = Math.floor(Math.random() * 3);
let rightAnswer = 0;
function makeRandomExpression() {
  switch (randomOperator) {
    case 0:
      randomExpression = `${firstNumber} + ${secondNumber}`;
      return randomExpression;
    case 1:
      randomExpression = `${firstNumber} * ${secondNumber}`;
      return randomExpression;
    default:
      randomExpression = `${firstNumber} - ${secondNumber}`;
      return randomExpression;
  }
}
const randomExpressionString = makeRandomExpression();

function calculateRandomExpression() {
  switch (randomOperator) {
    case 0:
      rightAnswer = firstNumber + secondNumber;
      return rightAnswer;
    case 1:
      rightAnswer = firstNumber * secondNumber;
      return rightAnswer;
    case 2:
      rightAnswer = firstNumber - secondNumber;
      return rightAnswer;
    default:
      rightAnswer = firstNumber - secondNumber;
      return rightAnswer;
  }
}

const theRightAnswer = calculateRandomExpression();

function compareCalculation() {
  console.log(`Question: ${randomExpressionString}`);
  console.log(theRightAnswer);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer) === theRightAnswer) {
    return true;
  }
}

export default compareCalculation;
