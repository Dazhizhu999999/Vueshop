const joi=require('joi')

//验证规则
const username=joi.string().alphanum().min(1).max(10).required()
const password =joi.string().pattern(/^[\S]{6,12}$/).required()

const id= joi.number().integer().min(1).required()
const nickname=joi.string().required()
const user_email= joi.string().email().required()

//定义验证注册和登录验证规则对象
exports.reg_login_schema={
    body:{
   username,
    password
    },
}

//验证规则对象，更新用户基本信息
exports.update_userinfo_schema={
    body:{
        id,
      nickname,
       email:user_email
    }
}

//注册新用户的处理函数