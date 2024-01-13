const elThemeToggler = document.querySelector('.site-header-theme-toogler');

if(localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode')
}

elThemeToggler.addEventListener('click', () => {
  if(elThemeToggler.classList.contains('light')) {
    elThemeToggler.classList.remove('light')
    elThemeToggler.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    if(localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode')
    }
  } else {
    elThemeToggler.classList.remove('dark')
    elThemeToggler.classList.add('light')
    localStorage.removeItem('theme', 'dark')
    localStorage.setItem('theme', 'light')
    if(localStorage.getItem('theme') === 'light') {
      document.body.classList.remove('dark-mode')
    }
  }
})