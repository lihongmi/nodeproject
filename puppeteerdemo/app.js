const puppeteer=require('puppeteer')
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices["iPhone 6"]; //引入模拟设备

let chromepath='./chrome-mac/Chromium.app/Contents/MacOS/Chromium'


puppeteer.launch({
    headless:false,
    executablePath:chromepath
}).then(async browser => {
    const page = await browser.newPage();
    await page.emulate(iPhone); //以iphone6模拟
    await page.goto('https://www.baidu.com');

    //await page.screenshot({path: 'baidu.png'});
   // browser.close();
  }).catch(err => {
      console.log(err);
  });