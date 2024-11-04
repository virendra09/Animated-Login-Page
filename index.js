window.onload = function () {
    const bgImage = document.getElementById("bgImage");
    const logo = document.getElementById("logo");
    const loginForm = document.getElementById("loginForm");
    const formFields = document.querySelectorAll(".form-field");
    const showPasswordBtn = document.querySelector(".show-password");
    const passwordInput = document.querySelector('input[type="password"]');

    // First animation: Background image grows to full screen
    setTimeout(() => {
        bgImage.classList.add('expanded');
    }, 100);

    // Second animation: Logo appears after background is fully open
    setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.width = '150px';
        logo.style.height = '150px';
    }, 3000);

    // Third animation: Logo moves to top-left, background shrinks to the right, and form appears
    setTimeout(() => {
        logo.style.top = '10px';
        logo.style.left = '10px';
        logo.style.transform = 'translate(0, 0)';

        // Background scales to half and moves to the right side
        bgImage.classList.add('shrink');

        // Wait for 1 second after background shrinks, then show form
        setTimeout(() => {
            loginForm.style.display = 'block';
            
            // Animate form fields (text input and button) from bottom to top
            formFields.forEach((field, index) => {
                setTimeout(() => {
                    field.style.transform = 'translateY(0)';  // Bottom to top transition
                    field.style.opacity = '1';
                }, index * 200);  // Delay for each field
            });
        }, 500);  // Wait 1 second before showing the form
    }, 4000);  // Starts after another 1 second (4 seconds total)

    // Show password toggle functionality
    showPasswordBtn.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordBtn.textContent = 'Hide'; // Change text to 'Hide'
        } else {
            passwordInput.type = 'password';
            showPasswordBtn.textContent = 'Show'; // Change text to 'Show'
        }
    });
};
