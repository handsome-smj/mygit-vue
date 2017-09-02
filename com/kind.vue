<template>
	<div >
		<ul id="classList">
			<li v-show = "isOK" v-for = "item in classList">
            	<router-link :to="{name:'kind',params:{classID:item.classID}}">{{item.className}}</router-link>
			</li>
			<li v-show = "!isOK">正在加载</li>
			<!--<li><router-link to="/kind/cy">衬衣</router-link></li>
			<li><router-link to="/kind/lf">礼服</router-link></li>
			<li><router-link to="/kind/mf">棉服</router-link></li>
			<li><router-link to="/kind/wt">外套</router-link></li>-->
			<!--<li>衬衣</li>
			<li>衬衣</li>
			<li>衬衣</li>
			<li>衬衣</li>
			<li>衬衣</li>
			<li>衬衣</li>
			<li>衬衣</li>-->
		</ul>
		<!--<router-view></router-view>-->
		<ul id="proList">
			<li  v-show = "isList" v-for = "item in proList">
				<p>{{item.goodsName}}</p>
				<img v-bind:src="item.goodsListImg"/>
			</li>
		
		</ul>
	</div>
</template>

<script>
	import MyAjax from "./../md/MyAjax.js";
	import { Toast } from 'mint-ui';
	export default {
		data(){
			return {
				classList:[],
				isOK:false,
				isList:false,
				proList:[]
			}
		},
		watch:{
			'$route':function(newRoute){
				console.log(newRoute)
				var classID = newRoute.params.classID;
				//依据classID请求相应的资源
				var that = this;
				let instance = Toast('正在请求列表数据');
				var url = "http://datainfo.duapp.com/shopdata/getGoods.php?classID="+classID;
				MyAjax.fetchJsonp(url,function(data){
					console.log(data)
					
					that.isList=true;
					that.proList = data;
					instance.close();
				},function(err){
					console.log(err)
				})
			}
		},
		mounted(){
			var that = this;
			var url = "http://datainfo.duapp.com/shopdata/getclass.php";
			MyAjax.vueJson(url,function(data){
				console.log(data)
				that.isOK = true;
				that.classList = data;
			},function(err){
				console.log(err)
			})
			
			
		}
	}
</script>

<style scoped>
	#classList{
         width: 100%;
         height: 36px;
         border-bottom: 1px solid #f66;
         overflow-x: auto;
         overflow-y: hidden;
         white-space: nowrap;
        
        
    }
    #classList::-webkit-scrollbar {display:none}
    #classList li{
        display: inline-block;
        line-height: 36px;
        margin: 0 12px;
    }
    .router-link-exact-active.router-link-active{
    	color: #f66;
    }
</style>