
    const carouselInner = document.getElementById('carousel-inner');
    let currentIndex = 0;

    function showSlide(index) {
        const itemWidth = document.querySelector('.carousel-item').offsetWidth;
        const newPosition = -index * itemWidth;
        carouselInner.style.transform = `translateX(${newPosition}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-item').length) % document.querySelectorAll('.carousel-item').length;
        showSlide(currentIndex);
    }

    // qui tu puedes activar los controles o usar eventos de tu elección para avanzar y retroceder en el carrusel
    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentIndex);

      //boton de adelante y para atras
        document.getElementById('nextBtn').addEventListener('click', nextSlide);
        document.getElementById('prevBtn').addEventListener('click', prevSlide);
    });
