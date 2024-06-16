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

async function createProject() {
  try {
    await fs.copy(templatePath, projectPath);
    console.log(chalk.green(`Project ${projectName} created successfully!`));
    console.log(chalk.green('To get started, run:'));
    console.log(chalk.cyan(`cd ${projectName}`));
    console.log(chalk.cyan('npm install'));
    console.log(chalk.cyan('npm start'));
    console.log(chalk.cyan('Thanks for using tsnode-starter <3'));
  } catch (err) {
    console.error(chalk.red('Error creating project:'), err);
  }
}

createProject();
