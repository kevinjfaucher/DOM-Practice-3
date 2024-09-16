const submitButton = document.getElementById('submitBtn'); // Reference to the button
const outputParagraph = document.getElementById('output'); // Reference to the paragraph
const nameInput = document.getElementById('name'); // Reference to the input field

submitButton.addEventListener('click', function() {
  const userName = nameInput.value; // Get the value of the input field
  outputParagraph.textContent = 'Hello, ' + userName + '!'; // Update the paragraph content
});


/*
document.getElementById('submitBtn'): This method selects an HTML element by its id attribute. 
In this case, we're selecting the button element with id="submitBtn". 
This method returns a reference to the button element, which we store 
in the variable submitButton.

addEventListener('click', function() {...}): The addEventListener 
method attaches an event handler to the submitButton element. 

In this case, we're listening for the click event.
 When the button is clicked, the provided function is executed.

nameInput.value: The .value property is used to get
 the current value of an input field. It retrieves whatever 
 the user typed into the input field with id="name".

outputParagraph.textContent: The .textContent property is used to set
 or get the text content of an element. Here, we set the text of the 
 paragraph with id="output" to display a personalized greeting using 
 the value retrieved from the input field.

*/