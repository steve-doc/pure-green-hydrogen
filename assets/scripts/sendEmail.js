function sendMail(contactForm) {
    emailjs.send("service_0a3s8xf","template_szeqs67", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_tel": contactForm.tel.value,
        "interest": contactForm.interest.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}



{/* <script type="text/javascript">
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_qg9iuvl","template_szeqs67", this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
</script> */}