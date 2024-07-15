import { describe, expect, test } from 'vitest';
import { Patient } from './Patient.ts';

describe('test functions of model "Patient"', () => {
    const currentPatient: Patient = new Patient(+250, 25, 10, 20);

    test('Observe the method "calculateTotalAfterAstigmatism(): When cylinder is below 0.50, ignore the cylinder and use ONLY the sphere."', () => {
        const expectedOutcome: number = +100;

        const result1: number = currentPatient.calculateTotalAfterAstigmatism(+100, +25);

        expect(result1).toBe(expectedOutcome);

    });

    test('see if getter works for variable "valueAfterFactoringAstigmatism"', () => {
        expect(currentPatient.valueAfterCalculatingAstigmatismRaw).toBe(250);
        expect(currentPatient.valueAfterCalculatingAstigmatismFormatted).toBe(2.50);
    });

    test('Observe the method "calculateTotalAfterAstigmatism(): When cylinder is between 0.50 to 1.50, Spherical Equivalent is used.', () => {
        const expectedOutcome: number = +150;

        const result1: number = currentPatient.calculateTotalAfterAstigmatism(+100, +100);

        expect(result1).toBe(expectedOutcome);
    });

    test('Observe the method "calculateTotalAfterAstigmatism(): When cylinder is above 1.50, full spherocylinder correction is used.', () => {
        const expectedOutcome: number = +300;

        const result1: number = currentPatient.calculateTotalAfterAstigmatism(+100, +200)

        expect(result1).toBe(expectedOutcome);
    });

});


describe('Patient with positive sphere and low cylinder', () => {
    const currentPatient: Patient = new Patient(+300, +25, 10, 29);


    const testSphereRaw: number = +300
    const testSphereFormatted: number = +3.00

    const testCylinderRaw: number = +25;
    const testCylinderFormatted: number = +0.25;

    const testAxis: number = 10;

    const testAge: number = 29;

    test('Verify the getters', () => {

        expect(currentPatient.sphere).toBe(testSphereRaw);
        expect(currentPatient.sphereFormatted).toBe(testSphereFormatted);
    
        expect(currentPatient.cylinder).toBe(testCylinderRaw);
        expect(currentPatient.cylinderFormatted).toBe(testCylinderFormatted);
    
        expect(currentPatient.axis).toBe(testAxis);
    
        expect(currentPatient.age).toBe(testAge);
    
        expect(currentPatient.valueAfterCalculatingAstigmatismRaw).toBe(300);
        expect(currentPatient.valueAfterCalculatingAstigmatismFormatted).toBe(3.00);
    });
    
});

describe('Patient with negative sphere/ Distance Rx and high cylinder', () => {
    const currentPatient: Patient = new Patient(-200, +200, 180, 56);

    const testSphereRaw: number = -200
    const testSphereFormatted: number = -2.00

    const testCylinderRaw: number = +200;
    const testCylinderFormatted: number = +2.00;

    const testAxis: number = 180;

    const testAge: number = 56;
    test('Testing getters', () => {
        expect(currentPatient.sphere).toBe(testSphereRaw);
        expect(currentPatient.sphereFormatted).toBe(testSphereFormatted);
    
        expect(currentPatient.cylinder).toBe(testCylinderRaw);
        expect(currentPatient.cylinderFormatted).toBe(testCylinderFormatted);
    
        expect(currentPatient.axis).toBe(testAxis);
    
        expect(currentPatient.age).toBe(testAge);
    
    });
});

// TODO: Patient with sphere "0.00"