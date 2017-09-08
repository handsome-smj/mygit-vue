<template>
    <div class="playContent" >
        <img :src="imgurl" class="filterimg"/>
        <div class="playheader">
            <span>
               <img :src="imgurl" alt="此歌曲暂无图片"/>
            </span>
            
            <div class="song_info">
                <p>{{playname}}</p>
                <p></p>
            </div>
            
            <a href="javascript:;" class="playBtn iconfont"  @click="playorpause()" ref="playbtn">&#xe62f;</a>
        
        </div>
        
        <div class="playmiddle" ref="playmiddle">
            <div class="lyric"   id="lyric" ref="lyric">
                <p v-for="(item,index) in lyric" :class=index >{{item}}</p>
                
            </div>

        </div>
        
        <div class="playfooter" ref="playfooter">
            <audio :src="songurl" autoplay="autoplay" ref="song" loop="loop" @timeupdate="playingtime()" ></audio>
            
            <div class="songcontrol">
                <div class="top">
                    <span class="left iconfont" ref="left" @click="playList()">&#xe600;</span>
                    <span class="right iconfont">&#xe622;</span>
                </div>
                <div class="bottom">
                    <span class="bottom_left">{{curmin}}:{{cursec}}</span>
                    <div class="bottom_middle">
                        
                        <div class="later">
                            <div class="before" ref="bef">
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    <span class="bottom_right">{{totalmin}}:{{totalsec}}</span>
                </div>
                
            </div>
         
         
            <div class="downloadsong">
                <div class="downloadimg">
                    
                </div>
                                                下载这首歌
            </div>
        
        </div>
        
        <div class="playlist" ref="menu" v-if="isok">
            <div class="menu_top">
                                                  播放列表
            </div>
            <div class="menu_middle">
                <li v-for="(item,index) in menulist" @click="playthis(item.data.songmid,item.data.albummid,index,item.data.songname,item.data.songid)" ref="playthis">{{item.data.songname}}</li>
           
                
                
            </div>
            <div class="menu_bottom"  @click="closebtn()">
                                                              关闭
            </div>
            
            
        </div>
        
    </div>
    
</template>

<script>
    import "./../scss/playsong.scss";
   import MyAjax from "./../md/MyAjax.js";
   
   import Base64 from './../md/base64.js';
   import parseLyric from './../md/lyc.js';
   
    import Vue from "vue";
   
// Vue.filter("Fn", function(value) {  
//              if(value){
//                  
//                  return value;
//              }
//          });
    
    
    export default {
        data(){
            return {
                
                playId:"",
                imgId:"",
                imgurl:"",
                songurl:"",
                songsign:true,
                totalmin:"",
                totalsec:"",
                curmin:"00",
                cursec:"00",
                totaltime:"",
                songId:"",
                menulist:[],
               lyric:"",
                currentTime:"",
                playname:"",
                isok:false,
                num:0,
                target:null
               
                
                
                
                
            }
        },
        mounted(){
//          console.log(this.$route.query.sign);
            
            if(this.$route.query.sign == "1"){
                
                this.$refs.left.style.display = "none";
                
            }
            
            
            var that = this;
            that.playId = this.$route.query.songmId;
            console.log(that.playId);
            
//          if(that.playId == "002WLDmw0vkHtC"){
//              
//              that.isok = true;
//              


               
                
//              var lyric = document.getElementById("lyric");
//              console.log(lyric);
                
//             console.log(this.$refs.playmiddle.scrollTop);
               
//             var playmiddle = this.$refs.playmiddle;
               
//             console.log(playmiddle);
               

               
        
               
               
                
                
                
                
//          }
            
            
            
            that.playname = this.$route.query.songname;
            

            
            
            that.imgId = this.$route.query.imgId;
            console.log(that.imgId);
            
            that.imgurl = "https://y.gtimg.cn/music/photo_new/T002R150x150M000"+that.imgId+".jpg?max_age=2592000";
            
            console.log(that.imgurl);
            
            //音乐播放地址需要每天更新vkey的内容
            that.songurl = "http://dl.stream.qqmusic.qq.com/C400"+that.playId+".m4a?fromtag=38&vkey=0813E5FBA0D12652C0E4821440269B570EE2259D5D46FF9D257DFC71A60EFDF0CA4DAD44ED53868A883C8F67B934C61E60DC6A7ACD1467E3&guid=1696140903";
            
            
            
            console.log(that.songurl);
            
            
            
           
            
            

                
             
             
             setTimeout(function(){
                this.nativeAudio = document.querySelector('audio');
//              console.log(this.nativeAudio.duration);
                 
                 that.totaltime = this.nativeAudio.duration;
                 
                 that.totalmin = Math.floor(this.nativeAudio.duration/60)>=10 ? Math.floor(this.nativeAudio.duration/60) : "0"+Math.floor(this.nativeAudio.duration/60);
                 
                 that.totalsec = Math.floor(this.nativeAudio.duration%60)>=10 ? Math.floor(this.nativeAudio.duration%60) : "0"+Math.floor(this.nativeAudio.duration%60);
                 console.log(that.totalsec);
                 
                 
                 
//                console.log(this.nativeAudio.currentTime);

                    
             },1000)
             
             
             that.songId = this.$route.query.songId;
             
             console.log(that.songId);
             
             var url = "http://localhost:3000/playsong";
             
             MyAjax.vueJsonOpt(url,{params:{songId:that.songId}},function(data){
       
                     console.log(data);
               
                       
                        
                        
                        
                  
                 
                },function(err){
                  console.log(err)
                })
           
                
                
                
                
            console.log(this.$route.query.menuid); 
            
            var menuid = this.$route.query.menuid;
            
            var url = "http://localhost:3000/detail";
            
            MyAjax.vueJsonOpt(url,{params:{songId:menuid}},function(data){
            
            
//              console.log(JSON.parse(data).songlist);
                
                that.menulist = JSON.parse(data).songlist;
                console.log(that.menulist);
            
            },function(err){
                  console.log(err)
                })
            
            
            
            
//          that.songId = this.$route.query.songId;
             
//           console.log(that.songId);
             
             var url1 = "https://api.darlin.me/music/lyric/"+that.songId;
             
             console.log(url1);
             
             MyAjax.fetchJsonp(url1,function(data){
       
                     var base = new Base64();
                    var result2 = base.decode(data.lyric);
                    that.lyric=parseLyric(result2);
                    
                    console.log(that.lyric);
               
                     var time=9;
                    console.log(that.lyric[time]);
                     
                        
                        
                        
                  
                 
                },function(err){
                  console.log(err)
                })
            
            
            
            
                
           
            
            
        },
        computed:{
            
          
            
        },
        methods:{
            
            playorpause(){
                
//              console.log(this.$refs.playbtn.innerHTML);
                
                var that = this;
                
                if(that.songsign == true){
//                  console.log(111);
                    this.$refs.song.pause();
                    
                    this.$refs.playbtn.innerHTML = "&#xe61a";
                    
                    that.songsign = false;
                }else if(that.songsign == false){
                    
                    this.$refs.song.play();
                    
                    this.$refs.playbtn.innerHTML = "&#xe62f";
                    that.songsign = true;
                }
                
                
               

                
                
            },
            playingtime(){
                var that = this;
                
                if(this.$refs.song){
                    
                    that.currentTime = this.$refs.song.currentTime;
                    
                    that.cursec = Math.floor(this.$refs.song.currentTime%60)>=10 ? Math.floor(this.$refs.song.currentTime%60) : "0"+Math.floor(this.$refs.song.currentTime%60);
                    
                    that.curmin = Math.floor(this.$refs.song.currentTime/60)>=10 ? Math.floor(this.$refs.song.currentTime/60) : "0"+Math.floor(this.$refs.song.currentTime/60);
                    
                    
                    this.$refs.bef.style.width = (100/that.totaltime)*this.$refs.song.currentTime+"%";
                    
                }
                
                
                
            },
            playList(){
                
                var that =this;
              
                    that.isok = true;
                    
                        
//                      this.$refs.menu.style.transform = "translateY(-380px)";
 
            },
            closebtn(){
                var that = this;
                that.isok=false;
                
//              this.$refs.menu.style.transform = "translateY(380px)";
                
                
            },
            playthis(playmid,playimgid,index,name,lyricid){
                var that = this;
//              console.log(playmid);
                that.songurl = "http://dl.stream.qqmusic.qq.com/C400"+playmid+".m4a?fromtag=38&vkey=5BBFCCD423AD3BAB485A74DFC1EF2ED98B74972CD8C04AD31770243B2AF11E39543AA4EB3A5B47C561585591FC4E3F5074BF5C99E2E9415F&guid=1696140903";
                
                
                that.currentTime = this.$refs.song.currentTime;
                
                that.cursec = Math.floor(this.$refs.song.currentTime%60)>=10 ? Math.floor(this.$refs.song.currentTime%60) : "0"+Math.floor(this.$refs.song.currentTime%60);
                
                that.curmin = Math.floor(this.$refs.song.currentTime/60)>=10 ? Math.floor(this.$refs.song.currentTime/60) : "0"+Math.floor(this.$refs.song.currentTime/60);
                
                
                this.$refs.bef.style.width = (100/that.totaltime)*this.$refs.song.currentTime+"%";
                
                setTimeout(function(){
                    this.nativeAudio = document.querySelector('audio');
                    console.log(this.nativeAudio.duration);
                     
                     that.totaltime = this.nativeAudio.duration;
                     
                     that.totalmin = Math.floor(this.nativeAudio.duration/60)>=10 ? Math.floor(this.nativeAudio.duration/60) : "0"+Math.floor(this.nativeAudio.duration/60);
                     
                     that.totalsec = Math.floor(this.nativeAudio.duration%60)>=10 ? Math.floor(this.nativeAudio.duration%60) : "0"+Math.floor(this.nativeAudio.duration%60);
                     console.log(that.totalsec);
                     
                     
                     
    //                console.log(this.nativeAudio.currentTime);
    
                        
                 },1000)
                
             
                that.imgurl = "https://y.gtimg.cn/music/photo_new/T002R150x150M000"+playimgid+".jpg?max_age=2592000";
                
                
                
                
//              console.log(this.$refs.playthis[index]);
                
                for (var i in this.$refs.playthis) {
//              	console.log(this.$refs.playthis[i]);
                	
                	this.$refs.playthis[i].style.color = "#fff";
                }
                
                
//              console.log(index);
                this.$refs.playthis[index].style.color = "#0FAF54";
                
                
                console.log(name);
                that.playname = name;
                
                //歌词请求
                var url2 = "https://api.darlin.me/music/lyric/"+lyricid;
                 
                 console.log(url2);
                 
                 MyAjax.fetchJsonp(url2,function(data){
           
                         var base = new Base64();
                        var result2 = base.decode(data.lyric);
                        that.lyric=parseLyric(result2);
                        
                        console.log(that.lyric);
                    },function(err){
                      console.log(err)
                    })   
            }
            
        },
        watch:{
           
           
            
            
        },
        updated(){
            
            
           

            
            
            var that = this;
            
//          console.log(that.currentTime);
            
             
            var time=parseInt(that.currentTime);
            
           
            
//          console.log(that.num);
            
//          console.log(time);
//          
//          if(that.isok){
//              
                if(that.lyric[time]&&that.lyric[time].length>0){
                    
                   
//                  console.log(time);
                    var arr = [];
                    arr.push(time);
                    
//                  console.log(arr);
                    
//                  console.log(time);
                    
                    
                    var playmiddle = document.getElementsByClassName("playmiddle")[0];
                    
                    var ps = playmiddle.getElementsByTagName("p");
//                  console.log(ps);
                    
//                  for(var i in ps){
//                      console.log(ps[i]);
//                      ps[i].style.color = "#fff";
//                  }

//                  console.log(this.target);
                    
                     if(this.target){
//                          console.log(this.target);
                            
                            this.target.style.color = "";
                            
                            
                        }
                    
                   this.target= playmiddle.getElementsByClassName(time)[0];
                   
//                 console.log(this.target);
//                 console.log(target.scrollHeight);

                    this.target.style.color = "#17A05D";

//                 playmiddle.scrollTop=target.scrollHeight+playmiddle.scrollTop;
//                 
//                 console.log(playmiddle.scrollTop);
                   
//                  console.log(playmiddle.scrollTop);
                    
                    this.target.scrollIntoView();
                    
//                  console.log(this.target.scrollHeight*2);
                    if(playmiddle.scrollTop){
                        
                        playmiddle.scrollTop=playmiddle.scrollTop-this.target.scrollHeight*2;
//                      console.log(playmiddle.scrollTop);
                        
                    }
                    
                    
                    

//                  console.log(target.scrollTop,target.scrollHeight);
//                  this.$refs.time.scrollIntoView(true)


                    
                    
                    
                     
                }
               
                    
                
            
            
            
            
        }
    }
</script>

<style scoped>
   
</style>