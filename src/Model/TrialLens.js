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
var _TrialLens_instances, _TrialLens_currentPatient, _TrialLens_refractiveErrorType, _TrialLens_determineRefractiveErrorType;
Object.defineProperty(exports, "__esModule", { value: true });
class TrialLens {
    constructor(patient) {
        _TrialLens_instances.add(this);
        _TrialLens_currentPatient.set(this, void 0);
        _TrialLens_refractiveErrorType.set(this, void 0);
        __classPrivateFieldSet(this, _TrialLens_currentPatient, patient, "f");
        __classPrivateFieldSet(this, _TrialLens_refractiveErrorType, __classPrivateFieldGet(this, _TrialLens_instances, "m", _TrialLens_determineRefractiveErrorType).call(this, patient), "f"); // FIXME ; This is placeholder... Use function "determineRefractiveErrorType() when it is written out."
    }
}
_TrialLens_currentPatient = new WeakMap(), _TrialLens_refractiveErrorType = new WeakMap(), _TrialLens_instances = new WeakSet(), _TrialLens_determineRefractiveErrorType = function _TrialLens_determineRefractiveErrorType(patient) {
    const patientSphere = patient.sphereRaw;
    if (patientSphere < 0) {
        return;
    }
};
//# sourceMappingURL=TrialLens.js.map