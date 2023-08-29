import readlineSync from 'readline-sync';

function calc() {
  const randomOperator = Math.floor(Math.random() * 3);
  const firstNumber = (Math.floor(Math.random() * 30) + 1);
  const secondNumber = Math.floor(Math.random() * 20);
  let expression = '';
  let expressionAnswer = 0;
  if (randomOperator === 0) {
    expression = `${firstNumber} + ${secondNumber}`;
    expressionAnswer = firstNumber + secondNumber;
  }
  if (randomOperator === 1) {
    expression = `${firstNumber} - ${secondNumber}`;
    expressionAnswer = firstNumber - secondNumber;
  }
  if (randomOperator === 2) {
    expression = `${firstNumber} * ${secondNumber}`;
    expressionAnswer = firstNumber * secondNumber;
  }
  console.log(`Question: ${expression}`);
  // console.log(expressionAnswer);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer) === expressionAnswer) {
    return true;
  }
  if (parseInt(userAnswer) !== expressionAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expressionAnswer}'.`);
  }
}
export default calc;
