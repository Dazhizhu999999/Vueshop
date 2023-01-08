<template>
  <div>
      <mt-header :title="$route.meta.title" style="">
      <span slot="left" @click="goBack"  v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
      </mt-header>
      <swiperCon  :imglist="imglist"   :isfull="true"></swiperCon>
      <sudokuCon>
      </sudokuCon>
      <tabbarCon></tabbarCon>
      <router-view></router-view>
  </div>
</template>

<script>
  import swiperCon from './swiperCon.vue'
  import sudokuCon from './sudokuCon.vue'
  import tabbarCon from './tabbarCon.vue'
export default{
  components:{swiperCon,sudokuCon,tabbarCon},
  data(){
    return {
      flag:false,
      imglist:["../assets/1.webp","../assets/2.webp","../assets/3.webp","../assets/4.webp"]
    }
  },
  //   created(){
  //   this.getImgList()
  // },
  methods:{
    goBack(){
      this.$router.go(-1)
    },
  //   getImgList(){
  //     this.$http.get('./data.json').then((result)=>{
  //       if(result.data.status===0){
  //         this.$data.imglist[0]=result.data.message[0];
  //       }
  //     }).catch(function(error){
  //       console.log('error'+error)
  //     })
  //   }
  },
  watch:{
    '$route.path':function(newVal){
      if(newVal==='/home'){
        this.flag=false
      }else{
        this.flag=true
      }
    }
  },
  mounted(){
    this.$http.get('./data.json').then((result)=>{
      console.log(result.data.message,'success')
    }).catch((error)=>{
      console.log(error,'error')
    })
  },
}
</script>

<style scoped>
  img{
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
