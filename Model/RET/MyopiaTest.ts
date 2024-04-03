import { describe, expect, test } from 'vitest';
import { RefractiveErrorTypeAbstract } from './RefractiveErrorTypeAbstract.ts';
import { Myopia } from "./Myopia.ts";
import { Patient } from '../Patient/Patient.ts';

describe('Testing Myopia, which was inherited from abstract class "RefractiveErrorType"', () => {
    const currentPatient: Patient = new Patient(-2, 0.25, 18, 25);

    const currentMyopia: Myopia = new Myopia(currentPatient);

    test(`Inherited class "Myopia" should be subclass of abstract class "RefractiveErrorType"`, () => {
        const result1: boolean = (currentMyopia instanceof RefractiveErrorTypeAbstract);
        expect(result1).toBe(true);
    });

});
