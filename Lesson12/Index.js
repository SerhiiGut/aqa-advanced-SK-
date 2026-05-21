import Book from "./Book.js";
import EBook from "./EBook.js";

const book = new Book(
    "New book",
    "new author",
    2000
);

const ebook = new EBook(
    "New Book2",
    "new author",
    2001,
    "pdf"
);


console.log(book.title);
console.log(ebook.fileFormat);


book.title = "Animal Farm";
ebook.fileFormat = "epub";

console.log(book.title);
console.log(ebook.fileFormat);

book.printInfo();
ebook.printInfo();