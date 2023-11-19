"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TrialLens_currentPatient, _TrialLens_refractiveErrorType;
Object.defineProperty(exports, "__esModule", { value: true });
const RefractiveErrorType_1 = require("./RefractiveErrorType");
class TrialLens {
    constructor(patient) {
        _TrialLens_currentPatient.set(this, void 0);
        _TrialLens_refractiveErrorType.set(this, void 0);
        __classPrivateFieldSet(this, _TrialLens_currentPatient, patient, "f");
        __classPrivateFieldSet(this, _TrialLens_refractiveErrorType, this.determineRefractiveErrorType(patient), "f"); // FIXME ; This is placeholder... Use function "determineRefractiveErrorType() when it is written out."
    }
    // // TODO
    determineRefractiveErrorType(patient) {
        const patientSphere = patient.sphereRaw;
        if (patientSphere < 0) {
            return new RefractiveErrorType_1.Myopia(__classPrivateFieldGet(this, _TrialLens_currentPatient, "f"));
        }
        else if (patientSphere === 0) {
            return new RefractiveErrorType_1.Emmetropic(__classPrivateFieldGet(this, _TrialLens_currentPatient, "f"));
        }
        else if (patientSphere > 0) {
            return new RefractiveErrorType_1.Hyperopic(__classPrivateFieldGet(this, _TrialLens_currentPatient, "f"));
        }
        throw new Error("Unable to determine Refractive Error Type");
    }
}
_TrialLens_currentPatient = new WeakMap(), _TrialLens_refractiveErrorType = new WeakMap();
//# sourceMappingURL=TrialLens.js.map