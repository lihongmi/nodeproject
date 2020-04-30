var math=require('./math.js')

describe('测试add',()=>{
    beforeAll(() => {
        // 预处理操作
    })
    afterAll(()=>{});
    
    test(' add 1 2 to be 3',()=>{
        let res=math.add(1,2);
        expect(res).toBe(3)
    })


    test(' add 2 2 to be 5',()=>{

        let res=math.add(2,2);
        expect(res).toBe(4)
    })
})

describe('minus',()=>{
    test(' minus 2-2 0',()=>{

        let res=math.minus(2,2);
        expect(res).toBe(0)
    })
})

describe('async getMsg',()=>{
    test('getName',done=>{

        let res=math.getMsg('Lucy',res=>{
            expect(res).toBe('hey Lucy')
            done();
        });
       
    })
})
