#!/usr/bin/env node
import { playGame, mess } from '../src/index.js';
import progression from '../src/games/progression.js';

playGame(progression, mess.progressiongame);
