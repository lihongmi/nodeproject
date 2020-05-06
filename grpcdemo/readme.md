前奏

RPC主要用于公司内部的服务调用，性能消耗低，传输效率高，服务治理方便
RPC框架  Google 的 gRPC
给大家演示下使用nodejs 实现grpc服务端和客户端的

一。
创建grpc项目

安装包文件 npm install grpc @grpc/proto-loader

grpc 用来创建服务端的
proto-loader 用来加载我们的protobuf文件的

新建 server.js client.js hello.proto文件  
server.js用来创建服务端
client.js用来调用服务端
hello.proto文件   gRPC通过protobuf来定义接口  约定服务
我们的server.js 和client.js 共同使用它


vscode打开我们的项目


二。打开hello.proto编写我们的服务

语法proto3
包名helloworld

服务名Hello

服务里定义sayHello方法

调用服务需要约定传递的参数和返回的参数

通过message来约定

约定请求参数格式

我们定义 姓名name和年龄age两个参数

这里的1代表第一个参数
2代表第二个参数


定义返回参数的格式
定一个message

sayHello方法使用我们的格式

注意语句后面不要丢了分号

三。
接下来编写我们的server

引入grpc 和 proto loader包


加载hello.proto文件的定义信息
这个文件服务端和客户端都会用到
keepCase 包名 服务名 方法名 参数名 等 区分大小写

grpc加载我们的包

创建server

添加服务
我们的服务名叫Hello

实现sayHello方法

call可以获取请求信息
callback  用来向客户端返回信息

获取我们的name 和age

返回一段自我介绍

捕获下异常问题

绑定ip 端口

service 小写
callback参数两个对象
第二个参数按proto约定传值

启动我们的服务端

四 客户端的实现
客户端同样需要加载proto
我们把服务端加载proto部分copy过来

创建我们的客户端链接Hello服务
调用sayHello方法
按proto约定传参

启动客户端  
接收到服务端的信息




