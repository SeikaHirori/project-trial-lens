export class Patient {
    #sphere: number; // This is also known as DistanceRx
    #cylinder: number;
    #axis: number;
    #age: number;

    #valueAfterFactoringInAstigmatism: number; // TODO

    constructor(sphere: number, cylinder: number, axis: number, age: number) {
        this.#sphere = sphere;
        this.#cylinder = cylinder; // This is also known as Cylinder
        this.#axis = axis;
        this.#age = age;

        this.#valueAfterFactoringInAstigmatism = this.calculateTotalAfterAstigmatism(sphere, cylinder); // TODO
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
    // TODO: Reenable later
    get valueAfterCalculatingAstigmatismRaw(): number {
        return this.#valueAfterFactoringInAstigmatism;
    }

    // TODO: Reenable later
    get valueAfterCalculatingAstigmatismFormatted(): number {
        return this.#valueAfterFactoringInAstigmatism / 100;
    }

    // TODO: Write unit tests
    calculateTotalAfterAstigmatism(sphere: number, cylinder: number): number {

        if (cylinder < 50) {
            // Use sphere Only; ignore cylinder
            return sphere;
        } else if (cylinder >= 50 && cylinder <= 150) {
            // Spherical Equivalent

            /**
             *  Getting half of cylinder:
             *  To reduce the chance of obtaining the rounding error, 
             *  mulitply cylinder by 100. Then, divide by 2. Afterwards,
             *  Divide it by 100 again.
             */ 

            // FIXME: Ask client that IF cylinder is a value like 1.25,
            // should the half cylinder be 0.50 OR 0.75.
            const halfOfCylinder: number = ((cylinder * 100) / 2) / 100 

            // Add the sphere AND half of the cylinder together
            const sphericalEquivalent: number = sphere + halfOfCylinder;

            return sphericalEquivalent;

        } else if (cylinder > 150) {
            // Full Spherocylindrical Correct
            // FIXME: Check with client to see if my assumption of calcuation is correction
            // My assumption: You just add the full cylinder to the sphere

            const fullSpherocylinderCorrection: number = sphere + cylinder;

            return fullSpherocylinderCorrection;
        }

        throw new Error("Unable to cacluate total after Astigmatism");
    }

}
