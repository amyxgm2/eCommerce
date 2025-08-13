const emailAddress = document.getElementById("emailAddress");
const submitButton = document.getElementById("submitButton");
const contactForm = document.querySelector('[data-form]')

const emailExtensions = [".com", ".org", ".edu", ".gov", ".net", ".co"];
const emailDomains = ["@gmail", "@yahoo", "@outlook", "@aol", "@icloud", "@hotmail"];

contactForm.addEventListener('submit', function(event) {
    
        event.preventDefault(); // Preveconsole.log('submitted')

    const inputValue = emailAddress.value.toLowerCase();
    let validEmail = false;

    for(let i=0; i < emailExtensions.length && i < emailDomains.length; i++){
        if(inputValue.includes(emailDomains[i]) && inputValue.endsWith(emailExtensions[i])) {
            validEmail = true;
            break;
        }
    }
    
    const statusCheck = document.getElementById("statusCheck");

    if (!validEmail) {
            statusCheck.textContent = "Invalid email address";
    } else{
            statusCheck.textContent = "";
    }
});