const express = require('express');
const bodyParser = require("body-parser");
const multiparty = require('multiparty')
const path = require('path')
const fs = require('fs');
const fse = require("fs-extra");
const app = express();
const UPLOAD_DIR = path.resolve(__dirname,'public/upload'); // 大文件存储目录 


app.use(express.static(__dirname + '/public'));
// 使用 body-parser 中间
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/upload',  function (req, res) {

    const form = new multiparty.Form({ uploadDir: 'temp' });
    form.parse(req);
    form.on('file',async (name, chunk) => {

        const chunkDir = `${UPLOAD_DIR}/${chunk.originalFilename.split('.')[0]}`;
         // 切片目录不存在，创建切片目录 
        //  if (!fse.existsSync(chunkDir)) {
        //     await fse.mkdirs(chunkDir);
        // }
        fse.ensureDirSync(chunkDir)

        var dPath = path.join(chunkDir, chunk.originalFilename.split('.')[1]);
        await fse.move(chunk.path,dPath);
        res.send({ msg: '文件上传成功:' });

    });

})
app.post('/merge', async function (req, res) {
    let name = req.body.name;
    let fname = name.split('.')[0]

    const chunkDir = path.join('public/upload', fname);
    const chunks = await fse.readdir(chunkDir);
    
    chunks.sort((a,b)=>{
            return a-b;
        }).map((chunkPath) => {
            // 同步合并文件
            fs.appendFileSync(
                path.join('public/upload/',name),
                fs.readFileSync(`${chunkDir}/${chunkPath}`)
            )
            //fse.unlinkSync(`${chunkDir}/${chunkPath}`);
        });
        //fse.emptyDirSync(chunkDir)
        //fse.rmdirSync(chunkDir); // 合并后删除保存切片的目录 
        fse.removeSync(chunkDir)
       

    res.send(name)

})
app.listen(3000)
console.log('server start')

