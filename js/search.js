// function get () {
//     const xhttp = new XMLHttpRequest();
//     const endPointRoot = "http://lab4.hostmatching.com/"; // TODO: enter srver url here
//     const word = document.getElementById("inputWord").value;


//     const params = `?word=${word}`;
//     const url = endPointRoot + params;

//     console.log(url);

//     xhttp.open("GET", url, true);
//     xhttp.send();
//     xhttp.onreadystatechange = function () {
//         console.log(this.readyState);
//         console.log(this.status);
//         console.log(responseText);

//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("response").innerHTML =
//                 this.responseText;
//         } 
//     };
// }

function loadXMLDoc() {

    const endPointRoot = "http://lab4.hostmatching.com/";
    const word = document.getElementById("inputWord").value;

    const params = `?word=${word}`;
    const url = endPointRoot + params;


    // const url = "http://lab4.hostmatching.com/?word=booksfdasd";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").value = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}