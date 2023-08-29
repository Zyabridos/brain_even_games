import readlineSync from 'readline-sync';

function isPrime() {
  const primeArray = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
    47, 53, 59, 61];
  const notPrimeArray = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25,
    26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49,
    50, 51, 52, 54, 55, 56, 57, 58, 60, 62];
  const randomNumber = Math.floor(Math.random() * 61) + 1;
  let answer = 'no';
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  for (let i = 0; i <= primeArray.length; i += 1) {
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
