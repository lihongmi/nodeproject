
mocha（http://mochajs.org/）是一个运行在nodejs上的测试库



前奏

测试驱动开发 可以提高我们的代码质量，
开发中编写测试用例是一种良好的习惯。

单元测试是用来对一个模块、一个函数或者一个类来进行正确性检验的测试工作。

mocha是一个功能丰富的javascript测试框架,可以在浏览器或Node环境下运行。

下面给大家演示下mocha的使用

2.
新建mocha项目 
npm init 生成pakeage.json文件 用来记录项目的详细信息
安装mocha
使用vscode打开我们的项目


新建math.js文件用来 作为被测试的对象

定义一个求和方法
定义一个求差方法
模块导出两个方法

新建测试目录test用来存放我们的测试文件

新建math.test测试文件
引入我们需要测试的文件math
引入断言库assert assert模块是Node的内置模块

mocha提供了describe方法 称为“测试套件”，表示一组相关的测试
    通常我们先描述下我们测试的文件
        其次在描述下测试的方法

mocha提供了it方法  称为“测试用例”，表示一个单独的测试
        我们可以写某个方法的多个测试用例来 测试不同情况下的状况
        测试2+3的情况 断言2+3 equal 5
        再写一个测试不通过的用例4+3 让他等于6

在测试下我们的minus方法
    添加测试用例期望5-3 equal 2

打开package.json文件
修改运行脚本test 输入mocha

切换到终端   
运行 npm test  进行测试


我们看下测试结果报告
测试math.js文件 测试add方法 2+3测试用例通过 4+3测试用例失败
测试minus通过
2个测试用例通过 1个测试用例失败

错误的测试用例4+3实际是7 但我们期望的是6

修改一下4+3的错误测试用例 将结果改成7

重新输入npm test  进行测试

测试全部通过

