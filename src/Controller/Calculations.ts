/**
 * How much Astigmatism is there? Refer to client's doc "Perimetry-Trial_lens-Guideline.docx" for flowchart picture
 */


// TODO: Write unit tests
/**
 * 
 * @param sphere 
 * @param cylinder 
 * @returns RAW total after factoring in astigmatism
 */
export const calculateTotalAfterAstigmatism = (sphere: number, cylinder: number): number => {

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
    } else {
        throw new Error("Unable to cacluate total after Astigmatism");
    }

}

calculateTotalAfterAstigmatism