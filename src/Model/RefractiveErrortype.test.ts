import { describe, expect, test } from 'vitest';
import  { RefractiveErrorType, debugConcreteRefractiveErrorType,  Hyperopic, Emmetropic, Myopia }  from './RefractiveErrorType.ts';
import { Patient } from './Patient.ts';

describe( "sample describe",() => {
    test('sample test', () => {
        expect(1).toBe(1);
    });
});

describe('Unit testing abstract "RefractiveErrorType" through the concrete class "baseRefractiveErrorType"', () => {
    const currentPatient: Patient = new Patient(+3.00, 0.25, 18, 25);
    
    const concreteRefractiveErrorType: debugConcreteRefractiveErrorType = new debugConcreteRefractiveErrorType(currentPatient);

    test("Check nameType", () => {
        expect(concreteRefractiveErrorType.nameType).toBe("Debug/ Concrete: RefractiveErrorType");
    });

    /**
     *  Boolean: Age range requirements that have 7 different groups
     */

    // Age 60 AND over
    test("Check ages 60 AND over", () => {
        expect(concreteRefractiveErrorType.isPatientAge60AndOver(59)).toBe(false);
        expect(concreteRefractiveErrorType.isPatientAge60AndOver(60)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAge60AndOver(100)).toBe(true);
    });

    
    // Age 55 to 59
    test("Check ages between 55 to 59", () => {
        expect(concreteRefractiveErrorType.isPatientAgeBetween55to59(54)).toBe(false);
        expect(concreteRefractiveErrorType.isPatientAgeBetween55to59(55)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeBetween55to59(59)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeBetween55to59(60)).toBe(false);
    });

    // Age 50 to 54

    test("Ages 50 to 54", () => {
        expect(concreteRefractiveErrorType.isPatientAgeBetween50to54(49)).toBe(false);
        expect(concreteRefractiveErrorType.isPatientAgeBetween50to54(50)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeBetween50to54(54)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeBetween50to54(55)).toBe(false);
    });


    // Age 45 to 49
    test( "Ages 45 to 49", () => {
        expect(concreteRefractiveErrorType.isPatientAgeBetween45to49(44)).toBe(false);
        expect(concreteRefractiveErrorType.isPatientAgeBetween45to49(45)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeBetween45to49(49)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeBetween45to49(50)).toBe(false);
    });

    // Age 40 to 44
    test("Ages 40 to 45" , () => {
        expect(concreteRefractiveErrorType.isPatientAgeBetween40to44(39)).toBe(false);
        expect(concreteRefractiveErrorType.isPatientAgeBetween40to44(40)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeBetween40to44(44)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeBetween40to44(45)).toBe(false);
    });
    


    // Age 30 to 39
    test( "Ages 30 to 39",() => {
        expect(concreteRefractiveErrorType.isPatientAgeBetween30to39(29)).toBe(false);
        expect(concreteRefractiveErrorType.isPatientAgeBetween30to39(30)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeBetween30to39(39)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeBetween30to39(40)).toBe(false);
    });

    // Ages under 30
    test( "Ages under 30", ()=> {
        expect(concreteRefractiveErrorType.isPatientAgeUnder30(0)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeUnder30(1)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeUnder30(29)).toBe(true);
        expect(concreteRefractiveErrorType.isPatientAgeUnder30(30)).toBe(false);
        expect(concreteRefractiveErrorType.isPatientAgeUnder30(50)).toBe(false);
    });


    // TODO: Ages is below 0, which is invalid
    test( "Should be invalid if age is under 0", () => {
    expect(concreteRefractiveErrorType.isPatientAgeUnder30(-10)).toBe(false);
    expect(concreteRefractiveErrorType.isPatientAgeUnder30(-1)).toBe(false);
    });
});

describe('Testing Hyperopic, which was inherited from abstract class "RefractiveErrorType"', () => {
    const currentPatient: Patient = new Patient(+3.00, 0.25, 18, 25); 

    const currentHyperopic: Hyperopic = new Hyperopic(currentPatient);


    test(`Is inherited class "Hyperopic is subclass of abstract class "RefractiveErrorType"}`,() => {
        const result1: boolean = (currentHyperopic instanceof RefractiveErrorType);
        expect(result1).toBe(true);
    });


});

describe('Testing Emmetropic, which was inherited from abstract class "RefractiveErrorType"', () => {
    const currentPatient: Patient = new Patient(0.00, 0.25, 18, 25);

    const currentEmmetropic: Emmetropic = new Emmetropic(currentPatient);

    test('Check that Emmetropic is subclass of RefractiveErrorType', () => {
        const result1: boolean = (currentEmmetropic instanceof RefractiveErrorType);
        expect(result1).toBe(true);
    });
    
});

describe('Testing Myopia, which was inherited from abstract class "RefractiveErrorType"', () => {
    const currentPatient: Patient = new Patient(-2.00, 0.25, 18, 25);

    const currentMyopia: Myopia = new Myopia(currentPatient);

    test(`Inherited class "Myopia" should be subclass of abstract class "RefractiveErrorType"`, () => {
        const result1: boolean = (currentMyopia instanceof RefractiveErrorType);
        expect(result1).toBe(true);
    });

});