#!/usr/bin/env node
import { playGame, mess } from '../src/index.js';
import prime from '../src/games/prime.js';

playGame(prime, mess.primegame);
