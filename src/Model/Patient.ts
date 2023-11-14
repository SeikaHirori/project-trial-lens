class Patient {
    _sphere: number; // This is also known as DistanceRx
    _cylinder: number;
    _axis: number;
    _age: number;

    get sphereRaw() {
        return this._sphere
    }

    get sphereFormatted() {
        return this._sphere / 100;
    }
}
