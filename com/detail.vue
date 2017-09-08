<template>
    <div class="detailContent">
        <div class="topimg">
            <img :src="topImg" alt="正在加载..."/>
            <div class="shadow">
                <span class="listname">{{listName}}</span>
                <span class="updatetime">{{updateTime}}更新</span>
                <span class="playbtn iconfont">&#xe61a;</span>
            </div>
        </div>
        <ul class="toplist" ref="ulbg">
            <li v-for="(item,index) in topList" v-on:click="play(item.data.songmid,item.data.albummid,item.data.songid,item.data.songname)">
                <span class="ordernum" >{{index+1}}</span>
                <div class="toplist_left">
                    <p>{{item.data.songname}}</p>
                    <p>
                        <span v-for="(item2,index2) in item.data.singer">
                            <span v-if="item.data.singer.length>1&&index2>=1" class="fengeline">/</span>
                            {{item2.name}}
                        </span>
                        <span>· {{item.data.albumname}}</span>
                        <span v-if="item.data.albumdesc">· {{item.data.albumdesc}}</span>
                    </p>
                </div>
            </li>
            
            
        </ul>
        
        <div class="detailfooter" ref="detailfooter">
            <div class="footerContent">
                
                <span>下载这首歌曲</span>
            </div>
            
        </div>	
       
    
    </div>
</template>

<script>
    import "./../scss/detail.scss";
     import MyAjax from "./../md/MyAjax.js";
     import router from "./../router/router.js";

     
    export default {
        data(){
            return {
                topImg:"",
                listName:"",
                updateTime:"",
                topList:[],
                bg:"",
                menuid:""
                
                
            }
        },
        mounted(){
            
            var that = this;
            
            console.log(this.$route.query.id);
            
            var songId = this.$route.query.id;
            
            var url = "http://localhost:3000/detail";
            
            MyAjax.vueJsonOpt(url,{params:{songId:songId}},function(data){
                
                
                console.log(JSON.parse(data));
                
                that.topImg = JSON.parse(data).topinfo.pic_album;
                
//              console.log(that.topImg);
                
                that.listName = JSON.parse(data).topinfo.ListName;
                
//              console.log(that.listName);


                that.updateTime = JSON.parse(data).update_time;
                
//              console.log(that.updateTime);
                
                that.topList = JSON.parse(data).songlist;
                
                console.log(that.topList);
                
                that.bg = JSON.parse(data).color.toString(16);
                
                
                console.log(JSON.parse(data).topinfo.topID);
                
                that.menuid = JSON.parse(data).topinfo.topID;
                
                
                
                if(that.bg.length==1){
                    that.bg="00000"+that.bg;
                    
                }else if(that.bg.length==2){
                    that.bg="0000"+that.bg;
                    
                }else if(that.bg.length==3){
                    
                    that.bg="000"+that.bg;
                }else if(that.bg.length==4){
                    
                    that.bg="00"+that.bg;
                }else if(that.bg.length==5){
                    
                    that.bg="0"+that.bg;
                }
                
               console.log(that.bg);
                
                that.$refs.ulbg.style.background="#"+that.bg;
                
                
                that.$refs.detailfooter.style.background="#"+that.bg;
                
                
                
                },function(err){
                  console.log(err)
                })

            
        },
        methods:{
            play(songmid,imgid,songid,songname){
//              console.log(songid);


                console.log(songname);
                
                var that  = this;
                
                 router.push({ path: 'playsong', query: { songmId: songmid , imgId:imgid, songId:songid , menuid:that.menuid, songname:songname}});
                
                
                
            }
        }
    }
</script>

<style scoped>


   
</style>