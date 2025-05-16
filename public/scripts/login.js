// public/scripts/login.js

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const errorDiv = document.getElementById('login-error');
  const successDiv = document.getElementById('login-success');

  errorDiv.textContent = "";
  errorDiv.style.display = 'none';
  successDiv.textContent = "";
  successDiv.style.display = 'none';

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    // 🔍 Debug raw response in console
    const text = await response.text();
    console.log("🔍 Raw server response:", text);

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      throw new Error("Server response is not valid JSON");
    }

    if (!response.ok) throw new Error(result.message || "Login failed");

    // ✅ Save user to localStorage
    localStorage.setItem("nurturenestUser", JSON.stringify(result.user));

    successDiv.textContent = result.message;
    successDiv.style.display = 'block';

    setTimeout(() => location.href = 'post.html', 1000);

  } catch (err) {
    errorDiv.textContent = err.message;
    errorDiv.style.display = 'block';
  }
});
