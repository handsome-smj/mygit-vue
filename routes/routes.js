

import recom from "./../com/recom.vue";
import toplist from "./../com/toplist.vue";
import search from "./../com/search.vue";

import detail from "./../com/detail.vue";


import playsong from "./../com/playsong.vue";


//import publicheader from "./../com/publicheader.vue";


//import header from "./../com/header.vue";




//import cart from './../com/cart.vue';
//import cartheader from "./../com/cartheader.vue";
//
//
//import user from './../com/user.vue';
//import userheader from "./../com/userheader.vue";
//
//import more from './../com/more.vue';
//import moreheader from "./../com/moreheader.vue";
//
//import detail from './../com/detail.vue';
//import detailfooter from "./../com/detailfooter.vue";

import kind from './../com/kind.vue';
import kindheader from "./../com/kindheader.vue";


//import mainfooter from "./../com/mainfooter.vue";







const routes = [

	{path:"/",redirect:"/recom"},
	
	
	{path:"/recom",components:{
    
        default:recom,
        
        
    }}, 
  {path:"/toplist",components:{
    
    default:toplist
    
  }}, 
  {path:"/search",components:{
    
    default:search
  }}, 
  {path:"/detail",name:"detail",components:{
    
    default:detail
   
    
  }},
  {path:"/playsong",name:"playsong",components:{
    
    default:playsong
   
    
  }},

    
    
    
 

	
//	{path:"/home",components:{
//		
//		default:home,
//		header:homeheader,
////		footer:mainfooter
//		
//		
//		
//	}},
//	{path:"/home/:homename",name:"home",components:{
//  
//  default:home,
//  header:homeheader,
//  
////    footer:mainfooter
//  
//  
//  
//}},
  

//	{path:"/cart",components:{
//		
//		default:cart,
//		header:cartheader,
////		footer:mainfooter
//		
//		
//		
//	}},
//	
//	{path:"/user",components:{
//		
//		default:user,
//		header:userheader,
////		footer:mainfooter
//		
//		
//		
//	}},
	
//	{path:"/more",components:{
//		
//		default:more,
//		header:moreheader,
////		footer:mainfooter
//		
//		
//		
//	}},
//	{path:"/detail/:goodsID",components:{
//		default:detail,
////		footer:detailfooter
//	}},
	
	
	
//	{path:"/kind",redirect:"/kind/1",components:{
//		
//		default:kind,
//		header:kindheader,
//		footer:mainfooter
//		
//		
//		
//	}},
	{path:"/kind",components:{
		
		default:kind,
		header:kindheader,
//		footer:mainfooter
		
		
		
	}},
	{path:"/kind/:classID",name:"kind",components:{
		
		default:kind,
		header:kindheader,
//		footer:mainfooter
		
		
		
	}}
	
	





];

export default routes;
