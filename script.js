document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signupForm');
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const genre = document.getElementById('genre');
  const formResult = document.getElementById('formResult');
  const welcomeMessage = document.getElementById('welcomeMessage');

  const themeSelect = document.getElementById('themeSelect');
  const applyStyleButton = document.getElementById('applyStyle');
  const styleMessage = document.getElementById('styleMessage');
  const headerStyleOptions = document.querySelectorAll('input[name="headerStyle"]');

  if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const nameValue = fullName.value.trim();
      const emailValue = email.value.trim();

      if (nameValue === '' || emailValue === '') {
        formResult.textContent = 'Please enter both your full name and email before submitting.';
        return;
      }

      welcomeMessage.textContent = `Welcome, ${nameValue}!`;
      formResult.textContent = `Thanks for joining! Your favorite genre is ${genre.value}.`;
      signupForm.reset();
    });
  }

  if (applyStyleButton) {
    applyStyleButton.addEventListener('click', function () {
      document.body.classList.remove('theme-dreamy', 'theme-moon', 'theme-cozy', 'font-playful', 'font-simple');

      const selectedTheme = themeSelect.value;
      const selectedHeaderStyle = document.querySelector('input[name="headerStyle"]:checked').value;

      if (selectedTheme === 'dreamy') {
        document.body.classList.add('theme-dreamy');
      } else if (selectedTheme === 'moon') {
        document.body.classList.add('theme-moon');
      } else if (selectedTheme === 'cozy') {
        document.body.classList.add('theme-cozy');
      }

      if (selectedHeaderStyle === 'sans') {
        document.body.classList.add('font-simple');
      } else {
        document.body.classList.add('font-playful');
      }

      styleMessage.textContent = `Style updated: ${selectedTheme} theme with ${selectedHeaderStyle} headings.`;
    });
  }

  headerStyleOptions.forEach(function (option) {
    option.addEventListener('change', function () {
      styleMessage.textContent = 'Header style selected. Click Apply Style to update the page.';
    });
  });
});
