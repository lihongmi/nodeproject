var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /users/hello:
 *   get:
 *     tags:
 *       - 打招呼
 *     summary:  hello打招呼方法
 *     description: 用于测试基础 GET 请求的接口
 *     responses:
 *       200:
 *         description: 【成功】 返回 world
 */
router.get('/hello', (req, res) => {
  res.send('world')
})

/**
 * @swagger
 * /users/hi:
 *   get:
 *     tags:
 *       - 打招呼
 *     summary: GET 用户列表
 *     description: 获取用户列表
 *     parameters:
 *       - name: name
 *         description: 输入用户姓名
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: 成功 返回 用户列表
 */
router.get('/hi',(req,res)=>{
  let name=req.query.name
  res.send({msg:`你好 ${name}!!`});
})

/**
 * @swagger
 * /users/hey/{name}:
 *   get:
 *     tags:
 *       - 打招呼
 *     summary: GET 用户列表
 *     description: 获取用户列表
 *     parameters:
 *       - name: name
 *         description: 输入用户名.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: 成功 返回 用户列表
 */
router.get('/hey/:name',(req,res)=>{
  let name=req.params.name
  res.send({msg:`hey ${name}!`});
})

/**
 * @swagger
 *
 * /users/login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
router.post('/login', (req, res) => {
  // Your implementation comes here ...
  res.send({isok:true})
});

module.exports = router;
