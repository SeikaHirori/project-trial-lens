export class Patient {
    #sphere: number; // This is also known as DistanceRx
    #cylinder: number;
    #axis: number;
    #age: number;

    #valueAfterFactoringAstigmatism: number; // New DistanceRx after calculations

    constructor(sphere: number, cylinder: number, axis: number, age: number) {
        this.#sphere = sphere;
        this.#cylinder = cylinder; // This is also known as Cylinder
        this.#axis = axis;
        this.#age = age;
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



}
