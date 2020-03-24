#!/usr/bin/env node
import { playGame, mess } from '../src/index.js';
import gcd from '../src/games/gcd.js';

playGame(gcd, mess.gcdgame);
