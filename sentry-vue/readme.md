Sentry+Vue 极速搭建前端异常监控系统

前奏

1.

安装sentry

docker-compose -V

docker-compose up -d

创建账户

配置邮件
tls 465



创建项目

更改组织名字 头像  介绍

新建token
project:releases 和 project:write 要勾选上

创建vue 项目
vue -V 查看 client版本

.sentryclirc文件

修改main.js
开启错误 和 版本号

模拟错误

只允许生产环境上报

build 项目 anywhere  模拟生产环境

分析issue
解决完问题  你可以关闭issue


组织名
项目名
版本号



参考
https://github.com/getsentry/onpremise



参考
https://juejin.im/post/5e0ef88d5188253abd7d2c89

https://segmentfault.com/a/1190000019304469#item-1
https://www.cnblogs.com/qiezuimh/p/11440506.html

https://www.cnblogs.com/new-journey/p/12195066.html
https://blog.csdn.net/weixin_33724046/article/details/91440155
https://blog.csdn.net/sinat_36065456/article/details/93045793
https://juejin.im/post/5e8ec2cf518825739208e249
