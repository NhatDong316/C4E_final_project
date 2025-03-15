document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toggleSignup = document.querySelector('.toggle-signup');
    const backToLogin = document.querySelector('.back-to-login');

    toggleSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    });

    backToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Add your login logic here
        console.log('Login attempt:', { email, password });
    });

    // Signup form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        
        // Create user object
        const user = {
            name,
            email,
            password
        };

        // Get existing users or initialize empty array
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if email already exists
        if (existingUsers.some(u => u.email === email)) {
            alert('Email already registered. Please use a different email.');
            return;
        }

        // Add new user to array
        existingUsers.push(user);

        // Save updated users array to localStorage
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Clear form
        signupForm.reset();

        // Switch to login form
        signupForm.classList.remove('active');
        loginForm.classList.add('active');

        alert('Registration successful! Please login.');
    });
});