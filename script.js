function login(form) {
    var un = form.Username.value;
    var pw = form.Password.value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("post", "Login", true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            loginResults(xmlhttp.responseText, form);
        }
    }
}
function storeData(form) {
    var data = {
        email: form.Email.value,
        username: form.Username.value,
        password: form.Password.value
    };
    localStorage.setItem('userData', JSON.stringify(data));
}
function displayEnteredData(form) {
    var email = form.Email.value;
    var username = form.Username.value;
    var password = form.Password.value;
    var enteredData = document.getElementById("EnteredData");
    enteredData.innerHTML = "Email: " + email + "<br>Username: " +
        username + "<br>Password: " + password;
}
window.addEventListener("load", function () {
    var loginForm = document.getElementById("LoginForm");
    window.addEventListener("submit", function () {
        displayEnteredData(loginForm);
        login(loginForm);
        storeData(loginForm);
    });
});