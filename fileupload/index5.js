const LENGTH = 10; // 切片数量 

var app = {
    data: () => ({ 
        fakeUploadPercentage: 0 
     }), 
     computed: { 
       uploadPercentage() { 
         if (!this.container.file || !this.data.length) return 0; 
         const loaded = this.data 
           .map(item => item.size * item.percentage) 
           .reduce((acc, cur) => acc + cur); 
         return parseInt((loaded / this.container.file.size).toFixed(2)); 
       } 
     }, 
     watch: { 
        uploadPercentage(now) { 
          if (now > this.fakeUploadPercentage) { 
            this.fakeUploadPercentage = now; 
          } 
       } 
     }, 
    // 生成文件 hash（web-worker） 
    calculateHash(fileChunkList) {
        return new Promise(resolve => {
            // 添加 worker 属性 
            this.container.worker = new Worker("/hash.js");
            this.container.worker.postMessage({ fileChunkList });
            this.container.worker.onmessage = e => {
                const { percentage, hash } = e.data;
                this.hashPercentage = percentage;
                if (hash) {
                    resolve(hash);
                }
            };
        });
    },
    async verifyUpload(filename, fileHash) {
        const { data } = await this.request({
            url: "http://localhost:3000/verify",
            headers: {
                "content-type": "application/json"
            },
            data: JSON.stringify({
                filename,
                fileHash
            })
        });
        return JSON.parse(data);
    },
    async handleResume() {
        const { uploadedList } = await this.verifyUpload(
            this.container.file.name,
            this.container.hash
        );
        await this.uploadChunks(uploadedList);
    },
    async handleUpload() {
        if (!this.container.file) return;
        const fileChunkList = this.createFileChunk(this.container.file);
        this.container.hash = await this.calculateHash(fileChunkList);


        const { shouldUpload,uploadedList } = await this.verifyUpload(
            this.container.file.name,
            this.container.hash
        );
        if (!shouldUpload) {
            this.$message.success("秒传：上传成功");
            return;
        }

        this.data = fileChunkList.map(({ file }, index) => ({
            fileHash: this.container.hash,
            chunk: file,
            hash: this.container.file.name + "-" + index, // 文件名 + 数组下标 
            percentage: uploadedList.includes(index) ? 100 : 0 
        }));
        await this.uploadChunks(uploadedList);
    },
    handleFileChange() {}, 
     // 生成文件切片 
     createFileChunk(file, length = LENGTH) { 
       const fileChunkList = []; 
       const chunkSize = Math.ceil(file.size / length); 
       let cur = 0; 
       while (cur < file.size) { 
         fileChunkList.push({ file: file.slice(cur, cur + chunkSize) }); 
         cur += chunkSize; 
       } 
       return fileChunkList; 
     }, 
    // 上传切片，同时过滤已上传的切片 
    async uploadChunks(uploadedList = []) {
        const requestList = this.data
            .filter(({ hash }) => !uploadedList.includes(hash))
            .map(({ chunk, hash, index }) => {
                const formData = new FormData();
                formData.append("chunk", chunk);
                formData.append("hash", hash);
                formData.append("filename", this.container.file.name);
                formData.append("fileHash", this.container.hash);
                return { formData, index };
            })
            .map(async ({ formData, index }) =>
                this.request({
                    url: "http://localhost:3000",
                    data: formData,
                    onProgress: this.createProgressHandler(this.data[index]),
                    requestList: this.requestList
                })
            );
        await Promise.all(requestList);
        // 之前上传的切片数量 + 本次上传的切片数量 = 所有切片数量时 
        // 合并切片 
        if (uploadedList.length + requestList.length === this.data.length) {
            await this.mergeRequest();
        }
    }
}