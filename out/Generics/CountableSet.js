"use strict";
class CountedSet {
    items = new Map();
    add(item) {
        const count = this.items.get(item) ?? 0;
        this.items.set(item, count + 1);
    }
    remove(item) {
        const count = this.items.get(item);
        if (count && count > 0) {
            this.items.set(item, count - 1);
        }
    }
    contains(item) {
        const count = this.items.get(item);
        return !!count && count > 0;
    }
    getNumberOfCopies(item) {
        return this.items.get(item) ?? 0;
    }
}
let countedSet = new CountedSet();
countedSet.add("test");
countedSet.add("test");
console.log(countedSet.contains("test"));
console.log(countedSet.getNumberOfCopies("test"));
countedSet.remove("test");
countedSet.remove("test");
countedSet.remove("test");
console.log(countedSet.getNumberOfCopies("test"));
console.log(countedSet.contains("test"));
//# sourceMappingURL=CountableSet.js.map