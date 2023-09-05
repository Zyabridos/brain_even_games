import readlineSync from 'readline-sync';

function isEven() {
  const randomNum = Math.floor(Math.random() * 100);
  let answer = 'no';
  if (randomNum % 2 === 0) {
    answer = 'yes';
  }
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if ((userAnswer === 'yes' && randomNum % 2 === 0)
    || (userAnswer === 'no' && randomNum % 2 !== 0)) {
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
}

export default isEven;
