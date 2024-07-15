import { describe, expect, test } from 'vitest';
import { debugConcreteRefractiveErrorType } from "./ConcreteRefractiveErrorType.ts";
import { Patient } from '../Patient/Patient.ts';

/**
 * This is concrete class of RefractiveErrorType
 */
describe('Unit testing abstract "RefractiveErrorType" through the concrete class "baseRefractiveErrorType"', () => {
    const currentPatient: Patient = new Patient(+3, 0.25, 18, 25);

    const concreteRefractiveErrorType: debugConcreteRefractiveErrorType = new debugConcreteRefractiveErrorType();

    test("Check nameType", () => {
        expect(concreteRefractiveErrorType.nameType).toBe("Debug/ Concrete: RefractiveErrorType");
    });

    /**
     *  Boolean: Age range requirements that have 7 different groups
     */
    // Age 60 AND over
    test("Check ages 60 AND over", () => {
        expect(concreteRefractiveErrorType.isAge60AndOver(59)).toBe(false);
        expect(concreteRefractiveErrorType.isAge60AndOver(60)).toBe(true);
        expect(concreteRefractiveErrorType.isAge60AndOver(100)).toBe(true);
    });


    // Age 55 to 59
    test("Check ages between 55 to 59", () => {
        expect(concreteRefractiveErrorType.isAgeBetween55to59(54)).toBe(false);
        expect(concreteRefractiveErrorType.isAgeBetween55to59(55)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeBetween55to59(59)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeBetween55to59(60)).toBe(false);
    });

    // Age 50 to 54
    test("Ages 50 to 54", () => {
        expect(concreteRefractiveErrorType.isAgeBetween50to54(49)).toBe(false);
        expect(concreteRefractiveErrorType.isAgeBetween50to54(50)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeBetween50to54(54)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeBetween50to54(55)).toBe(false);
    });


    // Age 45 to 49
    test("Ages 45 to 49", () => {
        expect(concreteRefractiveErrorType.isAgeBetween45to49(44)).toBe(false);
        expect(concreteRefractiveErrorType.isAgeBetween45to49(45)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeBetween45to49(49)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeBetween45to49(50)).toBe(false);
    });

    // Age 40 to 44
    test("Ages 40 to 45", () => {
        expect(concreteRefractiveErrorType.isAgeBetween40to44(39)).toBe(false);
        expect(concreteRefractiveErrorType.isAgeBetween40to44(40)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeBetween40to44(44)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeBetween40to44(45)).toBe(false);
    });



    // Age 30 to 39
    test("Ages 30 to 39", () => {
        expect(concreteRefractiveErrorType.isAgeBetween30to39(29)).toBe(false);
        expect(concreteRefractiveErrorType.isAgeBetween30to39(30)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeBetween30to39(39)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeBetween30to39(40)).toBe(false);
    });

    // Ages under 30
    test("Ages under 30", () => {
        expect(concreteRefractiveErrorType.isAgeUnder30(0)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeUnder30(1)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeUnder30(29)).toBe(true);
        expect(concreteRefractiveErrorType.isAgeUnder30(30)).toBe(false);
        expect(concreteRefractiveErrorType.isAgeUnder30(50)).toBe(false);
    });


    // TODO: Ages is below 0, which is invalid
    test("Should be invalid if age is under 0", () => {
        expect(concreteRefractiveErrorType.isAgeUnder30(-10)).toBe(false);
        expect(concreteRefractiveErrorType.isAgeUnder30(-1)).toBe(false);
    });
});
