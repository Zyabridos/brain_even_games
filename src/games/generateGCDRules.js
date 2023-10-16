import readlineSync from 'readline-sync';

const generateGCDRules = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
};

export default generateGCDRules;
