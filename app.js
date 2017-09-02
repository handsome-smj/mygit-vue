import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'



Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);

import "./scss/main.scss";



import App from "./com/App.vue";



import router from "./router/router.js";















new Vue({
	el:"#app",
	router:router,
	data:{
		
	},
	methods:{
		
	},
	watch:{
		
	},
	components:{
		"v-app":App
	},
	computed:{
		
	},
	mounted(){
		
	}
	
	
})
