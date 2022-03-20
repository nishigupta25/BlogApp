const http=require('http');
const fs=require('fs');
const _ =require('lodash');
const server=http.createServer((request,response)=>{
response.setHeader('Content-Type','text/html');
//response.write('<h1>Hello Ninjas</h1>');
//Routing
let path='./views/';
switch(request.url)
{
    case '/':
        path+='index.html';
        response.statusCode=200;
        break;
    case '/about':
        path+='about.html';
        response.statusCode=200;
        break;
    case '/about-me':
        response.statusCode=301;
        response.setHeader('Location','/about');
        response.end();
     default:
         path+='404.html';
         response.statusCode=404
         break;   
}
fs.readFile(path,(err,data)=>{
    if(err){
    console.log(err);
    response.end();
    }
    else
    {
response.write(data);
response.end();
    }
})

});
server.listen(3000,'localhost',()=>
{
    console.log('listening for request on port number 3000')
});