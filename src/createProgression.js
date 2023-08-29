import readlineSync from 'readline-sync';

function createProgression() {
  const progressionArray = [];
  const firstRandomNumber = Math.floor(Math.random() * 30);
  const stepOfProgression = Math.floor(Math.random() * 5) + 2;
  for (let i = 0; i <= 10; i += 1) {
    progressionArray.push(firstRandomNumber + i * stepOfProgression);
  }
  console.log(progressionArray);
  const indexOfhiddenNumber = Math.floor(Math.random() * 10);
  const hiddenNumber = progressionArray[indexOfhiddenNumber];
  progressionArray[indexOfhiddenNumber] = ' .. ';

  console.log(`Question: ${progressionArray}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer) === hiddenNumber) return true;
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
}

export default createProgression;
