<template>
    <div id="contactus">
        <input v-model="phone">
        <p class="contactP">
            vx:XXXXXXXXXXX;
        </p>
        <p class="contactP">电话:xxxxxxxx</p>
        <p class="contactP">QQ:xxxxxxxx</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                phone:'13532432131313'
            }
        },
        watch:{
            phone:function(haha,haha2){
                console.log(haha)
                console.log(haha2)

            }
        }
    }
</script>

<style scoped>
    .contactP{
        position: relative;
        left: 20px;
        top: 20px;
        font-size: 30px;
        line-height: 30px;
    }
</style>
