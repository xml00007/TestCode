var obj ={
    0:1,
    b:2,
    length:4
};


function ss() {
    return Array.prototype.slice.call(arguments);
}
var a =Function.prototype.call.bind(Array.prototype.slice);
// var b =ss(1,2,3);
// console.log(b);


function s2() {
    return a(arguments);
}


function t() {
    console.log(this.b);
}

t.call(obj);
console.log(obj);
// console.log(s2(1,2,3));


var arr = ["a", "b", "c"];
var eArr = arr.entries();

console.log(eArr.next().value); // [0, "a"]
console.log(eArr.next().value); // [1, "b"]
console.log(eArr.next().value); // [2, "c"]