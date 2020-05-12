const Koa = require("koa");
const router = require("koa-router")();
const multiparty = require("multiparty");
const app = new Koa();


router.get("/", (ctx) => {
    ctx.body = require("fs").readFileSync("./index.html", "utf-8");
});
let form = new multiparty.Form({ uploadDir: './upload/' });

// form.encoding = 'utf-8'; //设置编辑 
// form.uploadDir = './upload/'; //设置图片存储路径 
// form.keepExtensions = true; //保留后缀 
// form.maxFieldsSize = 2*1024*1024; //内存大小 
// form.maxFilesSize= 5*1024*1024;//文件字节大小限制，超出会报错err 

router.post('/uploadimgs', async (ctx,next) => {
    await new Promise(resolve=>{
        form.parse(ctx.req, function (err, fields, files) {
            console.log(files, fields);//除文件外的其他附带信息
    
            //rename
            var file = files.file[0];
            var oPath = file.path;
            var dPath = './images/' + file.originalFilename;
            //重命名为真实文件名
            fs.rename(oPath, dPath, () => {
                resolve(next())
             });
        });
    })
    ctx.body = "上传成功";
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
console.log("listen on 3000");

