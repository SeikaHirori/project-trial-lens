import { Patient } from "../Patient/Patient";
import { RefractiveErrorTypeAbstract } from "./RefractiveErrorTypeAbstract";


export class Hyperopic extends RefractiveErrorTypeAbstract {
    calculateTrialLens(patient: Patient): number | null {
        let results: number | null;

        const patientAge: number = patient.age;
        const rawDistanceRx: number = patient.valueAfterCalculatingAstigmatismRaw;

        // Go through the age check,
        // and then add the respectiveuml
        // value to the rawDistanceRx to 
        // get the trial lens
        if (this.isPatientAge60AndOver(patientAge)) {
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

        return results;
    }
    nameType: string = "Hyperopic";

}
