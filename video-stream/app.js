const http= require('http')
const fs = require('fs')
const { stat } = require('fs').promises
const videoPath = './itvlog.mp4'


http.createServer(async (req, res) => {
   
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(`<video width="500" src="/video" controls="controls"></video>`)
        return
    }
    if (req.url === '/video') {
        let stats = await stat(videoPath);
        let range = req.headers['range'];

        //如果不支持range
        if (!range) {
            let head = {
                'Content-Type': 'video/mp4',
                'Content-Length': stats.size
            };
            res.writeHead(200, head);
            fs.createReadStream(videoPath).pipe(res);
            return;
        }
        //支持range
        let r = range.match(/=(\d+)-(\d+)?/)
        let start = parseInt(r[1], 10)
        let end = r[2] ? parseInt(r[2]) : start + 1024 * 1024;
        if (end > stats.size - 1) end = stats.size - 1;

        let head = {
            'Content-Range': `bytes ${start}-${end}/${stats.size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': end - start + 1,
            'Content-Type': 'video/mp4',
        };

        res.writeHead(206, head);
        fs.createReadStream(videoPath, {
            start: start,
            end: end
        }).pipe(res)

        return
    }
    res.end()


}).listen(3000, () => {
    console.log(`server listen on 3000`)
})

