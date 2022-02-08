// function post() {
//     const xhttp = new XMLHttpRequest();
//     const endPointRoot = "http://lab4.hostmatching.com/"; // TODO: enter srver url here
//     const word = document.getElementById("inputWord").value;
//     const definition = document.getElementById("inputDefinition").value;

//     const json = {
//         "word": `${word}`,
//         "definition": `${definition}`
//     };

//     const jsStr = JSON.stringify(json);

//     xhttp.open("POST", endPointRoot, true);
//     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xhttp.send(jsStr);
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("feedback").innerHTML =
//                 this.responseText;
//         }
//     };
// }


var sayNode = function () {
    console.log('Node');
};

var es = 'ES';
var oldObject = {
    sayJS: function () {
        console.log('JS');
    },
    sayNode: sayNode,
};

oldObject[es + 6];
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);