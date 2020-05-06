
移植或重构时，测试能够保障代码功能的完整性。对于一些复用度高、需要长期维护的公用代码来说，利用测试来进行质量保障是非常有必要的。

保障代码质量和功能的实现的完整度提升开发效率，在开发过程中进行测试能让我们提前发现 bug ，此时进行问题定位和修复的速度自然比开发完再被叫去修 bug 要快许多便于项目维护，后续任何代码更新也必须跑通测试用例，即使进行重构或开发人员发生变化也能保障预期功能的实现

https://www.jianshu.com/p/70a4f026a0f1
https://juejin.im/post/597aa518f265da3e345f3262#heading-10




强大的 Mock 功能
内置的代码覆盖率检查，不需要在引入额外的工具
集成 JSDOM，可以直接进行 DOM 相关的测试
可以直接对 ES Module Import 的代码测试
有快照测试功能，可对 React 等框架进行 UI 测试





前奏

开发中 单元测试能够保证代码的质量，验证功能完整性。
jest 提供丰富的功能，测试用例并行执行，更高效。
给大家演示下 jest的使用

一
新建项目  初始化package.json文件
安装jest
新建一个数据计算功能的js脚本
及测试用例脚本
vscode打开项目
编写计算函数
一个求和函数
一个求差函数
导出两个函数
测试脚本引入我们的函数
使用test方法编写测试用例
expect 方法用来断言
打开package.json 
运行脚本改成jest
控制台运行我们的测试 npm run test
我们add方法是math模块中的
重新调整下我们的程序
重新运行测试
测试通过


二。
我们某个方法可能要写很多测试用例
我们使用describe方法来定义测试套件    用来表示一组相关的测试

我们在添加一个2+2的测试用例
我们定义一个错误的期望值
可以看到测试报告实际接收到的是4  
这样我们就可以更具测试报告来调整我们的程序了


三
接下来测试下异步方法
定义一个getMsg异步方法

编写getMsg的测试用例
在回掉方法里使用我们的断言

在promise 或async await 其它 情况下
需要判断在哪里使用断言 这里不在演示

四
接下来看下  测试覆盖率的演示


Jest 内置了测试覆盖率工具istanbul，
要开启，可以直接在命令中添加 --coverage 参数

package.json 加入  --coverage 参数

运行测试用例
可以看到覆盖率的统计


给大家提供一份常用的断言api 



常用断言
expect(1+1).toBe(2)//判断两个值是否相等，toBe不能判断对象，需要判断对象要使用toEqual
expect({bar: 'bar'}).toEqual({bar: 'baz'}); //会递归检查对象的每个字段  deep equal
expect(1).not.toBe(2)//判断不等
expect(o).toBeNull(); //判断是否为null
expect(f).toBeTruthy(); //判断结果为true
expect(f).toBeFalsy(); //判断结果为false
expect(value).toBeCloseTo(0.3); // 浮点数判断相等
expect(b).toHaveProperty('hi') //判断包含属性
// comapre
expect(3).toBeGreaterThan(2);
expect(3).toBeGreaterThanOrEqual(2);
expect(3).toBeLessThan(2);
expect(3).toBeLessThanOrEqual(2);
// Promise
expect(Promise.resolve('a')).resolves.toBe('a');
expect(Promise.reject('b')).rejects.toBe('b');
// contain
expect(['apple', 'banana']).toContain('banana');
expect('123').not.toContain('4')
expect([{name: 'Homer'}]).toContainEqual({name: 'Homer'});
// match
expect('NBA').toMatch(/^NB/);
expect({name: 'Homer', age: 45}).toMatchObject({name: 'Homer'});




