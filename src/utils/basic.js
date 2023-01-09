import fs from 'fs'

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
