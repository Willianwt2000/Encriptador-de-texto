const encriptar = document.getElementById('encriptar');
const desEncriptarResult = document.querySelector('.resultado');
const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const btnCopiar = document.getElementById('btnCopiar');
const imgExterminador = document.querySelector('.imgloader');

const encriptarTexto = () => {
  try {
    let texto = encriptar.value.trim().toLowerCase();
    let contieneNumeros = /[^A-Za-z\s]/.test(texto);

    if (contieneNumeros) throw new Error('Texto de encriptación inválido.\n¡Ingresa algo digno de ser asegurado, humano!');
    if (texto.trim() === '') throw new Error('¡No hay texto para encriptar!\nIngresa algo digno de ser asegurado.');

    const textoEncriptado = texto.replace(/[aeiou]/gi, (frase) => {
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
    desEncriptarResult.textContent = textoEncriptado;

    // Ocultar el contenido del contenedor
    imgExterminador.style.display = 'none';

  } catch (error) {
    alert(error.message);
  }
}

//Funcion desencriptar
const desEncriptar = () =>  {
  try {
    let textoEncriptado = encriptar.value
    let contieneNumeros = /[^A-Za-z\s]/.test(textoEncriptado);

    if (contieneNumeros) throw new Error('Texto de desencriptación inválido.\n¡Ingresa algo digno de ser asegurado, humano!');
    if (textoEncriptado === '') throw new Error('¡No hay texto para desencriptar!\nIngresa algo digno de ser asegurado.');

    const desEncriptado = textoEncriptado.replace(/ai|enter|imes|ober|ufat/g, (frase) => {
      switch (frase) {
        case 'ai':
          return 'a';
        case 'enter':
          return 'e';
        case 'ober':
          return 'o';
        case 'imes':
          return 'i';
        case 'ufat':
          return 'u';
      }
    });

    // Establecer el texto encriptado como contenido del contenedor
    desEncriptarResult.textContent = desEncriptado;


    imgExterminador.style.display = 'none';

  } catch (error) {
    alert(error.message);
  }
}


//llamadas
btnEncriptar.addEventListener('click', encriptarTexto);
btnDesencriptar.addEventListener('click', desEncriptar);

//funcion para copiar
btnCopiar.addEventListener('click', () => {
  const range = document.createRange();
  range.selectNode(desEncriptarResult);
  const seleccion = window.getSelection();
  seleccion.removeAllRanges();
  seleccion.addRange(range);
  document.execCommand('copy');
  seleccion.removeAllRanges();
  alert('Texto replicado y asegurado en el portapapeles. No escaparás: ');
});
