import readlineSync from 'readline-sync';

function getName() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

export default getName;
export const userName = 'userName';
