#!/usr/bin/env node
import { playGame, mess } from '../src/index.js';
import calcGame from '../src/games/calc.js';

playGame(0, calcGame, mess.calc);
