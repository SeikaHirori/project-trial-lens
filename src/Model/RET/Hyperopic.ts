import { Patient } from "../Patient/Patient";
import { RefractiveErrorTypeAbstract } from "./RefractiveErrorTypeAbstract";
import { calculateTotalAfterAstigmatism } from '../../Controller/Calculations.ts';



export class Hyperopic extends RefractiveErrorTypeAbstract {
    calculateTrialLens(patient: Patient): number | null {
        let results: number | null;

        const age: number = patient.age;
        const sphere: number = patient.sphere;
        const cylinder: number = patient.cylinder;

        const rawDistanceRx: number = calculateTotalAfterAstigmatism(sphere, cylinder);

        // Go through the age check,
        // and then add the respectiveuml
        // value to the rawDistanceRx to 
        // get the trial lens
        if (this.isAge60AndOver(age)) {
            results = rawDistanceRx + 325;
        } else if (this.isAgeBetween55to59(age)) {
            results = rawDistanceRx + 300;
        } else if (this.isAgeBetween50to54(age)) {
            results = rawDistanceRx + 250;
        } else if (this.isAgeBetween45to49(age)) {
            results = rawDistanceRx + 200;
        } else if (this.isAgeBetween40to44(age)) {
            results = rawDistanceRx + 150;
        } else if (this.isAgeBetween30to39(age)) {
            results = rawDistanceRx + 100;
        } else {
            // Age is below 30
            // DistanceRx only
            results = rawDistanceRx;
        }

        return results;
    }
    nameType: string = "Hyperopic";

}
