const bookTitle = document.querySelector("#input-title");
const bookAuthor= document.querySelector("#input-author");
const addBook= document.querySelector("#add-book");
const bookList= document.querySelector("#book-list");
const input = document.querySelectorAll(".input-value");


const Library = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary() {
    const newBook = new Book(bookTitle.value, bookAuthor.value )
    Library.push(newBook);
    console.log(Library)

    const title = bookTitle.value
    const author = bookAuthor.value
    console.log(title, author)
    bookList.innerHTML += 
    `<div>
        <li>"${title}" by ${author}</li>
        <button>Remove</button>
    </div>
    `;
    if(input.value === null){
        console.log('vat')
        input.value === ""

     }
     
}

addBook.addEventListener("click", (e) => {
    addBookToLibrary();
    
    
    console.log('I work')
});



// tableTitle.innerHTML += `${newBook.title}`;
// tableAuthor.innerHTML += `${newBook.author}`;
// function removeFromLibrary{

// }