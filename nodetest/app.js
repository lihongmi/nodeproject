var http=require('http')
function a(){
    var i=0;
    while(i<10**9*3){
        i++;
     }
}
var j=0;
function foo(){
    var k=1;
    var m=j+k;
}
function bar(){
    foo();
}


http.createServer(function(req,res){

    a();
    bar();

    res.end('hello world'+Math.random())
}).listen(3000);


