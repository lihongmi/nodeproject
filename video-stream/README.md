前奏

基于Node.js的视频流播放

极速实现视频的  边播放，边下载,按指定位置播放的功能

HTML5 Video播放服务端大文件，要等整个文件下载下来才播.体验不是很好

带大家极速实现视频的  边播放，边下载,按指定位置播放的功能


1.







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