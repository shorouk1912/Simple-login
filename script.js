function validateLogin(event) {
    event.preventDefault();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    if (username === "") {
    alert("Username cannot be empty!");
    return;
    }
    if (password === "") {
    alert("Password cannot be empty!");
    return;
    }
    if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return;
    }
    alert("Validation successful!");
}
