
const form = document.querySelector('form');
      
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = form.name.value;

  const phone = form.phone.value;
  
  // Name validation (min 2 chars, max 30 chars, only letters and spaces)
  const nameRegex = new RegExp('^[a-zA-Z ]{2,30}$');
  if (!nameRegex.test(name)) {
    form.name.nextElementSibling.innerText = 'Invalid name';
  } else {
    form.name.nextElementSibling.innerText = '';
  }
  
  
  // Phone validation (must be 10 digits)
  const phoneRegex = new RegExp('^[0-9]{10}$');
  if (!phoneRegex.test(phone)) {
    form.phone.nextElementSibling.innerText = 'Invalid phone number';
  } else {
    form.phone.nextElementSibling.innerText = '';
  }
  
  // Submit form if no errors
  if (document.querySelectorAll('.error').every(el => el.innerText === '')) {
    form.submit();
  }
});