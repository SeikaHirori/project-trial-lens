/**
 * How much Astigmatism is there? Refer to client's doc "Perimetry-Trial_lens-Guideline.docx" for flowchart picture
 */


// TODO: Write unit tests
/**
 * Determine route based on how much astigmatism there is.
 * 
 * Using doc "Perimetry-Trial-Lens-Guideline.docx", this is
 *  based on blue box "How much astigmatism is there?"
 * 
 * @param sphere 
 * @param cylinder 
 * @returns RAW total after factoring in astigmatism
 */
export const calculateTotalAfterAstigmatism = (sphere: number, cylinder: number): number => {
    
    // FIXME: Change this later so conditions just uses negative values
    // instead of having to to do absolute value.
    // Currently too tired to reverse conditions.
    const absCylinder = Math.abs(cylinder);
    const cyl = absCylinder;    // Use this to handle condition for now.

    if (cyl < 50) {
        // Use sphere Only; ignore cylinder
        return sphere;
    } else if (cyl >= 50 && cyl <= 100) {
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

    } else if (cyl > 100) {
        // Full Spherocylindrical Correct
        // FIXME: Check with client to see if my assumption of calcuation is correction
        // My assumption: You just add the full cylinder to the sphere

        const fullSpherocylinderCorrection: number = sphere + cylinder;

        return fullSpherocylinderCorrection;
    } else {
        console.error("ERROR: Unable to cacluate total after Astigmatism");
    }

}

