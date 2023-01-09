/**
 * copy函数
 * @param source 源路径
 * @param target 目标路径
 * */
import fs from 'fs'
import mkdirp from 'mkdirp'

import { readFile, writeFile, readDir, isDir } from './basic.js'

// 创建文件夹
export async function copyDir(source, target) {
  // 判断文件夹是否存在,存在则报错,不存再进行创建
  await mkdirp(target)
  let tar_dir = await readDir(source)
  for (let item of tar_dir.data) {
    let path = source + '\\' + item
    let { data: isdir } = await isDir(path)
    let dir_child_path = target + '\\' + item
    if (isdir) {
      copyDir(path, dir_child_path)
    } else {
      let s_file = await readFile(path)
      let res = await writeFile(dir_child_path, s_file.data)
    }
  }
}
