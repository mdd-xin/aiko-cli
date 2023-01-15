/**
 * copy函数
 * @param proName 项目名
 * @param frame 选择模板
 * */
import fs from 'fs'
import axios from 'axios'
import download from 'download-git-repo'

// 创建文件夹
export async function copyDir(proName, frame) {
  // 判断文件夹是否存在,存在则报错,不存再进行创建
  // await mkdirp(target)
  // let tar_dir = await readDir(source)
  // for (let item of tar_dir.data) {
  //   let path = source + '\\' + item
  //   let { data: isdir } = await isDir(path)
  //   let dir_child_path = target + '\\' + item
  //   if (isdir) {
  //     copyDir(path, dir_child_path)
  //   } else {
  //     let s_file = await readFile(path)
  //     let res = await writeFile(dir_child_path, s_file.data)
  //   }
  // }
  /**
   * 改变模板架构
   *
   * 项目名
   * 1.根据选项拉取对应模板
   * 2.根据拉取后的文件夹内容判断是否拉取成功
   * */
  axios
    .get('https://api.github.com/repos/mdd-xin/codeTem/contents')
    .then((res) => {
      res.data.forEach((item) => {
        console.log('item', item.name, frame)
        if (item.name == frame) {
          let clone_url = `https://github.com/mdd-xin/codeTem/${frame}`
          console.log(clone_url)
          download(
            'direct:' + clone_url,
            proName,
            { clone: true },
            function (err) {
              console.log(err ? 'Error' : 'Success')
              //
            }
          )
        }
      })
    })
}
