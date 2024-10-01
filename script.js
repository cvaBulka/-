let registerBtn = qerySelector('.registration-icon');

if (registerBtn) {
    registerBtn.addEventListener('click', function () {
        window.location.assign('registration.html');
    });
}
