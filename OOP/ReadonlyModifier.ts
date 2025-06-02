class Book{
    readonly title:string;
    readonly author:string;

    constructor(_title: string, _author: string){
        this.title = _title;
        this.author = _author;
    }
}

const book = new Book("1984", "George Orwell");

console.log(`${book.title} by ${book.author}`)