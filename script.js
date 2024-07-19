/* Popup prompt when user clicks button to add a new book */
const modal = document.querySelector('#modal');
const closeModal = document.getElementById("cancelBtn").addEventListener('click', () =>{
    modal.close();
});
const openModal = document.getElementById("addBtn").addEventListener("click", () =>{
    modal.showModal();
});
const submitModal = document.getElementById("submitBtn").addEventListener("click", () =>{
    modal.close();
});


const mylibrary = [];

function addPrompt(){
    const t = "";
    const a = "";
    const p = "";
    const r = "";
}

function book(title, author, pages, read){
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;
    this.info = function(){
        console.log(title + " by " + author + ", " + pages + ", " + read + ".");
    }
}

function addBookToLibrary(){
    
}