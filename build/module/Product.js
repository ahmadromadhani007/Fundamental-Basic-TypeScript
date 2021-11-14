"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lenovo_1 = __importDefault(require("./Lenovo"));
var MacBook_1 = __importDefault(require("./MacBook"));
var lenovo = new Lenovo_1.default("Legion", true, true);
console.log(lenovo);
var macbook = new MacBook_1.default(2001, false, false);
console.log(macbook);
macbook.a();
macbook.b();
