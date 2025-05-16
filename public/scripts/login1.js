document.getElementById('current-year').textContent = new Date().getFullYear();

        // Login form submission
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Here you would typically send the credentials to your server
            // For demo purposes, we'll just show an alert and redirect
            alert(`Login successful! Welcome back, ${email}`);
            window.location.href = 'index.html';
        });
        
