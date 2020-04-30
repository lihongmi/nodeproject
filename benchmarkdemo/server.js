const Benchmark = require("benchmark");

var suite = new Benchmark.Suite;

//添加测试
suite.add('RegExp', function(){
    /o/.test('Hello World!');
})
    .add('indexof',  function(){
        'Hello World!'.indexOf('o') > -1;
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('最快的是' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });