var http=require('http');
let obj={},i=0;
function newobj(){
     obj[i++]=Math.random();
     return JSON.stringify(obj);
}
http.createServer((req,res)=>{
    let msg=newobj();
    res.end(msg);
}).listen(3000,()=>{
    console.log('服务启动成功');
});