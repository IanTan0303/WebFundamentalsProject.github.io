function validateForm() {
    let email = document.forms["login"]["email"].value;
    if (email == "") {
        alert("Email field is empty, please fill it out");
        return false;
    }

    let password = document.forms["login"]["password"].value;
    if (password == "") {
        alert("Confirm password field is empty, please fill it out");
        return false;
    }

    if (email == "rain@gmail.com" && password == "1234") {
        alert("Log in successful. Redirecting user to account page.");
        document.getElementById("error").innerHTML = "Oops, it looks like something went wrong! We apologize for the inconvenience.";

        document.forms["login"]["email"].value = "";
        password = document.forms["login"]["password"].value = "";
        return false;
    }
    else {
        alert("Username or password is incorrect, please fill in again.");
        return false;
    }
}