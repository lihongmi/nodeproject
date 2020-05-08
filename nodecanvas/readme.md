

前奏
项目开发中经常要
制作一些带有微信号，公司名，或者活动信息的  营销推广图
或者需要生成验证码图片
又或者 生成一些大数据图标图片

node-canvas 允许我们使用canvas在node中制作图片

使用node-canvas快速演示营销推广图的制作

一。
打开npmjs.org网站
搜索canvas
进入canvas项目
node-canvas是一个依赖于Cairo实现的的node包
安装node-canvas的包命令
使用之前我们需要先安装下 Cairo等依赖
mac安装使用brew安装
ubuntu安装
windows安装需要看下wiki
安装cairo
我计算机提示已经安装过了 无需再次安装

2.
新建演示项目
新建package.json文件
安装canvas包
新建index.js
vscode打开项目
拷贝官方demo

4.
这里canvas绘制图片
我们把 itvlog 公众号二维码放入项目中
修改图片路径

canvas
先绘制文字

再绘制线

最后绘制图片

canvas 转换成base64字符串 打印到控制台

我们这里改造下 

将它写入到html文件里
运行项目
打开生成的html文件
可以看到文字、横线、和我们的itvlog公众号二维码
5.
我们也可以生成一张图片
可以看到生成的图片文件
运行项目 打开生成的图片
黑色区域透明的

6.
我们继续进行改造一下
修改文字
添加一个灰色的背景

修改字体位置 和颜色
再添加一行蓝字
修改下线的粗度
修改下线的位置
坐标系旋转去掉
线的颜色改成红色

运行项目 查看效果
可以看到itvlog 公众号二维码
白蓝字、红色底线、及灰色背景

itvlog的图片也同样生成成功



参考

病毒式H5
　　设计出符合自己微信号定位的病毒式H5，并对微信号进行推广。比如说趣味游戏、有奖竞猜等等
node-canvas模块使用
https://blog.csdn.net/wengye1990/article/details/71120743
https://github.com/coolliyong/coolliyong.github.io/blob/master/docs/node/node_canvas.md
https://segmentfault.com/a/1190000007528623
https://www.npmjs.com/package/canvas






