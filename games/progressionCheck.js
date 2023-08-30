import readlineSync from 'readline-sync';

function isProgressionCorrect() {
  const progressionArray = [];
  const firstRandomNumber = Math.floor(Math.random() * 30);
  const stepOfProgression = Math.floor(Math.random() * 5) + 2;
  for (let i = 0; i <= 10; i += 1) {
    progressionArray.push(firstRandomNumber + i * stepOfProgression);
  }
  const indexOfhiddenNumber = Math.floor(Math.random() * 9) + 1;
  const hiddenNumber = progressionArray[indexOfhiddenNumber];
  progressionArray[indexOfhiddenNumber] = ' .. ';

  console.log(`Question: ${progressionArray[0]} ${progressionArray[1]} ${progressionArray[2]} ${progressionArray[3]} ${progressionArray[4]} ${progressionArray[5]} ${progressionArray[6]} ${progressionArray[7]} ${progressionArray[8]} ${progressionArray[9]}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer) === hiddenNumber) return true;
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
}

export default isProgressionCorrect;
