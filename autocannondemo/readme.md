前奏 
1.在系统上线前，系统能承受多大的并发及负载情况，进行一轮压测是必不可少的。

作为开发人员的我们,
快速验证解决方案是否存在性能问题,
又或者在并发情况下是否有意想不到的问题.压测同样是有必要的


这里给大家介绍一款
autocannon 一款基于node编写的压测工具 

2.
在使用autocannon前，我们先编写一个简单的web服务

新建autocanon项目 
使用vscode打开我们的项目

新建server.js

引入我们的http模块
创建我们的server
输出 hello world

监听在3000端口上

启动后打印服务启动成功

3.
输入nodeserver.js 启动我们的服务

打开浏览器访问我们的web服务

成功输出 helloworld

4.
    接下来全局安装我们的autocannon压测工具

    输入autocannon -c 100 -d 5 http://localhost:3000
    -c 100 并发连接的数是100
    -d 5   设置测试的持续时间5秒

5.
    我们看下测试的结果报告

    第一张图表显示的是响应时间分布状况

    第一张图表显示的每秒请求数量和每秒响应内容大小分布状况

    图中的avg stdev max 平均值、标准偏差、最大值

6. 关于压测就介绍到 这希望大家喜欢

















在压测过程中，发现服务器的cpu飚的的非常高，而tps，接口耗时、服务可用等都是正常的，

命令行 autocannon -c 100 -d 5 http://127.0.0.1:3000/

1安装
2 使用
参数

下图是对 /empty 接口压测 autocannon -c 100 -d 5 -p 1 http://127.0.0.1:3000/empty 结果如下

autocannon-empty
可看到，每秒有100个链接，每个链接一个请求，持续5秒，一共产生 31k 次请求。 报告分三部分，第一行表示接口的延迟，第二行表示每秒的请求数(tps)，第三行表示每秒返回的字节数。那么，延迟越低，tps越高，就表示接口性能越好，因为empty 是个空接口，所以它的tps=6221还不错，响应时间也很快



stdev标准偏差
、偏差比（值越高表示测试结果离散程度越高，性能波动较大）
 Req/Sec ：每秒完成的请求数
 Latency ：响应时间分布（即百分比响应时间范围）


  Requests/sec ：所有线程平均每秒钟完成1222.07个请求；

 Transfer/sec ：平均每秒读取188.51KB数据（吞吐量）
参考
https://blog.csdn.net/Ruffaim/article/details/82145000
https://www.cnblogs.com/rainy-shurun/p/5867946.html