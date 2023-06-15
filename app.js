

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
    markRead(checkbox){
        
        //for(let book of currentLibrary.books){
        //currentLibrary.books.forOf((book) => {
            // if (book.id == checkbox.id){
                console.log(checkbox);
                //book.read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            // }
        //};
    }
    addBook(event){
        event.preventDefault();
        let newBook = new Book;
        newBook.title = titleInput.value;
        newBook.author = authorInput.value;
        newBook.read = readInput.checked;
        newBook.id = currentLibrary.bookCount + 1;
        let newRow = document.createElement("tr");
        let titleCell = document.createElement("td");
        let authorCell = document.createElement("td");
        let readCell = document.createElement("input");
        readCell.type = "checkbox";
        readCell.id = newBook.id;
        readCell.checked = newBook.read;
        readCell.disabled = newBook.read;
        titleCell.textContent = newBook.title;
        authorCell.textContent = newBook.author;
        readCell.addEventListener("click", ()=> currentLibrary.markRead(readCell))
        
        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(readCell);
        bookTable.appendChild(newRow);
        currentLibrary.bookCount += 1;
    }
}

let currentLibrary = new Library;
bookSubmit.addEventListener("submit", currentLibrary.addBook)