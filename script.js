const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password_confirm");
const warningLabel = document.querySelector("#warning_label");

passwordInput.addEventListener('input', passwordCheck);
passwordConfirmInput.addEventListener('input', passwordCheck);

function passwordCheck() {
    if (passwordInput.value == passwordConfirmInput.value && passwordInput.value != "") {
        passwordInput.classList.remove("warning");
        passwordConfirmInput.classList.remove("warning");
        warningLabel.style.visibility = "hidden";
    }
    else {
        passwordInput.classList.add("warning");
        passwordConfirmInput.classList.add("warning");
        warningLabel.style.visibility = "visible";
    }
}
