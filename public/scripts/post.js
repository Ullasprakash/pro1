// Core functionality: Tab switching
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');

tabTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    // Remove all actives
    tabTriggers.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    // Activate current
    trigger.classList.add('active');
    const tabId = trigger.getAttribute('data-tab');
    document.getElementById(`${tabId}-tab`).classList.add('active');
  });
});

// New code starts here

// Optional: Automatically activate tab via hash in URL (e.g. #infant)
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const trigger = document.querySelector(`.tab-trigger[data-tab="${hash}"]`);
    const content = document.getElementById(`${hash}-tab`);
    if (trigger && content) {
      tabTriggers.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      trigger.classList.add('active');
      content.classList.add('active');
    }
  }
});

// Optional: Scroll to tabs when selected (mobile UX improvement)
tabTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const tabsSection = document.getElementById('baby-care');
    if (tabsSection) {
      tabsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function navigateTo(page) {
    window.location.href = page;
}

/*document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem("nurturenestUser"));
  const authArea = document.getElementById("auth-area");

  if (user && user.name) {
    authArea.innerHTML = `
      <span style="margin-right: 1rem;">Welcome, <strong>${user.name}</strong></span>
      <button id="logout-btn" class="btn btn-outline">Logout</button>
    `;
    document.getElementById('logout-btn').onclick = () => {
      localStorage.removeItem("nurturenestUser");
      location.reload();
    };
  } else {
    authArea.innerHTML = `
      <a href="login.html" class="btn btn-outline">Login</a>
      <a href="signup.html" class="btn btn-primary">Sign Up</a>
    `;
  }
});*/

  document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('nurturenestUser'));
  const userNameSpan = document.getElementById('user-name');

  if (user && user.name) {
    userNameSpan.textContent = user.name;
  } else {
    // Redirect to login if not logged in
    window.location.href = 'login.html';
  }
});

    function logout() {
      localStorage.removeItem('nurturenestUser');
      window.location.href = 'login.html';
    }
  