let form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let course = document.getElementById("course").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name == "" || email == "" || phone == "" ||
        gender == "" || course == "" ||
        password == "" || confirmPassword == "") {

        document.getElementById("message").innerHTML =
            "Please fill all fields.";
        return;
    }

    if (password != confirmPassword) {

        document.getElementById("message").innerHTML =
            "Passwords do not match.";
        return;
    }

    let student = {
        name: name,
        email: email,
        phone: phone,
        gender: gender,
        course: course,
        password: password
    };

    localStorage.setItem("studentData", JSON.stringify(student));

    document.getElementById("message").innerHTML =
        "Registration successful!";

    form.reset();
});