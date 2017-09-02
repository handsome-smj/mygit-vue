var https = require("https");
var http = require("http");
module.exports = {
	connect:function(type,res){
		var req11 = https.request(type,function(res1){
		//请求成功
		var htmlStr = "";
		//有数据接收到时触发
		res1.on("data",function(html){
			htmlStr += html;
		});
		//数据接受完毕
		res1.on("end",function(){
		    
			res.send(htmlStr);
		});
		
	});
	req11.on("error",function(err){
		console.log(err);
	});
	req11.end();
	}
}
