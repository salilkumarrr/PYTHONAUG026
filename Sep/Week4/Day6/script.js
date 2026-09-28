let form = document.getElementById("studentForm");

let nameInput = document.getElementById("name");

nameInput.addEventListener("input", function() {
    console.log("User is typing");
});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;}