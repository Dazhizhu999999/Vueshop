const express = require('express');

const app=express()

const joi=require('joi')

const cors =require('cors')

//设置允许跨域请求
app.use(cors())

// //让后端识别json
//  app.use(express.json)

app.use(express.urlencoded({extended:false}))

//一定要在路由之前，封装res.cc
app.use((req,res,next)=>{
    //status默认值为1，表示失败的情况
    //err的值，可能是一个错误对象，也可能是一个错误的描述字符串 
    res.cc=function(err,status=1){
        res.send({
            status,
            message:err instanceof Error?err.message:err,
        })
    }
    next()
})

//在路由之前配置解析token的包
const expressJWT= require('express-jwt')
const config= require('./config')
//验证token
app.use(expressJWT({secret:config.jwtSecretKey}).unless({path:[/^\/api/]}))

const userRouter=require('./router/user')


app.use('/api',userRouter)

//导入用户信息模块
const userinfoRouter = require('./router/userinfo')
app.use('/my',userinfoRouter)

//定义错误级别的中间件
app.use((err,req,res,next)=>{
    //验证失败导致的错误
    if(err instanceof joi.ValidationError) return res.cc(err)

    //身份认证失败后的错误
    if(err.name==='UnauthorizedError') return res.cc('身份认证失败！')
    //未知的错误
    res.cc(err)
})


app.listen(3008,()=>{
    
    console.log('api server running at http://127.0.0.1:3008')
})
