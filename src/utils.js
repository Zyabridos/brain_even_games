export const getRandomInRange = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const getPrimeArray = (max) => {
  const result = [];
  for (let i = 2; i < max; i += 1) {
    if (isPrime(i) === true) {
      result.push(i);
    }
  }
  return result;
};
