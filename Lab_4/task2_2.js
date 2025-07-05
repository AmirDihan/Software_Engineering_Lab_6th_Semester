class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
        Object.freeze(this); //Book class (immutable using Object.freeze)
    }
    getDetails() {
        return `${this.id}: "${this.title}" by ${this.author}`;
    }
}
class Library {     //Library class
    constructor() {
        this.books = [];// Array to store Book objects
    }
    addBook(id, title, author) {
        const newBook = new Book(id, title, author);
        this.books.push(newBook);
        console.log(`Book added: ${newBook.getDetails()}`);
    }
    searchBook(query) {
        if(this.books.length==0)
            console.log("No Books available");
        for (const book of this.books) {
            if(book.title==query){
                console.log(`Book found ${book.id}: ${book.title} by ${book.author}`);
                return;
            }
        }
        console.log(`Book not found ${query}`);
    }
    displayAllBooks() {
        console.log("All Books in Library:");
        if (this.books.length === 0) {
            console.log("Library is empty.");
        } else {
            this.books.forEach(book => {
                console.log(`- ${book.getDetails()}`);
            });
        }
    }
}
const myLibrary = new Library();
myLibrary.addBook("B001", "1984", "Amir Hossan Dihan");
myLibrary.addBook("B002", "Brave New World", "Amzad Hossain Evan");
myLibrary.addBook("B003", "Fahrenheit 451", "Ahanaf Tahmid");
console.log("\n");
myLibrary.searchBook("1984");
console.log("\n");
myLibrary.searchBook("1985");
console.log("\n");
myLibrary.displayAllBooks();
