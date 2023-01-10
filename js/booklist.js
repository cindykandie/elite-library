const bookTitle = document.querySelector("#input-title");
const bookAuthor= document.querySelector("#input-author");
const addBook= document.querySelector("#add-book");
const bookList= document.querySelector("#book-list");

let Library = [];

class Book{
    constructor(title, author) {
    this.title = title;
    this.author = author;
 }
 addBookToLibrary() {
  
    if (bookTitle.value !== '' && bookAuthor.value !== '') {
      Library.push(new Book(bookTitle.value, bookAuthor.value));
    } else {
      bookList.appendChild();
    }
  }


 displayBooks(book) {
    const row = document.createElement('div');
    const titleAuthor = document.createElement('li');

    titleAuthor.innerHTML = `"${book.title}" by ${book.author}`

    const removeBtn = document.createElement('button');

    removeBtn.classList.add('remove-btn');
    removeBtn.type = 'submit';
    removeBtn.innerText = 'Remove';

    row.appendChild(titleAuthor);
    row.appendChild(removeBtn);
    bookList.appendChild(row);
    if (localStorage.getItem('libraryLists')) {
      JSON.parse(localStorage.getItem('libraryLists')).forEach((book) => {
        displayBooks(book);
        Library.push(book);
      });
    }
  }
  
}
let obj = new Book(bookTitle.value, bookAuthor.value)
addBook.addEventListener("click", (e) => {
    e.preventDefault()
    obj.addBookToLibrary();
    obj.displayBooks(Library[Library.length - 1]);
    localStorage.setItem('libraryLists', JSON.stringify(Library));
    bookTitle.value = '';
    bookAuthor.value = '';
    console.log('I work')
});


// add the remove method
bookList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      e.target.parentElement.remove();
      Library = Library.filter(({ title }) => e.target.parentElement.firstChild.innerText
      !== title);
      localStorage.setItem('libraryLists', JSON.stringify(Library));
    }
  });


