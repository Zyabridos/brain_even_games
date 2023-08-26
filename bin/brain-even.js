#!/usr/bin/env node
import getName from '../src/cli.js';
import isEven from '../src/evenCheck.js';
import { userName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

getName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

isEven();
isEven();
isEven();

console.log(`Congratulations, ${userName}`);
