var math=require('../math.js');
var assert=require('assert');

describe('测试 math.js',function(){
    describe('add',function(){
        it('2+3',function(){
            assert.equal(math.add(2,3),5);
        });
        it('2+4',function(){
            assert.equal(math.add(2,3),5);
        })
    })
    describe('minus',function(){
        it('2-3',function(){
            assert.equal(math.minus(2,3),-1);
        });
    });
})