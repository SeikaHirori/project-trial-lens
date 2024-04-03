import { describe, expect, test } from 'vitest';
import { RefractiveErrorTypeAbstract } from './RefractiveErrorTypeAbstract.ts';
import { Hyperopic } from "./Hyperopic.ts";
import { Patient } from '../Patient/Patient.ts';

describe('Testing Hyperopic, which was inherited from abstract class "RefractiveErrorType"', () => {
    const currentPatient: Patient = new Patient(+3, 0.25, 18, 25);

    const currentHyperopic: Hyperopic = new Hyperopic(currentPatient);


    test(`Is inherited class "Hyperopic is subclass of abstract class "RefractiveErrorType"}`, () => {
        const result1: boolean = (currentHyperopic instanceof RefractiveErrorTypeAbstract);
        expect(result1).toBe(true);
    });


});
