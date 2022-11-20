function validateForm() {
    let email = document.forms["sign_up"]["email"].value;
    if (email == "") {
        alert("Email field is empty, please fill it out");
        return false;
    }

    let set = document.forms["sign_up"]["set"].value;
    if (set == "") {
        alert("Set password field is empty, please fill it out");
        return false;
    }

    let confirm = document.forms["sign_up"]["confirm"].value;
    if (confirm == "") {
        alert("Confirm password field is empty, please fill it out");
        return false;
    }

    if (set != confirm) {
        alert("Set password and confirm password fields do not match, please enter matching passwords.")
        return false;
    }

    if (email != "" && set != "" && confirm != "") {
        alert("Account successfully created! Thank you for signing up!")
    }
}