#!/usr/bin/env node
import generateRound from '../src/games/generateProgressionRound.js';
import runEngine from '../src/index.js';

const runGame = () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};

runGame();
