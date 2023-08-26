import readlineSync from 'readline-sync';
import { userName } from './cli.js';

function isEven() {
  const randomNum = Math.floor(Math.random() * 100);
  const wrongAnswer = '\'yes\' is wrong answer ;(. Correct answer was \'no\'.\n';
  console.log(`Question: ${randomNum}`);
  readlineSync.promptCL((userAnswer) => {
    if (userAnswer === 'yes' && randomNum % 2 === 0) {
      console.log('Correct!');
    } else if (userAnswer === 'yes' && randomNum % 2 !== 0) {
      console.log(wrongAnswer);
    } else if (userAnswer === 'no' && randomNum % 2 !== 0) {
      console.log('Correct!');
    } else if (userAnswer === 'no' && randomNum % 2 === 0) {
      console.log('wrong');
    } else console.log(`Your answer is wrong. Let's try again, ${userName}`);
  });
}

export default isEven;
