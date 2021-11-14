"use strict";
function getData(value) {
    return value;
}
console.log(getData('Ahmad Romadhani').length);
console.log(getData(123).length);
//Generic
function myData(value) {
    return value;
}
console.log(getData('Ahmad Romadhani').length);
console.log(getData(123));
