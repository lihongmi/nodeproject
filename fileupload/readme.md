前奏

1.
mkdir chunkupload
cd chunkupload
npm init -y
npm install express multiparty body-parser fs-extra
mkdir public temp
touch server.js public/index.html

2.先实现简单的文件上传

3.文件分片上传

4.合并分片 返回正确的url

参考



点击上传时，检查是否需要上传和已上传的切片。
点击暂停后的恢复上传，返回已上传的切片。
大文件上传：
前端上传大文件时使用 Blob.prototype.slice 将文件切片，并发上传多个切片，最后发送一个合并的请求通知服务端合并切片。
服务端接收切片并存储，收到合并请求后使用 fs.appendFileSync 对多个切片进行合并。
原生 XMLHttpRequest 的 upload.onprogress 对切片上传进度的监听。
使用 Vue 计算属性根据每个切片的进度算出整个文件的上传进度。

断点续传：
使用 spart-md5 根据文件内容算出文件 hash。
通过 hash 可以判断服务端是否已经上传该文件，从而直接提示用户上传成功（秒传）。
通过 XMLHttpRequest 的 abort 方法暂停切片的上传。
上传前服务端返回已经上传的切片名，前端跳过这些切片的上传

暂停上传  恢复上传
https://developer.51cto.com/art/202004/613728.htm
https://blog.csdn.net/x746655242/article/details/52964623
https://blog.csdn.net/lucky541788/article/details/99686392
https://blog.csdn.net/weixin_34381666/article/details/91372207
https://www.jianshu.com/p/cbfb693e4b36
https://segmentfault.com/q/1010000016741599/a-1020000016770813

