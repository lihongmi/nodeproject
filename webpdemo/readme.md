https://www.cnblogs.com/season-huang/p/5804884.html
https://www.imqianduan.com/nodejs/246.html

webp-converter

项目实践中webp格式图片 体积比jpg、png这些少了25%以上
google官方推出工具cwebp用来转换webp，
可以通过命令行的形式使用webp

给大家演示下具体操作
一。
brew install webp

检查下是否安装成功

cwebp -h  查看使用帮助

具体命令行操作

压缩质量 0 100

常用 80 左右

命令行里压缩下我们的图片

图片名字为 itvlog.jpg.webp格式

稍等一会

可以看到生成的webp图片

使用浏览器打开查看一下

二。
接下来我们使用程序来生成 webp图片
新建演示项目
新建index.js
vscode打开项目
引入child-process模块
定义下我们压缩图片的地址路径
copy下命令行里的命令

cp执行我们的命令
错误打印错误失败
成功打印成功
运行脚本
 可以看到生成的webp格式图片