function duck() {
    this.weight = function () { console.log("Duck's weight is 2kg"); };
    this.colour = function () { console.log("Duck is yellow"); };
    this.quake = function () { console.log("Quack"); };
}
new duck().quake();
new duck().colour();
new duck().weight();
console.log("//--------------------------------------------------------------------\\");
function wordCount(word) {
    return word.length;
}
var count = wordCount("test 1");
console.log("String length with spaces and all is: " + wordCount("test 1"));
function str_len_nospaces(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
console.log("String length with spaces not included in the count: "
    + str_len_nospaces("test 1"));
