<template>
  <div id="app">
   <router-view v-if="seen">
   </router-view>
  </div>
</template>

<script>

export default {

  data(){
    return{
      seen:true,
    }
  },
}
</script>

<style>

</style>
