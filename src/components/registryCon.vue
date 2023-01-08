<template>
    <div class="registry">
        <div>
<form>
<span>请注册</span>
<router-link to="/member/login/login1">登录</router-link>
<hr>
<input type="text" class="first" v-model="phoneNum" placeholder="请输入手机号"><br>
<input type="text" class="second" v-model="checkCode" placeholder="请输入短信验证码">
<input type="button" class="third" @click="sumbitCheck()" id="send-code" v-model="sendCode" v-bind:disabled="isButtonDisabled" ><br>
<input type="text" v-model="username" class="first username" placeholder="请输入用户名"><br>
<input type="password" v-model="password" class="first password" placeholder="请输入密码"><br>
<input type="password" v-model="Rpassword" class="first" placeholder="请再次输入密码"><br>
<input type="text" class="second" v-model="check" placeholder="请输入图形验证码">
<canvas id="code" width="80" height="30" style="border: 1px solid #ccc" @click="alterCheck"></canvas>
<input type="button" class="zc" value="立即注册" @click="submitFormData()"><br>
</form>
</div>

    </div>
</template>

<script>

    export default {
        data(){
            return{
                checkCode:"",
                username:"",
                password:"",
                phoneNum:"",
                Rpassword:"",
                check:"",
                resCode:"",
                sendCode:"发送验证码",
                //是否禁用鼠标
                isButtonDisabled:false
            }
        },
        methods:{
                //更新画板
                alterCheck(){
                        var c=document.getElementById("code");  
                        //重设宽高，可以清空画布内容
                        c.width=80;
                        c.height=30;
                        var canvasW=this.$("#code").width();

 var canvasH=this.$("#code").height();
 //获取任意区间随机数
 var getRandom=function (maxNum) {
 return Math.floor(Math.random()*maxNum);
 }
 //随机颜色
 var getColor=function () {
 var r=getRandom(256),
 g=getRandom(256),
 b=getRandom(256);
 return "rgb("+[r,g,b].join(',')+")";
 }
 var ctx=this.$("#code")[0].getContext("2d");
 var lineNum=3,arcNum=20;
 
 //绘制线
 for (var i=0;i<lineNum;i++){
 ctx.beginPath();
 ctx.moveTo(getRandom(canvasW),getRandom(canvasH));
 ctx.lineTo(getRandom(canvasW),getRandom(canvasH));
 ctx.strokeStyle=getColor();
 ctx.closePath();
 ctx.stroke();
 }
 //绘制点
 for (let i=0;i<arcNum;i++){
 ctx.beginPath();
 ctx.arc(getRandom(canvasW),getRandom(canvasH),1,0,2*Math.PI);
 ctx.fillStyle=getColor();
 ctx.closePath();
 ctx.fill();
 }
 //绘制验证码
 var codeTxt="ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
  //获取文本内容
 var txtArray=new Array(4);
 for(let i=0;i<4;i++){
 var txt=codeTxt.split("")[getRandom(codeTxt.length)];


 txtArray[i]=txt
 //绘制验证码
 ctx.beginPath();
 ctx.font="23px 微软雅黑";
 ctx.fillStyle=getColor();
 ctx.fillText(txt,20*i,25);
 ctx.closePath();
 console.log(ctx)
 }
 this.txtArray =txtArray
 this.ctx =ctx
                },
        submitFormData(){

                //jquery验证码
                
               
  const regPhone =/^[1][3,4,5,7,8,9][0-9]{9}$/;
  const regUser = /^[a-zA-Z0-9_-]{4,16}$/;

//   1.密码必须由字母、数字、特殊符号组成，区分大小写
// 2.特殊符号包含（. _ ~ ! @ # $ ^ & *）
// 3.密码长度为8-20位

  const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{8,20}$/;

                console.log(regPhone.test(this.phoneNum))
                if(regPhone.test(this.phoneNum)){
                        if(regUser.test(this.username)){
                                console.log('用户名正确')
                                if(regPassword.test(this.password)){
                                        if(this.password==this.Rpassword){
                                                if(this.check==this.txtArray.join("")){
                                                        if(this.checkCode==this.resCode){
                                                                
                                                                alert("注册成功")
                                                        var params={
                                                                id:9,
                                                                password:this.password,
                                                                username:this.username,
                                                                phoneNum:this.phoneNum
                                                        }
                                                        var url='http://127.0.0.1:3008/api/reguser'
                                                        this.$axios.post(url,params,{
                                                                headers: {
                                                                'content-type': 'application/x-www-form-urlencoded'
                                                                }
                                                                }).then(res =>{
                                                                console.log('请求成功')
                                                                console.log(res)
                                                                this.$router.push({
                                                 path:'../login'})
                                                                }).catch(error =>{
                                                                console.log('请求失败')
                                                                this.alterCheck()
                                                                console.log(error)
                                                                })
                                                        }else{
                                                                alert('手机验证码不正确')
                                                        }
                                                  
                                                       
                                                }else{     
                                                        alert("验证失败");
                                                        //methods中不同方法的调用
                                                        this.alterCheck()
                    
                                                }
                                        }else{
                                                console.log('两次密码不一样')
                                        }
                                }else{
                                        console.log('密码错误')
                                }
                        }else{
                                console.log('请输入4到16位(字母,数字，下划线，减号）')
                        }
                }else{
                        console.log('电话号码格式错误')
                        alert('电话格式错误')
                }


	/*
            * url   url地址
            * params请求数据即需要传递的参数
     */
    //  console.log(this.formData) 
     //params为后端需要传递的参数，通常我们传递参数如下所示。
// var params={
//                 id:9,
//                 password:this.password,
//                 username:this.username
// }
            //此时,我们可以打印一下this.formData,打印结果如下所示或者你通过浏览器控制台可以看到参数与params里面的参数一模一样。
            // this.formData={
            //     sysNo:'123',
            //     name:'li',
            //     desc:'test'
            // }
            // //所以根据上面我们直接用let params=this.formData就可以省略参数的拼写，遇到参数比较多的情况，大大优化了代码量
    //  var params=this.formData
//      var url='http://127.0.0.1:3008/api/reguser' //通常本地开发会遇到跨域问题，所以我们需要在config的index.js里面配置proxyTable反向代理，具体详情自行百度，有很多很清楚的讲解与写法。
     // **1.post请求，res即为请求成功后后端返回的信息。**
// this.$axios.post(url,params,{
// headers: {
// 'content-type': 'application/x-www-form-urlencoded'
// }
// }).then(res =>{
// console.log('请求成功')
// console.log(res)

// }).catch(error =>{
// console.log('请求失败')
// console.log(error)
// })


	// **2.get请求,get传递参数跟post不同，需要用花括号括起来且只能用 params 来解析，不能换成其他字段，当然你也可以将参数拼接在url后面，如下方式比较简洁。**
		//   this.$axios.get(url,{params}).then(res =>{
		//     console.log('请求成功')
		//     console.log(res)
		//   }).catch(error =>{
		//     console.log('请求失败')
		//     console.log(error )
		//   })
		},
                sumbitCheck(){
                        
// 设置倒计时时间（单位：秒）
var countdownTime = 60;

// 在点击按钮时开始倒计时

  // 开始倒计时
                        //赋值赋予变量，不然就停止不了
                        const regPhone =/^[1][3,4,5,7,8,9][0-9]{9}$/;
        if(regPhone.test(this.phoneNum)){
                             
                //发送验证码请求
                var url='http://127.0.0.1:3008/api/check'
                        this.$axios.post(url,{phoneNum:this.phoneNum},{headers: {
                                                                'content-type': 'application/x-www-form-urlencoded'
                                                                }
                                                        }).then(res=>{
                                                               this.resCode = res.data.code
                                                                console.log(res.data.code)
                                                                console.log(typeof res.data.code)
                                                                console.log(this.checkCode)
                                                                console.log(typeof this.checkCode)
                                                                console.log(res)
                                                        }).catch(error=>{
                                                                console.log('请求失败')
                                                                console.log(error)
                                                        })

     const cheCode =  setInterval(() => {
    this.sendCode = countdownTime;
    this.isButtonDisabled = true;
    
    // 当倒计时结束时，停止倒计时并启用按钮
    if (countdownTime == 0) {
      clearInterval(cheCode);
      this.isButtonDisabled = false;
      this.sendCode='发送验证码'
    }
    countdownTime--
  }, 1000)}else{
        alert('电话号码有误')
  }

                       
                }
    },
    mounted(){
        //jquery实现
      
        var canvasW=this.$("#code").width();
 var canvasH=this.$("#code").height();
 //获取任意区间随机数
 var getRandom=function (maxNum) {
 return Math.floor(Math.random()*maxNum);
 }
 //随机颜色
 var getColor=function () {
 var r=getRandom(256),
 g=getRandom(256),
 b=getRandom(256);
 return "rgb("+[r,g,b].join(',')+")";
 }
 var ctx=this.$("#code")[0].getContext("2d");
 var lineNum=3,arcNum=20;
 
 //绘制线
 for (var i=0;i<lineNum;i++){
 ctx.beginPath();
 ctx.moveTo(getRandom(canvasW),getRandom(canvasH));
 ctx.lineTo(getRandom(canvasW),getRandom(canvasH));
 ctx.strokeStyle=getColor();
 ctx.closePath();
 ctx.stroke();
 }
 //绘制点
 for (let i=0;i<arcNum;i++){
 ctx.beginPath();
 ctx.arc(getRandom(canvasW),getRandom(canvasH),1,0,2*Math.PI);
 ctx.fillStyle=getColor();
 ctx.closePath();
 ctx.fill();
 }
 //绘制验证码
 var codeTxt="ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
  //获取文本内容
 var txtArray=new Array(4);
 for(let i=0;i<4;i++){
 var txt=codeTxt.split("")[getRandom(codeTxt.length)];


 txtArray[i]=txt
 //绘制验证码
 ctx.beginPath();
 ctx.font="23px 微软雅黑";
 ctx.fillStyle=getColor();
 ctx.fillText(txt,20*i,25);
 ctx.closePath();
 }
 this.txtArray =txtArray
 this.ctx =ctx
 
    }
    

    }
</script>

<style scoped>
    div{
width: 300px;
height: 350px;
border: 1px solid grey;
margin: 8px 0 0 8px;
        }
span{
border-bottom: 3px solid purple;
padding-bottom: 3px;

        }
a{
text-decoration: none;
float: right;
padding-top: 3px;
color: deepskyblue;
        }
        .first{
width: 290px;
height: 30px;
border: 1px solid grey;
border-radius: 5px;
margin: 5px 4px;
        }
        .second{
width: 200px;
height: 30px;
border: 1px solid grey;
border-radius: 5px;
margin: 5px 4px;
        }
        .third{
width: 79px;
height: 30px;
border: 1px solid blue;
border-radius: 5px;
color: blue;
        }
        .fourth{
width: 79px;
height: 30px;
border: 1px solid blue;
border-radius: 5px;
vertical-align: middle;
background-image: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1378353400,959510337&fm=26&gp=0.jpg");
background-size: 79px 30px;
        }
        .zc{
width: 290px;
height: 30px;
border: 1px solid grey;
border-radius: 5px;
margin: 5px 4px;
background-color: skyblue;
color: white;
        }

</style>