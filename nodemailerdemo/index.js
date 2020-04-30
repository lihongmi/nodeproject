var nodemailer=require('nodemailer')
const moment = require('moment');   

var transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    secureConnection:true,
    port:465,
    secure:true, // 如果是 true 则port填写465, 如果 false 则可以填写其它端口号
    auth: {
      user: 'XXX@163.com',
      pass: 'XXXXX'  //163邮箱的授权码
    }
  });
 // 获取当前时间
 let sendTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  var mailOptions = { 
    from: 'XXX@163.com',  // 发件人邮箱地址
    to: 'XXX@qq.com,XXX@qq.com',     // 收件人邮箱地址
    subject: '欢迎来关注公众号 ITvlog',      // 邮件标题
    /* text: 
    `
        欢迎来关注公众号 ITvlog
        每天提供3-5分钟高质量视频
        让你碎片化的事件每天都进步一点
    `, */
    html: 
    `  <h1>欢迎来关注公众号 <span style='color:red;'>ITvlog</span>
        每天提供3-5分钟高质量视频
        让你碎片化的事件每天都进步一点
        <b>发送时间:${sendTime}</b>
        </h1>
    `,
    attachments:[{
        filename:'index.js',
        path:'./index.js'
    }]
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('电子邮件发送: ' + info.response);
    }
  });