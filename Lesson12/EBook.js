import Book from "./Book.js";



class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);

        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const formats = [
            "PDF",
            "EPUB",
            "MOBI",
            "FB2"
        ];

        if (
            typeof value !== "string" ||
            !formats.includes(
                value.toUpperCase()
            )
        ) {
            throw new Error(
                "Недопустимий формат файлу"
            );
        }

        this._fileFormat =
            value.toUpperCase();
    }

printInfo() {
console.log(`
Назва: ${this.title}
Автор: ${this.author}
Рік видання: ${this.year}
Формат файлу: ${this.fileFormat}`);
    }
}
const ebook = new EBook(
    "Ebook1",
    "Ebook Author",
    2026,
    "PDF"
)
ebook.printInfo()

export default EBook