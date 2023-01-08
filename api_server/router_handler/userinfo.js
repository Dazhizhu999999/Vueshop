const db = require('../db/index')

//获取用户基本信息模块
exports.getUserInfo=(req,res)=>{
   const sql = 'select id,username,nickname,email,user_pic from ev_users where id =?'
   db.query(sql,req.user.id,(err,results)=>{
    if(err) return res.cc(err)

    //执行SQL语句，查询的结果为空
    if(results.length!==1) return res.cc('获取用户信息失败')

    res.send({
        status:0,
        message:'获取用户信息成功',
        data:results[0],
    })
   })
}

//更新
exports.updateUserInfo=(req,res)=>{
    const sql = 'update ev_users set ? where id =?'
    db.query(sql,[req.body,req.body.id],(err,results)=>{
        if(err) return res.cc(err)
        
        //执行sQL成功但，数据为0或者多条
        if(results.affectedRows!==1) return res.cc('更新用户的基本信息失败')

        res.cc('更新用户信息成功！',0)
    })
}