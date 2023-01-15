import fs from 'fs'
import path from 'path'

class Result {
  constructor(err, data) {
    this.err = err
    this.data = data
  }
}

export function readFile(path) {
  return new Promise((reslove, reject) => {
    fs.readFile(path, (err, data) => {
      reslove(new Result(err, data))
    })
  })
}

export function writeFile(path, data) {
  return new Promise((reslove, reject) => {
    fs.writeFile(path, data, (err, data) => {
      reslove(new Result(err, data))
    })
  })
}

export function readDir(path) {
  return new Promise((reslove, reject) => {
    fs.readdir(path, (err, data) => {
      reslove(new Result(err, data))
    })
  })
}

export function isDir(path) {
  return new Promise((reslove, reject) => {
    fs.stat(path, (err, stat) => {
      let state = stat.isDirectory()
      reslove(new Result(err, state))
    })
  })
}

export function isDirExist(ProjectName) {
  return new Promise((resolve, reject) => {
    fs.access(
      path.resolve(process.cwd(), ProjectName),
      fs.constants.F_OK,
      (err) => {
        if (err) {
          resolve(false)
        } else {
          resolve(true)
        }
      }
    )
  })
}
