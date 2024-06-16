#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .usage('Usage: npx tsnode-starter <project-name>')
  .demandCommand(1, 'You need to specify a project name.')
  .argv;

const projectName = argv._[0];
const projectPath = path.join(process.cwd(), projectName);
const templatePath = path.join(new URL('.', import.meta.url).pathname, 'template');
const githubRepoUrl = 'https://github.com/pooranjoyb/tsnode-starter';

async function createProject() {
  try {
    await fs.copy(templatePath, projectPath);
    console.log(chalk.green(`\nProject ${projectName} created successfully!\n`));
    console.log(chalk.green('To get started, run:\n'));

    console.log(chalk.cyan(`  cd ${projectName}`));
    console.log(chalk.cyan('  npm install'));
    console.log(chalk.cyan('  npm run dev'));
    console.log(chalk.cyan('  npm run watch'));

    console.log(chalk.magenta('\nThanks for using tsnode-starter! 💖'));
    console.log(chalk.yellow('\nVisit the official GitHub repository:'));
    console.log(chalk.blue.underline(`${githubRepoUrl}\n`));
  } catch (err) {
    console.error(chalk.red('Error creating project:'), err);
  }
}

createProject();
