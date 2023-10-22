#!/usr/bin/env node
// import { runCalcGame } from '../src/index.js';
import { generateRound } from '../src/games/generateCalcRound.js';
import runEngine from '../src/index.js';

// runCalcGame();

const runGame = () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, generateRound);
};

runGame();
