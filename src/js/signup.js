document.getElementById('signup-form').addEventListener('submit', handleSignup);

function handleSignup(event) {
    event.preventDefault(); // Prevent default form submission

    // Simulate account creation logic (e.g., form validation, API call)
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    if (name && email) {
        // Redirect to the welcome page after successful signup
        window.location.href = '/welcome.html';
    } else {
        alert('Please fill in all required fields.');
    }
}
