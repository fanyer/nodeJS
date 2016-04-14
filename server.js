var http=require("http");
var url=require("url");


function start(route,handle) {

	function onRequest(request,response) {
		
		var pathname=url.parse(request.url).pathname;

		
		//response.write("Hello World!   Server2s");

		console.log("Request for "+ pathname +" Received");
		
		route(handle,pathname,response,request);

	}

	http.createServer(onRequest).listen(8889);
	// 控制台会输出以下信息
	console.log('Server running at http://127.0.0.1:8889/');
}

// start();

exports.start=start;