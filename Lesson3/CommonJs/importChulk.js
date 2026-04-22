import chalk from 'chalk';
import { text, number, isTrue } from './exportChulk.js';

console.log(chalk.blue(text));
console.log(chalk.green(number));
console.log(chalk.red(isTrue));