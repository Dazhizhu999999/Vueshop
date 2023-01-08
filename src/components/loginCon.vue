<template>
    <div class="login">
    <router-link  to="/member/login/login1" >登录</router-link>/
    <router-link to="/member/login/registry">注册</router-link>
     <router-view v-show="login">
    </router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                login:true,
            }
        },
        methods:{
       
        },
        created(){
            console.log(this.login)
        }
     
    }
</script>

<style scoped>
    .login{
        position: relative;
        top:100px;
    }
</style>