"use strict";
// ENUM
// numeric enums
//enum Month {
//  JAN = 1,
// FEB,
//APR,
//MAY
// }
//console.log(Month.FEB);
// string enums
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["APR"] = "April";
    Month["MAY"] = "Mei";
})(Month || (Month = {}));
console.log(Month.FEB);
