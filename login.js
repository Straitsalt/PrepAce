// Check if already logged in
window.onload = function () {
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "dashboard.html";
    }
};

// Login Function
function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "student" && password === "1234") {

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);

        alert("✅ Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("❌ Invalid Username or Password");

    }
}
