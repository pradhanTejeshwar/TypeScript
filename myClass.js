"use strict";
exports.__esModule = true;
exports.myClass1 = void 0;
var myClass1 = /** @class */ (function () {
    function myClass1(i, n) {
        this.id = i;
        this.name = n;
    }
    myClass1.prototype.display = function () {
        console.log(this.id + "\t" + this.name);
    };
    return myClass1;
}());
exports.myClass1 = myClass1;
var obj = new myClass1(101, "Ronit");
obj.display();
