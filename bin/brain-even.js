#!/usr/bin/env node
import { playGame, mess } from '../src/index.js';
import evenGame from '../src/games/even.js';

playGame(evenGame, mess.evengame);
