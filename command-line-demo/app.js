const ls = require('log-symbols')
const ora = require('ora')


console.log(ls.info, '信息提示')
console.log(ls.warning, '警告提示')
console.log(ls.error, '错误提示')


const spinner = ora('waiting').start();
spinner.start();


setTimeout(() => {
    spinner.color = 'yellow'
    spinner.text = 'loading'

    spinner.spinner = {
        frames: ['=', '==', '===', '====']
    }

}, 3000);


setTimeout(() => {
    spinner.stop()
    console.log(ls.success, '成功完成')
}, 8000);