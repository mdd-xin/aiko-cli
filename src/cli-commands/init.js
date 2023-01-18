#!/usr/bin/env node
import { program } from 'commander'
import { copyDir } from '../utils/copyDir.js'
import { isDirExist } from '../utils/basic.js'

import chalk from 'chalk' //彩色终端文字
import inquirer from 'inquirer' //创建项目时,回答问题

const frameMap = {
  'vue_2.0': 'vue2',
  'vue_3.0': 'vue3',
}

program
  .command('init <app-name>')
  .description('使用 white-box-cli 初始化项目')
  .action((name) => {
    inquirer
      .prompt([
        {
          type: 'list',
          message: '请选择框架及框架版本',
          name: 'frame',
          default: 'vue_3.0',
          choices: ['vue_2.0', 'vue_3.0'],
        },
      ])
      .then(async (answers) => {
        let isExit = await isDirExist(name)
        if (!isExit) {
          copyDir(name, frameMap[answers.frame])
        } else {
          console.log(chalk.bgRed.bold(`❗❗❗ ${name}<—该文件已经存在!`))
        }
      })
      .catch((error) => {
        console.log(chalk.bgRed.bold(error))
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      })
  })

//...

program.parse(process.argv) //解析输入命令
