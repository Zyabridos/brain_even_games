#!/usr/bin/env node
import generateRound from '../src/games/generateEvenRound.js';
import runEngine from '../src/index.js';

const runGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, generateRound);
};

runGame();
