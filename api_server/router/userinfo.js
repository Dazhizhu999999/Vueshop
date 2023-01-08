const express = require('express')

const router= express.Router()


const {update_userinfo_schema}= require('../schema/user')

const expressJoi=require('@escook/express-joi')

const userinfo_handler=require('../router_handler/userinfo')

//挂载路由,获取用户基本信息
router.get('/userinfo',userinfo_handler.getUserInfo)

//expressJoi(update_userinfo_schema) 这个Joi验证包有点问题
//更新用户路由
router.post('/userinfo',userinfo_handler.updateUserInfo)

module.exports=router