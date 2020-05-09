const Koa = require('koa')
const router = require('koa-router')()
const querystring = require('querystring')
const axios = require('axios')

const app = new Koa()

// GitHub登录参数配置；配置授权应用生成的Client ID和Client Secret
const config = {
  clientId: '1d094e368b7589fbb540',
  clientSecret: '09d6f2ec0172f405d409c3f62d41253947bfacff'
}
//首页
router.get('/', async ctx => {
    var html=`
            <h1>itvlog</h1>
            <p>每天出品3-5分钟精彩it高质视频  精简版 效率极高</p>
            <a href="/github/login">登录github</a>
        `
    ctx.body=html;
  })
// 登录接口
router.get('/github/login', async ctx => {
  // 重定向到GitHub认证接口，并配置参数
  let url = 'https://github.com/login/oauth/authorize?client_id=' + config.clientId
  // 转发到授权服务器
  ctx.redirect(url)
})

// GitHub授权登录成功回调，地址必须与GitHub配置的回调地址一致
router.get('/github/callback', async ctx => {
  console.log('callback成功')

  // 服务器认证成功，回调带回认证状态code
  const code = ctx.query.code
 
  // 申请令牌token
  let res = await axios.post('https://github.com/login/oauth/access_token', {
    client_id: config.clientId,
    client_secret: config.clientSecret,
    code: code
  })

  const access_token = querystring.parse(res.data).access_token

  // 根据token获取用户信息
  res = await axios.get('https://api.github.com/user?access_token=' + access_token)

  // 渲染页面
  let{login,avatar_url,bio,html_url}=res.data;
  ctx.body = `
    <h2>你好 ${login}</h2>
    <img width="50" src="${avatar_url}"/>
    <p>介绍${bio}</p>
    <p>git主页${html_url}</p>
    <p>所有信息${JSON.stringify(res.data, null, 4)}</p>
  `
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('web服务启动')
})
