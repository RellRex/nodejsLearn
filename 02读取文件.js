//浏览器中的JavaScript是没有文件操作的能力的
//但是node中的JavaScript具有文件操作的能力

//fs是filesystem的简写，就是文件操作系统的意思
//在node中如果想要进行文件操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有的文件操作相关的API
//例如：fs.readFile就是用来读取文件的

//1.使用require方法加载fs核心模块
var fs=require('fs');
/*  2.读取文件
    第一个参数就是要读取的文件路径
    第二个参数是回调函数
	
	成功
		data 数据
		error null
	失败
		data null
		error 错误对象
*/
fs.readFile("hello.txt",function(err,data){
	//<Buffer 68 65 6c 6c 6f>
	//默认文件中存储的其实都是二进制数
	//并且二进制转为十六进制
	//可以通过toString转为我们认识的字符
	//通过判断error是否有错误发生
	if(error){
		console.log("读取文件失败");
		return
	};
	console.log(data.toString());
});


