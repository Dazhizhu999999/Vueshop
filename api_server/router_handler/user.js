//短信验证包
const SMSClient = require('@alicloud/sms-sdk');

//导入数据库
const db = require('../db/index')

//加密
const bcrypt=require('bcryptjs')

//导入token的包
const jwt = require('jsonwebtoken')
const config = require('../config')

exports.regUser=(req,res)=>{
    //获取客户端信息
    const userinfo =JSON.parse(Object.keys(req.body))
    //0 0!因为传过来的数据有点奇怪
    //keys获取JSON解析后的键值
    console.log(userinfo)
    console.log(typeof userinfo)
    console.log(userinfo[0])
    //校验

    // if(!userinfo.username || !userinfo.password){
    //     return res.send({status:1,message:'用户名或密码不合法！'})
    // } 
    const sqlStr='select * from ev_users where username=?'
    db.query(sqlStr,userinfo.username,(err,results)=>{
        if(err){
        return res.cc(err)
    }
        //判断是否被占用
        if(results.length>0){
            return res.cc('用户名被占用')
        }
        //用户名可用hashSync()对密码加密
        //调用bcrypt.
        userinfo.password=bcrypt.hashSync(userinfo.password,10);

        //插入新用户
        const sql = 'insert into ev_users set ?'
        db.query(sql,{username:userinfo.username,password:userinfo.password,phoneNum:userinfo.phoneNum},(err,results)=>{
            if(err) return res.cc(err)
            //判断影响行数是否为1
            if(results.affectedRows!== 1) res.cc('注册失败')

res.cc({
    status:0,
    message:'注册成功',
})
        })
    })
    // res.send('reguser OK')
}

exports.login=(req,res)=>{
const userinfo=JSON.parse(Object.keys(req.body))
const sql = 'select * from ev_users where username=?'
db.query(sql,userinfo.username,(err,results)=>{
    if(err) return res.cc(err)
    //判断影响行数是否为1
    if(results.length!== 1) return res.cc('账号错误')
    //明文密码与加密密码比较
    const compareResult= bcrypt.compareSync(userinfo.password,results[0].password)
    if(!compareResult) return res.cc('密码错误')
    console.log(userinfo.password)
    //TODO:在服务端生成Token的字符串
    const user = {...results[0],password:'',user_pic:''}
    console.log(user)

    //对用户信息加密
    const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn:config.expiresIn})
    console.log(tokenStr)
    res.send({
        status:0,
        message:'登录成功',
        token:'Bearer '  +tokenStr,
    })
})
}

exports.reg_phoneCheck=(req,res)=>{

    const userinfo=JSON.parse(Object.keys(req.body))
    // 创建 SMSClient 实例
const client = new SMSClient({
    accessKeyId: 'LTAI5tPVQf61Ea6RzX5QLfeF',
    secretAccessKey: 'wd3gqYa92LfJSFfZMJg6vUFmyTQERb'
  });
  // 发送短信
  const test = {
    PhoneNumbers: userinfo.phoneNum,
    SignName: '阿里云短信测试',
    TemplateCode: 'SMS_154950909',
    TemplateParam: '{"code":"8888"}'
  }
  client.sendSMS(test).then(function (msm) {
    let {Code}=msm
    if (Code === 'OK') {
      // 处理返回参数
      console.log(msm)
      res.send({
        status:0,
        code:JSON.parse(test.TemplateParam).code,
        message:'发送成功',
    })
    }
  
  });
}

exports.pubAcrticle=(req,res)=>{
    //获取客户端信息
    const userinfo =JSON.parse(Object.keys(req.body))
    //0 0!因为传过来的数据有点奇怪
    //keys获取JSON解析后的键值
    console.log(userinfo)
    console.log(typeof userinfo)
    console.log(userinfo[0])
    //校验

    // if(!userinfo.username || !userinfo.password){
    //     return res.send({status:1,message:'用户名或密码不合法！'})
    // } 
    const sqlStr='select * from articles where title=?'
    db.query(sqlStr,userinfo.title,(err,results)=>{
        if(err){
        return res.cc(err)
    }
        //判断是否被占用
        if(results.length>0){
            return res.cc('文章标题已存在')
        }
        //用户名可用hashSync()对密码加密
        //调用bcrypt.
     
        //插入新用户
        const sql = 'insert into articles set ?'
        db.query(sql,{username:userinfo.username,title:userinfo.title,content:userinfo.content},(err,results)=>{
            if(err) return res.cc(err)
            //判断影响行数是否为1
            if(results.affectedRows!== 1) res.cc('发表失败')

res.cc({
    status:0,
    message:'发表成功',
})
        })
    })
    // res.send('reguser OK')
}
