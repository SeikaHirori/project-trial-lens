import { Patient } from "../Patient/Patient";

export abstract class RefractiveErrorTypeAbstract {

    abstract readonly nameType: string;
    // currentPatient: Patient;

    // constructor(patient: Patient) {
    //     this.currentPatient = patient;
    // }

    /**
     * 
     */

    abstract calculateTrialLens(patient: Patient): number | null;

    /**
     *  Below is all the boolean statements whether the patient's age is within a certain range. Start with the limitless option first, which is age 60 AND over
     */

    isAge60AndOver(currentAge: number): boolean {

        const result: boolean = currentAge >= 60;
        return result;
    }

    isAgeBetweenMinimumToMaximum(currentAge: number, minimumAge: number, maximumAge: number): boolean {
        let result: boolean = false;
        
        if (currentAge >= minimumAge && currentAge <= maximumAge) {
            result = true;
        }
        return result
    }

    isAgeBetween55to59(currentAge: number): boolean {
        const minimumAge: number = 55;
        const maximumAge: number = 59;
        
        let result: boolean = this.isAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isAgeBetween50to54(currentAge: number): boolean {
        
        const minimumAge: number = 50;
        const maximumAge: number = 54;
        
        let result: boolean = this.isAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isAgeBetween45to49(currentAge: number): boolean {
        
        const minimumAge: number = 45;
        const maximumAge: number = 49;
        
        let result: boolean = this.isAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isAgeBetween40to44(currentAge: number): boolean {
        const minimumAge: number = 40;
        const maximumAge: number = 44;
        
        let result: boolean = this.isAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isAgeBetween30to39(currentAge: number): boolean {

        const minimumAge: number = 30;
        const maximumAge: number = 39;
        
        let result: boolean = this.isAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isAgeUnder30(currentAge: number): boolean {
        let result: boolean = false;

        if ( currentAge >= 0 && currentAge < 30) {
            result = true;
        }

        return result;
    }

}


