const encriptar = document.getElementById('encriptar');
const contenedorResultado = document.querySelector('.resultado');
const btnEncriptar = document.getElementById('btnEncriptar');
const imgExterminador = document.querySelector('.imgloader');

function encriptarTexto() {
  try {
    let texto = encriptar.value.trim().toLowerCase();
    let contieneNumeros = /[^A-Za-z\s]/.test(texto);

    if (contieneNumeros) throw new Error('Texto de encriptación inválido. ¡Ingresa algo digno de ser asegurado, humano!');
    if (texto.trim() === '') throw new Error('¡No hay texto para encriptar! Ingresa algo digno de ser asegurado.');

    const textoEncriptado = texto.replace(/[aeiou]/g, (frase) => {
      switch (frase) {
        case 'a':
          return 'ai';
        case 'e':
          return 'enter';
        case 'i':
          return 'imes';
        case 'o':
          return 'ober';
        case 'u':
          return 'ufat';
      }
    });

    // Establecer el texto encriptado como contenido del contenedor
    contenedorResultado.textContent = textoEncriptado;

    // Ocultar el contenido del contenedor
    imgExterminador.style.display = 'none';

  } catch (error) {
    alert(error.message);
  }
}

btnEncriptar.addEventListener('click', encriptarTexto);