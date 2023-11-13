class RefractiveErrorType {

    currentPatient: Patient;

    /**
     *  Below is all the boolean statements whether the patient's age is within a certain range. Start with the limitless option first, which is age 60 AND over
     */

    isPatientAge60AndOver(): boolean {

        const result: boolean = this.currentPatient.age >= 60;
        return result;
    }

    isPatientAgeBetweenMinimumToMaximum(currentAge: number, minimumAge: number, maximumAge: number): boolean {
        let result: boolean = false;
        
        if (currentAge >= minimumAge || currentAge <= maximumAge) {
            result = true;
        }
        return result
    }

    isPatientAgeBetween55to59(): boolean {
        const minimumAge: number = 55;
        const maximumAge: number = 59;
        
        const currentAge: number = this.currentPatient.age;

        let result: boolean = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isPatientAgeBetween50to54(): boolean {
        
        const minimumAge: number = 50;
        const maximumAge: number = 54;
        
        const currentAge: number = this.currentPatient.age;

        let result: boolean = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isPatientAgeBetween45to49(): boolean {
        
        const minimumAge: number = 45;
        const maximumAge: number = 49;
        
        const currentAge: number = this.currentPatient.age;

        let result: boolean = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isPatientAgeBetween40to44(): boolean {
        const minimumAge: number = 40;
        const maximumAge: number = 44;
        
        const currentAge: number = this.currentPatient.age;

        let result: boolean = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isPatientAgeBetween30to39(): boolean {

        const minimumAge: number = 30;
        const maximumAge: number = 39;
        
        const currentAge: number = this.currentPatient.age;

        let result: boolean = this.isPatientAgeBetweenMinimumToMaximum(currentAge, minimumAge, maximumAge);
        
        return result;
    }

    isPatientAgeUnder30(): boolean {
        return this.currentPatient.age < 30;
    }

}


class Emmetropic extends RefractiveErrorType {

}


class Hyperopic extends RefractiveErrorType {

}


class Myopia extends RefractiveErrorType {

}