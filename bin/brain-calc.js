#!/usr/bin/env node
import { playGame, mess } from '../src/index.js';
import calcGame from '../src/games/calc.js';

playGame(calcGame, mess.calc);
