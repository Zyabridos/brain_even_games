import readlineSync from 'readline-sync';

function findGCD() {
  let firstRandomNumber = Math.floor(Math.random() * 47) + 3;
  let secondRandomNumber = Math.floor(Math.random() * 51) + 3;
  console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
  while (secondRandomNumber) {
    const t = secondRandomNumber;
    secondRandomNumber = firstRandomNumber % secondRandomNumber;
    firstRandomNumber = t;
  }
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer, 10) === firstRandomNumber) {
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${firstRandomNumber}'.`);
  return secondRandomNumber;
}

export default findGCD;
