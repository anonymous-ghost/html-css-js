document.addEventListener('DOMContentLoaded', function() {
  function validateForm() { 
      let isValid = true;

      // Name validation
      const name = document.getElementById('name');
      const nameError = document.getElementById('name-error');
      if (name.value.trim() === "") {
          nameError.style.display = 'block';
          isValid = false;
      } else {
          nameError.style.display = 'none';
      }

      // Email validation
      const email = document.getElementById('email');
      const emailError = document.getElementById('email-error');
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email.value)) {
          emailError.style.display = 'block';
          isValid = false;
      } else {
          emailError.style.display = 'none';
      }

      // Card number validation
      const card = document.getElementById('card-number');
      const cardError = document.getElementById('card-error');
      const cardPattern = /^\d{13,16}$/; // Перевірка на 13-16 цифр
      if (!cardPattern.test(card.value)) {
          cardError.style.display = 'block';
          isValid = false;
      } else {
          cardError.style.display = 'none';
      }

      // Expiry date validation
      const expiryMonth = document.getElementById('expiry-month');
      const expiryYear = document.getElementById('expiry-year');
      const expiryError = document.getElementById('expiry-error');

      const selectedMonth = parseInt(expiryMonth.value, 10);
      const selectedYear = parseInt(expiryYear.value, 10);
      const currentMonth = new Date().getMonth() + 1; // getMonth is 0-based
      const currentYear = new Date().getFullYear();

      if (expiryMonth.value === "" || expiryYear.value === "" || 
          (selectedYear === currentYear && selectedMonth < currentMonth) || 
          selectedYear < currentYear) {
          expiryError.style.display = 'block';
          isValid = false;
      } else {
          expiryError.style.display = 'none';
      }

      // CVV validation
      const cvv = document.getElementById('cvv');
      const cvvError = document.getElementById('cvv-error');
      const cvvPattern = /^\d{3,4}$/; // Перевірка на 3-4 цифри
      if (!cvvPattern.test(cvv.value)) {
          cvvError.style.display = 'block';
          isValid = false;
      } else {
          cvvError.style.display = 'none';
      }

      return isValid;
  }

  // Обробка події submit для форми реєстрації
  document.querySelector('.payment-form form').addEventListener('submit', function(event) {
      if (!validateForm()) {
          event.preventDefault(); // Блокуємо стандартну поведінку, якщо форма не валідна
      }
  });

  // Обмеження на введення для номеру картки та CVV
  document.getElementById('card-number').addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9]/g, ''); // Залишити лише цифри
  });

  document.getElementById('cvv').addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9]/g, ''); // Залишити лише цифри
  });
});
