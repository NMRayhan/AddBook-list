const bookTitle = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const publishedYear = document.querySelector('#publishedYear');
const Edition = document.querySelector('#Edition');
const ReqEmail = document.querySelector('#ReqEmail');
const addBookBtn = document.querySelector('#addBookBtn');
const bookList = document.querySelector('#bookList');

addBookBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (bookTitle.value == '' && authorName.value == '' && publishedYear.value == '' && Edition.value == '' && ReqEmail.value == '') {
        alert("Vai Sob gula Input fillup koren");
    } else {
        const newRow = document.createElement('tr');

        // title 
        const newTitle = document.createElement('td');
        newTitle.innerHTML = bookTitle.value;
        newRow.appendChild(newTitle);

        // author 
        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = authorName.value;
        newRow.appendChild(newAuthor);

        // publish Year
        const newPublishedYear = document.createElement('td');
        newPublishedYear.innerHTML = publishedYear.value;
        newRow.appendChild(newPublishedYear);

        // Edition 
        const newEdition = document.createElement('td');
        newEdition.innerHTML = Edition.value;
        newRow.appendChild(newEdition);

        // req Email 
        const newEmail = document.createElement('td');
        newEmail.innerHTML = ReqEmail.value;
        newRow.appendChild(newEmail);

        bookList.appendChild(newRow);
    }
})