#!/usr/bin/env node
import brainEven from './brain-even.js';
import { askName } from '../src/cli.js';
import brainCalc from './brain-calc.js';

askName();
brainEven();
brainCalc();
