前奏

基于Node.js的视频流播放

极速实现视频的  边播放，边下载,按指定位置播放的功能

HTML5 Video播放服务端大文件，要等整个文件下载下来才播.体验不是很好

带大家极速实现视频的  边播放，边下载,按指定位置播放的功能


1.
创建演示项目
新建 服务端文件app.js
准备好的视频文件放入项目
code 打开我们的项目
引入http模块
文件读取模块
定义video存放的路径
http创建web服务
定义主页路由 
返回video 标签  
播放地址 /video 路由
接下来定义video 路由
读取我们的视频文件输出到客户端
监听在3000 端口
首页需要告诉浏览器我们返回的是html文件类型
视频标签需要显示进度条
2.
运行项目
浏览器访问首页
播放视频文件
但是进度条不能快进 因为 我们就一个输出流依次行输出

video 请求视频头信息里有range  表示发送范围请求 获取资源的部分数据
我们获取一下range
如果没有range 我们整个输出出去
如果range存在
获取请求哪部分的信息
视频的开始位置
视频结束位置 如果不存在 我们默认从开始位置取1M数据

读取开始位置结束位置数据 输出到客户端


206状态码表示：响应Range获取资源部分数据 http状态
设置响应头信息

我们在看下 响应头信息
响应的文件类型
区块范围及视频总长度
区块长度

3.运行项目
刷新
播放
可以快进 快退
打开开发者工具
可以看到视频是按1M 1M分片返回的




可以看到服务端设置的 接受类型、视频大小、文件区块范围、文件类型

我们看下浏览器的请求头range 
结束没有指定所以返回的是我们设置的1m














请求头 Range 获取资源的部分数据

 206状态码表示的是：客户端通过发送范围请求头Range获取资源的部分数据。
 这种请求可以将服务端文件分割成多个部分传给客户端，可用于解决网络问题以及大文件下载问题


 


参考
多Range响应

Node.js发送视频流
https://blog.csdn.net/liuyaqi1993/article/details/76560401
ffmpeg
video.js
https://www.jianshu.com/p/eb5cd63647c3
阿里云点播服务
https://www.zhihu.com/question/41818719
https://blog.csdn.net/weixin_33736832/article/details/91381859
https://www.cnblogs.com/itguliang/p/10070855.html
运用了动态播放地址，防止视容频链接被盗取
https://zhidao.baidu.com/question/309374380732832124.html
https://my.oschina.net/zzlzheng/blog/3023921
https://www.cnblogs.com/yanggeng/p/11449440.html

https://www.cnblogs.com/LoveTomato/p/10341323.html

https://blog.csdn.net/thewindkee/article/details/80189434
https://www.cnblogs.com/yanggeng/p/11449440.html