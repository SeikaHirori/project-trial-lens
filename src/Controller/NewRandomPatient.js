"use strict";
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
    exportNewRandomPatient() {
        const newSphere = this.generateSphere();
        const newCylinder = this.generateCylinder();
        const newAxis = this.generateAxis();
        const newAge = this.generateAge();
        throw new Error("Method not implemented.");
    }
    // TODO
    generateSphere() {
        throw new Error("Method not implemented.");
    }
    // TODO
    generateCylinder() {
        throw new Error("Method not implemented.");
    }
    // TODO
    generateAxis() {
        throw new Error("Method not implemented.");
    }
    // TODO
    generateAge() {
        throw new Error("Method not implemented.");
    }
    verifyValueIsDivisibleBy4(value) {
        let result = false;
        if (value % 25 === 0) {
            result = true;
        }
        return result;
    }
}
exports.NewRandomPatient = NewRandomPatient;
//# sourceMappingURL=NewRandomPatient.js.map