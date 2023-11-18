import { expect, test } from 'vitest';
import  { RefractiveErrorType, debugConcreteRefractiveErrorType, Emmetropic, Hyperopic, Myopia }  from './RefractiveErrorType.ts';
import { Patient } from './Patient.ts';


test('sample test', () => {
    expect(1).toBe(1);
});

test('Checking abstract "RefractiveErrorType" through the concrete class "baseRefractiveErrorType"', () => {
    const currentPatient: Patient = new Patient(+3.00, 0.25, 18, 25);
    
    const concreteRefractiveErrorType = new debugConcreteRefractiveErrorType(currentPatient);

    expect(concreteRefractiveErrorType.nameType).toBe("Debug/ Concrete: RefractiveErrorType");

    

});