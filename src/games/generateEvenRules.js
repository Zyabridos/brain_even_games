function generateQuestion() {
  let question = '';
  const progressionArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const lengthOfProgression = 10;
  for (let i = 0; i < lengthOfProgression.length; i += 1) {
    question = ${progressionArray[i]};
  }
  return question;
}
console.log(generateQuestion());
