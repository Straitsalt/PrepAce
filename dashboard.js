// Check login
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// Logout
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "login.html";
}
