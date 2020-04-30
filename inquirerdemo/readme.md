前奏


inquirer 一个基于nodejs、提问-回答模式的命令行交互工具。

现在很多工程都是通过脚手架来创建的，使用脚手架的时候最明显的就是与命令行的交互，
如果想自己做一个脚手架，给大家推荐 inquirer。

两个重要概念
 问题(quesion)
 回答(answer)


1.引入我们的inquirer安装包
2.定义我们的quesion变量用来接受 问题
3.inquirer 提供了一个prompt的方法用来提出问题
4.当用户交互完成 then方法传递回一个answer对象用来存储我们的答案
5.接下来定义我们的具体问题
    定义一个输入用户姓名的问题
    type属性用来表示提问的类型 type等于input 代表输入问题的类型
    name存储当前问题回答的变量 用username来接受我们输入的内容
    message：问题的描述；
    default：默认值； 
6.
node main.js 运行一下我们的命令
输入曹操
打印结果为username曹操
7.
接下来我们定义其它类型的问题
定义一个是否结婚的问题
type是confirm
用变量ismarry来接受
8.
定义一个选择学历列表
type是list
用变量xueli来接受
9.
定义一个爱好的多选项问题
type是checkbox
用变量aihao来接受

10.
运行下我们的项目
通过打印结果 到我们的回答的问题都放到 answer对象里了

11.
我们也可以通过validate方法来验证用户输入的内容 true需继续执行false重新输入






type：表示提问的类型，如 input, confirm, list, checkbox等；
name: 存储当前问题回答的变量；
message：问题的描述；
default：默认值；
choices：列表选项，
validate：对用户的回答进行校验；



语法结构
const inquirer = require('inquirer');
const question = [
    // 具体交互内容
];
inquirer.prompt(question).then(answer => {
    console.log(answer); // 返回的结果
})


https://www.cnblogs.com/dashnowords/p/9632495.html
https://www.jianshu.com/p/e5fe2effeee9
https://blog.csdn.net/qq_26733915/article/details/80461257


