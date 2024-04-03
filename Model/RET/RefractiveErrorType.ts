import { Patient } from "../Patient/Patient";

export abstract class RefractiveErrorType {

    abstract readonly nameType: string;
    currentPatient: Patient;

    constructor(patient: Patient) {
        this.currentPatient = patient;
    }

    /**
     * 
     */

    abstract calculateTrialLens(): number | null;

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
    calculateTrialLens(): number | null {
        throw new Error("Method not implemented.");
    }
    nameType: string = "Debug/ Concrete: RefractiveErrorType";

}


export class Emmetropic extends RefractiveErrorType {
    calculateTrialLens(): number | null {
        let results: number | null;
        
        const patientAge: number = this.currentPatient.age;
        // const rawDistanceRx: number = this.currentPatient.valueAfterCalculatingAstigmatismRaw;
        
        // Go through the age check,
        // and then get the proper
        // trial lens
        if (this.isPatientAge60AndOver(patientAge)){
            results = 325;
        } else if (this.isPatientAgeBetween55to59(patientAge)) {
            results = 300;
        } else if (this.isPatientAgeBetween50to54(patientAge)) {
            results = 250;
        } else if (this.isPatientAgeBetween45to49(patientAge)) {
            results = 200;
        } else if (this.isPatientAgeBetween40to44(patientAge)) {
            results = 150;
        } else if (this.isPatientAgeBetween30to39(patientAge)) {
            results = 100;
        } else {
            // No correction needed
            // for patients under age 30
            // with Emmetropic RET
            results = null;
        }

        // return trial lens
        return results;
    }
    nameType: string = "Emmtropic";
    
    constructor(patient:Patient) {
        super(patient);
    }
}


export class Hyperopic extends RefractiveErrorType {
    calculateTrialLens(): number | null {
        let results: number | null;
        
        const patientAge: number = this.currentPatient.age;
        const rawDistanceRx: number = this.currentPatient.valueAfterCalculatingAstigmatismRaw;
        
        // Go through the age check,
        // and then add the respective
        // value to the rawDistanceRx to 
        // get the trial lens
        if (this.isPatientAge60AndOver(patientAge)){
            results = rawDistanceRx + 325;
        } else if (this.isPatientAgeBetween55to59(patientAge)) {
            results = rawDistanceRx + 300;
        } else if (this.isPatientAgeBetween50to54(patientAge)) {
            results = rawDistanceRx + 250;
        } else if (this.isPatientAgeBetween45to49(patientAge)) {
            results = rawDistanceRx + 200;
        } else if (this.isPatientAgeBetween40to44(patientAge)) {
            results = rawDistanceRx + 150;
        } else if (this.isPatientAgeBetween30to39(patientAge)) {
            results = rawDistanceRx + 100;
        } else {
            // DistanceRx only
            results = rawDistanceRx;
        }

        return results;    }
    nameType: string = "Hyperopic";

}


export class Myopia extends RefractiveErrorType {
    nameType: string = "Myopia";

    calculateTrialLens(): number | null {
        // Use the age of patient first, 
        // THEN use the patient's 
        // DistanceRx
        let trialLens: number | null;

        const patientAge: number = this.currentPatient.age;
        const rawDistanceRx: number = this.currentPatient.valueAfterCalculatingAstigmatismRaw;


        // Start with oldest age first
        if 

        throw new Error("Method not implemented.");

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

