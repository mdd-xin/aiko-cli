#!/usr/bin/env node
import { program } from 'commander'
import { copyDir } from '../utils/copyDir.js'

import ora from 'ora' //加载
import chalk from 'chalk' //彩色终端文字
import inquirer from 'inquirer' //创建项目时,回答问题

// 引入init文件=>在本地创建一个项目文件夹=>将文件直接拷贝到文件夹中
// yyy dev=>本地开发命令=>运行webpack
// yyy build=>生产环境打包命令

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
          default: 'vue2.x',
          choices: ['vue2.x', 'vue3.x'],
        },
      ])
      .then((answers) => {
        // 根据选择结果进行框架搭建
        console.log(chalk.blue('answers'), answers)
        let tar_path = './' + name
        let { frame } = answers
        if (frame == 'vue2.x') {
          copyDir('./template/vue_2.0', tar_path)
        } else {
          copyDir('./template/vue_3.0', tar_path)
        }
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      })
  })

//...

program.parse(process.argv) //解析输入命令
