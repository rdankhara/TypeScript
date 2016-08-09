"use strict";
var UiversityLibrarian = (function () {
    function UiversityLibrarian(name, email, department) {
        this.name = name;
        this.email = email;
        this.department = department;
        console.log(this.name + " has email " + this.email + " and department " + this.department);
    }
    Object.defineProperty(UiversityLibrarian.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return UiversityLibrarian;
}());
exports.UiversityLibrarian = UiversityLibrarian;
//# sourceMappingURL=classes.js.map