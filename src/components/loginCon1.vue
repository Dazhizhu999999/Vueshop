<template>
    <div class="login1">
    <form class="mui-input-group">
    <div class="mui-input-row">
        <label>用户名</label>
    <input type="text" class="mui-input-clear" v-model="username" placeholder="请输入用户名">
    </div>
    <div class="mui-input-row">
        <label>密码</label>
        <input type="password" v-model="password" class="mui-input-password" placeholder="请输入密码">
    </div>
    <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-primary" @click="Login">确认</button>
        <button type="button" class="mui-btn mui-btn-danger" >取消</button>
    </div>
</form>

    </div>
</template>

<script>
    export default{
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            Login:function(){
                
                                                        var params={
                                                            
                                                                password:this.password,
                                                                username:this.username
                                                        }
var url='http://127.0.0.1:3008/api/login'
                                                        this.$axios.post(url,params,{
                                                                headers: {
                                                                'content-type': 'application/x-www-form-urlencoded'
                                                                }
                                                                }).then(res =>{
                                                                    if(res.data.status==1){
                                                                        alert(res.data.message)
                                                                        console.log(res)
                                                                    }else{
                                                                        console.log(res)
                                                                    console.log('登录成功')
                console.log(this.username)
                console.log(this.password) 
                  this.$router.push({
                    name:'member',
                    params:{username:this.username,password:this.password,url:'../../public/assets/6.jpg'}   
                }),
                this.$router.push({
                    path:'../member',
                    query:{username:this.username},    
                })
                                                                    }
                                                                }).catch(error =>{
                                                                console.log('登录失败'),
                                                                alert('密码错误')
                                                                console.log(error)
                                                                })
                                                       

                //params传参不能用path只能用name引入路由
             
            },

        }
    }
</script>

<style>

</style>