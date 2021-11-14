"use strict";
// tipe data pada balikan function
function getName() {
    return "hello, my name is Aysha";
}
console.log(getName());
function getAge() {
    return 123;
}
function printName() {
    console.log('Bearnard');
}
printName();
//---------------------------//
//arguments types
function multiply(val1, val2) {
    return val1 * val2;
}
var result = multiply(12, 5);
console.log(result);
var Add = function (val1, val2) {
    return val1 + val2;
};
//default parameter
var fullName = function (first, last) {
    if (last === void 0) { last = "Ramadhan"; }
    return first + "" + last;
};
console.log(fullName("A."));
//optional parameter
var getUmur = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getUmur(111, 123));
