/*var webp=require('webp-converter');
webp.cwebp("itvlog.jpg","itvlog.webp","-q 80",function(status,error)
{
  	 //if conversion successful status will be '100'
  	//if conversion fails status will be '101'
  	console.log(status,error);	
  });
*/

/*const cp = require('child_process');

let path="itvlog.jpg"
let shellcmd=`cwebp -q ${quality} ${path} -o ${path}.webp`;

cp.exec(shellcmd, err => {
    if (err !== null) {
        console.log('失败','请先运行cwebp -h命令检查cwebp是否安装ok。')
      
    } else {
        console.log('成功');
    }
});*/


const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');

execFile(cwebp, ['itvlog.jpg', '-o', 'itvlog.webp'], err => {
    if (err) {
        throw err;
    }

    console.log('Image is converted!');
});

