const contact = document.querySelector("#contact");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const personal = document.querySelector("#personalTrue");
const term = document.querySelector("#termsNConditions");


contact.addEventListener ("submit", function(event) {
    alert("Thank you for your submission! I'll be in contact soon.");
    console.log("name", name.value);
    console.log("email", email.value);
    console.log("subject", subject.value);
    console.log("message", message.value);
    if (personal.checked === true) {
        console.log("Personal Details", "Yes");
    } else {
        console.log("Personal Details", "No");
    }
    if (term.checked === true) {
        console.log("Terms and Conditions", "Yes");
    } else {
        console.log("Terms and Conditions", "No");
    }
    event.preventDefault();
})



