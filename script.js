let validUsername = "user";
let validPassword = "12345";
function validateLogin() {
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    if (username === validUsername && password === validPassword) {
        let message = document.getElementById("message");
        message.style.color = "green";
        message.textContent = "Login successful! Welcome";
    } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password. Please try again.";
    }
}
