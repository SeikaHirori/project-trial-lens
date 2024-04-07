import { Patient } from "../Model/Patient/Patient";

/**
 * Values for Sphere/ Distance Rx AND Cylinder should be in increments of quarters (or if you divide the value by 25, there should not be a remainder.)
 */


/**
 * User Story: loads onto the webpage
 * 
 * When webpage loads, automatically create a new Patient with randomly generated values.
 */

export class NewRandomPatient {

    exportNewRandomPatient(): Patient {
        const newSphere: number = this.generateSphere();
        const newCylinder: number = this.generateCylinder();
        const newAxis: number = this.generateAxis();
        const newAge: number = this.generateAge();

        throw new Error("Method not implemented.");
    }

    // TODO
    generateSphere(): number {
        
        throw new Error("Method not implemented.");
    }

    // TODO
    generateCylinder(): number {
        
        throw new Error("Method not implemented.");
    }

    // TODO
    generateAxis(): number {
        
        throw new Error("Method not implemented.");
    }

    // TODO
    generateAge(): number {
        
        throw new Error("Method not implemented.");
    }

    verifyValueIsDivisibleBy4(value: number): boolean {
        let result: boolean = false;

        if (value % 25 === 0) {
            result = true;
        }

        return result;
    }
}