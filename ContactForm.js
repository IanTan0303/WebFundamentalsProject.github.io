function validateForm() {
  let name = document.forms["contact"]["name"].value;
  if (name == "") {
    alert("Name field is empty, please fill it out");
    return false;
  }

  let email = document.forms["contact"]["email"].value;
  if (email == "") {
    alert("Email field is empty, please fill it out");
    return false;
  }

  let message = document.forms["contact"]["message"].value;
  if (message == "") {
    alert("Message field is empty, please fill it out");
    return false;
  }

  /*Occurs when all submission fields are filled in*/
  if (name != "" && email != "" && message != "") {
    alert("Message sent. Thank you for contacting us!");
  }
}