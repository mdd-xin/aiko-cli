#!/usr/bin/env node
import { program } from 'commander'
import { copyDir } from '../utils/copyDir.js'
import { isDirExist } from '../utils/basic.js'

import ora from 'ora' //加载
import chalk from 'chalk' //彩色终端文字
import inquirer from 'inquirer' //创建项目时,回答问题

/**
 * TODO:
 * 1.设置加载效果
 * 2.收集参数
 * 3.根据参数创建项目名,和对应版本文件夹
 * 4.判断参数中项目文件是否存在
 * */
// package.json 需要添加  "type": "module",才支持import  加了就不支持 require 了

program
  .command('init <app-name>')
  .description('使用 white-box-cli 初始化项目')
  .action((name) => {
    //TODO:输入该命令后,进行问题回答
    inquirer
      .prompt([
        {
          type: 'list',
          message: '请选择框架及框架版本',
          name: 'frame',
          default: 'vue_2.0',
          choices: ['vue_2.0', 'vue_3.0'],
        },
      ])
      .then(async (answers) => {
        // 根据选择结果进行框架搭建
        let isExit = await isDirExist(name)
        if (!isExit) {
          copyDir(name, answers.frame)
        } else {
          console.log(chalk.red(`${name}<—该文件已经存在!`))
        }
      })
      .catch((error) => {
        console.log(chalk.red(error))
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      })
  })

//...

program.parse(process.argv) //解析输入命令
