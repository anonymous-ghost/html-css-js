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
    if (!card.value.match(/^\d{13,16}$/)) {
      cardError.style.display = 'block';
      isValid = false;
    } else {
      cardError.style.display = 'none';
    }
  
    // Expiry date validation
    const expiryMonth = document.getElementById('expiry-month');
    const expiryYear = document.getElementById('expiry-year');
    const expiryError = document.getElementById('expiry-error');
    if (expiryMonth.value === "" || expiryYear.value === "") {
      expiryError.style.display = 'block';
      isValid = false;
    } else {
      expiryError.style.display = 'none';
    }
  
    // CVV validation
    const cvv = document.getElementById('cvv');
    const cvvError = document.getElementById('cvv-error');
    if (!cvv.value.match(/^\d{3,4}$/)) {
      cvvError.style.display = 'block';
      isValid = false;
    } else {
      cvvError.style.display = 'none';
    }
  
    return isValid;
  }
  