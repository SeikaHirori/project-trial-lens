import { Patient } from "../Model/Patient/Patient";
import getRandom from "./Random";

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
export function newRandomPatient(): Patient {
    const newSphere: number = generateSphere();
    const newCylinder: number = generateCylinder();
    const newAxis: number = generateAxis();
    const newAge: number = generateAge();

    return new Patient(newSphere, newCylinder, newAxis, newAge);
}

/**
 * Range should be -10 to 10
 * @returns 
 */
function generateSphere(): number {
    
    const whole: number = getRandom(-10, 10);
    const decimal: number = getRandom(0, 3);

    return whole + (decimal * 25)
}

/** // TODO
 * Based on doc "Project Trail Lens - Meeting 8/29/2023",
 *  the range for cylinders should be -10 to 0;
 * 
 * // FIXME Check if cylinder is negative or positive
 */
function generateCylinder(): number {
    // Return negative value
    const cyl: number = getRandom(0, 10)
    return -(cyl);
}

/** // TODO
 * 
 *  // FIXME: (unsure ???) Range for Axis might be 0 to 180
 */
function generateAxis(): number {
    return getRandom(0, 180);
}

/** // TODO
 * Range for age is 0 to 100
 */
function generateAge(): number {
    return getRandom(0, 100);
}

export function verifyValueIsDivisibleBy25(value: number): boolean {
    let result: boolean = false;

    if (value % 25 === 0) {
        result = true;
    }

    return result;
}

