使用benchmark评估哪个方法性能更快

前奏

我们在开发的过程中，经常需要
对相同功能不同方法进行性能评估
判断下哪个方法更快。
benchmark是评估性能最常用的手段，
给大家演示下benchmark的使用
2.

新建benchmark项目 
安装benchmark包
使用vscode打开我们的项目
新建server.js

引入我们的benchmark模块
创建我们的suite对象

我们添加两个查找字符的方法 测试下哪个性能最快

添加一个正则方法
再添加一个字符串indexof方法

接下来我们添加监听事件cycle
每个测试跑完后，会触发该事件
输出一下具体的事件对象信息

项目运行完会触发complete事件
打印下最快的方法
run运行起来
切换到命令行 
node server.js

第一个方法的测试已经完成

第二个方法也已完成,最快的方法是indexof 方法



