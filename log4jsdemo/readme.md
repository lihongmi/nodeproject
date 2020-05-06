npm install log4js

日志级别
ALL<TRACE < DEBUG < INFO < WARN < ERROR < FATAL< MARK < OFF

appender 主要是用来定义以怎样的方式输出
console：控制台输出
file：文件输出
dateFile：按日期切割的文件输出

日志格式
日志切割
输出多个文件
覆盖console


前奏
开发应用程序，日志记录是非常重要的。
日志可以帮助开发人员快速定位线上问题

给大家演示下log4js使用   一款node日志管理工具

一。
创建log4js项目
安装log4js模块
新建index.js vscode 打开项目

导入 log4js 包
获取logger对象
定义logger打印日志级别

logger.debug一个a
运行看下效果

log4js还有其它日志级别的方法

我们同样也书写一下

可以看不同级别不同颜色

log4js级别顺序依次是
TRACE < DEBUG < INFO < WARN < ERROR < FATAL


我们修改日志级别warn
可以看到warn及一下级别才能出现在控制台里

我们logger对象默认类型是控制台类型

我们看下它的配置

把下面定义日志级别去掉 可以看到效果是一样的

级别改成debug 看下效果

appender 用来定义日志输出方式的 
我们添加一个file appender 文件输出

file appender加入我们默认日志类型里
可以看到控制台和文件里都写入了日志

我们还可以定义日志的格式
看下效果

我们还可以做日志分割

appender type 是dateFile
可以看到生成all
第二天他会把all.log 文件重新命名添加上时间
再新建一个新的all.log文件

我们还可以添加新的logger类型
用来把不同级别的日志输出到不同的文件里

删除日志文件
重新运行看下效果

可以看到error 和fatal写到了 all.log
debug到warn级别日志写到server.log




