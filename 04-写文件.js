var fs=require("fs");

//第一个参数是路径
//你第二个参数是内容
//第三个参数是回调函数
//		成功
//			error null
//		失败 
//			error 错误对象
fs.writeFile('你好.md','大家好，给大家介绍一下，我是nodejs',function(error){
	if(error){
		console.log("写入成功");
	}else{
		console.log("写入失败");
	};
	console.log("文件写入成功");
})

