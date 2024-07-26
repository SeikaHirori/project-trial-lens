"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyValueIsDivisibleBy25 = void 0;
var Patient_1 = require("../Model/Patient/Patient");
var Random_1 = require("./Random");
/**
 * Values for Sphere/ Distance Rx AND Cylinder should be in increments of quarters (or if you divide the value by 25, there should not be a remainder.)
 */
/**
 * User Story: loads onto the webpage
 *
 * When webpage loads, automatically create a new Patient with randomly generated values.
 */
/**
 * Generate new patient with random values
 *
 * @returns
 */
function newRandomPatient() {
    var newSphere = generateSphere();
    var newCylinder = generateCylinder();
    var newAxis = generateAxis();
    var newAge = generateAge();
    return new Patient_1.Patient(newSphere, newCylinder, newAxis, newAge);
}
exports.default = newRandomPatient;
/**
 * Range should be -10 to 10
 * @returns
 */
function generateSphere() {
    var whole = (0, Random_1.default)(-10, 10);
    var decimal = (0, Random_1.default)(0, 3);
    return whole + (decimal * 25);
}
/** // TODO
 * Based on doc "Project Trail Lens - Meeting 8/29/2023",
 *  the range for cylinders should be -10 to 0;
 *
 * // FIXME Check if cylinder is negative or positive
 */
function generateCylinder() {
    // Return negative value
    var cyl = (0, Random_1.default)(0, 10);
    return -(cyl);
}
/** // TODO
 *
 *  // FIXME: (unsure ???) Range for Axis might be 0 to 180
 */
function generateAxis() {
    return (0, Random_1.default)(0, 180);
}
/** // TODO
 * Range for age is 0 to 100
 */
function generateAge() {
    return (0, Random_1.default)(0, 100);
}
function verifyValueIsDivisibleBy25(value) {
    var result = false;
    if (value % 25 === 0) {
        result = true;
    }
    return result;
}
exports.verifyValueIsDivisibleBy25 = verifyValueIsDivisibleBy25;
