class App {
    fileSlice(file) {
        const files = []
        for (let i = 0; i < file.size; i += this.chunkSize) {
            const end = (i + this.chunkSize) > file.size ? file.size : i + this.chunkSize
            files.push(file.slice(i, (end > file.size) ? file.size : end))
        }
        return files
    }

    //这个代码有问题？
    async _md5File(files) {
        const spark = new SparkMd5.ArrayBuffer()
        var fileReader
        for (var i = 0; i < files.length; i++) {
            fileReader = new FileReader()
            fileReader.readAsArrayBuffer(files[i])
        }
        return new Promise((resolve, reject) => {
            fileReader.onload = function (e) {
                spark.append(e.target.result)
                if (i === files.length) {
                    resolve(spark.end())
                }
            }
        })
    }
    async fileUpload(file, index) { 
        var form = new FormData()  
        form.append('chunkIndex', index)  
        form.append('fileName', this.fileName)  
        form.append('file', file)  
        form.append('md5', this.md5)  
        var xhr = new XMLHttpRequest()  
        xhr.open('post', 'http://localhost:8888/upload', true)  
        const pro = new Promise((resolve, reject) => {    
         xhr.onload = function() {      // alert('上传完成!')      
           resolve('success')    }    
           xhr.onerror = function() {      
              reject('error')  
       }       })  
       xhr.send(form)  
       return pro
   }
}