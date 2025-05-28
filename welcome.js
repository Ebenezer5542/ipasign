window.addEventListener('DOMContentLoaded', () => {
  const welcome = document.getElementById('welcomeMessage');
  setTimeout(() => {
    welcome.classList.add('show');
  }, 900); // Delay before the animation starts
});

function showIframe() {
    document.getElementById('iframeContainer').style.display = 'block';
  }

function reloadIframe() {
    const iframe = document.getElementById('myIframe');
    iframe.src = iframe.src; // Simply reloads the iframe
  }

function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    document.getElementById('datetime').innerHTML = now.toLocaleString('en-US', options);
  }

  // Update time every second
  setInterval(updateDateTime, 1000);

  // Initial call
  updateDateTime();