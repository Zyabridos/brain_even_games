import readlineSync from 'readline-sync';

function isEven() {
  const randomNum = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if ((userAnswer === 'yes' && randomNum % 2 === 0)
    || (userAnswer === 'no' && randomNum % 2 !== 0)) {
    return true;
  } if (userAnswer === 'yes' && randomNum % 2 !== 0) {
    return console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
  }
  if (userAnswer === 'no' && randomNum % 2 === 0) {
    return console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
  }
}

export default isEven;
