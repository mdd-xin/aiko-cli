/**
 * copy函数
 * @param proName 项目名
 * @param frame 选择模板
 * */
import path from 'path'
import download from 'download-git-repo'
import ora from 'ora'
import chalk from 'chalk'
import inquirer from 'inquirer'
import figlet from 'figlet'
import { isDirExist, readDir, rmdir } from '../utils/basic.js'

export async function copyDir(proName, frame) {
  console.log(
    figlet.textSync('Mdd-Cli!', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true,
    })
  )
  //加载动画
  const spinner = ora(`${frame}模板正在拉取中~`).start()
  let clone_url = `direct:https://github.com/mdd-xin/codeTem.git#tem-${frame}`
  download(clone_url, proName, { clone: true }, async function (err) {
    spinner.stop()
    let isExit = await isDirExist(proName)
    if (!isExit) {
      cloneTemFail(proName, frame)
    } else {
      readDir(path.resolve(process.cwd(), proName)).then((res) => {
        if (res.err) {
          cloneTemFail(proName, frame)
        } else if (res.data) {
          if (res.data.length <= 1) {
            cloneTemFail(proName, frame)
          } else {
            console.log(chalk.bgBlue.bold(`\n模板拉取成功✨✨`))
            console.log(chalk.greenBright(`\n🍟1. cd ${proName}`))
            console.log(chalk.greenBright(`\n🥙2. npm install `))
          }
        }
      })
    }
  })
}

function cloneTemFail(proName, frame) {
  inquirer
    .prompt({
      type: 'confirm',
      message: '❗❗❗拉取失败,是否重新进行拉取?',
      name: 'isRetry',
      default: true,
    })
    .then(async (answers) => {
      if (answers.isRetry) {
        let isExit = await isDirExist(proName)
        if (isExit) {
          rmdir(path.resolve(process.cwd(), proName)).then(() => {
            copyDir(proName, frame)
          })
        } else {
          console.log(
            chalk.bgWhite.bold(
              '\n📵可能网络存在问题,请检查网络后重新进行拉取~\n'
            )
          )
        }
      }
    })
}
