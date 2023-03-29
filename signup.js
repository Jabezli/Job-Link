// Wait until the page has loaded
window.addEventListener('load', () => {

    // Center the login or signup box
    const box = document.querySelector('.login-box, .signup-box');
    if (box) {
      box.style.position = 'absolute';
      box.style.top = '50%';
      box.style.left = '50%';
      box.style.transform = 'translate(-50%, -50%)';
    }
  
    // Add shadow to the box
    const shadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
    if (box) {
      box.style.boxShadow = shadow;
    }
  
    // Style the navigation bar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.backgroundColor = '#F7F7F7';
      navbar.style.borderBottom = '1px solid #DDD';
      navbar.style.boxShadow = shadow;
    }
  
    // Style the form inputs and buttons
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    if (inputs) {
      inputs.forEach(input => {
        input.style.backgroundColor = '#F8F8F8';
        input.style.border = 'none';
        input.style.borderRadius = '0.5rem';
        input.style.padding = '0.5rem';
        input.style.marginBottom = '1rem';
        input.style.width = '100%';
        input.style.boxShadow = shadow;
      });
    }
  
    const buttons = document.querySelectorAll('button[type="submit"]');
    if (buttons) {
      buttons.forEach(button => {
        button.style.backgroundColor = '#377dff';
        button.style.border = 'none';
        button.style.borderRadius = '0.5rem';
        button.style.padding = '0.5rem 1rem';
        button.style.color = '#FFF';
        button.style.boxShadow = shadow;
      });
    }
  
    // Get the form element
    const form = document.querySelector("form");
  
    // Get the password and confirm password input fields
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
  
    // Get the error message element
    const error = document.getElementById("error");
  
    // Hide the error message initially
    error.style.display = "none";
  
    // Add event listener to form submit
    form.addEventListener("submit", (event) => {
      // Prevent the default behavior
      event.preventDefault();
  
      // Check if password and confirm password fields match
      if (password.value !== confirmPassword.value) {
        // If they don't match, display an error message to the user
        error.textContent = "Passwords do not match";
        error.style.display = "block";
      } else {
        // If they match, clear the error message and submit the form
        error.textContent = "";
        error.style.display = "none";
        form.submit();
      }
    });
  });
  