<template>
    <div class="playContent" >
        <img :src="imgurl" class="filterimg"/>
        <div class="playheader">
            <span>
               <img :src="imgurl" alt="此歌曲暂无图片"/>
            </span>
            
            <div class="song_info">
                <p></p>
                <p></p>
            </div>
            
            <a href="javascript:;" class="playBtn iconfont"  @click="playorpause()" ref="playbtn">&#xe62f;</a>
        
        </div>
        
        <div class="playmiddle" ref="playmiddle">
            <div class="lyric" v-show="isok" ref="lyric">
                <p>借毛（live）- 不易</p>
                <p>词：毛不易</p>
                <p>曲：毛不易</p>
                <p>编曲：陈思同</p>
                <p>音乐总监：谭伊哲</p>
                <p>乐队：TYZ乐队</p>
                <p>乐队队长：黄竣琮</p>
                <p>键盘：韩韵/杨猛</p>
                <p>鼓手：胡宇飞</p>
                <p>吉他：黄竣琮/AndrewMoore（加拿大）</p>
                <p>贝斯：RyanBradetich（美国）</p>
                <p>和声：王思思/刘苪嘉/宋豪</p>
                <p>打击乐：Gman</p>
                <p>电脑工程：郭丁尘</p>
                <p>音乐统筹：吕易秋</p>
                <p>借一盏午夜街头昏黄灯光</p>
                <p>照亮那坎坷路上人影一双</p>
                <p>借一寸三九天里冽冽暖阳</p>
                <p>融这茫茫人间刺骨凉</p>
                <p>借一泓古老河水九曲回肠</p>
                <p>带着那摇晃烛火漂往远方</p>
                <p>借一段往日旋律婉转悠扬</p>
                <p>把这不能说的轻轻唱</p>
                <p>被这风吹散的人说他爱得不深</p>
                <p>被这雨淋湿的人说他不会冷</p>
                <p>无边夜色到底还要蒙住多少人</p>
                <p>它写进眼里他不敢承认</p>
                <p>借一抹临别黄昏悠悠斜阳</p>
                <p>为这漫漫余生添一道光</p>
                <p>借一句刻骨铭心来日方长</p>
                <p>倘若不得不天各一方</p>
                <p>被这风吹散的人说他爱得不深</p>
                <p>被这雨淋湿的人说他不会冷</p>
                <p>无边夜色到底还要蒙住多少人</p>
                <p>它写进眼里他不敢承认</p>
                <p>可是啊总有那风吹不散的认真</p>
                <p>总有大雨也不能抹去的泪痕</p>
                <p>有一天太阳会升起在某个清晨</p>
                <p>一道彩虹两个人</p>
                <p>借一方乐土让他容身</p>
                <p>借他平凡一生</p>      
                <p>（完）</p>
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
        
        <div class="playlist" ref="menu">
            <div class="menu_top">
                
            </div>
            <div class="menu_middle">
                
                
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
                isok:false
                
                
                
                
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
            
            if(that.playId == "002WLDmw0vkHtC"){
                
                that.isok = true;
                


               
                
                var lyric = document.getElementsByClassName("lyric")[0];
                
                

                 
                
                
                
                
            }
            
            
            
            
            
            
            that.imgId = this.$route.query.imgId;
            console.log(that.imgId);
            
            that.imgurl = "https://y.gtimg.cn/music/photo_new/T002R150x150M000"+that.imgId+".jpg?max_age=2592000";
            
            console.log(that.imgurl);
            
            //音乐播放地址需要每天更新vkey的内容
            that.songurl = "http://dl.stream.qqmusic.qq.com/C400"+that.playId+".m4a?fromtag=38&vkey=2DF879527696707161B3A1658E82562EC21051DE6EAD18B99219880DBA0BAFC24E456E559FA7065521AC107CF85FCB39EE7CC69BEEF8B350&guid=1696140903";
            
            console.log(that.songurl);
            
            
            
           
            
            

                
             
             
             setTimeout(function(){
                this.nativeAudio = document.querySelector('audio');
                console.log(this.nativeAudio.duration);
                 
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
            
            
                console.log(JSON.parse(data).songlist);
            
            
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
                
                that.cursec = Math.floor(this.$refs.song.currentTime%60)>=10 ? Math.floor(this.$refs.song.currentTime%60) : "0"+Math.floor(this.$refs.song.currentTime%60);
                
                that.curmin = Math.floor(this.$refs.song.currentTime/60)>=10 ? Math.floor(this.$refs.song.currentTime/60) : "0"+Math.floor(this.$refs.song.currentTime/60);
                
                
                this.$refs.bef.style.width = (100/that.totaltime)*this.$refs.song.currentTime+"%";
                
            },
            playList(){
                
                this.$refs.menu.style.transform = "translateY(-380px)";
                
               

                
                
                
            },
            closebtn(){
                this.$refs.menu.style.transform = "translateY(380px)";
                
                
            }
            
        },
        watch:{
           
           
            
            
        }
    }
</script>

<style>
</style>