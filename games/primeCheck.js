import readlineSync from 'readline-sync';

function isPrime() {
  const primeArray = [];
  const notPrimeArray = [];
  let count = 0;

  for (let j = 2; j <= 100; j += 1) {
    for (let i = 1; i <= j; i += 1) {
      if (j % i === 0) {
        count += 1;
      }
    }
    if (j === 1 || count === 2) {
      primeArray.push(j);
    } else notPrimeArray.push(j);
    count = 0;
  }

  const randomNumber = Math.floor(Math.random() * 97) + 2;
  let answer = 'no';
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  for (let i = 0; i <= notPrimeArray.length; i += 1) {
    if (randomNumber === primeArray[i]) {
      answer = 'yes';
    }
    if ((primeArray[i] === randomNumber && userAnswer === 'yes')
    || (randomNumber === notPrimeArray[i] && userAnswer === 'no')) {
      return true;
    }
  } console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
}

export default isPrime;
