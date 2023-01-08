<template>
    <div class="publishArticles">
        <form >
    <label>
      标题：
      <input v-model="title" type="text" />
    </label>
    <br />
    <label>
      内容：
      <textarea v-model="content"></textarea>
    </label>
    <br />
    <button v-if="!loading" type="button" @click="submitArticle()">发布文章</button>
    <button v-else type="button" disabled>发布中...</button>
  </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                title:'',
                content:''
            }
        },
        methods:{
            submitArticle(){
                var url  ='http://127.0.0.1:3008/api/pubArticle'
               var data={
                    title:this.title,
                    content:this.content
                }
                this.$axios.post(url,data,{
                    headers: {
               'content-type': 'application/x-www-form-urlencoded'
                               }
                }).then(res=>{
                    console.log(res)
                    console.log('发布成功')
                }).catch(error=>{
                    console.log(error)
                    console.log('发布失败')
                })
            }
        }
    }
</script>

<style scoped>

</style>