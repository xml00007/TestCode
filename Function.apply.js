//
// Function.prototype.construct = function (aArgs) {
//     var oNew = Object.create(this.prototype);
//     this.apply(oNew, aArgs);
//     return oNew;
// };


Function.prototype.construct = function(aArgs) {
    var fConstructor = this, fNewConstr = function() {
        fConstructor.apply(this, aArgs);
    };
    fNewConstr.prototype = fConstructor.prototype;
    return new fNewConstr();
};

function MyConstructor () {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this["property" + nProp] = arguments[nProp];
    }
}

var myArray = [4, "Hello world!", false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs "Hello world!"
console.log(myInstance instanceof MyConstructor); // logs "true"
console.log(myInstance.constructor);              // logs "MyConstructor"