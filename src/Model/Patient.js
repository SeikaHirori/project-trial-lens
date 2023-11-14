"use strict";
class Patient {
    constructor(sphere, cylinder, axis, age) {
        this._sphere = sphere;
        this._cylinder = cylinder;
        this._axis = axis;
        this._age = age;
    }
    get sphereRaw() {
        return this._sphere;
    }
    get sphereFormatted() {
        return this._sphere / 100;
    }
}
//# sourceMappingURL=Patient.js.map