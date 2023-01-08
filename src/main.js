import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
import router from './router.js'
import store from './store'
import axios from 'axios'
import './lib/mui/css/mui.css'
import jquery from 'jquery'


import ElementUI from 'element-ui';                      // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css';           // element-ui的css样式要单独引入
Vue.use(ElementUI)

Vue.prototype.$ = jquery

//将axios绑定在原型上
Vue.prototype.$axios=axios;

 axios.defaults.timeout=3000
 axios.defaults.baseURL='http://localhost:8080'
 Object.defineProperty(Vue.prototype,'$http',{
   value:axios
 })

 router.beforeEach((to,from,next)=>{
   if(to.meta.title){
     document.title=to.meta.title
   }
   next()
 }) 

new Vue({
  store,
  router,
  mounted(){
    axios.get('data.json').then(res=>(console.log(res))).catch(function(err){console.log(err)})
   },
  render: h => h(App),//渲染的组件

}).$mount('#app')
 
