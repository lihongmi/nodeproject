let [file, pro] = [document.getElementById('file'), document.getElementById('pro')]

file.onchange = () => {
    upload()
}
function upload(start = 0, index = 0, chunkSize = 1024 * 1024) {
    let f = file.files[0]

    if (start >= f.size) return
    let end = start + chunkSize >= f.size ? f.size : start + chunkSize

    // blob 和 file 相互转换
    let aimfile = new File(
        [f.slice(start, end)],
        `${f.name.split('.')[0]}.${index}.${f.name.split('.')[1]}`,
        { type: f.type, lastModified: Date.now() }
    )

    let form = new FormData()
    form.append('file', aimfile)

    ajax(form, (flag) => {
        if (flag) {
            pro.style.width = end / f.size * 200 + 'px'
            upload(end, ++index)
        }
    })
}

function ajax(file, cb, method = 'POST', url = 'http://localhost:5000/upload') {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.send(file)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            cb(xhr.responseText)
        }
    }
}
