
var dict = {
    "book": "useful thing",
    "paper": "trees",
    "phone": "photons"
};



module.exports = {
    getDifinishio: function (word_to_compare) {
        //console.log(p.word);

        if (!('phone' in dict)) {
            dict["phone"] = "value";
        }

        for (var key of Object.keys(dict)) {
            //if (key == "paper") {
            console.log("worrrrrd", key + " -> " + dict[key])
            //}
        }
        return dict;
    }
}