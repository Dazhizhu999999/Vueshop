<template>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../public/assets/6.jpg">
            <div class="mui-media-body">
                ID：大只猪
                <p class='mui-ellipsis'>气死我了，这商家怎么老偷工减料！！！</p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../public/assets/7.jpg">
            <div class="mui-media-body">
                ID：大灰狼
                <p class='mui-ellipsis'>那家料真足，爱了</p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../public/assets/8.jpg">
            <div class="mui-media-body">
                ID：小美娜娜
                <p class='mui-ellipsis'>还行，可惜满足不了我的胃</p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../public/assets/9.jpg">
            <div class="mui-media-body">
                ID：小猪佩奇
                <p class='mui-ellipsis'>隔壁那家奶茶店绝绝子，冲鸭！</p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../public/assets/10.jpg">
            <div class="mui-media-body">
                ID：你的懒大王
                <p class='mui-ellipsis'>哇，那家XXX烤肉店太好吃了，力推！！！！.</p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        留言板:
        <textarea rows="3" cols="3" placeholder="留下你想说的话......" v-model="Message" @keydown.enter="summit"></textarea>
    </li>

</ul>
</template>

<script>
        export default{
            data(){
                return{
                    Message:""
                }
            },
            methods:{
                summit(){
                    var Message=this.$data.Message
                    var element= document.createElement('li')
                    element.appendChild(Message);
                    var ul = document.getElementsByTagName('ul')[0]
                    var Last = ul.getElementsByClassName('li')[1]
                    ul.insertBefore(element,Last);
                }
            }

        }
</script>

<style scoped>

</style>