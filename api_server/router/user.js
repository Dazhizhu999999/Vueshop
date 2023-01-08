const express = require('express')

const router = express.Router()


//导入用户路由处理函数对应的模块

const user_handler =require('../router_handler/user')

//导入验证数据的中间件
const expressJoi= require('@escook/express-joi')

//导入需要的验证规则对象
const {reg_login_schema} = require('../schema/user')
//注册
router.post('/reguser',user_handler.regUser

)

//这个Joi验证规则对象有点问题expressJoi(reg_login_schema),虽然可以用postman
//登录
router.post('/login',user_handler.login

)

router.post('/check',user_handler.reg_phoneCheck)

router.post('/pubArticle',user_handler.pubAcrticle)
module.exports=router