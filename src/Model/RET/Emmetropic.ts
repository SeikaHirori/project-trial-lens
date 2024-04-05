import { Patient } from "../Patient/Patient";
import { RefractiveErrorTypeAbstract } from "./RefractiveErrorTypeAbstract";


export class Emmetropic extends RefractiveErrorTypeAbstract {
    calculateTrialLens(patient: Patient): number | null {
        let results: number | null;

        const patientAge: number = patient.age;
        // const rawDistanceRx: number = patient.valueAfterCalculatingAstigmatismRaw;
        // Go through the age check,
        // and then get the proper
        // trial lens
        if (this.isPatientAge60AndOver(patientAge)) {
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

}
