import { expect, test } from 'vitest';
import { Patient } from './Patient.ts';

test('Patient with positive sphere and low cylinder', () => {
    const currentPatient: Patient = new Patient(+300, +25, 10, 29);


    const testSphereRaw: number = +300
    const testSphereFormatted: number = +3.00

    const testCylinderRaw: number = +25;
    const testCylinderFormatted: number = +0.25;

    const testAxis: number = 10;

    const testAge: number = 29;
    

    expect(currentPatient.sphereRaw).toBe(testSphereRaw);
    expect(currentPatient.sphereFormatted).toBe(testSphereFormatted);

    expect(currentPatient.cylinderRaw).toBe(testCylinderRaw);
    expect(currentPatient.cylinderFormatted).toBe(testCylinderFormatted);

    expect(currentPatient.axis).toBe(testAxis);

    expect(currentPatient.age).toBe(testAge);
});

test('Patient with negative sphere/ Distance Rx and high cylinder', () => {
    const currentPatient: Patient = new Patient(-200, +200, 180, 56);


    const testSphereRaw: number = -200
    const testSphereFormatted: number = -2.00

    const testCylinderRaw: number = +200;
    const testCylinderFormatted: number = +2.00;

    const testAxis: number = 180;

    const testAge: number = 56;
    

    expect(currentPatient.sphereRaw).toBe(testSphereRaw);
    expect(currentPatient.sphereFormatted).toBe(testSphereFormatted);

    expect(currentPatient.cylinderRaw).toBe(testCylinderRaw);
    expect(currentPatient.cylinderFormatted).toBe(testCylinderFormatted);

    expect(currentPatient.axis).toBe(testAxis);

    expect(currentPatient.age).toBe(testAge);
});

// TODO: Patient with sphere "0.00"