

标题 3分钟实战GitHub API by TypeScript Node.js

前奏

TypeScript + Node.js 实战 GitHub API
带大家做一个Github查询API命令行工具

一。
安装TypeScript
新建演示项目
新建package.json文件
安装request和ts接类型声明模块  
request用来接口请求
新建src 用来存放typescript文件
新建dest 用来存放生成的js文件
vscod 打开项目

配置typescript
配置package.json文件
打开package.json 新建start启动命令
新建应用入口文件 打印hello github
运行项目
成功输出结果
dest成功生成js文件

二。

新建GithubService类 用来处理githubapi 的请求

声明一个请求github用户信息的方法
它的接口是 api.github.com/users/github的用户名
引入request模块
请求我们的接口
定义头信息
返回结果转化成json
请求错误打印错误
请求成功打印结果
入口文件调用调用我们的类
实例化一个GithubService对象
调用getUserinfo方法
查看下 itvlog用户的 github信息

运行项目
可以看到itvlog的
github登录名
头像
github个人主页地址
个人简介
公共仓库数量


接下来把结果存到实体类返回给调用者
新建User类
定义 登录名 头像 简介 仓库数量 几个属性

new User 对象
使用promise 返回该对象

入口文件调整程序
重新运行
可以看到我们的user对象

三
接下来声明一个获取github用户仓库列表的方法

我们把响应结果先resolve 出去
入口文件调用该方法
我们获取下facebook 的仓库列表

我们的结果同样
构造一个仓库实体类Repo 用来存储数据
定义 仓库名 仓库描述 仓库地址  fork数量 几个属性

new一个用来存放仓库地址的数组
把结果返回结果过滤存储一下

把仓库列表按fork数量 降序排序下

过滤fork数量大于1000的仓库

调整入口程序

运行项目
打印出github用户信息

打印出facebook用户 仓库forks大于1000的列表

四
接下来我们把github用户名改成命令传参
如果没有输入github用户名提示输入用户名

运行项目
npm start 输入github用户名
查看下itvlog 的信息
仓库forks 大于1000的为0

查看下facebook 的信息
facebook forks大于1000仓库列表
facebook的github用户信息



参考

https://www.bilibili.com/video/BV1fb411j7Gb?p=6
https://www.javascriptcn.com/read-github-api-simple-github-app-react-native.html
