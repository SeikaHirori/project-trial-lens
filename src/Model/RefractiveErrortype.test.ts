import { expect, test } from 'vitest';
import { RefractiveErrorType, Emmetropic, Hyperopic, Myopia } from './RefractiveErrorType';
import { Patient } from './Patient';


test('sample test', () => {
    expect(1).toBe(1);
});

test('Checking object "RefractiveErrorType"', () => {
    const currentPatient: Patient = new Patient(+3.00, 0.25, 18, 25);
    
    const baseRefractiveErrorType: RefractiveErrorType = new RefractiveErrorType(currentPatient);
});