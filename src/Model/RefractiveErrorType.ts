import { Patient } from "./Patient";

export abstract class RefractiveErrorType {

    abstract readonly nameType: string;
    currentPatient: Patient;

    constructor(patient: Patient) {
        this.currentPatient = patient;
    }

    /**
     * 
     */

    abstract getResults(): string; // Return the trial lens values OR handle the null for the respective RET

    abstract calculateTrialLens(patient: Patient): number | null;

    /**
     *  Below is all the boolean statements whether the patient's age is within a certain range. Start with the limitless option first, which is age 60 AND over
     */

    isPatientAge60AndOver(currentAge: number): boolean {

        const result: boolean = currentAge >= 60;
        return result;
    }

    isPatientAgeBetweenMinimumToMaximum(currentAge: number, minimumAge: number, maximumAge: number): boolean {
        let result: boolean = false;
        
        if (currentAge >= minimumAge && currentAge <= maximumAge) {
            result = true;
        }
        return result
    }

    isPatientAgeBetween55to59(currentAge: number): boolean {
        const minimumAge: number = 55;
        const maximumAge: number = 59;
        
        let result: boolean = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isPatientAgeBetween50to54(currentAge: number): boolean {
        
        const minimumAge: number = 50;
        const maximumAge: number = 54;
        
        let result: boolean = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isPatientAgeBetween45to49(currentAge: number): boolean {
        
        const minimumAge: number = 45;
        const maximumAge: number = 49;
        
        let result: boolean = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isPatientAgeBetween40to44(currentAge: number): boolean {
        const minimumAge: number = 40;
        const maximumAge: number = 44;
        
        let result: boolean = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isPatientAgeBetween30to39(currentAge: number): boolean {

        const minimumAge: number = 30;
        const maximumAge: number = 39;
        
        let result: boolean = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isPatientAgeUnder30(currentAge: number): boolean {
        let result: boolean = false;

        if ( currentAge >= 0 && currentAge < 30) {
            result = true;
        }

        return result;
    }



}

export class debugConcreteRefractiveErrorType extends RefractiveErrorType {
    getResults(): string {
        throw new Error("Method not implemented.");
    }
    calculateTrialLens(): number | null {
        throw new Error("Method not implemented.");
    }
    nameType: string = "Debug/ Concrete: RefractiveErrorType";

}


export class Emmetropic extends RefractiveErrorType {
    getResults(): string {
        // TODO: Create instance variable for Patient here, and pass onto method "this.calculateTrialLens"
        const patient: Patient = this.currentPatient;

        const trailLens: number | null = this.calculateTrialLens(patient)
        
        throw new Error("Method not implemented.");
    }
    
    calculateTrialLens(patient: Patient): number | null {
        let trialLens: number | null;
        
        const patientAge: number = patient.age;
        // const rawDistanceRx: number = this.currentPatient.valueAfterCalculatingAstigmatismRaw;
        
        // Go through the age check,
        // and then get the proper
        // trial lens
        if (this.isPatientAge60AndOver(patientAge)){
            trialLens = 325;
        } else if (this.isPatientAgeBetween55to59(patientAge)) {
            trialLens = 300;
        } else if (this.isPatientAgeBetween50to54(patientAge)) {
            trialLens = 250;
        } else if (this.isPatientAgeBetween45to49(patientAge)) {
            trialLens = 200;
        } else if (this.isPatientAgeBetween40to44(patientAge)) {
            trialLens = 150;
        } else if (this.isPatientAgeBetween30to39(patientAge)) {
            trialLens = 100;
        } else if (this.isPatientAgeUnder30(patientAge)){
            // No correction needed
            // for patients under age 30
            // with Emmetropic RET
            trialLens = null;
        } else {
            throw new Error(`ERROR: The age was not valid for Emmetropic. The value was ${patientAge}`)
        }

        // return trial lens
        return trialLens;
    }
    nameType: string = "Emmtropic";
    
    constructor(patient:Patient) {
        super(patient);
    }
}


export class Hyperopic extends RefractiveErrorType {
    getResults(): string {
        // TODO: Create instance variable for Patient here, and pass onto method "this.calculateTrialLens"
        const patient: Patient = this.currentPatient;

        const trailLens: number | null = this.calculateTrialLens(patient)
        throw new Error("Method not implemented.");
    }
    calculateTrialLens(patient: Patient): number | null {
        let trialLens: number | null;
        
        const patientAge: number = patient.age;
        const rawDistanceRx: number = patient.valueAfterCalculatingAstigmatismRaw;
        
        // Go through the age check,
        // and then add the respective
        // value to the rawDistanceRx to 
        // get the trial lens
        if (this.isPatientAge60AndOver(patientAge)){
            trialLens = rawDistanceRx + 325;
        } else if (this.isPatientAgeBetween55to59(patientAge)) {
            trialLens = rawDistanceRx + 300;
        } else if (this.isPatientAgeBetween50to54(patientAge)) {
            trialLens = rawDistanceRx + 250;
        } else if (this.isPatientAgeBetween45to49(patientAge)) {
            trialLens = rawDistanceRx + 200;
        } else if (this.isPatientAgeBetween40to44(patientAge)) {
            trialLens = rawDistanceRx + 150;
        } else if (this.isPatientAgeBetween30to39(patientAge)) {
            trialLens = rawDistanceRx + 100;
        } else if (this.isPatientAgeUnder30(patientAge)) {
            // DistanceRx only
            trialLens = rawDistanceRx;
        } else {
            throw new Error(`ERROR: The Age of the patient was not valid for Hyperopic. The age was ${patientAge}`);
        }

        return trialLens;    
    }
    nameType: string = "Hyperopic";

}


export class Myopia extends RefractiveErrorType {
    getResults(): string {

        // TODO: Create instance variable for Patient here, and pass onto method "this.calculateTrialLens"
        const patient: Patient = this.currentPatient;

        const trailLens: number | null = this.calculateTrialLens(patient)
        throw new Error("Method not implemented.");
    }
    nameType: string = "Myopia";

    calculateTrialLens(patient: Patient): number | null {
        // Use the age of patient first, 
        // THEN use the patient's 
        // DistanceRx
        let trialLens: number | null;

        const patientAge: number = patient.age;
        const rawDistanceRx: number = patient.valueAfterCalculatingAstigmatismRaw;


        // Start with lowest DistanceRx first
        if (this.isDistanceRxOverNegative300(rawDistanceRx)) {
            trialLens = this.distanceRxIsOverNegative300(patientAge);
        } else if (this.isDistanceRxOverNegative300(rawDistanceRx)) {
            trialLens = this.distanceRxIsExactlyNegative300(patientAge);
        } else if (this.isDistanceRxOverNegative250(rawDistanceRx)) {
            trialLens = this.distanceRxIsBetweenExactlyNegative250ToBelowNegative300(patientAge);
        } else if (this.isDistanceRxOverNegative200(rawDistanceRx)) {
            trialLens = this.distanceRxIsBetweenExactlyNegative200ToBelowNegative250(patientAge);
        } else if (this.isDistanceRxOverNegative150(rawDistanceRx)) {
            trialLens = this.distanceRxIsBetweenExactlyNegative150ToBelowNegative200(patientAge);
        } else if (this.isDistanceRxOverNegative100(rawDistanceRx)) {
            trialLens = this.distanceRxIsBetweenExactlyNegative100ToBelowNegative150(patientAge);
        } else if (this.isDistanceRxOverNegative050(rawDistanceRx)) {
            trialLens = this.distanceRxIsBetweenExactlyNegative050ToBelowNegative100(patientAge);
        } else {
            throw new Error(`ERROR: The Distance Rx is not valid for Myopia. The Distance Rx value was: ${rawDistanceRx}`);
        }


        return trialLens;
    }


    // Boolean for Patient's DistanceRx
    isDistanceRxOverNegative300(currentDistanceRx: number): boolean {
        
        const startingPoint: number = -300

        const result: boolean = currentDistanceRx <= startingPoint;
        
        return result;
    }
    
    isDistanceRxExactlyNegative300(currentDistanceRx: number): boolean {
        const startingPoint: number = -300
                
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

    /** Based on the patient's age, use 
     their DistanceRx to determine their 
     trial lens
    */

    distanceRxIsOverNegative300(distanceRx: number): number | null {
        let results: number;

        // Get the trial lens from adding 
        // together DistanceRx and 3.25
        results = distanceRx + 325;

        return results;
    }

    distanceRxIsExactlyNegative300(age: number): number | null {
        let results: null;

        // No trial lens needed for ALL ages
        results = null;

        return results;
    }

    distanceRxIsBetweenExactlyNegative250ToBelowNegative300(age: number): number | null {
        let results: number | null;

        if (this.isPatientAge60AndOver(age)) {
            results = +75;
        } else if (this.isPatientAgeBetween55to59(age)) {
            results = +50;
        } else {
            // No trial lens needed for ages 54 AND lower
            results = null;
        }

        return results;
    }

    distanceRxIsBetweenExactlyNegative200ToBelowNegative250(age: number): number | null {
        let results: number | null;

        if (this.isPatientAge60AndOver(age)) {
            results = +125;
        } else if (this.isPatientAgeBetween55to59(age)) {
            results = +100;
        } else if (this.isPatientAgeBetween50to54(age)) {
            results = +50;
        } else {
            // No trial lens needed for ages 49 AND lower
            results = null;
        }

        return results;
    }

    distanceRxIsBetweenExactlyNegative150ToBelowNegative200(age: number): number | null {
        let results: number | null;

        if (this.isPatientAge60AndOver(age)) {
            results = +175;
        } else if (this.isPatientAgeBetween55to59(age)) {
            results = +150;
        } else if (this.isPatientAgeBetween50to54(age)) {
            results = +100;
        } else if (this.isPatientAgeBetween45to49(age)) {
            results = +50;
        } else {
            // No trial lens needed for ages 44 AND lower
            results = null;
        }

        return results;
    }

    distanceRxIsBetweenExactlyNegative100ToBelowNegative150(age: number): number | null {
        let results: number | null;

        if (this.isPatientAge60AndOver(age)) {
            results = +225;
        } else if (this.isPatientAgeBetween55to59(age)) {
            results = +200;
        } else if (this.isPatientAgeBetween50to54(age)) {
            results = +150;
        } else if (this.isPatientAgeBetween45to49(age)) {
            results = +100;
        } else if (this.isPatientAgeBetween40to44(age)){
            results = +50;
        } else {
            // No trial lens needed for ages 39 and lower
            results = null;
        }

        return results;
    }

    distanceRxIsBetweenExactlyNegative050ToBelowNegative100(age: number): number | null {
        let results: number | null;

        if (this.isPatientAge60AndOver(age)) {
            results = +275;
        } else if (this.isPatientAgeBetween55to59(age)) {
            results = +250;
        } else if (this.isPatientAgeBetween50to54(age)) {
            results = +200;
        } else if (this.isPatientAgeBetween45to49(age)) {
            results = +150;
        } else if (this.isPatientAgeBetween40to44(age)){
            results = +100;
        } else if (this.isPatientAgeBetween30to39(age)){
            results = +50;
        } else {
            // No trial lens needed for ages below 30
            results = null;
        }

        return results;
    }
}

