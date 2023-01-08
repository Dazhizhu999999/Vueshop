<template>
    <div class="sudoku">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 mui-icon mui-icon-map" >
                <router-link to="/home/newList" class="fo">新闻资讯</router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 mui-icon mui-icon-image">
                <router-link to="/home/imgShare" class="fo">图片分享</router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 mui-icon mui-icon-list">
                <router-link to="/home/shopSort" class="fo">商品购物</router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 mui-icon mui-icon-chatbubble">
                <router-link to="/home/Message" class="fo">留言反馈</router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 mui-icon mui-icon-videocam">
                <router-link to="/home/videoSection" class="fo">视频专区</router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 mui-icon mui-icon mui-icon mui-icon-phone">
                <router-link to="/home/contactUs" class="fo">联系我们</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                seen:'true'
            }
        },
     
    }
</script>

<style scoped>
    .fo{
        font-size: 5px;
    }
</style>