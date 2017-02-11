// function foo() {
//     'use strict'
//     console.log(this.a);
// }
// var a=2;
// foo();


function foo(a) {
    this.a=a;
}
var obj1={};
var bar=foo.bind(obj1);
bar(2);
console.log(obj1.a);