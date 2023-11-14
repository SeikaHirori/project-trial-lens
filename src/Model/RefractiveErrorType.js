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
    /**
     *  Below is all the boolean statements whether the patient's age is within a certain range. Start with the limitless option first, which is age 60 AND over
     */
    RefractiveErrorType.prototype.isPatientAge60AndOver = function (currentAge) {
        var result = currentAge >= 60;
        return result;
    };
    RefractiveErrorType.prototype.isPatientAgeBetweenMinimumToMaximum = function (currentAge, minimumAge, maximumAge) {
        var result = false;
        if (currentAge >= minimumAge && currentAge <= maximumAge) {
            result = true;
        }
        return result;
    };
    RefractiveErrorType.prototype.isPatientAgeBetween55to59 = function (currentAge) {
        var minimumAge = 55;
        var maximumAge = 59;
        var result = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        return result;
    };
    RefractiveErrorType.prototype.isPatientAgeBetween50to54 = function (currentAge) {
        var minimumAge = 50;
        var maximumAge = 54;
        var result = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        return result;
    };
    RefractiveErrorType.prototype.isPatientAgeBetween45to49 = function (currentAge) {
        var minimumAge = 45;
        var maximumAge = 49;
        var result = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        return result;
    };
    RefractiveErrorType.prototype.isPatientAgeBetween40to44 = function (currentAge) {
        var minimumAge = 40;
        var maximumAge = 44;
        var result = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        return result;
    };
    RefractiveErrorType.prototype.isPatientAgeBetween30to39 = function (currentAge) {
        var minimumAge = 30;
        var maximumAge = 39;
        var result = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        return result;
    };
    RefractiveErrorType.prototype.isPatientAgeUnder30 = function (currentAge) {
        return currentAge < 30;
    };
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
    Myopia.prototype.isDistanceRxOverNegative300 = function (currentDistanceRx) {
        var startingPoint = -300;
        var result = currentDistanceRx <= startingPoint;
        return result;
    };
    Myopia.prototype.isDistanceRxExactlyNegative300 = function (currentDistanceRx) {
        var startingPoint = -300;
        return currentDistanceRx === startingPoint;
    };
    Myopia.prototype.isDistanceRxBetweenMinimumToMaximumRange = function (currentDistanceRx, minimumDistanceRx, maximumDistanceRx) {
        var result = false;
        /**
         * The maximum DistanceRx can be exactly the same as OR
         * great than the current DistanceRx, BUT the current
         * DistanceRx has to be less than minimum DistanceRx.
         */
        if (currentDistanceRx > minimumDistanceRx && currentDistanceRx <= maximumDistanceRx) {
            result = true;
        }
        return result;
    };
    Myopia.prototype.isDistanceRxOverNegative250 = function (currentDistanceRx) {
        var minimumRange = -300;
        var maximumRange = -250;
        var result = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);
        return result;
    };
    Myopia.prototype.isDistanceRxOverNegative200 = function (currentDistanceRx) {
        var minimumRange = -250;
        var maximumRange = -200;
        var result = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);
        return result;
    };
    Myopia.prototype.isDistanceRxOverNegative150 = function (currentDistanceRx) {
        var minimumRange = -200;
        var maximumRange = -150;
        var result = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);
        return result;
    };
    Myopia.prototype.isDistanceRxOverNegative100 = function (currentDistanceRx) {
        var minimumRange = -150;
        var maximumRange = -100;
        var result = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);
        return result;
    };
    Myopia.prototype.isDistanceRxOverNegative050 = function (currentDistanceRx) {
        var minimumRange = -100;
        var maximumRange = -50;
        var result = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);
        return result;
    };
    return Myopia;
}(RefractiveErrorType));
//# sourceMappingURL=RefractiveErrorType.js.map