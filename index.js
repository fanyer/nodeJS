//项目入口
var server=require("./server");
var router=require("./router");
var requestHandlers=require("./requestHandlers");
console.log("index.js done");

var handle={};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"]=requestHandlers.show;

console.log("index.js done");
server.start(router.route,handle);
