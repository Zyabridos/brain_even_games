#!/usr/bin/env node
import generateRound from '../src/games/generatePrimeRound.js';
import runEngine from '../src/index.js';

const runGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, generateRound);
};

runGame();
