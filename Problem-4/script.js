document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    // Validate Username
    const username = document.getElementById('username');
    const usernameError = username.nextElementSibling;
    if (username.value.length < 6) {
        usernameError.textContent = "Username must be at least 6 characters.";
        usernameError.style.display = "block";
        username.classList.add('error');
    } else {
        usernameError.textContent = "Username looks good!";
        usernameError.classList.add('valid');
        usernameError.style.display = "block";
        username.classList.remove('error');
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailError = email.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        email.classList.add('error');
    } else {
        emailError.textContent = "Email looks good!";
        emailError.classList.add('valid');
        emailError.style.display = "block";
        email.classList.remove('error');
    }

    // Validate Password
    const password = document.getElementById('password');
    const passwordError = password.nextElementSibling;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password.value)) {
        passwordError.textContent = "Password must be at least 8 characters, include a number, and a capital letter.";
        passwordError.style.display = "block";
        password.classList.add('error');
    } else {
        passwordError.textContent = "Password looks good!";
        passwordError.classList.add('valid');
        passwordError.style.display = "block";
        password.classList.remove('error');
    }
}
