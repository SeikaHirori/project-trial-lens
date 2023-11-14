"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Myopia = exports.Hyperopic = exports.Emmetropic = exports.RefractiveErrorType = void 0;
class RefractiveErrorType {
    constructor(patient) {
        this.currentPatient = patient;
    }
    /**
     *  Below is all the boolean statements whether the patient's age is within a certain range. Start with the limitless option first, which is age 60 AND over
     */
    isPatientAge60AndOver(currentAge) {
        const result = currentAge >= 60;
        return result;
    }
    isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge) {
        let result = false;
        if (currentAge >= minimumAge && currentAge <= maximumAge) {
            result = true;
        }
        return result;
    }
    isPatientAgeBetween55to59(currentAge) {
        const minimumAge = 55;
        const maximumAge = 59;
        let result = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        return result;
    }
    isPatientAgeBetween50to54(currentAge) {
        const minimumAge = 50;
        const maximumAge = 54;
        let result = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        return result;
    }
    isPatientAgeBetween45to49(currentAge) {
        const minimumAge = 45;
        const maximumAge = 49;
        let result = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        return result;
    }
    isPatientAgeBetween40to44(currentAge) {
        const minimumAge = 40;
        const maximumAge = 44;
        let result = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        return result;
    }
    isPatientAgeBetween30to39(currentAge) {
        const minimumAge = 30;
        const maximumAge = 39;
        let result = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        return result;
    }
    isPatientAgeUnder30(currentAge) {
        return currentAge < 30;
    }
}
exports.RefractiveErrorType = RefractiveErrorType;
class Emmetropic extends RefractiveErrorType {
}
exports.Emmetropic = Emmetropic;
class Hyperopic extends RefractiveErrorType {
}
exports.Hyperopic = Hyperopic;
class Myopia extends RefractiveErrorType {
    isDistanceRxOverNegative300(currentDistanceRx) {
        const startingPoint = -300;
        const result = currentDistanceRx <= startingPoint;
        return result;
    }
    isDistanceRxExactlyNegative300(currentDistanceRx) {
        const startingPoint = -300;
        return currentDistanceRx === startingPoint;
    }
    isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumDistanceRx, maximumDistanceRx) {
        let result = false;
        /**
         * The maximum DistanceRx can be exactly the same as OR
         * great than the current DistanceRx, BUT the current
         * DistanceRx has to be less than minimum DistanceRx.
         */
        if (currentDistanceRx > minimumDistanceRx && currentDistanceRx <= maximumDistanceRx) {
            result = true;
        }
        return result;
    }
    isDistanceRxOverNegative250(currentDistanceRx) {
        const minimumRange = -300;
        const maximumRange = -250;
        const result = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);
        return result;
    }
    isDistanceRxOverNegative200(currentDistanceRx) {
        const minimumRange = -250;
        const maximumRange = -200;
        const result = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);
        return result;
    }
    isDistanceRxOverNegative150(currentDistanceRx) {
        const minimumRange = -200;
        const maximumRange = -150;
        const result = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);
        return result;
    }
    isDistanceRxOverNegative100(currentDistanceRx) {
        const minimumRange = -150;
        const maximumRange = -100;
        const result = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);
        return result;
    }
    isDistanceRxOverNegative050(currentDistanceRx) {
        const minimumRange = -100;
        const maximumRange = -50;
        const result = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);
        return result;
    }
}
exports.Myopia = Myopia;
//# sourceMappingURL=RefractiveErrorType.js.map