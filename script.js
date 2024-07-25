/* Popup prompt when user clicks button to add a new book */
const modal = document.querySelector('#modal');
const closeModal = document.getElementById("cancelBtn").addEventListener('click', () =>{
    modal.close();
});
const openModal = document.getElementById("addBtn").addEventListener("click", () =>{
    modal.showModal();
});
const submitModal = document.getElementById("submitBtn").addEventListener("click", () =>{
    addBookToLibrary();
    modal.close();
});
const bookShelf = document.getElementById("book-shelf");
bookShelf.addEventListener("click", removeBook);

const mylibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    let t = document.getElementById("title").value;
    let a = document.getElementById("author").value;
    let p = document.getElementById("pages").value;
    let test = document.getElementById("read");
    let r = test.checked ? true : false;
    let newBookObj = new Book(t, a, p, r);
    mylibrary.push(newBookObj);   
    visualLibraryUpdate(newBookObj);
}

function visualLibraryUpdate(newBookObj){
    let newBook = document.createElement("div");
    newBook.classList.add("book");
    bookShelf.appendChild(newBook);
    newBook.style.backgroundColor = randomBackgroundColor();

    newBook.innerHTML = `
             <div class="book-title">${newBookObj.title}</div>
                <div class="book-author">${newBookObj.author}</div>
                <div class = "book-bottom">
                    <div class="book-pages">${newBookObj.pages}</div>
                    <label class = "read-label">Read<input class="readBtn" type = "checkbox" ${newBookObj.read ? 'checked' : ''}></label>
                    <button class="book-remove">Remove book</button>
                </div>
            </div>
    `
}

function removeBook(event) {
    if (event.target.classList.contains("book-remove")) {
        let bookToRemove = event.target.closest(".book");
        if (bookToRemove) {
            bookToRemove.remove();
        }
    }
}


function randomBackgroundColor(){
 const randomNum = getRandomInt(6);
switch(randomNum){
    case 0: return "rgb(211, 86, 86)";
    case 1: return "rgb(211, 209, 86)";
    case 2: return "rgb(90, 211, 86)";
    case 3: return "rgb(86, 207, 211)";
    case 4: return "rgb(211, 86, 211)";
    case 5: return "rgb(86, 109, 211)";
}
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

