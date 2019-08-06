var http=require("http");

//创建server
var server=http.createServer();

//监听request请求，设置请求处理函数
server.on("request",function(req,res){
    //console.log("收到请求了，请求的路径是"+req.url);
    // res.write("hello");
    // res.write(" world");
    // res.end();

    //上面的方法比较麻烦，推荐使用简单的方式，使用end的同时发送数据
    //res.end("hello world");

    /**
     * 根据不同的请求路径发送不同的响应
     * 1.获得请求吧路径
     *      req.url获取到的是端口号之后的那一部分路径
     *      也就是说所有的url都是以/开头的
     * 2.判断路径处理响应
     * 
     * 
     */
    var url=req.url;
    
    // if(url==="/"){
    //     res.end("index page");
    // }else if(url==="/login"){
    //     res.end("login in");
    // }else{
    //     res.end("404 Not Found.");
    // };

    if(url==="/product"){
        var products=[{
            name:"apple",
            price:"8888"
        },
        {
            name:"banana",
            price:"1882"
        },
        {
            name:"arange",
            price:"8908"
        }];
    }
    //响应内容只能是二进制数据或者字符串
    //数字、数字都不行
    res.end(JSON.stringify(products));
});

//绑定端口号，启动服务
//80是http默认的端口号
server.listen(80,function(){
    console.log("服务器启动成功了，可以通过http://127.0.0.1 来进行访问");
});

