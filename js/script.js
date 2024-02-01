"use strict";
function validateForm() {
    var nameValue = document.getElementById("nameInput").value;
    var emailValue = document.getElementById("emailInput").value;
    var optionValue = document.getElementById("selectOption").value;


    if (nameValue.trim() === "" && emailValue.trim() === "" && optionValue === "") {
        alert("Fill in the blank!");
        return false;
    }
    if (nameValue.trim() === "") {
        alert("Enter your name!");
        return false;
    }

    if (emailValue.trim() === "" || !isValidEmail(emailValue)) {
        alert("Enter your email address!");
        return false;
    }

    if (optionValue === "") {
        alert("Select an option!");
        return false;
    }

    alert("Data has been received, Thank you!");
    return true;
}

function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}