<template>
    <div id="recomContent">
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
      
        <mt-swipe :auto="2000" >
            <mt-swipe-item v-for="item in bannerList" :key="item.index">
                <img v-bind:src="item.picUrl"/>
                
            </mt-swipe-item>
           
        </mt-swipe>
        <div class="recomlist">
            <h2>电台</h2>
            <div id="radiolist">
                <dl v-for="item in radioList">
                	<dt> 
                	    <img v-bind:src="item.picUrl"/>
                	    <span class="icon">
                	        <i class="iconfont">
                	            &#xe61a;
                	        </i>
                	    </span>
                	</dt>
                	<dd>{{item.Ftitle}}</dd>
                </dl>
                
                
            	
            </div>
        </div>
        <p><a href="javascript:;">热门歌单</a></p>
        <p><a href="javascript:;">去客户端发现更多好音乐 &gt;</a></p>
        <p><a href="javascript:;">查看电脑版网页</a></p>
        <div class="logo-footer">
        	
        </div>
        
    </div>
      
</template>

<script>
  import './../scss/recom.scss';
  import MyAjax from "./../md/MyAjax.js";
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'mint-ui';
  
  
   
    Vue.component("mt-swipe", SwipeItem);
  
  export default {
    data(){
      return {
        bannerList:[],
        radioList:[]
        
        
      }
    },
    mounted(){
        var that = this;
        var url = "http://localhost:3000/recom";
        MyAjax.vueJson(url,function(data){
            console.log(data);
            that.bannerList=data.data.slider;
            that.radioList=data.data.radioList;
          
          
       
         
        },function(err){
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
  ul{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    
  }
  ul li{
   
    float: left;
    line-height: 40px;
    flex: 1;
    text-align: center;
    display: flex;
    
    
    
    
    
  }
  ul li a{
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