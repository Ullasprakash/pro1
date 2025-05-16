document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const errorDiv = document.getElementById('signup-error');
  const successDiv = document.getElementById('signup-success');
  errorDiv.textContent = "";
  successDiv.textContent = "";

  try {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);
    successDiv.textContent = data.message;
    setTimeout(() => location.href = 'login.html', 1500);
  } catch (err) {
    errorDiv.textContent = err.message;
  }
});
