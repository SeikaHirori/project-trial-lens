import { Patient } from "../Patient/Patient";
import { RefractiveErrorTypeAbstract } from "./RefractiveErrorTypeAbstract";

export class Myopia extends RefractiveErrorTypeAbstract {
    nameType: string = "Myopia";

    calculateTrialLens(patient: Patient): number | null {
        // Use the age of patient first, 
        // THEN use the patient's 
        // DistanceRx

        const patientAge: number = patient.age;
        const sphere: number = patient.sphere;
        const cylinder: number = patient.cylinder;

        const rawDistanceRx: number = calculateTotalAfterAstigmatism(sphere, cylinder);


        // Start with oldest age first
        if (this.isPatientAge60AndOver(patientAge)) {
            return this.calculateTrialLensForPatientAgeIs60AndOver(rawDistanceRx);
        } else if (this.isPatientAgeBetween55to59(patientAge)) {
            return this.calculateTrialLensForPatientAgeIsBetween55To59(rawDistanceRx);
        } else if (this.isPatientAgeBetween50to54(patientAge)) {
            return this.calculateTrialLensForPatientAgeIsBetween50To54(rawDistanceRx);
        } else if (this.isPatientAgeBetween45to49(patientAge)) {
            return this.calculateTrialLensForPatientAgeIsBetween45To49(rawDistanceRx)
        } else if (this.isPatientAgeBetween40to44(patientAge)) {
            return this.calculateTrialLensForPatientAgeIsBetween40To44(rawDistanceRx)
        } else if (this.isPatientAgeBetween30to39(patientAge)) {
            return this.calculateTrialLensForPatientAgeIsBetween30To39(rawDistanceRx)
        } else {
            // DistanceRx only
            return this.calculateTrialLensForPatientAgeIsUnder30(rawDistanceRx)
        }

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
    calculateTrialLensForPatientAgeIsUnder30(distanceRx: number): number | null {
        if (this.isDistanceRxOverNegative300(distanceRx)){
            return distanceRx + 325;
        }

        // Distance Rx is exactly -300
        return null;
    }

    calculateTrialLensForPatientAgeIsBetween30To39(distanceRx: number): number | null {
        if (this.isDistanceRxOverNegative300(distanceRx)){
            return distanceRx + 325;
        } else if (this.isDistanceRxOverNegative050(distanceRx)){
            return 50;
        }
        
        // Distance Rx is exactly -300
        return null;
    }

    calculateTrialLensForPatientAgeIsBetween40To44(distanceRx: number): number | null {
        if (this.isDistanceRxOverNegative300(distanceRx)){
            return distanceRx + 325;
        } else if (this.isDistanceRxOverNegative100(distanceRx)){
            return 50;
        } else if (this.isDistanceRxOverNegative050(distanceRx)){
            return 100;
        }


        // Distance Rx is exactly -300
        return null;
    }

    calculateTrialLensForPatientAgeIsBetween45To49(distanceRx: number): number | null {
        if (this.isDistanceRxOverNegative300(distanceRx)){
            return distanceRx + 325;
        } else if (this.isDistanceRxOverNegative150(distanceRx)){
            return 50;
        } else if (this.isDistanceRxOverNegative100(distanceRx)){
            return 100;
        } else if (this.isDistanceRxOverNegative050(distanceRx)){
            return 150;
        }


        // Distance Rx is exactly -300
        return null;
    }

    calculateTrialLensForPatientAgeIsBetween50To54(distanceRx: number): number | null {
        if (this.isDistanceRxOverNegative300(distanceRx)){
            return distanceRx + 325;
        } else if (this.isDistanceRxOverNegative200(distanceRx)){
            return 50;
        } else if (this.isDistanceRxOverNegative150(distanceRx)){
            return 100;
        } else if (this.isDistanceRxOverNegative100(distanceRx)){
            return 150;
        } else if (this.isDistanceRxOverNegative050(distanceRx)){
            return 200;
        }


        // Distance Rx is exactly -300
        return null;
    }

    calculateTrialLensForPatientAgeIsBetween55To59(distanceRx: number): number | null {
        if (this.isDistanceRxOverNegative300(distanceRx)){
            return distanceRx + 325;
        } else if (this.isDistanceRxOverNegative250(distanceRx)){
            return 50;
        } else if (this.isDistanceRxOverNegative200(distanceRx)){
            return 100;
        } else if (this.isDistanceRxOverNegative150(distanceRx)){
            return 150;
        } else if (this.isDistanceRxOverNegative100(distanceRx)){
            return 200;
        } else if (this.isDistanceRxOverNegative050(distanceRx)){
            return 250;
        }


        // Distance Rx is exactly -300
        return null;
    }

    calculateTrialLensForPatientAgeIs60AndOver(distanceRx: number): number | null {
        if (this.isDistanceRxOverNegative300(distanceRx)){
            return distanceRx + 325;
        } else if (this.isDistanceRxOverNegative250(distanceRx)){
            return 75;
        } else if (this.isDistanceRxOverNegative200(distanceRx)){
            return 125;
        } else if (this.isDistanceRxOverNegative150(distanceRx)){
            return 175;
        } else if (this.isDistanceRxOverNegative100(distanceRx)){
            return 225;
        } else if (this.isDistanceRxOverNegative050(distanceRx)){
            return 275;
        }


        // Distance Rx is exactly -300
        return null;
    }
}
