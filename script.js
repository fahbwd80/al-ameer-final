let form = document.getElementById("form");
let lastName = document.getElementById("lastName");
let firstName = document.getElementById("firstName");
let presentAddress = document.getElementById("presentAddress");
let dateOfBirth = document.getElementById("dateOfBirth");
let placeOfBirth = document.getElementById("placeOfBirth");
let email = document.getElementById("email");
let contactName = document.getElementById("contactName");
let fullName = document.getElementById("fullName");
let contactNumber = document.getElementById("contactNumber");
let date = document.getElementById("date");
let time = document.getElementById("time");

function onFormSubmit(event) {
 event.preventDefault() 
 const inputs = [
    lastName,
    firstName,
    presentAddress,
    dateOfBirth,
    placeOfBirth,
    email,
    contactName,
    fullName,
    contactNumber,
    date,
    time
  ];

  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    if (element.value.length === 0) {
      errorMessage(element, "Please complete required field.");
    } else if(element.value.length > 0) {
  
      checkEmail(email);
      checkPhoneNumber(contactName);
      checkPhoneNumberContact(contactNumber);
      
    } else {
      console.log("register");
    }
  }

}

function errorMessage(element, msg) {
  let parent = element.parentElement;
  let smallEl = parent.querySelector("small");
  // parent.className = 'col error'
  parent.classList.add("error");
  smallEl.textContent = msg;
  console.log(smallEl);
}

function checkEmail(em) {
 let emailVal = em.value
 if(emailVal.includes("@")) {
  console.log("yes");
 } else {
  errorMessage(em, "Please enter a valid email.")
 }
}


function checkPhoneNumber(ph) {
 let contactNameVal = ph.value
 if(!isNaN(contactNameVal)) {
  console.log("yes");
 } else {
  errorMessage(ph, "Please enter a valid number.")
 }
}

function checkPhoneNumberContact(ph) {
 let contactNameVal = ph.value;
 if (!isNaN(contactNameVal)) {
   console.log("yes");
 } else {
   errorMessage(ph, "Please enter a valid number.");
 }
}

form.addEventListener("submit", onFormSubmit);
