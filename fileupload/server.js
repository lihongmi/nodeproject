const express = require('express');
const bodyParser = require("body-parser");
const multiparty = require('multiparty')
const path = require('path')
const fs = require('fs');
const fse = require("fs-extra");
const app = express();
const UPLOAD_DIR = path.resolve(__dirname, 'public/upload'); // 大文件存储目录 

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/upload', function (req, res) {
    const form = new multiparty.Form({ uploadDir: 'temp' });
    form.parse(req);
    form.on('file', async (name, chunk) => {

        const chunkDir = `${UPLOAD_DIR}/${chunk.originalFilename.split('.')[0]}`;
        // 切片目录不存在，创建切片目录 
        
          if (!fse.existsSync(chunkDir)) {
            await fse.mkdirs(chunkDir);
        }
      
        var dPath = path.join(chunkDir, chunk.originalFilename.split('.')[1]);
        await fse.move(chunk.path, dPath,{overwrite:true});
        
        res.send({ msg: '文件上传成功:' });

    });

})
app.post('/merge', async function (req, res) {
    let name = req.body.name;
    let fname = name.split('.')[0]

    const chunkDir = path.join(UPLOAD_DIR, fname);
    const chunks = await fse.readdir(chunkDir);

    chunks.sort((a, b) => a - b).map(chunkPath => {
        // 同步合并文件
        fs.appendFileSync(
            path.join(UPLOAD_DIR, name),
            fs.readFileSync(`${chunkDir}/${chunkPath}`)
        )
    });
  
    fse.removeSync(chunkDir)
    res.send({msg:'合并成功',url:`http://localhost:3000/upload/${name}`})
})
app.listen(3000)
console.log("listen 3000");

