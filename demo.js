
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("formSuccess");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default submission
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            successMessage.style.display = "block"; // show message
            form.reset(); // clear form inputs

            // hide message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    })
    .catch(error => alert("Oops! There was a problem submitting your form."));
});

