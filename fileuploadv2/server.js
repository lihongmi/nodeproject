const express=require('express')
const bodyParser=require('body-parser')
const multiparty=require('multiparty')
const fse=require('fs-extra')
const path=require('path');
const fs=require('fs')

const app=express();

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const UPLOAD_DIR=path.resolve(__dirname,'public/upload');

app.post('/upload',function(req,res){
    const form=new multiparty.Form({uploadDir:'temp'})
    form.parse(req);

    form.on('file',async (name,chunk)=>{
        //存放切片的目录
        let chunkDir=`${UPLOAD_DIR}/${chunk.originalFilename.split('.')[0]}`
        if(!fse.existsSync(chunkDir)){
            await fse.mkdirs(chunkDir);
        }
        //原文件名.index.ext
        var dPath=path.join(chunkDir,chunk.originalFilename.split('.')[1]);

        await fse.move(chunk.path,dPath,{overwrite:true})

        res.send('文件上传成功')
    })
   
})
app.post('/merge',async function(req,res){
    let name=req.body.name;
    let fname=name.split('.')[0];

    let chunkDir=path.join(UPLOAD_DIR,fname);
    let chunks=await fse.readdir(chunkDir);

    chunks.sort((a,b)=>a-b).map(chunkPath=>{
        //合并文件
        fs.appendFileSync(
            path.join(UPLOAD_DIR,name),
            fs.readFileSync(`${chunkDir}/${chunkPath}`)
        )
    })
    fse.removeSync(chunkDir);
    res.send({msg:'合并成功',url:`http://localhost:3000/upload/${name}`})


})


app.listen(3000);
console.log('listen 3000')