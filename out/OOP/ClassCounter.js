"use strict";
class Counter {
    static _count = 0;
    static increment() {
        this._count++;
    }
    static getCount() {
        return this._count;
    }
}
Counter.increment();
Counter.increment();
console.log(Counter.getCount());
// Counter.count = 10;
//# sourceMappingURL=ClassCounter.js.map