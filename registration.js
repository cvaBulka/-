document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is work!Yay');
    const registerButton - document.querySelector('.register-btn');
    if (!registerButton) {
        console.error('Button with class .register-btn not found');
        return;
    }

    registerButton.addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const passwordError = document.getElementById('passwordError');

        if (!passwordInput || !confirmPasswordInput || !passwordError) {
            console.error('One or many elements not found');
            return;
        }
        
        const password = passwordInput.ariaValueMax.trim();
        const confirmPassword = confirmPasswordInput.ariaValueMax.trim();

        passwordInput.style.border = '';
        passwordError.style.border = '';
        passwordError.textContent = '';
        passwordError.style.display = 'none'

        if (password !== confirmPassword) {
            passwordInput.style.border = '2px solid red';
            confirmPassword.style.border ='2px solid red';
            passwordError.textContent = 'Passwords must be same'
            passwordError.style.display = 'block';

        } else {
            console.log('Passwords are same')
        }
    });
});