class Patient {
    _sphere: number; // This is also known as DistanceRx
    _cylinder: number;
    _axis: number;
    _age: number;

    constructor(sphere: number, cylinder: number, axis: number, age: number) {
        this._sphere = sphere;
        this._cylinder = cylinder;
        this._axis = axis;
        this._age = age;
    }

    get sphereRaw() {
        return this._sphere
    }

    get sphereFormatted() {
        return this._sphere / 100;
    }
}
