#!/usr/bin/env node
const {spawn}=require('child_process')
const program = require('commander');
const clone = require('git-clone');
const download = require('download-git-repo');

const shell = require('shelljs');
const open=require('open')

const clear = require('clear');
const chalk = require('chalk');


let version = require('./package.json').version;
program.version(version, '-v, --version')

let newpj=name=>{
    let giturl='git@github.com:vuejs/vue-next-webpack-preview.git'
    download(giturl, './${name}', function (err) {
        shell.rm('-rf', `${name}/.git`);
        shell.cd(name)
        shell.exec('npm install')
        clear();
        console.log(chalk.red(`
                🏭创建${name}项目!
                cd ${name} 进入项目
                mycli start 启动项目
        `))
    })
    //clone(giturl,`./${name}`,null, function() {})
}



let run=()=>{
   // shell.exec('npm run dev')
    let cp=spawn('npm',['run','dev'])
    cp.stdout.pipe(process.stdout)
    cp.stderr.pipe(process.stderr)
    cp.on('close',()=>{
        //clear();
        console.log('成功启动')
    })
    
}

let start=async ()=>{
    await open('http://localhost:8080/');
}


program.command('new <name>')
    .description('初始化项目')
    .action(newpj);
program.command('start')
    .description('运行项目')
    .action(run);
program.command('run')
    .description('预览项目')
    .action(start)


program.parse(process.argv);