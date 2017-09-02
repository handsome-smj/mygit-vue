//引入express
//var express = require("express");
//生成实例
//var app = express();
var app = require("express")();
var https = require("https");
var http = require("http");
var Url = require("url");
var md = require("./md.js");
//设定路由
app.get("/",(req,res) => {
	res.send("hello world");
})
//结局跨域
app.get("*",(req,res,next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
//qq音乐推荐接口
var qqrecom = {
  hostname: 'c.y.qq.com',
  port: 443,//如果是https协议均为443，如果为http协议，此值为80
  path: '/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
  method: 'GET'
};
//qq音乐排行榜
var qqtoplist = {
hostname: 'c.y.qq.com',
port: 443,//如果是https协议均为443，如果为http协议，此值为80
path: '/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json',
method: 'GET'
};


app.get("/recom",(req,res) => {
	md.connect(qqrecom,res);
	
})
app.get("/toplist",(req,res) => {
	md.connect(qqtoplist,res);
	
})
app.get("/search",(req,res) => {
    //qq音乐搜索
    var qqsearch = {
        hostname: 'c.y.qq.com',
        port: 443,//如果是https协议均为443，如果为http协议，此值为80
        path: '/splcloud/fcgi-bin/gethotkey.fcg',
        method: 'GET'
    };
    
    
//  console.log(Url.parse(req.url,true).query.searchId);
    var searchId = Url.parse(req.url,true).query.searchId;
    
    console.log(searchId);
    var p = Url.parse(req.url,true).query.moreid;
    console.log(p);

    if(searchId){
        
        var searchId1 = encodeURI(searchId);
        
        
        var qqsearch = {
            hostname: 'c.y.qq.com',
            port: 443,//如果是https协议均为443，如果为http协议，此值为80
            path: '/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w='+searchId1+'&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p='+p+'&remoteplace=txt.mqq.all&_=1503384945498',
            method: 'GET'
        };
        
        
//          console.log(qqsearch);
        
        
        
    }
    md.connect(qqsearch,res);
})

//app.get("/another",(req,res) => {
//	
//	md.connect(qqanother,res);
//	console.log(qqanother);
//})



app.get("/detail",(req,res) => {
	console.log(Url.parse(req.url,true).query.songId);
	
	var songid = Url.parse(req.url,true).query.songId;
	
	var detailOption = {
	  hostname: 'c.y.qq.com',
	  port: 443,//如果是https协议均为443，如果为http协议，此值为80
	  path: '/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid='+songid,
	  method: 'GET'
	};
	md.connect(detailOption,res);
})



app.get("/playsong",(req,res) => {
    console.log(Url.parse(req.url,true).query.songId);
    
    var songid = Url.parse(req.url,true).query.songId;
    
    var lyric = {
      hostname: 'c.y.qq.com',
      port: 443,//如果是https协议均为443，如果为http协议，此值为80
      path: 
'/lyric/fcgi-bin/fcg_query_lyric.fcg?nobase64=1&musicid='+songid+'&songtype=0&callback=jsonp1',
      
      
      method: 'GET'
    };
    
    
    md.connect(lyric,res);
})



//app.get("/single",(req,res) => {
//	console.log(Url.parse(req.url,true).query.id)
//	var id = Url.parse(req.url,true).query.id
//	var detailOption = {
//	  hostname: 'c.y.qq.com',
//	  port: 443,//如果是https协议均为443，如果为http协议，此值为80
//	  path: "lyric/fcgi-bin/fcg_query_lyric.fcg?nobase64=1&musicid="+id+"&songtype=0&callback=jsonp1",
//	  method: 'GET'
//	};
//	md.connect(detailOption,res);
//})
//
//app.get("/searchipt",(req,res) => {
//	var searchOption = {
//	  hostname: 's.music.qq.com',
//	  port:80,//如果是https协议均为443，如果为http协议，此值为80
//	  path: "/fcgi-bin/music_search_new_platform?t=0&n=%s&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w",
//	  method: 'GET'
//	};
//	md.connect(detailOption,res);
//})
//监听端口
app.listen(3000,() => {
	console.log("your server is running at http://localhost:3000");
})
