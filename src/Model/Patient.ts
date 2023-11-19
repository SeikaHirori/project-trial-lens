export class Patient {
    #sphere: number; // This is also known as DistanceRx
    #cylinder: number;
    #axis: number;
    #age: number;
    // #valueAfterFactoringInAstigmatism: number; // TODO

    constructor(sphere: number, cylinder: number, axis: number, age: number) {
        this.#sphere = sphere;
        this.#cylinder = cylinder;
        this.#axis = axis;
        this.#age = age;

        // this.#valueAfterFactoringInAstigmatism = this.#calculateTotalAfterAstigmatism(); // TODO
    }


    get sphereRaw(): number {
        return this.#sphere;
    }

    get sphereFormatted(): number {
        return this.#sphere / 100;
    }

    get cylinderRaw(): number {
        return this.#cylinder;
    }

    get cylinderFormatted(): number {
        return this.#cylinder / 100;
    }

    get axis(): number {
        return this.#axis;
    }

    get age(): number {
        return this.#age;
    }

    /**
     * How much Astigmatism is there? Refer to client's doc "Perimetry-Trial_lens-Guideline.docx" for flowchart picture
     */
    // // TODO: Reenable later
    // get valueAfterCalculatingAstigmatismRaw(): number {
    //     return this.#valueAfterFactoringInAstigmatism;
    // }

    // // TODO: Reenable later
    // get valueAfterCalculatingAstigmatismFormatted(): number {
    //     return this.#valueAfterFactoringInAstigmatism / 100;
    // }

    // // TODO: Reenable later
    // calculateTotalAfterAstigmatism(): number {
    //     // Sphere Only

    //     // Spherical Equivalent

    //     // Full Spherocylindrical

    //     throw new Error("unable to cacluate total after Astigmatism");
    }

}
