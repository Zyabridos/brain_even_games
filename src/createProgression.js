function createProgression() {
  const progressionArray = [];
  const firstRandomNumber = Math.floor(Math.random() * 30);
  const stepOfProgression = Math.floor(Math.random() * 5) + 2;
  for (let i = 0; i <= 10; i += 1) {
    progressionArray.push(firstRandomNumber + i * stepOfProgression);
  }
  return progressionArray;
}

export default createProgression;
