import { Patient } from "../Patient/Patient";
import { RefractiveErrorTypeAbstract } from "./RefractiveErrorTypeAbstract";


export class Emmetropic extends RefractiveErrorTypeAbstract {
    calculateTrialLens(patient: Patient): number | null {
        let results: number | null;

        const age: number = patient.age;
        // const rawDistanceRx: number = patient.valueAfterCalculatingAstigmatismRaw;
        // Go through the age check,
        // and then get the proper
        // trial lens
        if (this.isAge60AndOver(age)) {
            results = 325;
        } else if (this.isAgeBetween55to59(age)) {
            results = 300;
        } else if (this.isAgeBetween50to54(age)) {
            results = 250;
        } else if (this.isAgeBetween45to49(age)) {
            results = 200;
        } else if (this.isAgeBetween40to44(age)) {
            results = 150;
        } else if (this.isAgeBetween30to39(age)) {
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

}
