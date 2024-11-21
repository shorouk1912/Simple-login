function loginUser(event) {
  event.preventDefault(); 
  const usernameInput = document.getElementById("username").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {});

  if (
    cookies.username === usernameInput &&
    cookies.password === passwordInput
  ) {
    alert("Login successful!");
    window.location.href = "products.html"; //to products page
  } else {
    alert("Invalid username or password.");
  }
}
