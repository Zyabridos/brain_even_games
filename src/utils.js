export const getRandomInRange = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

export function generateArrayWithPrimeNumbers() {
  const primeArray = [];
  let count = 0;

  for (let j = 2; j <= 100; j += 1) {
    for (let i = 1; i <= j; i += 1) {
      if (j % i === 0) {
        count += 1;
      }
    }
    if (j === 1 || count === 2) {
      primeArray.push(j);
    }
    count = 0;
  }
  return primeArray;
}
