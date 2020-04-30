
护、移植或重构时，测试能够保障代码功能的完整性。对于一些复用度高、需要长期维护的公用代码来说，利用测试来进行质量保障是非常有必要的。

保障代码质量和功能的实现的完整度提升开发效率，在开发过程中进行测试能让我们提前发现 bug ，此时进行问题定位和修复的速度自然比开发完再被叫去修 bug 要快许多便于项目维护，后续任何代码更新也必须跑通测试用例，即使进行重构或开发人员发生变化也能保障预期功能的实现


jest 的集成度更高，提供的功能也更丰富，利用好 jest 所提供的功能，能大大提升测试用例的执行效率。
Jest 特点：

测试用例并行执行，更高效
强大的 Mock 功能
内置的代码覆盖率检查，不需要在引入额外的工具
集成 JSDOM，可以直接进行 DOM 相关的测试
更易用简单，几乎不需要额外配置
可以直接对 ES Module Import 的代码测试
有快照测试功能，可对 React 等框架进行 UI 测试


单元测试的意义？

大规模代码重构时，能保证重构的正确性
保证代码的质量，验证功能完整性
https://www.jianshu.com/p/70a4f026a0f1
https://juejin.im/post/597aa518f265da3e345f3262#heading-10

expect(1+1).toBe(2)//判断两个值是否相等，toBe不能判断对象，需要判断对象要使用toEqual
expect({a: 1}).toEqual({a: 1});//会递归检查对象的每个字段
expect(1).not.toBe(2)//判断不等
expect(n).toBeNull(); //判断是否为null
expect(n).toBeTruthy(); //判断结果为true
expect(n).toBeFalsy(); //判断结果为false
expect(value).toBeCloseTo(0.3); // 浮点数判断相等
expect(compileAndroidCode).toThrow(ConfigError); //判断抛出异常

expect([1,2,3]).toEqual([1,2,3])
expect(null).toBeNull()
expect([1,2,3]).toContain(1)
expect(b).toHaveProperty('hi')
expect('123').toContain('2')
expect('123').toMatch(/^\d+$/)
expect('123').not.toContain('4')

// comapre
expect(8).toBeGreaterThan(7);
expect(7).toBeGreaterThanOrEqual(7);
expect(6).toBeLessThan(7);
expect(6).toBeLessThanOrEqual(6);

// Promise
expect(Promise.resolve('problem')).resolves.toBe('problem');
expect(Promise.reject('assign')).rejects.toBe('assign');

// contain
expect(['apple', 'banana']).toContain('banana');
expect([{name: 'Homer'}]).toContainEqual({name: 'Homer'});

// match
expect('NBA').toMatch(/^NB/);
expect({name: 'Homer', age: 45}).toMatchObject({name: 'Homer'});

// be and equal
expect(4 * 2).toBe(8);                      // ===
expect({bar: 'bar'}).toEqual({bar: 'baz'}); // deep equal
expect(1).not.toBe(2);

// boolean
expect(1 === 2).toBeFalsy();
expect(false).not.toBeTruthy();







测试异步
测试覆盖率

Jest 内置了测试覆盖率工具istanbul，要开启，可以直接在命令中添加 --coverage 参数
