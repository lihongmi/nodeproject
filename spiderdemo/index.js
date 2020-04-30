const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices["iPhone 6"]; //引入模拟设备
const url = 'https://www.liujiaweb.com/337.html';    //访问的地址

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '../../bin/chrome-mac/Chromium.app/Contents/MacOS/Chromium' //Chromium可执行程序路径
    });
    const page = await browser.newPage();
    await page.emulate(iPhone); //以iphone6模拟
    await page.goto(url);   //访问定义好的url地址
    await page.screenshot({
        path: 'screenShot.png', //最终生成的截图叫什么名字,随便起一个名字
        fullPage: true, //是否截取完整的网页,如果为true,就是我们说的完整页面,长截图
    });
    browser.close();
})();