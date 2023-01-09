#!/usr/bin/env node
'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('commander'),
    program = _require.program;

var version = require('../../package.json').version;

program.version(version, '-v, --version');

program.command('init <app-name>').description('使用 white-box-cli 初始化项目').action(function (name) {
  console.log(_chalk2.default.blue('app-name: '), name);
});

//...

program.parse(process.argv); //解析输入命令