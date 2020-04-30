var log4js=require('log4js')

const layout={
    type:'pattern',
    pattern: '%d{yyyy-MM-dd hh:mm:ss.SSS} [%p] %m'
}

log4js.configure({
    appenders: {
            allfile: { type: 'dateFile', filename: 'itvlog_all.log', pattern: '.yyyy-MM-dd'},
            errorfile: { type: 'file', filename: 'itvlog_error.log' },
            console:{type:'console',layout}
    },
    categories: { 
        default: { appenders: ['allfile','console'], level: 'debug' },
        error: { appenders: ['errorfile'], level: 'error' },
    }
});
// 获取默认日志
var logger=log4js.getLogger();
// 获取错误级别日志
var errorLogger=log4js.getLogger('error');


logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');

errorLogger.error('Cheese is too ripe!');
errorLogger.fatal('Cheese was breeding ground for listeria.');
