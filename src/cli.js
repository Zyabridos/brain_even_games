import readlineSync from 'readline-sync';

function getName(userName) {
    userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}

export default getName;