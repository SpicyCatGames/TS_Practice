var hello = "hello";
console.log(hello);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        // hit the gas
    };
    return Car;
}());
var Golfer = /** @class */ (function () {
    function Golfer() {
    }
    Golfer.prototype.drive = function () {
        // hit the ball far
    };
    return Golfer;
}());
// No error?
var w = new Golfer();
//# sourceMappingURL=helloworld.js.map