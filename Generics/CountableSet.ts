interface CountableSet<T> {
  add(item: T): void;
  remove(item: T): void;
  contains(item: T): boolean;
  getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
  private items: Map<T, number> = new Map();

  add(item: T): void {
    const count = this.items.get(item) ?? 0;
    this.items.set(item, count + 1);
  }

  remove(item: T): void {
    const count = this.items.get(item);
    if (count && count > 0) {
      this.items.set(item, count - 1);
    }
  }

  contains(item: T): boolean {
    const count = this.items.get(item);
    return !!count && count > 0;
  }

  getNumberOfCopies(item: T): number {
    return this.items.get(item) ?? 0;
  }
}

let countedSet = new CountedSet<string>();

countedSet.add("test");

countedSet.add("test");

console.log(countedSet.contains("test"));

console.log(countedSet.getNumberOfCopies("test"));

countedSet.remove("test");

countedSet.remove("test");

countedSet.remove("test");

console.log(countedSet.getNumberOfCopies("test"));

console.log(countedSet.contains("test"));
