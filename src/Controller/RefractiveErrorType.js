var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RefractiveErrorType = /** @class */ (function () {
    function RefractiveErrorType() {
    }
    return RefractiveErrorType;
}());
var Emmetropic = /** @class */ (function (_super) {
    __extends(Emmetropic, _super);
    function Emmetropic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Emmetropic;
}(RefractiveErrorType));
var Hyperopic = /** @class */ (function (_super) {
    __extends(Hyperopic, _super);
    function Hyperopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Hyperopic;
}(RefractiveErrorType));
var Myopia = /** @class */ (function (_super) {
    __extends(Myopia, _super);
    function Myopia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Myopia;
}(RefractiveErrorType));
//# sourceMappingURL=RefractiveErrorType.js.map