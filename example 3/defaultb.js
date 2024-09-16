const userForm = document.getElementById('userForm'); // Reference to the form
const usernameInput = document.getElementById('username'); // Reference to the username input
const passwordInput = document.getElementById('password'); // Reference to the password input
const formOutput = document.getElementById('formOutput'); // Reference to the paragraph for displaying output


console.log("Script loaded at: " + new Date().toLocaleTimeString());

userForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission page refresh
  
  const enteredUsername = usernameInput.value; // Get the username value
  const enteredPassword = passwordInput.value; // Get the password value
  formOutput.textContent = 'Username: ' + enteredUsername + ', Password: ' + enteredPassword; // Display form data

});

/*
event.preventDefault(): This method prevents the default action of submitting the form. Normally, 
submitting a form causes the page to reload, but this prevents that behavior, 
allowing us to handle the form data with JavaScript.

Form Elements (usernameInput.value, passwordInput.value): The .value 
property retrieves the values entered in the form fields, allowing 
us to process and display them without reloading the page.

Form Processing: Instead of sending data to a server, we're simply
displaying it on the page. This is useful for client-side validation
or simple feedback.


*/