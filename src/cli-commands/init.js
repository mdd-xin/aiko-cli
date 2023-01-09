#!/usr/bin/env node
import { program } from 'commander'
import { copyDir } from '../utils/copyDir.js'

import ora from 'ora' //加载
import chalk from 'chalk' //彩色终端文字

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
    // console.log(chalk.blue('app-name: '), name)
    const spinner = ora('Loading unicorns').start()

    // 从参数中解析项目名称
    let tar_path = './' + name
    copyDir('./template/vue_2.0', tar_path).then(() => {
      // console.log('加载完成~')
      spinner.stop()
    })

    // 根据项目名称创建文件夹
  })

//...

program.parse(process.argv) //解析输入命令
