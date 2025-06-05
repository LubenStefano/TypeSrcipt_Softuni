// log.ts
function log(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(
      `Function '${propertyName}' called with arguments: ${args.join(', ')}`
    );
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

// person.ts
class Personn {
  public fName: string;
  public lName: string;

  constructor(fName: string, lName: string) {
    this.fName = fName;
    this.lName = lName;
  }

  @log
  static getFullName(fName: string, lName: string): string {
    return `${fName} ${lName}`;
  }
}

// Example Usage:
let personn = new Personn('John', 'Does');
Personn.getFullName(personn.fName, personn.lName);
Personn.getFullName('Benny', 'Tres');