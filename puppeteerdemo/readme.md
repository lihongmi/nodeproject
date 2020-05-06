
const downloadURLs = {
  linux: 'https://storage.googleapis.com/chromium-browser-snapshots/Linux_x64/%d/chrome-linux.zip',
  mac: 'https://storage.googleapis.com/chromium-browser-snapshots/Mac/%d/chrome-mac.zip',
  win32: 'https://storage.googleapis.com/chromium-browser-snapshots/Win/%d/chrome-win32.zip',
  win64: 'https://storage.googleapis.com/chromium-browser-snapshots/Win_x64/%d/chrome-win32.zip',
};

./chrome-mac/Chromium.app/Contents/MacOS/Chromium



生成一些网页的截图和 pdf
爬取一个 SPA(单页 WEB 应用)并且生成预渲染内容（比如说过SSR,服务器端渲染）
自动化的表单提交，UI 测试，文本输入等
创建一个现代化的自动化测试环境，在最新版的Chrome 里使用最新的 JavaScript 和浏览器新特性来跑你的测试。
捕获你的网站的 timeline trace来帮助分析诊断性能问题
测试谷歌扩展插件 


Puppeteer前端自动化测试实践
Puppeteer 默认以 headless 模式运行

前奏

给大家演示下Puppeteer前端自动化测试实践
Puppeteer是谷歌官出品的一个 headless Chrome的Node库

一。
创建演示项目
安装puppeteer
把我们准备的 headless Chrome 放入项目
vscode打开项目
新建app.js
chrome-mac 从readme的链接下载 
需要注意版本%d版本需要从puppeteer 的packge.json文件里找一下 

把版本号替换%d 浏览器打开链接进行下载
二 
导入puppeteer包
定义我们的headless chrome存放的路径

puppeteer启动我们的chrome
把无头默认关掉方便我们查看效果
启动后返回一个浏览器对象
使用浏览器打开一个标签
打开需要过程  我们需要async await 
来做到同步
打开百度页面
捕获异常
看下效果 
看到了打开了百度  
表示我们下载的 chrome启动了

三
我们来模拟下我们的设备
模拟一个iphone6 的设备 来打开页面
重新运行看下效果
screenshot截下图 
可以看到我们的截图 baidu.png
