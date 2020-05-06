let express=require('express')
let swaggerUi =require('swagger-ui-express')
let swaggerJSDoc=require('swagger-jsdoc')
let path =require('path') 

const app = express()
var usersRouter = require('./routes/users');

app.use('/users', usersRouter);


// 配置 swagger-jsdoc
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'itvlog项目', // swagger 页面基本信息 自由发挥
            version: '1.0.0',
            description: `
              欢迎关注公众号 itvlog
              每天提供3-5分钟高质量视频
              让你碎片化的事件每天都进步一点
            `, // Description (optional)
        }
    },
    apis: [ path.join(__dirname, '/routes/*.js') ] // 重点，指定 swagger-jsdoc 去哪个路由下收集 swagger 注释
}

const swaggerSpec = swaggerJSDoc(options)
// 开放 swagger 相关接口，
// app.get('/swagger.json', function(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(swaggerSpec);
// });
// 使用 swaggerSpec 生成 swagger 文档页面，并开放在指定路由
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = 4000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))