import readlineSync from 'readline-sync';

function generateRandomProgression() {
  const progressionArray = [];
  const firstRandomNumber = Math.floor(Math.random() * 30);
  const stepOfProgression = Math.floor(Math.random() * 5) + 2;
  for (let i = 0; i <= 10; i += 1) {
    progressionArray.push(firstRandomNumber + i * stepOfProgression);
  }
  const indexOfhiddenNumber = Math.floor(Math.random() * 10);
  const hiddenNumber = progressionArray[indexOfhiddenNumber];
  progressionArray[indexOfhiddenNumber] = '..';

  console.log(`'Question: ${progressionArray[0]} ${progressionArray[1]} ${progressionArray[2]} ${progressionArray[3]} ${progressionArray[4]} ${progressionArray[5]} ${progressionArray[6]} ${progressionArray[7]} ${progressionArray[8]} ${progressionArray[9]}'`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (Number.isNaN(userAnswer) === true) console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
  if (parseInt(userAnswer, 10) === hiddenNumber) return true;
  if (parseInt(userAnswer, 10) !== hiddenNumber && Number.isNaN(userAnswer) === false) console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
  return progressionArray;
}

export default generateRandomProgression;
