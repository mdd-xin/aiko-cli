/**
 * copy函数
 * @param proName 项目名
 * @param frame 选择模板
 * */
import fs from 'fs'
import download from 'download-git-repo'

// 创建文件夹
export async function copyDir(proName, frame) {
  // 判断文件夹是否存在,存在则报错,不存再进行创建
  /**
   * 改变模板架构
   *
   * 项目名
   * 1.根据选项拉取对应模板
   * 2.根据拉取后的文件夹内容判断是否拉取成功
   * */
  // let clone_url = `https://github.com/mdd-xin/codeTem/${frame}`
  download('direct:' + clone_url, proName, { clone: true }, function (err) {
    console.log(err ? 'Error' : 'Success')
  })
}
