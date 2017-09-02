<template>
  <div id="searchContent"  ref="searchContent" >
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
        <div class="searchBox">
            <div class="searchBox_left" ref="searchBox_left" @click="xianshia()">
                <span class="iconfont">&#xe620;</span>
                <input type="text" placeholder="搜索歌曲、歌单、专辑" @keyup="sousuo()" ref="txt"/>
                <span class="iconfont close" ref="close" @click="close()">&#xe6e3;</span>
            </div>
            <a href="javascript:;" class="cancel" @click="yincanga()" ref="cancel">取消</a>
            
        </div>
        <div class="search_down" ref="search_down" >
            <a href="javascript:;" v-for="item in hotkey">{{item.k}}</a> 
            
        </div>
        
        <div class="searchlist" ref="searchlist" >
            <div class="search_top" v-if="zhidaType==0 ? false : true" >
                <div class="search_top_left yuan" v-if="zhidaType==2">
                	  <img :src="img1"/>
                </div>
                <div class="search_top_left " v-else>
                      <img :src="img2"/>
                </div>
                <div class="search_top_right" v-if="zhidaType==2">
                    <p class="firstP">{{zhida.singername}}</p>
                    <p class="secondP">
                        <span>单曲:{{zhida.songnum}}</span>
                        <span>专辑:{{zhida.albumnum}}</span>
                    </p>
                    
                </div>
                <div class="search_top_right" v-else>
                    <p class="firstP">{{zhida.albumname}}</p>
                    <p class="secondP">{{zhida.singername}}</p>
                    
                </div>
                
            </div>
            <ul>
            	<li v-for="item in searchList" @click="toplay(item.songmid,item.albummid)">
            	    <div class="down_left iconfont">
            	        &#xe621;
            	    </div>
            	    <div class="down_right">
            	        <p class="oneP">{{item.songname}}</p>
            	        <p class="twoP" >
            	            <span v-for="(item2,index) in item.singer">
            	                <span v-if="item.singer.length>1&&index>=1">/</span>
            	                {{item2.name}}
            	                
            	            </span>
            	        </p>
            	    </div>
            	</li>
            	<li class="loadmore" v-show="loadsign">加载中...</li>
            	<li class="searchres"  v-show="searchsign">无匹配结果</li>
            	
            </ul>
            
            
        </div>
        
        
        
  </div>
  
</template>

<script>
// import encoding from "encoding";
   import MyAjax from "./../md/MyAjax.js";
     import "./../scss/search.scss";
     import router from "./../router/router.js";
     
  export default {
    data(){
      return {
        value:"",
        hotkey:[],
        searchList:[],
        zhidaType:"",
        zhida:[],
        img1:"",
        img2:"",
        moreid:"1",
        searchId:"",
        loadsign:true,
        searchsign:false
        
        
        
      }
    },
    methods:{
        // 隐藏与显示也可以用v-show和v-if写出同样的效果
        yincanga(){
            this.$refs.cancel.style.display="none";
            this.$refs.searchBox_left.style.width="93%";
            this.$refs.search_down.style.display="block";
            
            
            this.$refs.txt.value="";
            this.$refs.close.style.display="none";
            
            
            this.$refs.searchlist.style.display="none";
            
            var that = this;
             that.moreid="1";
            
            
        },
        xianshia(){
            this.$refs.cancel.style.display="block";
            this.$refs.searchBox_left.style.width="75%";
            this.$refs.search_down.style.display="none";
            
            
            
        },
        sousuo(){
            this.$refs.close.style.display="block";
            var that= this;
            if(this.$refs.txt.value==""){
                
                this.$refs.close.style.display="none";
                this.$refs.searchlist.style.display="none";
                that.zhidaType="";
                that.searchList="";
                that.moreid="1";
                
            }
            
//          console.log(event);
            if(event.keyCode==13 && this.$refs.txt.value !="" ){
                this.$refs.searchlist.style.display="block";
                
//              console.log(this.$refs.txt.value);
                var that = this;
                var url = "http://localhost:3000/search";
                
                that.searchId = this.$refs.txt.value;
               
                MyAjax.vueJsonOpt(url,{params:{searchId:that.searchId,moreid:that.moreid}},function(data){
                    
                    
                    console.log(data.data.song.list.length);
                    if(data.data.song.list.length == 0){
//                      console.log(111111);
                        that.loadsign  = false;
                        that.searchsign = true;
                    }else{
                        
                        that.searchsign = false;
                        that.loadsign  = false;
                            console.log(data.data.song.list);
                        that.searchList=data.data.song.list;
                      
    //                  console.log(data.data.song.list[9].singer[0].name);
                        //&#49324;&#47924;&#50648;;&#47560;&#48512;&#49828;怎么解码成韩文？
    //                  console.log(encoding.convert("data.data.song.list[9].singer[0].name", "utf-8"));
                        
                      
                            that.zhida = data.data.zhida;
                            that.zhidaType = data.data.zhida.type;
                            
//                          console.log(that.zhidaType);
                            
    //                      console.log(that.zhida.albummid);
                            
                            
                            
                            if(that.zhidaType==2){
                                that.img1="https://y.gtimg.cn/music/photo_new/T001R68x68M000"+that.zhida.singermid+".jpg?max_age=2592000"
                                 console.log(that.img1);
                            }
                            
                            if(that.zhidaType==3){
                                
                                that.img2="https://y.gtimg.cn/music/photo_new/T002R68x68M000"+that.zhida.albummid+".jpg?max_age=2592000"
                                 console.log(that.img2);
                                
                                
                            }
                        
                        
                        
                    }
                    
                    
                    
                        
                       
                        
                        
                  
                  
                 
                },function(err){
                  console.log(err)
                })
                
                  
                 
                  
                
                
                
            }
            
            
        },
        close(){
            var that = this;
            this.$refs.txt.value="";
            this.$refs.close.style.display="none";
            this.$refs.searchlist.style.display="none";
            that.zhidaType="";
            that.searchList="";
            that.moreid="1";
            
            
        },
        toplay(songmid,imgid){
            
            router.push({ path: 'playsong', query: { songmId: songmid , imgId:imgid , sign:"1"}});
            
            
        },
      
       
        
    },
    mounted(){
        var that = this;
        var url = "http://localhost:3000/search";
        
        var specialObj={
            k:""
        }
        MyAjax.vueJson(url,function(data){
            
            console.log(JSON.parse(data));
            
            console.log(JSON.parse(data).data.hotkey);
//          that.specialkey = JSON.parse(data).data.special_key;
            

            
            specialObj.k=JSON.parse(data).data.special_key;
            
           
            that.hotkey.push(specialObj);
            that.hotkey.push(JSON.parse(data).data.hotkey[25]);
            that.hotkey.push(JSON.parse(data).data.hotkey[16]);
            that.hotkey.push(JSON.parse(data).data.hotkey[24]);
            that.hotkey.push(JSON.parse(data).data.hotkey[11]);
            that.hotkey.push(JSON.parse(data).data.hotkey[23]);
            that.hotkey.push(JSON.parse(data).data.hotkey[22]);
            console.log(that.hotkey);
            
            
          
          
       
         
        },function(err){
          console.log(err)
        });
        
      
      
      var content = document.getElementById("content");
      
      
      
      
      
      content.onscroll = function(){
//        console.log(this.clientHeight);
//        console.log(this.scrollHeight);
//        console.log(this.scrollTop);
          
          if(this.scrollTop == (this.scrollHeight-this.clientHeight)){
              that.loadsign = true;
              that.moreid++
              console.log(that.moreid);
              console.log(that.searchList);
              
              MyAjax.vueJsonOpt(url,{params:{searchId:that.searchId,moreid:that.moreid}},function(data){
                  
                   
//                  console.log(data.data.song.list);
                    that.searchList = that.searchList.concat(data.data.song.list);
                  console.log(that.searchList);
//                  console.log(data.data.song.list[9].singer[0].name);
                    //&#49324;&#47924;&#50648;;&#47560;&#48512;&#49828;怎么解码成韩文？
//                  console.log(encoding.convert("data.data.song.list[9].singer[0].name", "utf-8"));
                    
                     that.loadsign = false;
      
                        
                       
                        
                        
                  
                  
                 
                },function(err){
                  console.log(err)
                })
              
              
              
              
          }
          
      }
        
      
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