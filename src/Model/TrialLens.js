"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _TrialLens_currentPatient, _TrialLens_refractiveErrorType;
Object.defineProperty(exports, "__esModule", { value: true });
class TrialLens {
    constructor(patient) {
        _TrialLens_currentPatient.set(this, void 0);
        _TrialLens_refractiveErrorType.set(this, void 0);
        __classPrivateFieldSet(this, _TrialLens_currentPatient, patient, "f");
        // this.#refractiveErrorType = this.#determineRefractiveErrorType(patient); // FIXME ; This is placeholder... Use function "determineRefractiveErrorType() when it is written out."
    }
}
_TrialLens_currentPatient = new WeakMap(), _TrialLens_refractiveErrorType = new WeakMap();
//# sourceMappingURL=TrialLens.js.map