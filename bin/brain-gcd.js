#!/usr/bin/env node
import generateRound from '../src/games/generateGCDRound.js';
import runEngine from '../src/index.js';

const runGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, generateRound);
};

runGame();
