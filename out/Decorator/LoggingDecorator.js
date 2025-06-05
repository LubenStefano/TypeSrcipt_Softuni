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
// log.ts
function log(target, propertyName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Function '${propertyName}' called with arguments: ${args.join(', ')}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
// person.ts
class Personn {
    fName;
    lName;
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    static getFullName(fName, lName) {
        return `${fName} ${lName}`;
    }
}
__decorate([
    log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], Personn, "getFullName", null);
// Example Usage:
let personn = new Personn('John', 'Does');
Personn.getFullName(personn.fName, personn.lName);
Personn.getFullName('Benny', 'Tres');
//# sourceMappingURL=LoggingDecorator.js.map