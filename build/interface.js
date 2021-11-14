"use strict";
var Legion = /** @class */ (function () {
    function Legion(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Legion.prototype.on = function () {
        console.log("Odik");
    };
    Legion.prototype.off = function () {
        console.log("Mateh");
    };
    return Legion;
}());
var MacBook = /** @class */ (function () {
    function MacBook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    MacBook.prototype.on = function () {
        console.log("Odik");
    };
    MacBook.prototype.off = function () {
        console.log("Mateh");
    };
    return MacBook;
}());
var legion = new Legion('Legion', true);
console.log(legion.on());
console.log(legion.off());
var mb = new MacBook('MBP', true);
console.log(legion.on());
console.log(legion.off());
