document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript працює!");
 
    const registerButton = document.querySelector(".register-btn");
    if (!registerButton) {
      console.error("Кнопка з класом .register-btn не знайдена.");
      return;
    }
 
    registerButton.addEventListener("click", function() {
      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("confirmPassword");
      const passwordError = document.getElementById("passwordError");
 
      if (!passwordInput || !confirmPasswordInput || !passwordError) {
        console.error("Один або декілька елементів не знайдені.");
        return;
      }
 
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
 
      // Очищення попередніх помилок
      passwordInput.style.border = "";
      confirmPasswordInput.style.border = "";
      passwordError.textContent = "";
      passwordError.style.display = "none";
 
      // Перевірка паролів
      if (password !== confirmPassword) {
        passwordInput.style.border = "2px solid red";
        confirmPasswordInput.style.border = "2px solid red";
        passwordError.textContent = "Паролі мають співпадати";
        passwordError.style.display = "block";
      } else {
        console.log("Паролі співпадають");
      }
    });
  });
 



