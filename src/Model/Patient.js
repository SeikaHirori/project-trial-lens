var Patient = /** @class */ (function () {
    function Patient() {
    }
    Object.defineProperty(Patient.prototype, "sphereRaw", {
        get: function () {
            return this._sphere;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "sphereFormatted", {
        get: function () {
            return this._sphere / 100;
        },
        enumerable: false,
        configurable: true
    });
    return Patient;
}());
//# sourceMappingURL=Patient.js.map