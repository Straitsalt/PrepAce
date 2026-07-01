function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "student" && password === "1234") {

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Username or Password");

    }

}
