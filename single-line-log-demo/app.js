var log=require('single-line-log').stdout

log('1')

var index=1;
var timer=setInterval(() => {
    index++;
    if(index>100){
        clearInterval(timer)
        console.log('\n下载完成')
    }else{
        log(`下载进度${index}%`);
    }
    
}, 30);

