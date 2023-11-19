"use strict";
var _NewRandomPatient_sphere, _NewRandomPatient_cylinder, _NewRandomPatient_axis, _NewRandomPatient_age;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewRandomPatient = void 0;
/**
 * Values for Sphere/ Distance Rx AND Cylinder should be in increments of quarters (or if you divide the value by 25, there should not be a remainder.)
 */
/**
 * User Story: loads onto the webpage
 *
 * When webpage loads, automatically create a new Patient with randomly generated values.
 */
class NewRandomPatient {
    constructor() {
        _NewRandomPatient_sphere.set(this, void 0);
        _NewRandomPatient_cylinder.set(this, void 0);
        _NewRandomPatient_axis.set(this, void 0);
        _NewRandomPatient_age.set(this, void 0);
    }
    main() {
    }
}
exports.NewRandomPatient = NewRandomPatient;
_NewRandomPatient_sphere = new WeakMap(), _NewRandomPatient_cylinder = new WeakMap(), _NewRandomPatient_axis = new WeakMap(), _NewRandomPatient_age = new WeakMap();
//# sourceMappingURL=NewRandomPatient.js.map