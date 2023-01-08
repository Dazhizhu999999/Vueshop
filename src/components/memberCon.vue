<template>
    <div class="member">
    <li class="mui-table-view-cell mui-media User">
        <router-link :to="User">
            <img class="mui-media-object mui-pull-left profile-photo" :src="img">
            <div class="mui-media-body UserName">
                 {{UserName}}
                <p class='mui-ellipsis alter'>{{alter}}</p>
            </div>
        </router-link>
    </li>
    <div class="action">
    <ul class="mui-table-view mui-grid-view mui-grid-9 action">
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 mui-icon mui-icon-star" >
                <router-link to="/member/collect" class="fo">收藏</router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 mui-icon mui-icon-chatboxes">
                <router-link to="/member/subscription" class="fo">关注公众号</router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 mui-icon mui-icon-spinner mui-spin">
                <router-link to="/member/cService" class="fo">客服</router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 mui-icon mui-icon-navigate">
                <router-link to="/member/packets" class="fo">红包卡卷</router-link>
            </li>
        </ul>
    </div>
   <div class="userFun">

    <ul>
        
    <li v-for="item in menu.submenu1" v-bind:key="item.name" @click="isshow=!isshow" >{{ item.name }}<span>></span>
        <ul >
            <!-- 注意v-bind绑定key值是值不能出现在{{}}中 -->
            <!-- router位置和li位置互换要双击 因为阻止了事件冒泡或者捕获-->
            <router-link :to="userPublish"><li v-show="isshow" v-for="(subitem,index) in menu.submenu" v-bind:key="subitem.id"  @click="returnIdex(index)" >{{ subitem.name }}</li></router-link>
    </ul>
    </li>
    <li>我的订单</li>
    <li>关于我们</li>
  </ul>
 
</div> 
    <nav class="mui-bar mui-bar-tab ">
        <router-link class="mui-tab-item" to="/home">
            <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span> 
        </router-link>
        <router-link class="mui-tab-item" to="/sort">
            <span class="mui-icon mui-icon-paperplane"></span>
                <span class="mui-tab-label">分类</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopcar">
            <span class="mui-icon mui-icon-chat"></span>
                <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
            <span class="mui-icon mui-icon-person"></span>
                <span class="mui-tab-label">我的</span>
        </router-link>
    </nav>
    </div>
</template>

<script>
        export default {
        data(){
            return{
                User:'/member/login',
                UserName:this.$route.query.username||"未登录",
                alter:this.$route.query.username? '编辑':'登录/注册',
                //因为解析原因，导入图片只能这样 不能导入绝对路径
                img:require('../../public/assets/7.jpg'),
                
                isshow:false,
                //
                menu: {
        submenu1:[{id:1 ,name: '创作中心'}],
        submenu: [
          {id:1, name: '发布视频' },
          {id:2, name: '发布文章' },
          { id:3,name: '发布图片' },
          { id:4,name: '我的作品' },
        ]
                },
                userPublish:''
            }
        },
        methods:{
            returnIdex(index){
              
                if(index==0){
                    this.userPublish='/member/publicVideo'
                }
                if(index==1){
                    this.userPublish='/member/publicArtical'
                }
                if(index==2){
                    this.userPublish='/member/publicImage'
                }
                if(index==3){
                    this.userPublish='/member/myWork'
                }
                  //阻止事件冒泡或者捕获
                  window.event.stopPropagation()
            },
            // publishWork(){
            //     if(this.isshow==false){
            //       this.isshow = !this.isshow
            //     }
                //垃圾代码以后反思
            //     if(this.isshow==true){
            //         for(var i=0;i<4;i++){
            //             document.querySelectorAll('.userPublish').item(i).addEventListener('click',function publish(){
            //                 console.log('1')
            //             })
            //       console.log(document.querySelectorAll('.userPublish').item(i).textContent)
    
            //     }
            //     if(this.menu.submenu.name=='发布视频'){
            //         this.userPublish='/member/publicVideo'
            //     }
            //     if(this.menu.subitem.name=='发布文章'){
            //         this.userPublish='/member/publicArtical'
            //     }
            //     if(this.menu.subitem.name=='发布图片'){
            //         this.userPublish='/member/pubPicture'
            //     }else{
            //         this.isshow = false
            //     }
            // }
            // }
        },
        created(){
            //route只读
            //router读写
           console.log(this.$route.params.password)
        },
        mounted(){
            if(this.alter=='编辑'){
                this.User='/member/Updata'
            }
           if(this.$route.query.username){
                this.img=require('../../public/assets/5.jpg')
           }
        }
    }
</script>

<style>
    li{
        list-style: none;
    }
    .User{
        width: 100%;
        height: 80px;
    }
    .profile-photo{
        height: 50px;
        width: 50px;
        list-style: none;
        border-radius:50%;
        margin-right: 10px;
    }
    .alter{
        margin-top:5px ;
        color: black;
        opacity: 0.5;
    }
    .User{
        background-color:darkgoldenrod ;
    }
    .UserName{
        letter-spacing:0.5px;
        padding-left:5px ;
    }
    .action{
        margin-top:5px ;
        width: 100%;
        background-color: darkgoldenrod;
    }
    .action ul li a{
        font-size: 5px;
    }
    /* 创作中心部分样式 */
    .userFun ul{
    background-color: darkgoldenrod;
    opacity: 0.8;
    }
    .userFun ul li{
    font-size: large;
    margin-top:10px ;
    }
    .userFun ul li ul li{
    margin-top: 20px;
    font-size: medium;

    }
</style>