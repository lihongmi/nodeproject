前奏

开发网站常常需要实现GitHub第三方登录
3分钟使用 Node.js Koa完成GitHub授权登录


一。
我们先获取下github 客户端id和密钥

点击头像
点击setting
developer setting
oauth apps
注册一个应用
输入应用的名字
应用的主页
应用的简介
用户授权成功的回调地址
点击注册应用

我们看到了生成的客户端id和密钥
上传应用头像
set new application logo 设置裁剪的头像

二
拿到id和密钥  创建一个web项目
安装依赖包 
新建入口文件
vscode 打开项目
引入包文件
koa web框架
定义router对象
axios http请求库
querystring 解析url字符串的

定义客户端id和密钥
新建 app对象
定义首页路由及内容
添加github登录链接
我们添加一个登录链接路由

app应用我们的路由
app监听端口3000

启动应用
浏览器访问下我们的网站

可以看到我们的首页内容


三
接下来完成
github登录链接的路由
这个路由服务端重定向到github认证接口 让用户进行授权操作

当用户授权成功 调用我们注册应用时天蝎的的回调地址

接下来完成回调地址

    通过回调地址能拿到code
    

    使用clientID  clientSecret 和code
    去获取access_token

    使用access_token获取用户信息


我们把github用户的
昵称 头像 个人介绍  及github主页 输出到网页
把所有返回信息一起输出到网页

请求接口需要 同步

四
运行项目
点击登录
这里我们服务端重定向到github认证
授权itvlog应用

当用户授权成功 后
跳转到回掉地址

回掉地址出错

看下控制台


不能解构userinfo 的login 属性 他是undefined

前面是一个promise 调整程序

重新运行
 浏览器访问
 登录
 由于前面我们已经授权给应用
 所以不再进行授权 直接跳转到回调地址
 可以看到我们的应用名字

 头像
 介绍
 github主页

 及所有信息 方便我们查看使用














参考


1.web端重定向http://github.com/login/oauth/authorize； 
2.根据code获取access_token； 
3.根据access_token获取用户信息； 
这里的第2步和第3步，建议在后端实现，为什么在后端实现了，因为第2不接口里面需要Client_secret这个参数。



NodeJS github登录实现
https://blog.csdn.net/qq_21976063/article/details/104001431
https://blog.csdn.net/qq_33270001/article/details/105078141
https://blog.csdn.net/zhuming3834/article/details/77649960