const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Verifica el estado del modo oscuro almacenado en localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  enableDarkMode();
}

// Agrega un evento al botón para cambiar el modo
darkModeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// habilitar dark mode
function enableDarkMode() {
  body.classList.add('dark-mode');
  darkModeToggle.classList.remove('bi-lightbulb-off-fill');
  darkModeToggle.classList.add('bi-lightbulb-fill');
  localStorage.setItem('darkMode', 'enabled');
}

// para deshabilitar dark mode
function disableDarkMode() {
  body.classList.remove('dark-mode');
  darkModeToggle.classList.remove('bi-lightbulb-fill');
  darkModeToggle.classList.add('bi-lightbulb-off-fill');
  localStorage.setItem('darkMode', null);
}