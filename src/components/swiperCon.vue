<template>
   <div style="height:200px">
    <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in imglist" :key="item.id">
            <img :src="item"   :class="{full:isfull}">
        </mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
    export default{
        props:['imglist','isfull']
        // data(){
        //     return{
        //         imglist:["../assets/1.webp","../assets/2.webp","../assets/3.webp","../assets/4.webp"]
        //     }
        // },
        // methods:{
            
        // }
    }
</script>

<style>
      .full{
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>