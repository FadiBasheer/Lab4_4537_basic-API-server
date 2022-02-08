var http = require('http');
let url = require('url');

var dictionary = {
    "book": "useful thing",
    "paper": "trees",
    "phone": "photons"
};

function getDifinishio(word_to_compare, request_num) {

    if (word_to_compare in dictionary) {
        return dictionary[word_to_compare];
    } else {
        return "Request# " + request_num + "\nWord '" + word_to_compare + "' not found!";
    }
}

function stringContainsNumber(_string) {
    let matchPattern = _string.match(/\d+/g);
    if (matchPattern != null) {
        return false;
    } else {
        return true;
    }
}

function addDifinishio(word_to_compare, definition, request_num) {

    if (stringContainsNumber(word_to_compare)) {
        if (!(word_to_compare in dictionary)) {
            dictionary[word_to_compare] = definition;

            return "Request #" + request_num + "\nNew entry recorded:\n" + word_to_compare + " : " + definition;
        } else {
            return "already exist";
        }
    } else {
        return "Thw word can not be empty or contain numbers";
    }
}

let request_num = 0;

var server = http.createServer(function (req, res) {

    let q = url.parse(req.url, true);
    request_num++;

    if (req.method === "GET") {

        let word = q.query["word"];

        let match = getDifinishio(word, request_num);

        res.writeHead(200, {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": "*"
        });
        //set the response
        res.write(match);
        //end the response
        res.end();
    } else if (req.method === "POST") {

        var body = "";
        req.on("data", function (chunk) {
            body += chunk.toString();
        });


        console.log(req);


        req.on("end", function () {
            const {
                word,
                definition
            } = JSON.parse(body);
            let match = addDifinishio(word, definition, request_num);

            res.writeHead(200, {
                "Content-Type": "text/html",
                "Access-Control-Allow-Origin": "*"
            });
            //set the response
            res.write(match);
            //end the response
            res.end();
        });
    }

}).listen(3000);
console.log("listening on localhost:3000");