function callFunction() {
    const headerPart = document.createElement('header');

    const headerPosition = document.querySelector('header'); // selects the body section
    const createGeneratorButton = document.createElement('button');
    createGeneratorButton.setAttribute("id", "generator-button");
    headerPosition.appendChild(createGeneratorButton); // append the button in the header

    const span = document.createElement('span');
    headerPosition.appendChild(span); // append the span in the header page section
    span.textContent = "x"; // set text using textContent property
    span.setAttribute("id", "span");

    const paragraph = document.createElement('p');
    createGeneratorButton.appendChild(paragraph); // append the p to the button
    paragraph.textContent = 'Form Generator'; // set text
    addButtonEvent(); // call the function to bring the click events
}

callFunction(); // call the function to render the Form Generator button

// add generator form
function generateForm() {
     
    const header = document.createElement('header');
    const headerSection = document.querySelector('header');

    const formContainer = document.createElement('div'); // creates the div for our form
    formContainer.setAttribute("id", "container-div"); // sets an ID for for form div
    headerSection.appendChild(formContainer); // appends the formContainer in the header section

    const firstNameInput = document.createElement('input'); // creates the first name input
    const lastNameInput = document.createElement('input'); // creates the last name input
    const addressInput = document.createElement('input'); // creates the address input
    const phoneNumberInput = document.createElement('input'); // creates the phone number input
    const commentsTextarea = document.createElement('textarea'); // creates textarea for comments

    const button = document.createElement('button'); // creates button
    button.setAttribute("id", "form-button");

    const p = document.createElement('p');
    p.textContent = 'Submit';
    button.appendChild(p);
    
    // append every element in formContainer div
    formContainer.appendChild(button);
    formContainer.appendChild(firstNameInput);
    formContainer.appendChild(lastNameInput);
    formContainer.appendChild(addressInput);
    formContainer.appendChild(phoneNumberInput);
    formContainer.appendChild(commentsTextarea);
}

function removeForm() {
    const elem = document.getElementById('container-div');
    elem.parentNode.removeChild(elem); // remove the form
}

function addButtonEvent() {
    const selectButton = document.getElementById('generator-button');
    selectButton.addEventListener("click", generateForm); // call generateForm function

    const selectSpan = document.getElementById('span');
    selectSpan.addEventListener("click", removeForm); // call removeForm function
}
