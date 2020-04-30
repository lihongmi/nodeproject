前奏

最近vue3发布了  带大家掌握下vue3的快速使用
一。
安装最新版vue-cli

vue -V 查看vue的版本 

vue create创建项目

手动选择功能

选择router vuex 和 css预处理

其它选择默认

命令行进入项目


这里 vue-cli 创建的是vue2.6版本的项目

vue add vue-next 升级我们的vue到3.0版本


可以看到成功的安装了 vue-cli-plugin-vue-next插件

成功的将vuex 升级到4.0
vue-router 同样升级到4.0

vscode 打开我们的项目 打开package.json文件
可以看到vue升级到3.0beta版本

vue-router vuex 也是 4.0 alpha版本
vue3.0模版的编译插件 
vue-next插件

打开项目入口文件main.js

可以看到新版本我们使用  createApp 创建vue实例
之前vue2.6版本使用new Vue构造方法创建实例
use方法挂载 router和store
mount方法挂载到 html id为app的节点

打开router.js
同步组件home
异步组件about
createRouter创建路由对象
之前vue2.6版本使用 new Router构造方法创建实例
打开home组件
看到home组件使用了helloworld自组件
打开helloworld组件 将组件精简一下
npm run serve运行项目

浏览器访问我们的项目
img是我们的logo
文本信息是helloworld组件的内容

二。
打开helloworld组件

组件的msg属性绑定再h1标签上

我们使用 vue3 api声明组件的state状态

导入reactive方法
reactive 数据响应式函数，内部通过es6的proxy api 来实现的，

setup 方法  用来替代 vue2.6中的 beforeCreate created

给大家提供一张vue2.6 和vue 声明周期的对应关系图

定义一个count state

定义自加方法来改变状态

定义button绑定方法

使用computed方法计算属性
计算count 二倍的数值

使用watch方法监控状态的改变

可以看到state方法改变触发了我们的watch

通过ref方法关联我们的节点

只有在组件 onMounted 后才能使用节点

我们改变下节点的颜色

watch方法 可以通过参数value查看改变的值


三。
切换到about路由
我们在about组件里演示vuex的使用

打开store.js
store里的定义跟之前vue2.6一样

我们定义一个count状态
定一个改变count的方法inc
打开about组件
vuex提供useStore方法来引用我们的store
我们定一个一个计算属性关联到store的state
绑定我们的count 
可以看到store里的count展示在了页面上

commit mutation来改变我们的store状态

整体演示就到这里 望大家有所收获





