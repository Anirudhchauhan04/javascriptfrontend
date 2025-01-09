document.getElementById("signup").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.username === username)) {
        alert("User already exists");
        return;
    }

    // add new user into the users array created
    users.push({ username, password });

    // update the localstorage's users
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup succesful, new user created!!");
    document.getElementById("signup").reset();
})

document.getElementById("login").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("usernamelog").value;
    const password = document.getElementById("passwordlog").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.username != username)) {
        alert("User does not exist, Kindly SignUp");
        return;
    }

    const user = users.find((user) => user.username === username && user.password === password)
    if (user) {
        alert("logged in succesfully");
    }
    else {
        alert("Wrong password!")
    }
    document.getElementById("login").reset();
})

