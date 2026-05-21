class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("тут має бути назва");
        }

        this._title = value;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("тут має бути автор");
        }

        this._author = value;
    }

    set year(value) {

        if (
            typeof value !== "number" ||
            value <= 0 
        ) {
            throw new Error("тут має бути рік");
        }

        this._year = value;
    }

printInfo() {
    console.log(`
Назва: ${this.title}
Автор: ${this.author}
Рік видання: ${this.year}`);
}
}

const book1 = new Book(
    "Title1",
    "Author1",
    2026
);

const book2 = new Book(
    "Title2",
    "Author2",
    2027
);


book1.printInfo();
book2.printInfo();

export default Book