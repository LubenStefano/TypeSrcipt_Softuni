"use strict";
class Book {
    title;
    author;
    constructor(_title, _author) {
        this.title = _title;
        this.author = _author;
    }
}
const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
//# sourceMappingURL=ReadonlyModifier.js.map