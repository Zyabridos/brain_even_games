import makeWelcome from './cli.js';

export const generateEvenRules = () => {
  makeWelcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const generateCalcRules = () => {
  makeWelcome();
  console.log('What is the result of the expression?');
};

export const generateGCDRules = () => {
  makeWelcome();
  console.log('Find the greatest common divisor of given numbers.');
};

export const generatePrimeRules = () => {
  makeWelcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

export const generateProgressionRules = () => {
  makeWelcome();
  console.log('What number is missing in the progression?');
};
