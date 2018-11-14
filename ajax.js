var http = require('http')
var url = require('url')
var util = require('util');

http
    .createServer(function(req,res){
       /* var params = url.parse(req.url,true)
        console.log(params)
        if(params.query && params,query.callback){
            var str = params.query.callback
        }
        var post = '';
        req.on('data',function(chunk){
            post += chunk;
            console.log('GOT DATA!');
        })
        req.on('end',function(){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(callback("post"))
        })*/
        var params = url.parse(req.url,true);
        util.log(util.inspect(req))
        console.log(params)
        var str = params.query.callback;
        var data = {"name": '您输入的姓名是：' + params.query.name};
        var Data = JSON.stringify(data)
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        var out = str + '(' + Data + ')';
        console.log(out)
        //res.end('callback(\'{\"msg\": \"文字文字\"}\')');
        res.end(out)
    })
    .listen(8888,'127.0.0.1')
console.log('ajax going')