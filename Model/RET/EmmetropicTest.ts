import { describe, expect, test } from 'vitest';
import { RefractiveErrorTypeAbstract } from './RefractiveErrorTypeAbstract.ts';
import { Emmetropic } from "./Emmetropic.ts";
import { Patient } from '../Patient/Patient.ts';

describe('Testing Emmetropic, which was inherited from abstract class "RefractiveErrorType"', () => {
    const currentPatient: Patient = new Patient(0, 0.25, 18, 25);

    const currentEmmetropic: Emmetropic = new Emmetropic(currentPatient);

    test('Check that Emmetropic is subclass of RefractiveErrorType', () => {
        const result1: boolean = (currentEmmetropic instanceof RefractiveErrorTypeAbstract);
        expect(result1).toBe(true);
    });

});
