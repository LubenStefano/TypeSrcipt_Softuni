"use strict";
class Calculator {
    calculate(method, a, b, c, d) {
        let result = 0;
        switch (method) {
            case "power":
                if (b !== undefined) {
                    result = Math.pow(a, b);
                }
                break;
            case "log":
                if (b !== undefined && a > 0 && b > 0) {
                    result = Math.log(a) / Math.log(b);
                }
                break;
            case "add":
                result = a;
                if (b !== undefined)
                    result += b;
                if (c !== undefined)
                    result += c;
                if (d !== undefined)
                    result += d;
                break;
            case "subtract":
                result = a;
                if (b !== undefined)
                    result -= b;
                if (c !== undefined)
                    result -= c;
                if (d !== undefined)
                    result -= d;
                break;
            case "multiply":
                result = a;
                if (b !== undefined)
                    result *= b;
                if (c !== undefined)
                    result *= c;
                if (d !== undefined)
                    result *= d;
                break;
            case "divide":
                result = a;
                if (b !== undefined && b !== 0)
                    result /= b;
                if (c !== undefined && c !== 0)
                    result /= c;
                if (d !== undefined && d !== 0)
                    result /= d;
                break;
        }
        return result;
    }
}
const calc = new Calculator();
console.log(calc.calculate('power', 2, 3));
console.log(calc.calculate('power', 4, 1 / 2));
console.log(calc.calculate('log', 8, 2));
console.log(calc.calculate('add', 10, 5));
console.log(calc.calculate('add', 10, 5, 3));
console.log(calc.calculate('subtract', 10, 5));
console.log(calc.calculate('multiply', 2, 3, 4));
console.log(calc.calculate('divide', 100, 5, 2, 2));
//# sourceMappingURL=OverloadedCalculator.js.map