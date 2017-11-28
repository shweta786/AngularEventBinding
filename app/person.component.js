"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var student_1 = require('./student');
var employee_1 = require('./employee');
var PersonComponent = (function () {
    function PersonComponent() {
        this.updateEmployee = new core_1.EventEmitter();
        this.employee = new employee_1.Employee();
    }
    PersonComponent.prototype.update = function () {
        this.employee.fname = this.student.fname;
        this.employee.lname = this.student.lname;
        this.updateEmployee.emit(this.employee);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', student_1.Student)
    ], PersonComponent.prototype, "student", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PersonComponent.prototype, "updateEmployee", void 0);
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'person-app',
            templateUrl: 'app/person.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map