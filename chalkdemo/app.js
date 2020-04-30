var chalk=require('chalk')
var log=console.log

log(chalk.blue('hello')+'world'+chalk.red('!'));
log(chalk.bold.blue('hello')+'world'+chalk.red.underline('!'));
log(chalk.blue.bgRed('hello')+'world'+chalk.red('!'));

log(chalk.blue('hello','world','foo','bar'))

log(chalk.blue('hello',chalk.underline('world')))

var user={
    name:'lucy',
    chinese:'90',
    english:87
}
log(`
    成绩
    语文${chalk.red(user.chinese)}分
    英语${chalk.blue(user.english)}分
`);

log(chalk`
    成绩
    语文 {red ${user.chinese}}分
    英语 {blue.underline ${user.english}}分
`);

log(chalk.green('nihao %s'),user.name)


var error=chalk.bold.red;
var warning=chalk.keyword('orange')

log(error('错误'))
log(warning('警告'))