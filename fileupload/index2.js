`
<input type="file" id=file>
    <!-- 进度条 -->
    <div id='pro'></div>
`


//async.min.js
var file = $("#uppic")[0].files[0],//上传文件主体
    name = file.name,        //文件名
    size = file.size,        //总大小
    succeed = 0;  //当前上传数
var shardSize = 2 * 1024 * 1024,    //以2MB为一个分片
    shardCount = Math.ceil(size / shardSize);  //总片数

/*生成上传分片文件顺充，通过async.eachLimit()进行同步上传
    attr里面是[0,1,2,3...,最后一位]    
*/
var attr = [];
for (var i = 0; i < shardCount; ++i) {
    attr.push(i);
}



async.eachLimit(attr, 1, function (item, callback) {
    var i = item;
    var start = i * shardSize,//当前分片开始下标
        end = Math.min(size, start + shardSize);//结束下标

    //构造一个表单，FormData是HTML5新增的
    var form = new FormData();
    form.append("data", file.slice(start, end));  //slice方法用于切出文件的一部分
    form.append("name", name);//文件名字
    form.append("total", shardCount);  //总片数
    form.append("index", i + 1);   //当前片数
    //Ajax提交

    $.ajax({
        url: "/dafile",
        type: "POST",
        data: form,
        timeout: 120 * 1000,
        async: false,        //同步
        processData: false,  //很重要，告诉jquery不要对form进行处理
        contentType: false,  //很重要，指定为false才能形成正确的Content-Type
        success: function (data) {
            ++succeed;
            var data = eval('(' + data + ')');
            /*返回code为0是成功上传，1是请继续上传*/
            if (data.code == 0) {
                console.log(data.msg);
            } else if (data.code == 1) {
                console.log(data.msg);
            }
            //生成当前进度百分比
            var jd = Math.round(succeed / shardCount * 100) + '%';
            $('.jdb').html(jd);
            /*如果是线上，去掉定时，直接callback()， 回调动画
            这样写是为方便，本地测试看到进度条变化
            因为本地做上传测试是秒传，没有时间等待*/
            setTimeout(callback, 50);
        }
    });
}, function (err) {
    console.log('上传成功');
});

