export class Patient {
    sphere: number; // This is also known as DistanceRx
    cylinder: number;
    axis: number;
    age: number;

    constructor(sphere: number, cylinder: number, axis: number, age: number) {
        this.sphere = sphere;
        this.cylinder = cylinder; // This is also known as Cylinder
        this.axis = axis;
        this.age = age;
    }

    // /**
    //  * @returns {number} - raw, unformatted value
    //  */
    // get sphere(): number {
    //     return this.#sphere;
    // }

    /**
     * @returns {number} - formatted into decimal
     */
    get sphereFormatted(): number {
        return this.sphere / 100;
    }

    // /**
    //  * @returns {number} - raw, unformatted value
    //  */
    // get cylinder(): number {
    //     return this.cylinder;
    // }

    /**
     * @returns {number} - formatted into decimal
     */
    get cylinderFormatted(): number {
        return this.cylinder / 100;
    }

    // /**
    //  * @returns {number}
    //  */
    // get axis(): number {
    //     return this.axis;
    // }

    // /**
    //  * @returns {number}
    //  */
    // get age(): number {
    //     return this.age;
    // }

    equals(that: Patient): boolean {
        return this.sphere === that.sphere
            && this.cylinder === that.cylinder
            && this.axis === that.axis
            && this.age === that.age;
    }

}
