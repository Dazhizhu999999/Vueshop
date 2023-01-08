import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var ShopcarCon = {
    template:'<div>aaaaaaaaa</div>'
}

//非懒加载
import newList from './components/newList'
import imgShare from './components/imgShare.vue'
import HomeCon from './components/homeCon.vue'
import happinessText from './components/happinessText.vue'
import shopSort from './components/shopSort.vue'
import messageCon from './components/messageCon.vue'
import videoSection from './components/videoSection.vue'
import contactUs from './components/contactUs.vue'
import sortCon from './components/sortCon.vue'
import memberCon from './components/memberCon.vue'
import loginCon from'./components/loginCon.vue'
import loginCon1 from'./components/loginCon1.vue'
import registryCon from './components/registryCon.vue'
import publishVideo from './components/publishVideo'
import publishImage from './components/publishImage'
import publishArtical from './components/publishArticle'

var router = new VueRouter({
    mode:'history',//消除#号
    routes:[{
        path:'/',redirect:'/home',name:'home',meta:{title:'首页'}
    },
        
        {path:'/home/newList/happinessText',component:happinessText},
    {
        path:'/home',component:HomeCon,meta:{title:'首页'},children:[{path:'/home/newList',component:newList,meta:{title:'新闻资讯'}},
        {path:'/home/imgShare',component:imgShare,meta:{title:'图片分享'}},
        {path:'/home/shopSort',component:shopSort,meta:{title:'商品购物'}},
        {path:'/home/Message',component:messageCon,meta:{title:'留言专区'}},
        {path:'/home/videoSection',component:videoSection,meta:{title:'视频专区'}},
        {path:'/home/contactUs',component:contactUs,meta:{title:'联系我们'}}
    ]
    },
    {
        path:'/shopcar',component:ShopcarCon,meta:{title:'购物车'}
    },
    {
        path:'/sort',component:sortCon,meta:{title:'分类列表'}
    },
    {
       name:'member', path:'/member',component:memberCon,meta:{title:'我的'}
    },
    {
        path:'/member/login',redirect:'/member/login/login1',component:loginCon,children:[{
            path:'/member/login/login1',component:loginCon1
        },
             {path:'/member/login/registry',component:registryCon}
    ],
    },
    //一括号内只能一组路由
    {
        path:'/member/publicVideo',name:'publishVideo',component:publishVideo
    },
    {
        path:'/member/publicImage',name:'publishImage',component:publishImage
    },
    {
        path:'/member/publicArtical',name:'publishArtical',component:publishArtical
    },
    // {
    //     path:'/member/registry',component:registryCon
    // }
]
})

export default  router
