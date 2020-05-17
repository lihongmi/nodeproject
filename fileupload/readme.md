前奏
基于Node.js的大文件分片上传

文件上传的时候，如果文件过大，可能会导致请求超时的情况。
就需要对文件进行分片上传的操作

带大家极速实现基于Node.js的大文件分片上传

1.
创建演示项目
初始化package.json
安装依赖模块
express web模块
multiparty 上传模块
body-parser 处理post请求模块
fs-extra 好用的文件操作模块

新建静态文件目录public和上传存储临时目录temp
新建 服务端文件server.js 上传网页index.html
code 打开我们的项目

2.
我们先实现服务端的上传功能
导入我们安装的模块
创建express 实例
设置静态文件目录
使用body-parser 请求体解析中间件
定义上传路由
multiparty模块 用来处理上传文件的 定义存储目录temp
运行项目
body-parser 一个option参数过期
调整参数
运行项目
项目启动成功

接下来编写上传页面
书写一个上传的表单元素和一个上传按钮
点击上传按钮执行上传函数
上传需要ajax请求  我们使用axios
获取文件上传表单
构建formData对象
axios 请求upload接口 传递我们的form对象
访问网页
我们上传一个文件
点击上传
可以看到服务端temp存储了上传的文件 文件名字重命名了


3.
如果文件过大 我们需要分片上传
接下来我们完成分片上传功能
每一个区块是1M

index表示第几个区块
获取区块的内容
把区块转成file文件用来进行上传
给我们的区块命名
命名规则是  原文件名.区块索引.文件类型
formData 换成我们的区块文件
当第一个区块上传成功递归上传下一个区块
当区块没有内容 停止递归上传
点击按钮上传第一个区块
选择一个视频上传
服务端可以看到我们的分片视频上传到了存储目录

接下来我们服务端应该把每个文件的所有分片统一放到一个目录里
定义一个和文件同名的存放目录
分片按索引编号再次命名
将分片从临时目录移动到 同名的存放目录


上传文件
可以看到分片 
但是存储目录名不对
存储目录名根据区块文件名定义的
这里是一个数组解构
重新上传文件
可以看到分片文件按索引命名并存储到文件同名文件夹

4.
接下来 合并分片 返回正确的url
定义合并路由merge 

根据传递的文件名 进行合并
获取文件的所有分片
分片按索引进行排序
合并文件
合并完成后  删除分片目录
返回 合并成功文件的url地址

html页面 定义调用合并路由的函数merge
当所有分片上传完调用


5.
重新上传文件
上传完分片调用了merge请求
返回了合并的文件url
浏览器看下url 可以访问
服务端同样看到合并的文件



参考

点击上传时，检查是否需要上传和已上传的切片。
点击暂停后的恢复上传，返回已上传的切片。
大文件上传：
前端上传大文件时使用 Blob.prototype.slice 将文件切片，并发上传多个切片，最后发送一个合并的请求通知服务端合并切片。
服务端接收切片并存储，收到合并请求后使用 fs.appendFileSync 对多个切片进行合并。
原生 XMLHttpRequest 的 upload.onprogress 对切片上传进度的监听。
使用 Vue 计算属性根据每个切片的进度算出整个文件的上传进度。

断点续传：
使用 spart-md5 根据文件内容算出文件 hash。
通过 hash 可以判断服务端是否已经上传该文件，从而直接提示用户上传成功（秒传）。
通过 XMLHttpRequest 的 abort 方法暂停切片的上传。
上传前服务端返回已经上传的切片名，前端跳过这些切片的上传

暂停上传  恢复上传
https://developer.51cto.com/art/202004/613728.htm
https://blog.csdn.net/x746655242/article/details/52964623
https://blog.csdn.net/lucky541788/article/details/99686392
https://blog.csdn.net/weixin_34381666/article/details/91372207
https://www.jianshu.com/p/cbfb693e4b36
https://segmentfault.com/q/1010000016741599/a-1020000016770813



https://blog.csdn.net/xiazhiqiang01/article/details/52677484
https://blog.csdn.net/weixin_34381666/article/details/91372207

https://www.bilibili.com/video/BV1P7411G7AN?p=2

https://segmentfault.com/a/1190000014827408

https://juejin.im/post/599804e1f265da24934aeee7#heading-4

https://juejin.im/post/5ebb4346e51d451ef53793ad#heading-8
https://juejin.im/post/5e734e90f265da571e263c5e
https://juejin.im/post/5e1c2f176fb9a0300a44fd2f#heading-4

https://juejin.im/post/5db29beb5188256467245a7b#heading-3

https://www.cnblogs.com/sghy/p/9143955.html
