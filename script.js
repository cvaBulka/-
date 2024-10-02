let registerBtn = document.querySelector('.registration-icon');

// Навішуємо обробник подій на клік кнопки "Реєстрація"
if (registerBtn) {
    registerBtn.addEventListener("click", function () {
        // Переходимо на сторінку реєстрації
        window.location.assign('registration.html');
    });
}

let news = document.querySelector('.button')
news.addEventListener('click', function() {
    alert('Ви підписалися на розсилку новин')
})