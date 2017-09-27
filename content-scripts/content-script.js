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
    paragraph.textContent = 'Registration form'; // set text
    paragraph.style.marginBottom = "0";
    paragraph.style.padding = "10px 5px";
    addButtonEvent(); // call the function to bring the click events
}

callFunction(); // call the function to render the Form Generator button

// add generator form
function generateForm() {
     
    const header = document.createElement('header');
    const headerSection = document.querySelector('header');

    const formContainer = document.createElement('form'); // creates the div for our form
    formContainer.setAttribute("id", "container-div"); // sets an ID for for form div
    formContainer.style.width = "15%";
    formContainer.style.margin = "0 auto";
    formContainer.style.textAlign = "center";
    formContainer.style.marginTop = "30px";

    headerSection.appendChild(formContainer); // appends the formContainer in the header section

    const firstNameInput = document.createElement('input'); // creates the first name input
    firstNameInput.setAttribute('id', 'firstName');
    firstNameInput.setAttribute('type', 'text');
    

    const lastNameInput = document.createElement('input'); // creates the last name input
    lastNameInput.setAttribute('id', 'lastName'); // set ID
    lastNameInput.setAttribute('type', 'text'); // set type

    const addressInput = document.createElement('input'); // creates the address input
    addressInput.setAttribute('id', 'address'); // set ID
    addressInput.setAttribute('type', 'text'); // set type

    const passwordInput = document.createElement('input'); // creates the address input
    passwordInput.setAttribute('id', 'password'); // set ID
    passwordInput.setAttribute('type', 'password'); // set type


    const phoneNumberInput = document.createElement('input'); // creates the phone number input
    phoneNumberInput.setAttribute('id', 'phone'); // set ID
    phoneNumberInput.setAttribute('type', 'tel'); // set type

    const commentsTextarea = document.createElement('textarea'); // creates textarea for comments
    commentsTextarea.setAttribute("id", "textarea-comments") // set ID
    commentsTextarea.setAttribute('type', 'text'); // set type

    const button = document.createElement('button'); // creates button
    button.setAttribute("id", "form-button"); // set ID

    const p = document.createElement('p');
    p.setAttribute('id', 'text');
    p.textContent = 'Register';
    p.style.marginBottom = "0";
    button.appendChild(p);
    
    // append every element in formContainer div
    formContainer.appendChild(firstNameInput);
    formContainer.appendChild(lastNameInput);
    formContainer.appendChild(addressInput);
    formContainer.appendChild(passwordInput);
    formContainer.appendChild(phoneNumberInput);
    formContainer.appendChild(commentsTextarea);
    formContainer.appendChild(button);
    addButtonEvent();
}

function removeForm() {
    const elem = document.getElementById('container-div');
    elem.parentNode.removeChild(elem); // remove the form
}

function submitPage() {
    document.getElementById('container-div').submit();
}

function addButtonEvent() {
    const selectButton = document.getElementById('generator-button');
    selectButton.addEventListener("click", generateForm); // call generateForm function

    const selectSpan = document.getElementById('span');
    selectSpan.addEventListener("click", removeForm); // call removeForm function

    const submitButton = document.getElementById('form-button');
    submitButton.addEventListener("click", submitPage); // on click submit page

    // set placeholders for the inputs
    const firstNamePlaceholder = document.getElementById('firstName').setAttribute('placeholder', 'First name');
    const lastNamePlaceholder = document.getElementById('lastName').setAttribute('placeholder', 'Last name');
    const addressPlaceholder = document.getElementById('address').setAttribute('placeholder', 'E-mail address');
    const passowordPlaceholder = document.getElementById('password').setAttribute('placeholder', 'Password');
    const phonePlaceholder = document.getElementById('phone').setAttribute('placeholder', 'Phone number');
    const textArea = document.getElementById('textarea-comments').setAttribute('placeholder', 'Please insert a comment here');
}
