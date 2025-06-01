type CarPart<T> = T & {
  partName: string;
  runDiagnostics(): string;
};

function carDiagnostics(
  carBody: CarPart<{ material: string; state: string }>,
  tires: CarPart<{ airPressure: number; condition: string }>,
  engine: CarPart<{ horsepower: number; oilDensity: number }>
): void {
  console.log(carBody.runDiagnostics());
  console.log(tires.runDiagnostics());
  console.log(engine.runDiagnostics());
}

carDiagnostics(
  {
    material: "aluminum",
    state: "scratched",
    partName: "Car Body",
    runDiagnostics,
  },

  {
    airPressure: 30,
    condition: "needs change",
    partName: "Tires",
    runDiagnostics,
  },

  { horsepower: 300, oilDensity: 780, partName: "Engine", runDiagnostics }
);

function runDiagnostics(): string{

    return "diagnostic started!"
}