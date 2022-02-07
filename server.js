// Node.js: HTTP SERVER Handling GET and POST Request 
// Show HTML Form at GET request.
// At POST Request: Grab form data and display them.
// Get Complete Source Code from Pabbly.com


var http = require('http');
//var fs = require('fs');
let url = require('url');
//const mod = require('./modules/things');


var dict = {
    "book": "useful thing",
    "paper": "trees",
    "phone": "photons"
};

function getDifinishio(word_to_compare) {

    if (word_to_compare in dict) {
        return dict[word_to_compare];
    }
    else {
        return "NO match";
    }
}


function addDifinishio(word_to_compare, difiniion) {

    if (!(word_to_compare in dict)) {
        dict[word_to_compare] = difiniion;
        return "succes";
    }
    else {
        return "already exist";
    }

    // for (var key of Object.keys(dict)) {
    //     //if (key == "paper") {
    //     console.log("worrrrrd", key + " -> " + dict[key])
    //     //}
    // }
}

var server = http.createServer(function (req, res) {

    let q = url.parse(req.url, true);

    if (req.method === "GET") {

        let word = q.query["word"];

        let match = getDifinishio(word);

        res.writeHead(200, { "Content-Type": "application/json" });
        //set the response
        res.write(match);
        //end the response
        res.end();
    }


    else if (req.method === "POST") {

        var body = "";
        req.on("data", function (chunk) {
            body += chunk.toString();
        });

        req.on("end", function () {
            const { word, difinition } = JSON.parse(body);
            console.log(word, difinition);
            let match = addDifinishio(word, difinition);

            res.writeHead(200, { "Content-Type": "application/json" });
            //set the response
            res.write(match);
            //end the response
            res.end();
        });
    }

}).listen(3000);
console.log("listening on localhost:3000");
