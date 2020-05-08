const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')
const fs=require('fs')
let open = require("open");


//加一个背景色
ctx.fillStyle="gray";
ctx.fillRect(0,0,200,200)
 
// Write "Awesome!"
let msg="公众号 itvlog"
ctx.font = '30px Impact'
//ctx.rotate(0.1)
ctx.fillStyle="white"
ctx.fillText(msg, 20, 150)

ctx.fillStyle="blue"
ctx.fillText('欢迎关注！', 50, 180)
 
// Draw line under text
var text = ctx.measureText(msg)
ctx.strokeStyle = 'rgba(255,0,0,0.5)'
ctx.beginPath()
ctx.lineWidth=10;
ctx.lineTo(0, 185)
ctx.lineTo(50 + text.width, 195)
ctx.stroke()
 
// Draw cat with lime helmet
loadImage('wx_qrcode.jpg').then((image) => {
  ctx.drawImage(image, 50, 20, 100, 100)
  var html='<img style="margin:auto;display:block;" src="' + canvas.toDataURL() + '" />';
  fs.writeFile('./demo.html',html,()=>{
    open('./demo.html',"chrome");
  })
  
  let ws=fs.createWriteStream('./itvlog.jpg')
  canvas.createJPEGStream().pipe(ws)

})