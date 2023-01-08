const elThemeToggler = document.querySelector('.site-header-theme-toogler');

elThemeToggler.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode')
})