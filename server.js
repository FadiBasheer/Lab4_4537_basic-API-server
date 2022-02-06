// Node.js: HTTP SERVER Handling GET and POST Request 
// Show HTML Form at GET request.
// At POST Request: Grab form data and display them.
// Get Complete Source Code from Pabbly.com


var http = require('http');
var fs = require('fs');
let url = require('url');

var server = http.createServer(function (req, res) {

    let q = url.parse(req.url, true);


    if (req.method === "GET") {

      //  res.writeHead(200, {"Content-Type": "text/html"});
      //  res.end('<b style="color:blue;">' + 'Hello ' + q.query["name"] + ', What a beautiful day. Server current date and time is ' + mo.getDate() + '</b>');


        // res.writeHead(200, { "Content-Type": "text/html" });
        // fs.createReadStream("./index.html", "UTF-8").pipe(res);
        // res.writeHead(200, { "Content-Type": "application/json" });
        // //set the response
        // res.write("Hi there, This is a Vanilla Node.js API");
        // //end the response
        // res.end();
    } else if (req.method === "POST") {
    
        console.log(q.query);

        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body);
        });
    }

}).listen(3000);

console.log("listening on localhost:3000");

// at your browser address bar, try
// http://localhost:3000/?name=Manreet,Fadi



// let http = require('http');
// let url = require('url');
// const mo = require('./modules/utils');

// http.createServer(function(req, res) {
//     let q = url.parse(req.url, true);

//     console.log(q.query,"\n");
//     console.log(mo.getDate());

//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.end('<b style="color:blue;">' + 'Hello ' + q.query["name"] + ', What a beautiful day. Server current date and time is ' + mo.getDate() + '</b>');
// }).listen(8887);
// console.log("listening on localhost:8887");

// // at your browser address bar, try
// // http://localhost:8887/?name=Manreet,Fadi