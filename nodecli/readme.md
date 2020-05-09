
模块  commander shelljs git-clone
commander 提供了用户命令行输入和参数解析的强大功能


给我4分钟开发一个完整的命令行工具

前奏
自动化开发工作流
能使开发者将更多的精力放在业务逻辑上
因此制作nodejs命令行脚本工具是一项有必要掌握的技能


1.
新建命令行项目
初始化package.json文件
安装依赖包
commander 一款可以快速开发命令行工具node包
git-clone 帮助我们克隆远程仓库到本地
shelljs模块重新包装了child_process,调用系统命令更加简单

新建index.js
vscode 打开项目

我们需要将index.js 让shell 调用
打开package.json 定义命令 
 我们的命令叫 mycli
 index.js 输出hello
切换到命令行工具
链接指令npm link 使 index.js到全局执行
mycli 成功输出 hello

2.

接下来引入我们安装的 commander git-clone shelljs 包

commander 开发命令行工具node包
version 定下程序的版本
parse解析命令行传入的参数
command定义命令

我们先定义一个创建项目的命令 new 
运行项目 输入mycli
可以看到 我们定义的new 命令
接下来定义运行项目命令 run
定义预览项目命令  start

看下演示效果

接下来完善各命令

创建项目
我们从github 上clone 项目
git-clone用来clone 项目到本地

我们这里clone vue官网的vue3.0的一个实例项目
clone下来以后
删除项目中的.git隐藏文件夹
进入项目
安装依赖
安装成功后给用户 接下来的操作提示
3.
完成 运行项目 命令
使用shell完成 
当然我们也可以使用 child_process模块完成
spawn启动子进程的输出流和错误流 输出到主进程上 
方便我们查看运行信息
4.
预览项目命令我们使用open 模块打开浏览器
安装open 模块
运行mycli
require拼写错误

可以看到我们写的三个命令

接下来使用脚手架工具

mycli new aa 创建项目
new  命令完成了github clone 项目和安装依赖
安装成功后的提示
进入项目
mycli run 运行项目
run 命令 实际执行的是 npm run dev 命令
后面的aa 没有用
我们的项目运行起来 了
先把提示改下
5.
接下来重启一个命令行
进入项目
mycli start 预览项目
start命令完成的是浏览器访问我们的项目

6.
启动浏览器 当时没有看到效果
我们访问地址协议是http 
修改协议
预览成功








参考



脚手架制作

https://juejin.im/post/5ea780675188256d6809ec27
https://juejin.im/post/5d505356e51d456209238818#heading-4
https://zhuanlan.zhihu.com/p/38730825
https://juejin.im/post/5e7469756fb9a07cb52be7cc#heading-13
https://juejin.im/post/5ca4a63be51d4541ea19c8ed
https://juejin.im/post/5cc160b2f265da03452bdf5b#heading-13

