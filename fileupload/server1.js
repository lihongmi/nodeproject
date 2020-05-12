const express = require('express');
const bodyParser = require("body-parser");
const multiparty = require('multiparty')
const path = require('path')
const fs = require('fs');
const fse = require("fs-extra");
const app = express();

app.use(express.static(__dirname + '/public'));
// 使用 body-parser 中间
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/upload', function (req, res) {

    const form = new multiparty.Form({ uploadDir: 'temp' });
    form.parse(req);
    form.on('file', (name, file) => {
       // console.log(JSON.stringify(file));


        // 新增目录存放文件
        const chunksPath = path.join('public/upload', file.originalFilename.split('.')[0]);
        if (!fs.existsSync(chunksPath)) {
            fs.mkdirSync(chunksPath, { recursive: true }); // 新建文件夹
        }

        var dPath = path.join(chunksPath, file.originalFilename.split('.')[1]);
        fs.rename(file.path, dPath, () => {
            res.send({ msg: '文件上传成功:' }).end();
        });

    });

})
app.post('/merge', function (req, res) {
    let name = req.body.name;
    let fname = name.split('.')[0]
    const chunksPath = path.join('public/upload', fname);

    fs.readdir(chunksPath, (err, files) => {
        files.sort((a,b)=>{
            return a-b;
        }).map((res) => {
            // 同步合并文件
            fs.appendFileSync(
                path.join('public/upload/',name),
                fs.readFileSync(path.join(chunksPath, res)), // 读取文件
                () => {}
            )
        });
        
    })
    res.send(name)

})
app.listen(3000)
console.log('server start')

