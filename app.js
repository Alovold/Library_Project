

// PROJECT Section
console.log("PROJECT:\n==========\n");

let bookTable = document.querySelector("#table");
let bookSubmit = document.querySelector("#submitBtn");
let titleInput = document.querySelector("#titleInput");
let authorInput = document.querySelector("#authorInput");
let readInput = document.querySelector("#readInput");

class Book{
    constructor(){
        this.id = 0;
        this.title = "";
        this.author = "";
        this.read = false;
    }
}

class Library{
    constructor(){
        this.bookCount = 0;
        this.books = [];
    }
    markRead(checkbox, id){
        this.books.forEach((book) => {
            if (book.id == id){
                book.read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        });
    }
    addBook(event){
        event.preventDefault();
        let newBook = new Book;
        newBook.title = titleInput.value;
        newBook.author = authorInput.value;
        newBook.read = readInput.value;
        let newRow = document.createElement("tr");
        let titleCell = document.createElement("td");
        let authorCell = document.createElement("td");
        let readCell = document.createElement("td");
        titleCell.textContent = newBook.title;
        authorCell.textContent = newBook.author;
        readCell.textContent = newBook.read;
        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(readCell);
        bookTable.appendChild(newRow);
        this.bookCount += 1;
    }
}

let currentLibrary = new Library;
bookSubmit.addEventListener("click", currentLibrary.addBook)