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
var _Patient_sphere, _Patient_cylinder, _Patient_axis, _Patient_age;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
class Patient {
    constructor(sphere, cylinder, axis, age) {
        _Patient_sphere.set(this, void 0); // This is also known as DistanceRx
        _Patient_cylinder.set(this, void 0);
        _Patient_axis.set(this, void 0);
        _Patient_age.set(this, void 0);
        __classPrivateFieldSet(this, _Patient_sphere, sphere, "f");
        __classPrivateFieldSet(this, _Patient_cylinder, cylinder, "f");
        __classPrivateFieldSet(this, _Patient_axis, axis, "f");
        __classPrivateFieldSet(this, _Patient_age, age, "f");
    }
    get sphereRaw() {
        return __classPrivateFieldGet(this, _Patient_sphere, "f");
    }
    get sphereFormatted() {
        return __classPrivateFieldGet(this, _Patient_sphere, "f") / 100;
    }
    get cylinderRaw() {
        return __classPrivateFieldGet(this, _Patient_cylinder, "f");
    }
    get cylinderFormatted() {
        return __classPrivateFieldGet(this, _Patient_cylinder, "f") / 100;
    }
    get axis() {
        return __classPrivateFieldGet(this, _Patient_axis, "f");
    }
    get age() {
        return __classPrivateFieldGet(this, _Patient_age, "f");
    }
}
exports.Patient = Patient;
_Patient_sphere = new WeakMap(), _Patient_cylinder = new WeakMap(), _Patient_axis = new WeakMap(), _Patient_age = new WeakMap();
//# sourceMappingURL=Patient.js.map