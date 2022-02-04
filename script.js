const bookName = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const publishedYear = document.querySelector('#publishedYear');
const Edition = document.querySelector('#Edition');
const ReqEmail = document.querySelector('#ReqEmail');
const addBookBtn = document.querySelector('#addBookBtn');
const bookList = document.querySelector('#bookList');

addBookBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e);
})