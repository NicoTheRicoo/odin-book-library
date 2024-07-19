/* Popup prompt when user clicks button to add a new book */
const modal = document.querySelector('#modal');
const closeModal = document.getElementById("cancelBtn").addEventListener('click', () =>{
    modal.close();
});
const openModal = document.getElementById("addBtn").addEventListener("click", () =>{
    modal.showModal();
});
const submitModal = document.getElementById("submitBtn").addEventListener("click", () =>{
    addPrompt();
    modal.close();
});


const mylibrary = [];

function book(title, author, pages, read){
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
    let r = "";
    if (test.checked == true){
        r = "read";
    }else{
        r = "not read"
    }
    
    mylibrary.push(new book(t, a, p, r));   
    visualLibraryUpdate();
}

function visualLibraryUpdate(){
    
}