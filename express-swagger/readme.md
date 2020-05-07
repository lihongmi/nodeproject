前奏

swagger一款REST API文档生成工具
我们可以从代码注释中自动生成api文档


极速演示下 node 使用swagger 生成 api文档

1.
    新建演示项目
    初始化package.json文件
    安装 express swagger-jsdoc swagger-ui-express模块
    新建index.js
    code打开我们的项目
    创建一个基本的express web
    定义路由
    定义一个hello world的方法
    运行项目
    访问下我们的web
    
2
    接下来完成swagger功能
    引入 swagger-jsdoc swagger-ui-express模块
    顶一下swagger配置信息
    title定义我们的项目名称
    version定义版本号
    description 项目描述
    欢迎关注公众号itvlog
    每天提供3-5分钟高质量it视频
     让你碎片的时间每天进步一点点
    apis  jsdoc 注释生成的文档 由哪些路由文件生成
     定义swagger访问的路由

     重新运行项目
     访问我们的swagger地址
     可以看到我们的项目名称和项目描述

3

    接下来给我们的业务接口添加swagger注释
    运行项目
     可以看到我们的接口文档生成了
     我们还可以点击excute调用接口
     返回结果world


     接下来给我们的接口添加下参数
     再次运行项目
     输入name参数  
     执行一下
     返回结果hello lucy





      




