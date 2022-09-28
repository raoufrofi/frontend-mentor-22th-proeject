const input = document.getElementById("input");
const error = document.querySelector(".error");
const img = error.nextElementSibling;
const send = img.nextElementSibling;

// Button Click
send.addEventListener("click", () => email());

// Enter Press
input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        email();
    }
})



let email = () => {
    let val = input.value;
    let arr = val.split("@");

    // Checking
    if (checkMail(arr) === false) {
        throwError();
    } else if (checkMail(arr) === true) {
        removeError();
    }
}

function checkMail(arr) {
    if (arr[arr.length - 1] === "gmail.com" || arr[arr.length - 1] === "email.com") {
        return true;
    } else {
        return false;
    }
}

function throwError() {
    input.style.borderColor = "hsl(0, 93%, 68%)";
    input.style.borderWidth = "2px";
    error.innerHTML = "Please enter a valid email address";
    img.setAttribute("src", "images/icon-error.svg");
}
function removeError() {
    input.style.borderColor = "hsl(0, 36%, 70%)";
    input.style.borderWidth = "1px";
    error.innerHTML = "";
    img.setAttribute("src", "");
}