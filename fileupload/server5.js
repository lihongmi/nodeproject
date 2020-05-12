const http = require("http");
const path = require("path");
const fse = require("fs-extra");
const multiparty = require("multiparty");

const server = http.createServer();
const UPLOAD_DIR = path.resolve(__dirname, "..", "target"); // 大文件存储目录 


const extractExt = filename => filename.slice(filename.lastIndexOf("."), filename.length); // 提取后缀名 
// 返回已经上传切片名列表 
const createUploadedList = async fileHash =>
    fse.existsSync(`${UPLOAD_DIR}/${fileHash}`)
        ? await fse.readdir(`${UPLOAD_DIR}/${fileHash}`)
        : [];

        const resolvePost = req =>
    new Promise(resolve => {
        let chunk = "";
        req.on("data", data => {
            chunk += data;
        });
        req.on("end", () => {
            resolve(JSON.parse(chunk));
        });
    });

// 合并切片 
const mergeFileChunk = async (filePath, filename) => {
    const chunkDir = `${UPLOAD_DIR}/${filename}`;
    const chunkPaths = await fse.readdir(chunkDir);
    await fse.writeFile(filePath, "");
    //todo 同步的地方  对切片文件排序
    chunkPaths.forEach(chunkPath => {
        fse.appendFileSync(filePath, fse.readFileSync(`${chunkDir}/${chunkPath}`));
        fse.unlinkSync(`${chunkDir}/${chunkPath}`);
    });
    fse.rmdirSync(chunkDir); // 合并后删除保存切片的目录 
};

server.on("request", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.status = 200;
        res.end();
        return;
    }
    if (req.url === "/upload") {
        const multipart = new multiparty.Form();
        multipart.parse(req, async (err, fields, files) => {
            if (err) {
                return;
            }
            const [chunk] = files.chunk;
            const [hash] = fields.hash;
            const [filename] = fields.filename;
            const chunkDir = `${UPLOAD_DIR}/${filename}`;

            // 切片目录不存在，创建切片目录 
            if (!fse.existsSync(chunkDir)) {
                await fse.mkdirs(chunkDir);
            }

            // fs-extra 专用方法，类似 fs.rename 并且跨平台 
            // fs-extra 的 rename 方法 windows 平台会有权限问题 
            // https://github.com/meteor/meteor/issues/7852#issuecomment-255767835 
            await fse.move(chunk.path, `${chunkDir}/${hash}`);
            res.end("received file chunk");
        });
    } else if (req.url === "/merge") {
        const data = await resolvePost(req);
        const { filename } = data;
        const filePath = `${UPLOAD_DIR}/${filename}`;
        await mergeFileChunk(filePath, filename);
        res.end(
            JSON.stringify({
                code: 0,
                message: "file merged success"
            })
        );
    } else if (req.url === "/verify") {
        const data = await resolvePost(req);
        const { fileHash, filename } = data;
        const ext = extractExt(filename);
        const filePath = `${UPLOAD_DIR}/${fileHash}${ext}`;
        if (fse.existsSync(filePath)) {
            res.end(
                JSON.stringify({
                    shouldUpload: false
                })
            );
        } else {
            res.end(
                JSON.stringify({
                    shouldUpload: true,
                    uploadedList: await createUploadedList(fileHash)
                })
            );
        }
    }
});
server.listen(3000, () => console.log("正在监听 3000 端口")); 