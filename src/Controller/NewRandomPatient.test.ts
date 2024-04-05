import { assert, describe, expect, test } from 'vitest';
import { NewRandomPatient } from './NewRandomPatient.ts';
import { Patient } from '../Model/Patient.ts';

describe('Unit testing methods from controller class "NewRandomPatient"', () => {
    const testNewRandomPatient: NewRandomPatient = new NewRandomPatient();
    
    test('Verify that values are divisible by 25 so that no remainder should exist.', () => {
        const result1: boolean = testNewRandomPatient.verifyValueIsDivisibleBy4(25);
        assert.isTrue(result1);

        const result2: boolean = testNewRandomPatient.verifyValueIsDivisibleBy4(50);
        assert.isTrue(result2);

        const result3: boolean = testNewRandomPatient.verifyValueIsDivisibleBy4(75);
        assert.isTrue(result3);

        const result4: boolean = testNewRandomPatient.verifyValueIsDivisibleBy4(100);
        assert.isTrue(result4);

        
    });

    test('Verify that values that are NOT divisible by 25 should have a remaider', () => {
        // 1
        const result1: boolean = testNewRandomPatient.verifyValueIsDivisibleBy4(1);
        assert.isFalse(result1);

        // 24
        const result2: boolean = testNewRandomPatient.verifyValueIsDivisibleBy4(24);
        assert.isFalse(result2);

        // 76
        const result3: boolean = testNewRandomPatient.verifyValueIsDivisibleBy4(76);
        assert.isFalse(result3);

        // 1096
        const result4: boolean = testNewRandomPatient.verifyValueIsDivisibleBy4(1096);
        assert.isFalse(result4);

    });
});