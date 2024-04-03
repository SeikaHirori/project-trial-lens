import { RefractiveErrorTypeAbstract } from "./RefractiveErrorTypeAbstract";


export class debugConcreteRefractiveErrorType extends RefractiveErrorTypeAbstract {
    calculateTrialLens(): number | null {
        throw new Error("Method not implemented. This class is concrete type meant for only testing");
    }
    nameType: string = "Debug/ Concrete: RefractiveErrorType";

}
