代码快速演示devtools调试node

前奏

随着node程序越来越复杂，调试工具的重要性日益凸显
给大家快速演示下devtools调试node
2.

新建调试node项目 

使用vscode打开我们的项目

二。
新建server.js

引入http模块
创建我们的服务
访问我们的服务输出helloworld加一个随机数
设置监听端口3000
成功启动 控制台打印启动成功

我们再写一些其它常见的代码形式

声明一个全局变量i
声明一个函数foo
声明一个局部变量j
再写一条语句 var k=i+j;
声明一个函数bar 用来调用函数foo
web服务里调用下bar

三
使用--inspect参数 启动我们的项目   
 inspect参数是用来开启调试模式 它会默认创建一个socket服务供调试客户端通信
node server.js

浏览器访问我们的web服务

打开开发者工具

打开devtools for node的图标  它会链接  inspect参数前面创建的socket服务


connnection 可以看到我们链接服务的地址
console 打印的node日志,可以看到我们服务启动成功打印的日志在这里显示出来了
source用来调试我们node 的源代码
command+p查找我们要调试的文件

输入server.js

我们在行号的左边可以设置断点

设置完断点后重新访问下我们的web服务
程序暂停运行在我们设置的断点上了


点击进入函数
下一行执行
三角形执行到下一个断点  如果没有断点执行完剩下所有的代码

memory是用来观察内存使用情况的
profile是用来记录cpu使用情况的

接下来我们写一个比较占用cpu 运算的函数
这个函数执行循环10**9次方*3次运算

重新运行我们的程序

在profile面板点击 start开始收集cpu运行数据

重新访问下我们的web服务
点击stop
查看下cpu快照
我们对快照运行时间进行排序

可以看到占用时间最长的几个函数
这里看到函数a执行了1892毫秒  所在的文件位置server.js
点击server.js
直接跳转到a函数 
同时左侧再测显示它的运行时间    非常方便查找问题

watch 用来监控一些变量或者自己定义的一些表达式的树值
我们打一个断点
重新访问下我们的web服务
call stack用来显示调用栈的
我们发现 foo 是被bar调用的   bar是被匿名函数调用的 
这个匿名函数就是createserver 里的匿名函数

scope用来查看一些运行时的变量的




