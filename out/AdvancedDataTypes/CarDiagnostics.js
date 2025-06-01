"use strict";
function carDiagnostics(carBody, tires, engine) {
    console.log(carBody.runDiagnostics());
    console.log(tires.runDiagnostics());
    console.log(engine.runDiagnostics());
}
carDiagnostics({
    material: "aluminum",
    state: "scratched",
    partName: "Car Body",
    runDiagnostics,
}, {
    airPressure: 30,
    condition: "needs change",
    partName: "Tires",
    runDiagnostics,
}, { horsepower: 300, oilDensity: 780, partName: "Engine", runDiagnostics });
function runDiagnostics() {
    return "diagnostic started!";
}
//# sourceMappingURL=CarDiagnostics.js.map