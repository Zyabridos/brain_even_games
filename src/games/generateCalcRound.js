import { getRandomInRange } from '../utils.js';
```javascript
function generateCalcRound() {
  const randomOperator = getRandomInRange(0, 2);
  const firstNumber = getRandomInRange(3, 20);
  const secondNumber = getRandomInRange();
  let question = '';
  let answer = 0;
  switch (randomOperator) {
    case randomOperator === 0:
      question = `${firstNumber} + ${secondNumber}`;
      answer = firstNumber + secondNumber;
      break;
    case randomOperator === 1:
      question = `${firstNumber} - ${secondNumber}`;
      answer = firstNumber - secondNumber;
      break;
    default:
      question = `${firstNumber} * ${secondNumber}`;
      answer = firstNumber * secondNumber;
  }
  return [question, answer];
}
  ```
export default generateCalcRound;
