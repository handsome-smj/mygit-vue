<template>
    
	<div class="container">
	    
		
		
		<div id="content">
    		  
    		<router-view></router-view>
		</div>
		<!--<footer class="footer">
			<router-view name="footer"></router-view>
		</footer>-->
	</div>
</template>

<script>

	export default {
		data(){
			
			return{
				
			}
			
		},
		components:{
			
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