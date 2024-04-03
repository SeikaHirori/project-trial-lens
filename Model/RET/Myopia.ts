import { Patient } from "../Patient/Patient";
import { RefractiveErrorTypeAbstract } from "./RefractiveErrorTypeAbstract";


export class Myopia extends RefractiveErrorTypeAbstract {
    nameType: string = "Myopia";

    calculateTrialLens(patient: Patient): number | null {
        // Use the age of patient first, 
        // THEN use the patient's 
        // DistanceRx
        let trialLens: number | null;

        const patientAge: number = patient.age;
        const rawDistanceRx: number = patient.valueAfterCalculatingAstigmatismRaw;


        // Start with oldest age first
        throw new Error("Method not implemented.");

        return trialLens;
    }


    // Boolean for Patient's DistanceRx
    isDistanceRxOverNegative300(currentDistanceRx: number): boolean {

        const startingPoint: number = -300;

        const result: boolean = currentDistanceRx <= startingPoint;

        return result;
    }

    isDistanceRxExactlyNegative300(currentDistanceRx: number): boolean {
        const startingPoint: number = -300;

        return currentDistanceRx === startingPoint;
    }

    isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx: number, minimumDistanceRx: number, maximumDistanceRx: number): boolean {
        let result: boolean = false;

        /**
         * The maximum DistanceRx can be exactly the same as OR
         * great than the current DistanceRx, BUT the current
         * DistanceRx has to be less than minimum DistanceRx.
         */
        if (currentDistanceRx > minimumDistanceRx && currentDistanceRx <= maximumDistanceRx) {
            result = true;
        }

        return result;
    }

    isDistanceRxOverNegative250(currentDistanceRx: number): boolean {
        const minimumRange: number = -300;
        const maximumRange: number = -250;

        const result: boolean = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);

        return result;
    }

    isDistanceRxOverNegative200(currentDistanceRx: number): boolean {
        const minimumRange: number = -250;
        const maximumRange: number = -200;

        const result: boolean = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);

        return result;
    }

    isDistanceRxOverNegative150(currentDistanceRx: number): boolean {
        const minimumRange: number = -200;
        const maximumRange: number = -150;

        const result: boolean = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);

        return result;
    }

    isDistanceRxOverNegative100(currentDistanceRx: number): boolean {
        const minimumRange: number = -150;
        const maximumRange: number = -100;

        const result: boolean = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);

        return result;
    }

    isDistanceRxOverNegative050(currentDistanceRx: number): boolean {
        const minimumRange: number = -100;
        const maximumRange: number = -50;

        const result: boolean = this.isDistanceRxBetweenMinimumToMaximumRange(currentDistanceRx, minimumRange, maximumRange);

        return result;
    }

    // Based on the patient's age, use 
    // their DistanceRx to determine their 
    // trial lens
    patientAgeIsUnder30(): number | null {
        let results: number | null;



        return results;
    }

    patientAgeIsBetween(): number | null {
        let results: number | null;

        

        return results;
    }

    patientAgeIsBetween(): number | null {
        let results: number | null;



        return results;
    }

    patientAgeIsBetween(): number | null {
        let results: number | null;



        return results;
    }

    patientAgeIsBetween(): number | null {
        let results: number | null;



        return results;
    }

    patientAgeIsBetween(): number | null {
        let results: number | null;



        return results;
    }

    patientAgeIs60AndOver(): number | null {
        let results: number | null;



        return results;
    }
}
