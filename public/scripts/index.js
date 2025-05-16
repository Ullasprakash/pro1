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

function plslog(){
  alert(`Please login for better experience`);
}
