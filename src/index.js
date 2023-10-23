import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

const roundsCount = 3;

const runEngine = (rules, generateRound) => {
  const userName = makeWelcome();
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // тут проверка раунда нужна затем, чтобы при выиграше трех раундов подряд не показывало
    // Correct!
    // Congratulations!
    // по-другому не получается избавиться от третьего Correct`a
    if (answer === userAnswer && i < roundsCount - 1) {
      console.log('Correct!');
    } else if (answer.toString() !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runEngine;
