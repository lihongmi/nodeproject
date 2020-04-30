var inquirer = require('inquirer');
const quesitons = [{
    type: 'input',
    message: '名字',
    name: 'name',
    default: "匿名", // 默认值
    validate(val){
        if('匿名'==val) return false;
        return true;
    }
},{
    type: 'confirm',
    message: '是否结婚',
    name: 'ismarry'
},{
    type: 'list',
    message: '学历',
    name: 'xueli',
    choices:['大专','本科',"研究生"]
}, {
    type: 'checkbox',
    message: '爱好',
    name: 'aihao',
    choices:['音乐','电影',"舞蹈",'体育']
}, {
    type: 'editor',
    message: '自我介绍',
    name: 'intro'
}
];

inquirer.prompt(quesitons).then(answer => {
    console.log(answer)
});

