

前奏
single-line-log
控制台单行日志输出模块


对于开发脚手架命令行工具而言，
拥有一个进度条可以轻松的让用户知道当前程序的进度。

single-line-log 一个控制台单行日志输出node模块。

给大家演示下single-line-log的使用
二。

新建node项目 

安装 single-line-log 模块

vscode打开我们的项目

新建app.js

引入single-line-log模块

log('1')先打印一下

node app.js 可以看到1成功输出

为了证明是再单行打印我们定一个定时器
每30毫秒打印一下
为了方便观察效果我们定义一个变量index让它不断累加
log index重新运行下
可以看到index一直在一行输出

三
修改下代码
模拟一个下载进度
当index到100停止输出

下载完成 换行输出下载完成

运行项目

101不能输出

调整下代码

重新运行项目 ok 正确输出