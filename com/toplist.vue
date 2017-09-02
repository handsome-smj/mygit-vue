<template>
    
  <div class="toplistContent">
        <header class="header" >
            <div class="homeheader">
    
                    <div class="logo"></div>
                    <div class="download">下载APP</div>
                
                
         </div>
          
        </header>
        <ul class="tab">
                <li><router-link to="/recom" >推荐</router-link></li>
                <li><router-link to="/toplist">排行榜</router-link></li>
                <li><router-link to="/search">搜索</router-link></li>
          </ul>
      
      
 
    <div id="toplist">
         
        <ul>
            <li v-for="item in topList" @click="godetail(item.id)">
                <a href="javascript:;">
                    <img :src="item.picUrl" />
                    <span class="listenCount iconfont">&#xe604; {{(item.listenCount/10000).toFixed(1)}}万</span>
                </a>
                <div class="topinfo">
                    <h3>{{item.topTitle}}</h3>
                    <p v-for="(item2,index) in item.songList">
                        <span >{{index+1}}</span>
                    	<span class="toplist_songname">{{item2.songname}}</span>
                    	<span>-</span>
                        <span >{{item2.singername}}</span>
                    </p>
                    

                </div>

            </li>
        </ul>
        <p class="top_more">
            <a href="javascript:;">去客户端发现更多好音乐 ></a>
        </p>

    </div>
 </div>
</template>

<script>
    import "./../scss/toplist.scss";
     import MyAjax from "./../md/MyAjax.js";
     import router from "./../router/router.js";
    export default {
        data() {
            return {
                topList: []

            }
        },
        methods:{
            godetail(topid){
                
                console.log(topid);
                
                router.push({ path: 'detail', query: { id: topid }})
                
                
            }
            
        },
        mounted() {
            var that = this;
            var url = "http://localhost:3000/toplist";
            MyAjax.vueJson(url, function(data) {
                console.log(data)
                that.topList = data.data.topList;
                
//              console.log((data.data.topList[2].listenCount/10000).toFixed(1));
                
            }, function(err) {
                console.log(err)
            })

        }
    }
</script>

<style scoped>
   .logo{
    width: 90px;
    height: 25px;
    /*background: #0000FF;*/
    float: left;
    margin: 9px 0 0 10px;
    background-image: url(../images/logo.png);
    background-size: 90px 25px;
    background-repeat: no-repeat;
    
  }
  .download{
    line-height: 28px;
    padding: 0 12px;
    background: #149C5A;
    float: right;
    
    font-size: 14px;
    margin: 8px 10px 0 0;
    
    border-radius: 99px;
    
   
    
  }
  .tab{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    
  }
  .tab li{
   
    float: left;
    line-height: 40px;
    flex: 1;
    text-align: center;
    display: flex;
    
    
    
    
    
  }
  .tab li a{
    display: block;
    flex: 1;
    color: #676767;
    border-bottom: 2px solid #fff;
  }
  .router-link-exact-active.router-link-active{
    color: #31C27C;
    border-color: #31C27C;
    
  }
</style>