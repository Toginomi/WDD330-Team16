document.getElementById('avatar').addEventListener('change', function (event) {
    const preview = document.getElementById('avatar-preview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Avatar Preview">`;
        };
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '<p>No image selected</p>';
    }
});

document.getElementById('signup-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    };

    try {
        const response = await fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            // Redirect to the welcome page after successful account creation
            window.location.href = 'welcome.html';
        } else {
            const errorData = await response.json();
            console.error('Server Error:', errorData);
            alert(`Error: ${errorData.message || 'Something went wrong. Please try again.'}`);
        }
    } catch (error) {
        console.error('Network Error:', error);
        alert('A network error occurred. Please check your connection and try again.');
    }
});
